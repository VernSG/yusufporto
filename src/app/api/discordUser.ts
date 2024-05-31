interface DiscordUserData {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

interface ApiResponse {
  data: {
    discord_user: DiscordUserData;
    discord_status: string;
    active_on_discord_mobile: boolean;
  };
  statusBeautify: string;
}

const getUserData = async (discordUserId: string): Promise<ApiResponse> => {
  try {
    // Mengambil data pengguna Discord dari API Lanyard
    const rawRes = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
    const { data } = await rawRes.json();

    // Mengubah status Discord menjadi representasi yang lebih mudah dibaca
    let statusBeautify;
    switch (data.discord_status) {
      case "online":
        statusBeautify = data.active_on_discord_mobile ? "Online (Mobile)" : "Online";
        data.discord_status = data.active_on_discord_mobile ? "online-mobile" : "online";
        break;

      case "offline":
        statusBeautify = "Offline";
        break;

      case "idle":
        statusBeautify = "Idle";
        break;

      case "dnd":
        statusBeautify = "Do not disturb!";
        break;

      default:
        break;
    }

    // Mengembalikan data pengguna Discord beserta status yang sudah diubah
    return { data, statusBeautify };
  } catch (error) {
    // Menghandle kesalahan jika terjadi
    console.error("Error fetching Discord user data:", error);
    throw new Error("Failed to fetch Discord user data");
  }
};

export default getUserData;
