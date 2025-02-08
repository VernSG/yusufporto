import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    console.log("✅ Received messages:", messages);

    const response = await fetch("https://api.zpi.my.id/v1/ai/gpt-4-turbo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    console.log("🔄 API Response Status:", response.status);

    if (!response.ok) {
      console.error("❌ API Error:", await response.text());
      return NextResponse.json(
        { error: "Failed to fetch from API" },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("✅ API Response Data:", data);

    return NextResponse.json(data.data.choices); 
  } catch (error) {
    console.error("❌ Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
