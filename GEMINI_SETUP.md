# RAG Chatbot with Google Gemini - Setup Guide

## 🚀 Quick Start

### 1. Get Your FREE Google Gemini API Key

1. Go to **https://makersuite.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy your API key

### 2. Add API Key to Your Project

Create or edit `.env.local` in the project root:

```bash
GOOGLE_API_KEY=your_actual_api_key_here
```

**Important:** Replace `your_actual_api_key_here` with your real API key!

### 3. Restart Your Dev Server

```bash
npm run dev
```

That's it! Your chatbot now uses Google Gemini AI! 🎉

---

## 📁 Updated File Structure

```
src/
├── lib/
│   └── ragAgent.js          # RAG logic with Gemini (updated)
├── hooks/
│   └── useChatbot.js        # React hook for chatbot
├── app/
│   └── api/
│       └── chat/
│           └── route.js     # API endpoint (updated for Gemini)
└── components/
    └── screens/
        └── HomeScreen.jsx   # UI with chatbot
```

---

## 🔧 What Changed

### ✅ Switched from OpenAI to Google Gemini

**Before:**
- Used `@langchain/openai`
- Model: `gpt-3.5-turbo`
- Env var: `OPENAI_API_KEY`
- Paid service (requires billing)

**After:**
- Uses `@langchain/google-genai`
- Model: `gemini-pro`
- Env var: `GOOGLE_API_KEY`
- **FREE tier available!** (60 requests/minute)

---

## 💡 Features

✅ **Free Gemini API** - No credit card required for basic usage
✅ **Professor Oak personality** - Authentic Pokemon character responses
✅ **Smart context retrieval** - Provides relevant info from knowledge base
✅ **Fallback mode** - Works without API key using rule-based responses
✅ **Fast responses** - Gemini Pro is optimized for speed
✅ **Error handling** - Graceful fallbacks if API fails

---

## 🧪 Testing

### Test in Browser Console:

```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Tell me about Kinshuk' })
})
.then(r => r.json())
.then(console.log);
```

### Test Pokemon Facts:

```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Tell me a Pokemon fact' })
})
.then(r => r.json())
.then(console.log);
```

---

## 📊 Gemini API Limits (Free Tier)

- **60 requests per minute**
- **1,500 requests per day**
- **1 million requests per month**

More than enough for a portfolio site!

---

## 🛠️ Customization

### Change Gemini Model:

Edit `src/lib/ragAgent.js`:

```javascript
const model = new ChatGoogleGenerativeAI({
  apiKey: apiKey,
  modelName: "gemini-1.5-flash", // Faster, cheaper
  // OR
  modelName: "gemini-1.5-pro",   // More capable
  temperature: 0.7,
});
```

### Update Knowledge Base:

Edit `src/lib/ragAgent.js`:

```javascript
const knowledgeBase = {
  personal: `
    // Add your info here
  `,
  skills: `
    // Add your skills
  `,
  projects: `
    // Add your projects
  `,
};
```

### Modify Personality:

Edit the system prompt in `createRAGChain()`:

```javascript
const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", `You are [YOUR CHARACTER]...`],
  ["human", "{question}"],
]);
```

---

## 🔒 Security

✅ API key stored in `.env.local` (not committed to git)
✅ Server-side only (Next.js API routes)
✅ Input validation
✅ Error handling
✅ Rate limiting (via Gemini's built-in limits)

**Never commit `.env.local` to git!**

---

## 🐛 Troubleshooting

### "Based on what I know..." response?

**Problem:** API key not loaded
**Solution:** 
1. Check `.env.local` exists in project root
2. Restart dev server: `npm run dev`
3. Verify key is correct

### "Unable to authenticate" error?

**Problem:** Invalid API key
**Solution:**
1. Get new key from https://makersuite.google.com/app/apikey
2. Update `.env.local`
3. Restart server

### Responses are slow?

**Problem:** Network latency
**Solutions:**
- Switch to `gemini-1.5-flash` (faster)
- Add caching for common questions
- Use streaming responses

---

## 📦 Dependencies

```json
{
  "@langchain/google-genai": "latest",
  "@langchain/core": "^1.0.2",
  "langchain": "^1.0.2"
}
```

All installed! ✅

---

## 🎯 Next Steps

1. ✅ Get Gemini API key
2. ✅ Add to `.env.local`
3. ✅ Restart dev server
4. ✅ Test the chatbot!
5. 🔄 Customize knowledge base
6. 🔄 Add more Pokemon facts
7. 🔄 Deploy to production

---

## 📚 Resources

- **Gemini API Docs:** https://ai.google.dev/docs
- **LangChain Docs:** https://js.langchain.com/docs
- **Get API Key:** https://makersuite.google.com/app/apikey

---

## 💰 Cost Comparison

| Provider | Free Tier | Paid Cost |
|----------|-----------|-----------|
| **Gemini** | 1M req/month | $0.00035/1K tokens |
| OpenAI | $0 (trial credit) | $0.002/1K tokens |
| Anthropic | No free tier | $0.008/1K tokens |

**Gemini = Best for portfolio sites!** 🎉
