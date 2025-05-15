## 🧑‍💻 Open Source Contributions

- 💬 Opened my first issue in [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss/issues/18036)  
  ↳ Issue: **[v3.4.x] Unexpected full page reload with json-server + Vite setup**


## 🐞 About This Bug Report

In this project, I demonstrated a bug that occurs when using the latest version of Tailwind CSS together with a JSON server during development.

### ❗ The Problem

When buttons (e.g., “Add to Cart”) are clicked in the application, the intended dynamic functionality works correctly, **but the page unexpectedly refreshes itself** after the click — even when the button is of type `"button"`.

### 🔍 My Analysis

Tailwind CSS relies on watching files and generating classes dynamically based on content. In previous versions of Tailwind, the `content` field in `tailwind.config.js` explicitly defined which file types to watch (e.g., `.ts`, `.tsx`, `.js`, `.jsx`).

In the latest version, I suspect that if the `content` field is not properly defined, Tailwind tries to watch **all files**, including the `json-server` data files. This results in unexpected behavior, like full page reloads, as Tailwind may react to changes it shouldn't be monitoring.

### ✅ Temporary Solution

Downgrading Tailwind to version `v3.3.5` resolved the issue entirely. This version still requires manual definition of the files to watch, which avoids the conflict with `json-server`.
