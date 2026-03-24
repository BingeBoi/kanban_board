# 🚀 React Setup Guide (Linux + Vite) — From Scratch

## 🧠 Goal

Set up a working React project using Vite, fixing common errors along the way.

---

# 📁 1. Create Project Folder

```bash
mkdir -p ~/Documents/web-prog
cd ~/Documents/web-prog
mkdir kanban_board
cd kanban_board
```

---

# ❌ 2. Initial Error (No package.json)

Tried:

```bash
npm install
```

Got error:

```
ENOENT: no such file or directory, open 'package.json'
```

### ✅ Reason:

Folder was NOT a React project yet.

---

# ⚠️ 3. Tried Creating App → Hit Node Error

```bash
npm create vite@latest .
```

Error:

```
SyntaxError: 'styleText' not found in node:util
```

### ✅ Reason:

Node.js version too old (v18.19.1)

---

# 🔥 4. Upgrade Node.js (Manual .tar.xz Method)

### Extract:

```bash
cd ~/Downloads
tar -xf node-v24.x.x-linux-x64.tar.xz
```

### Move:

```bash
sudo mv node-v24.x.x-linux-x64 /opt/nodejs
```

### Add to PATH:

```bash
nano ~/.bashrc
```

Add:

```bash
export PATH=/opt/nodejs/bin:$PATH
```

Apply:

```bash
source ~/.bashrc
```

---

# ⚠️ 5. Node Updated But Still Using Old Version

Check:

```bash
which node
```

Output:

```
/usr/bin/node
```

### ✅ Fix:

```bash
hash -r
exec bash
```

Verify:

```bash
node -v
which node
```

Expected:

```
v24.x.x
/opt/nodejs/bin/node
```

---

# ⚠️ 6. npm Still Using Old Version

Check:

```bash
which npm
```

If:

```
/usr/bin/npm
```

### Fix:

```bash
hash -r
exec bash
```

Ensure:

```
/opt/nodejs/bin/npm
```

---

# 🚀 7. Create React App (Correct Way)

```bash
cd ~/Documents/web-prog/kanban_board
npx create-vite@latest .
```

When prompted:

* Select: **React**
* Select: **JavaScript**
* Directory not empty → **Ignore files and continue**

---

# ⚙️ 8. Install & Run

```bash
npm install
npm run dev
```

---

# 🌐 9. Open in Browser

```
http://localhost:5173/
```

If it loads → ✅ SUCCESS

---

# ✏️ 10. First React Edit

Open:

```
src/App.jsx
```

Replace with:

```jsx
function App() {
  return <h1>Hello React 🔥</h1>
}

export default App
```

---

# 🧠 Core Concepts Learned

* Each React app = one folder
* Must have `package.json`
* Node version matters (>=20 recommended)
* PATH controls which Node/npm is used
* React component = function
* JSX = HTML-like syntax in JS

---

# 🔥 Final Mental Model

```
web-prog/
  kanban_board/   ← React app lives here
```

* Always run commands inside `kanban_board`
* Never from parent folder

---

# 💬 Optional (Better Setup)

Use NVM instead of manual install:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

---

# ✅ You’re Ready

You now have:

* React working
* Environment fixed
* Debugging experience (very important)

---

# 🚀 Next Step

Learn:

* Components
* Props
* State
* Events

---
