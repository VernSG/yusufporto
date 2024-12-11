import { ApiResponse } from "@/types";

interface CustomStatusTexts {
  online?: string;
  onlineMobile?: string;
  offline?: string;
  idle?: string;
  dnd?: string;
  unknown?: string;
}

const { DISCORD_USER_ID: discordUserId } = process.env;

// Fungsi untuk mendapatkan data user dari Lanyard API
const getUserData = async (
  discordUserId: string | undefined,
  customStatusTexts: CustomStatusTexts = {},
): Promise<ApiResponse> => {
  try {
    if (!discordUserId) {
      throw new Error("Discord user ID is undefined");
    }

    const rawRes = await fetch(
      `https://api.lanyard.rest/v1/users/${discordUserId}`,
    );

    if (!rawRes.ok) {
      throw new Error(`Error fetching Discord user data: ${rawRes.statusText}`);
    }

    const { data } = await rawRes.json();

    // Format avatar URL
    const avatarUrl = data.discord_user.avatar
      ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`
      : `https://cdn.discordapp.com/embed/avatars/0.png`;

    // Tentukan status berdasarkan `discord_status`
    let statusBeautify: string;
    switch (data.discord_status) {
      case "online":
        statusBeautify = data.active_on_discord_mobile
          ? customStatusTexts.onlineMobile || "Online on Mobile"
          : customStatusTexts.online || "Online";
        data.discord_status = data.active_on_discord_mobile
          ? "online-mobile"
          : "online";
        break;

      case "offline":
        statusBeautify = customStatusTexts.offline || "Offline";
        break;

      case "idle":
        statusBeautify = customStatusTexts.idle || "Idle";
        break;

      case "dnd":
        statusBeautify = customStatusTexts.dnd || "Do Not Disturb";
        break;

      default:
        statusBeautify = customStatusTexts.unknown || "Unknown";
        break;
    }

    // Map aktivitas menjadi lebih terstruktur
    const activities = data.activities.map((activity: any) => ({
      id: activity.id,
      name: activity.name,
      type: activity.type,
      details: activity.details,
      state: activity.state,
      application_id: activity.application_id,
      timestamps: activity.timestamps,
      assets: activity.assets,
      buttons: activity.buttons?.map((button: any) => button.label),
    }));

    return {
      data: {
        ...data,
        avatar_url: avatarUrl, // Tambahkan avatar URL
        activities,
      },
      statusBeautify,
    };
  } catch (error) {
    console.error("Error fetching Discord user data:", error);
    throw new Error("Failed to fetch Discord user data");
  }
};

// Teks default untuk status
const customTexts: CustomStatusTexts = {
  online: "User is Online",
  onlineMobile: "User is Online on Mobile",
  offline: "User is Offline",
  idle: "User is Idle",
  dnd: "User does not want to be disturbed",
  unknown: "User status is Unknown",
};

// Panggil fungsi dan tangani respons
getUserData(discordUserId, customTexts)
  .then((response) => {
    console.log(response); // Cetak respons API
  })
  .catch((error) => {
    console.error(error); // Tangani error
  });

export default getUserData;
