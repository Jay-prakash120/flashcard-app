<p align="center">
  <img src="https://img.shields.io/badge/FocusFlow-Spaced%20Repetition-6366f1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiLz48L3N2Zz4=&logoColor=white" alt="FocusFlow Badge"/>
  <br/>
  <img src="https://img.shields.io/badge/HTML5-Single%20File%20App-e34f26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/CSS3-Modern%20UI-1572b6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Storage-LocalStorage-4caf50?style=flat-square" alt="LocalStorage"/>
  <img src="https://img.shields.io/github/license/Jay-prakash120/flashcard-app?style=flat-square" alt="License"/>
</p>

# ⚡ FocusFlow

**Master your topics with spaced repetition & flashcards.**

FocusFlow is a premium, single-file web application for creating, managing, and reviewing flashcards using a spaced repetition algorithm. Built entirely with vanilla HTML, CSS, and JavaScript — no build tools, no frameworks, no dependencies to install. Just open the file and start learning.

---

## ✨ Features

### 📚 Topic & Flashcard Management
- **Create topics** with titles, descriptions/notes, and optional flashcards
- **Attach multiple flashcards** (question & answer pairs) to any topic
- **Inline editing** — edit flashcard content directly during review without leaving the modal
- **Drag-and-drop reordering** of flashcards with a grip handle
- **Bulk flashcard creation** — press `Ctrl + [1-9]` to add multiple cards at once
- **Difficulty levels** — tag each topic as Easy, Medium, or Hard
- **Rich answer formatting** — code-editor-style textarea with monospace font for answers

### 🧠 Spaced Repetition Engine
- SM-2-inspired review intervals: **Again** (1 day), **Hard** (3 days), **Good** (7 days), **Easy** (14 days)
- Automatic scheduling of next review dates
- Topics sorted by priority — due items appear first
- Visual indicators for review status: **Due**, **Due Today**, **Mastered**
- Overall mastery progress bar

### 🔥 Streak System
- **Daily streak tracking** — complete all due reviews to maintain your streak
- **Weekly activity tracker** — visual day-by-day circle indicators
- **Longest streak record** with trophy display
- **Milestone celebrations** — animated banner, fireworks, and glow effects for streak achievements
- **Motivational messages** that update based on your current streak

### 🎨 Premium Design
- **Light & Dark mode** — warm charcoal dark theme with smooth transitions
- **Glassmorphism & gradients** — modern visual design with depth and layering
- **Micro-animations** — bounce effects, slide-ins, glow pulses, fire particle animations
- **Syntax highlighting** — code blocks rendered with [Highlight.js](https://highlightjs.org/) (Atom One Dark theme)
- **Custom markdown-like renderer** — supports `code`, `heading`, `subheading`, `point`, `link/url`, and more block types
- **Responsive layout** — works on desktop and mobile
- **Custom scrollbars** and text selection colors

### ⌨️ Keyboard Shortcuts

| Shortcut | Context | Action |
|---|---|---|
| `←` / `→` | Flashcard modal | Navigate between cards |
| `Space` | Flashcard modal | Flip the current card |
| `↑` / `↓` | Flashcard modal | Scroll card content |
| `↑` / `↓` / `←` / `→` | Home page | Grid-navigate topic cards |
| `Enter` | Home page (with selection) | Open flashcards or review for selected topic |
| `r` | Flashcard modal | Switch to review mode |
| `a` or `n` | Home page | Scroll to top & focus topic title input |
| `t` | Home page | Scroll to top |
| `b` | Home page | Scroll to bottom |
| `Escape` | Any modal / selection | Close current modal or clear selection |
| `Ctrl + S` | Any editor context | Save (inline edit, topic edit, or new topic) |
| `Ctrl + E` | Flashcard / Review modal | Edit current card / open topic editor |
| `Ctrl + Shift + E` | Flashcard modal | Open full topic editor |
| `Ctrl + [1-9]` | Topic form / Edit modal | Add N new flashcards |
| `1` / `2` / `3` / `4` | Review modal | Select rating (Again / Hard / Good / Easy) |

### ☁️ Cloud Backup (GitHub Gist)
- **Sync to GitHub Gist** — backs up all topics and streak data to a private Gist
- **Automatic cloud sync** — periodic sync with conflict resolution (last-modified wins)
- **One-click restore** — pull data from the cloud onto any device
- **Offline resilience** — pending syncs are queued and executed when back online
- **Auto-backup toggle** with visual indicator

### 💾 Data Portability
- **Export** — download all data as a `.json` file
- **Import** — restore from a previously exported `.json` file
- **Draft auto-save** — unsaved new topics are preserved across sessions with a restore banner

### 🛡️ Recovery & Safety
- **Undo toast** — accidental modal closures show a recovery toast to instantly re-open
- **Draft persistence** — in-progress topic creation is auto-saved to localStorage
- **Delete confirmation** — topic deletion requires explicit confirmation

---

## 🚀 Getting Started

### Option 1: Direct Open
Simply open the `2nd Stage.html` file in any modern browser:

```
Just double-click the file — no server needed!
```

### Option 2: Live Server
For a development experience with auto-reload:

```bash
# Using VS Code Live Server extension
# Right-click "2nd Stage.html" → "Open with Live Server"

# Or use any static file server
npx serve .
```

### Option 3: Clone from GitHub

```bash
git clone https://github.com/Jay-prakash120/flashcard-app.git
cd flashcard-app
# Open "2nd Stage.html" in your browser
```

---

## 🏗️ Architecture

FocusFlow is a **single-file application** — all HTML, CSS, and JavaScript live in one `2nd Stage.html` file (~225KB). This design choice prioritizes:

- **Zero setup** — no `npm install`, no build steps
- **Maximum portability** — works offline, on any device, from a USB drive
- **Easy deployment** — host on GitHub Pages, Netlify, or any static server

### External Dependencies (CDN)
| Library | Purpose |
|---|---|
| [Inter & Poppins](https://fonts.google.com/) | Typography |
| [Font Awesome 6.4](https://fontawesome.com/) | Icons |
| [Highlight.js 11.9](https://highlightjs.org/) | Code syntax highlighting |

### Data Storage
All data is stored in the browser's `localStorage`:
- `spacedRepetitionTopics` — array of topic objects with flashcards and scheduling metadata
- `streakData` — current streak, longest streak, and review history
- `theme` — light/dark mode preference
- `localDataModified` — timestamp for cloud sync conflict resolution
- `focusflow_draft` — auto-saved draft of in-progress topic creation

---

## 📸 Screenshots

> Open the app and toggle between light and dark mode using the 🌙/☀️ button in the top-right corner.

---

## 🤝 Contributing

Contributions are welcome! Here are some ideas:

- [ ] Add spaced repetition algorithm customization (custom intervals)
- [ ] Add tags/categories for topic organization
- [ ] Add search/filter for the topic library
- [ ] Add flashcard shuffle mode
- [ ] Add study session statistics and analytics
- [ ] PWA support for installable offline app

### Steps
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. See the <a href="https://github.com/Jay-prakash120/flashcard-app/tree/main?tab=MIT-1-ov-file"> repository</a> for license details.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Jay-prakash120">Jay Prakash</a>
</p>