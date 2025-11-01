import { NextResponse } from "next/server";
import { getChatResponse } from "../../../lib/ragAgent";

/**
 * API route handler for the chatbot.
 * @param {Request} req The incoming request object.
 * @returns {Promise<NextResponse>} The response object.
 */
export async function POST(req) {
  try {
    // Parse the request body to get the user's message.
    const body = await req.json();
    const message = body.message;

    // Check if a message was provided.
    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Retrieve the Google API key from environment variables.
    const apiKey = process.env.GOOGLE_API_KEY;

    // Get the response from the AI model.
    const aiResponse = await getChatResponse(message, apiKey);

    // Return the AI's response.
    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error("Error in chat API route:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
