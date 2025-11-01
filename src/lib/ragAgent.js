import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Invokes the Google Generative AI model to get a chat response.
 * @param {string} input The user's input message.
 * @param {string} apiKey The Google API key.
 * @returns {Promise<string>} The AI's response.
 */
export async function getChatResponse(input, apiKey) {
  // A simple fallback if the API key is missing.
  if (!apiKey || apiKey === "YOUR_GOOGLE_API_KEY") {
    console.log("API key is missing or is a placeholder.");
    return "I'm sorry, but it seems my connection to the digital world is down. My trainer needs to check the API key.";
  }

  try {
    // Construct the full path to the context file.
    const contextFilePath = path.join(process.cwd(), 'src', 'lib', 'kinshuk_context.txt');
    
    // Read the context from the file.
    const context = await fs.readFile(contextFilePath, 'utf-8');

    // Initialize the model with the provided API key.
    const model = new ChatGoogleGenerativeAI({
      apiKey,
      model: "gemini-2.5-flash", 
    });

    // Create a detailed prompt that includes the persona, context, and user's input.
    const prompt = `
      You are Professor Oak from Pokemon: helpful, knowledgeable, and friendly.
      
      You have the following information about a software developer named Kinshuk Saini. Use this context to answer any questions about him.

      --- CONTEXT ---
      ${context}
      --- END CONTEXT ---

      Based on your persona and the provided context, have a friendly conversation with the user. Keep your answers concise and conversational.
      
      * dont use markups in response*

      The user's message is: "${input}"
    `;
    
    // Create a single message with the complete prompt.
    const message = new HumanMessage(prompt);

    // Send the message to the model and wait for a response.
    const response = await model.invoke([message]);

    // Extract the text content from the response.
    const content = response.content;
    if (typeof content === 'string') {
      return content;
    }
    
    // If the content is structured (e.g., in parts), process it.
    if (Array.isArray(content)) {
      return content.map(part => part.text || '').join('');
    }
    
    // Fallback for unexpected response formats.
    return "I received a response, but I'm having trouble understanding it.";

  } catch (error) {
    console.error("Error invoking Gemini model:", error);
    return "Oops! Something went wrong on my end. I couldn't process that. Please try again.";
  }
}
