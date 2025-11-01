import { useState } from 'react';

/**
 * A custom hook to manage the chatbot's state and interactions.
 * @returns {{
 *   sendMessage: (message: string) => Promise<string | undefined>;
 *   isLoading: boolean;
 *   error: string | null;
 * }}
 */
export function useChatbot() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Sends a message to the chatbot API and returns the response.
   * @param {string} message The message to send.
   * @returns {Promise<string | undefined>} The AI's response.
   */
  const sendMessage = async (message) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await response.json();
      return data.response;
    } catch (err) {
      setError(err.message);
      console.error("Failed to send message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, error };
}
