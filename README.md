# js-api-fetch-gallery

Dynamic image gallery using JavaScript Fetch API to connect with Picsum.  
Features a responsive layout and advanced CSS attribute selectors for clean, scalable DOM styling.

---

## 📸 Overview

**js-api-fetch-gallery** is a lightweight front-end project that demonstrates how to consume a public API using modern JavaScript (`fetch`) and dynamically render content into the DOM.

The application loads random images from the **Picsum API** and displays them in responsive card components, focusing on clean UI, smooth interactions, and maintainable code structure.

---

## 🚀 Features

- 🔄 Dynamic image loading via **JavaScript Fetch API**
- 🖼️ Responsive gallery layout (Grid-based)
- 🎯 Advanced CSS attribute selectors (`div[class^="api-"]`)
- 💡 Clear separation of concerns (HTML / CSS / JS)
- ✨ Smooth hover effects and modern card UI
- ⚡ No frameworks or external JS libraries required

---

## 🛠️ Technologies Used

- **HTML5** – Semantic markup  
- **CSS3**
  - CSS Grid and Flexbox for responsive layout
  - Attribute selectors
  - Transitions and box shadows
- **JavaScript (ES6+)**
  - `async / await`
  - Fetch API
  - DOM manipulation
- **Picsum API** – Random image provider

---

## 📂 Project Structure

```text
js-api-fetch-gallery/
│
├── index.html   # Main HTML structure
├── style.css    # Responsive layout and UI styles
├── script.js    # Fetch API logic and DOM manipulation
└── README.md    # Project documentation
```

---

## ⚙️ How It Works

1. The page loads and selects all `.api-card` elements.
2. Each card triggers a request to the Picsum API.
3. A random image is fetched and injected dynamically.
4. Images adapt automatically to the card size using `object-fit`.

```js
const response = await fetch('https://picsum.photos/400/300');


## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/js-api-fetch-gallery.git
   ```

2. Open `index.html` in your browser.

3. Done ✅ — no build tools or dependencies needed.

