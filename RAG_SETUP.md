# RAG Chatbot Setup

This chatbot uses a simple RAG (Retrieval-Augmented Generation) system with LangChain to answer questions about Kinshuk's portfolio and share Pokemon facts.

## 📁 File Structure

```
src/
├── lib/
│   └── ragAgent.js          # Main RAG logic and knowledge base
├── hooks/
│   └── useChatbot.js        # React hook for chatbot functionality
├── app/
│   └── api/
│       └── chat/
│           └── route.js     # API endpoint for chat
└── components/
    └── screens/
        └── HomeScreen.jsx   # UI integrated with chatbot
```

## 🚀 How It Works

### 1. **Knowledge Base** (`src/lib/ragAgent.js`)
- In-memory knowledge base (no database needed)
- Contains info about:
  - Personal info (name, skills, interests)
  - Technical skills
  - Projects
  - Pokemon facts

### 2. **Retrieval System**
- Simple keyword-based retrieval
- Matches user query to relevant context
- Returns random Pokemon facts when requested

### 3. **LLM Integration** (Optional)
- Uses OpenAI GPT-3.5-turbo via LangChain
- Professor Oak personality
- Fallback to rule-based responses without API key

### 4. **API Route** (`src/app/api/chat/route.js`)
- POST endpoint at `/api/chat`
- Accepts: `{ message: "user question" }`
- Returns: `{ success: true, response: "bot answer" }`

### 5. **React Hook** (`src/hooks/useChatbot.js`)
- `sendMessage(message)` - Send user message
- `isLoading` - Loading state
- `error` - Error state

## 🔧 Setup

### Option 1: With OpenAI API (Full RAG)

1. **Install dependencies** (already installed):
   ```bash
   npm install langchain @langchain/openai @langchain/core
   ```

2. **Create `.env.local`**:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Get OpenAI API Key**:
   - Go to https://platform.openai.com/api-keys
   - Create a new API key
   - Add to `.env.local`

### Option 2: Without API Key (Fallback Mode)

The chatbot works without an API key using rule-based responses:
- No setup needed
- Uses `getFallbackResponse()` function
- Returns context-based answers
- Still shares Pokemon facts

## 💡 Usage in Components

```jsx
import { useChatbot } from "@/hooks/useChatbot";

function MyComponent() {
  const { sendMessage, isLoading, error } = useChatbot();
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const reply = await sendMessage("Tell me about Kinshuk");
    setResponse(reply);
  };

  return (
    <div>
      <button onClick={handleSend} disabled={isLoading}>
        {isLoading ? "Loading..." : "Send"}
      </button>
      <p>{response}</p>
    </div>
  );
}
```

## 📝 Customization

### Add More Knowledge

Edit `src/lib/ragAgent.js`:

```javascript
const knowledgeBase = {
  personal: `
    // Add more personal info
  `,
  skills: `
    // Add more skills
  `,
  // Add new categories
  education: `
    // Add education info
  `,
};
```

### Modify Retrieval Logic

Update the `retrieveContext()` function:

```javascript
function retrieveContext(query) {
  // Add custom keyword matching
  if (query.includes("education")) {
    return knowledgeBase.education;
  }
  // ...
}
```

### Change Professor Oak's Personality

Edit the system prompt in `createRAGChain()`:

```javascript
const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", `You are [CHARACTER NAME]...`],
  ["human", "{question}"],
]);
```

## 🧪 Testing

### Test the API directly:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Tell me about Kinshuk"}'
```

### Test in browser console:

```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Tell me a Pokemon fact' })
})
.then(r => r.json())
.then(console.log);
```

## 🎯 Features

✅ Simple in-memory knowledge base (no DB setup)
✅ Works with or without OpenAI API key
✅ Professor Oak personality
✅ Random Pokemon facts
✅ Context-aware responses
✅ Loading states
✅ Error handling
✅ Easy to extend

## 📦 Dependencies

```json
{
  "langchain": "^1.0.2",
  "@langchain/core": "^1.0.2",
  "@langchain/openai": "^0.3.15" // Install if using OpenAI
}
```

## 🔒 Security Notes

- Never commit `.env.local` to git
- API keys should be server-side only
- Rate limit the API endpoint in production
- Validate user input before processing

## 🚀 Next Steps

1. Add conversation history
2. Implement memory for context
3. Add more Pokemon facts
4. Create admin panel to update knowledge base
5. Add analytics/tracking
6. Implement rate limiting
