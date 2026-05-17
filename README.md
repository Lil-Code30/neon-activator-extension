# Neon Activator Extension

A Chrome extension that toggles a neon glow theme on any webpage.

## How it works

- Click the extension icon to turn the neon theme **ON** / **OFF**
- When ON, `css/styles.css` is injected into the page, applying dark background, neon glow effects, flickering animations, and styled buttons/inputs/links
- When OFF, the CSS is removed and the page returns to normal

## How to Load the Extension

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select this folder (`neon-activator-extension`)
5. The extension will appear in your extensions list

## Files

| File                               | Purpose                                              |
| ---------------------------------- | ---------------------------------------------------- |
| `manifest.json`                    | Extension config (name, permissions, service worker) |
| `scripts/background/background.js` | Toggles ON/OFF, injects/removes CSS                  |
| `scripts/content.js`               | Word count utility (legacy)                          |
| `scripts/popup.js`                 | Placeholder for popup logic                          |
| `css/styles.css`                   | Neon glow theme styles                               |
| `hello.html`                       | Test page to preview the neon theme                  |
