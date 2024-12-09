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

    let statusBeautify;
    switch (data.discord_status) {
      case "online":
        statusBeautify = data.active_on_discord_mobile
          ? customStatusTexts.onlineMobile || "Online"
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

    return { data: { ...data, activities }, statusBeautify };
  } catch (error) {
    console.error("Error fetching Discord user data:", error);
    throw new Error("Failed to fetch Discord user data");
  }
};

const customTexts = {
  online: "User is Online",
  onlineMobile: "User is Online on Mobile",
  offline: "User is Offline",
  idle: "User is Idle",
  dnd: "User does not want to be disturbed",
  unknown: "User status is Unknown",
};

getUserData(discordUserId, customTexts)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

export default getUserData;
