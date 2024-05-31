import { ApiResponse } from "@/components/cards/Callsign"; // Pastikan Anda mengimpor tipe ApiResponse yang benar atau definisikan tipenya jika perlu

// Definisikan konstanta discordUserId di luar fungsi
const discordUserId = "689131590319865973";

const getUserData = async (discordUserId: string): Promise<ApiResponse> => {
  try {
    // Memastikan discordUserId memiliki nilai sebelum digunakan
    if (!discordUserId) {
      throw new Error('Discord user ID is undefined');
    }

    // Mengambil data pengguna Discord dari API Lanyard
    const rawRes = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
    
    // Memeriksa apakah respon sukses
    if (!rawRes.ok) {
      throw new Error(`Error fetching Discord user data: ${rawRes.statusText}`);
    }

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
        statusBeautify = "Unknown";
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

// Memanggil fungsi getUserData dengan discordUserId
getUserData(discordUserId).then(response => {
  console.log(response);
}).catch(error => {
  console.error(error);
});

export default getUserData;
