# Debugging Guide - No Response Issue

## Steps to Debug:

### 1. Check if Dev Server is Running
```bash
npm run dev
```
Server should start on `http://localhost:3000`

### 2. Open Browser Console (F12)
- Go to Console tab
- Clear any old messages

### 3. Test the Chatbot
- Type a message: "hello"
- Press Enter or click GO

### 4. Check Console Output

**You should see:**
```
Sending message: hello
Fetching /api/chat with message: hello
Response status: 200
Response data: {success: true, response: "Well hello there! ..."}
Received response: Well hello there! ...
```

**If you DON'T see this:**

#### Scenario A: Nothing in console
- ❌ JavaScript error preventing execution
- **Fix:** Check for red errors in console

#### Scenario B: "Sending message:" appears but nothing else
- ❌ API route not responding
- **Fix:** Check terminal for server errors

#### Scenario C: Response status: 404
- ❌ API route not found
- **Fix:** Verify `/src/app/api/chat/route.js` exists

#### Scenario D: Response status: 500
- ❌ Server error
- **Fix:** Check terminal for error details

### 5. Check Terminal/Server Console

**You should see:**
```
Received message: hello
API Key exists: false
Using fallback response...
Fallback response: Well hello there! Welcome to Kinshuk's portfolio!...
```

**Common Issues:**

#### Issue: Module not found error
```
Error: Cannot find module '@langchain/google-genai'
```
**Fix:**
```bash
npm install @langchain/google-genai
```

#### Issue: Import error
```
Error: Named export 'ChatGoogleGenerativeAI' not found
```
**Fix:** Update package
```bash
npm install @langchain/google-genai@latest
```

#### Issue: Fetch failed
```
TypeError: Failed to fetch
```
**Fix:** Server not running or wrong port

### 6. Manual API Test

Open browser console and run:
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'hello' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

**Expected output:**
```javascript
{
  success: true,
  response: "Well hello there! Welcome to Kinshuk's portfolio!..."
}
```

### 7. Check React State

Add this temporarily to HomeScreen:
```jsx
console.log("Current state:", {
  inputText,
  userInput,
  isLoading
});
```

### 8. Common Fixes

#### Fix 1: Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

#### Fix 2: Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Fix 3: Check for TypeScript Errors
```bash
npm run build
```

#### Fix 4: Verify File Paths
- ✅ `/src/app/api/chat/route.js` exists
- ✅ `/src/lib/ragAgent.js` exists
- ✅ `/src/hooks/useChatbot.js` exists

### 9. Test Without AI (Fallback Mode)

The chatbot should work WITHOUT a Google API key using fallback responses.

**Test questions:**
- "hello" → Should get greeting
- "who are you" → Should get intro
- "skills" → Should list skills
- "pokemon fact" → Should get random fact

### 10. If Still Not Working

**Check these files exist:**
1. `src/app/api/chat/route.js`
2. `src/lib/ragAgent.js`
3. `src/hooks/useChatbot.js`

**Restart everything:**
```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf .next

# Restart
npm run dev
```

---

## Expected Behavior:

### WITHOUT API Key (Current Setup):
✅ Fallback responses work
✅ Professor Oak personality
✅ Answers about Kinshuk
✅ Pokemon facts

### WITH Google API Key:
✅ AI-generated responses
✅ More natural conversation
✅ Context-aware answers

---

## Quick Test Commands

Run these in browser console:

### Test 1: Basic Hello
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'hello' })
}).then(r => r.json()).then(console.log);
```

### Test 2: Pokemon Fact
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'tell me a pokemon fact' })
}).then(r => r.json()).then(console.log);
```

### Test 3: About Kinshuk
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'who is kinshuk' })
}).then(r => r.json()).then(console.log);
```

All three should return `{success: true, response: "..."}` with different Professor Oak responses.

---

## What to Report

If still not working, please share:
1. Browser console output (screenshot or copy text)
2. Terminal/server console output
3. Results from manual API tests above
4. Any red error messages
