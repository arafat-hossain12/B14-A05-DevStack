## 🧱 Dev Stack Builder
 - **Live URL:** [https://stellar-marshmallow-93c83d.netlify.app](https://stellar-marshmallow-93c83d.netlify.app)
- **GitHub Repository:** [https://github.com/arafat-hossain12/B14-A05-DevStack](https://github.com/arafat-hossain12/B14-A05-DevStack)

---

## 📝 Description
Dev Stack Builder is an interactive web application that allows developers to explore various software development technologies, compare their features, and assemble their ideal technology stack side-by-side.

## 🚀 Key Features
- Interactive Tech Selector: Browse 12+ technologies with ratings, difficulty levels, and badges, and add them to your personalized stack.
- Real-time Stack Sidebar: Manage selected tools seamlessly with single-click additions, individual removals, and a clear-all functionality.
- Toast Notifications & Loading State: Enhanced user experience featuring Toastify alerts for actions and a visual loading spinner during data fetching.

## ⚙️ Technologies Used
- Frontend Framework: React.js (Vite)
- Styling: Tailwind CSS, DaisyUI
- Notifications: React-Toastify
- Icons & Assets: SVG Icons & Local JSON Data

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside JavaScript. It makes writing React components much easier and cleaner than using raw `React.createElement()` functions.

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed down from a parent component to a child component.
- **State:** Internal data managed within a component that can change over time and trigger re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage state variables. In this project, I used it in `App.jsx` to store the fetched technology data (`techs`), the selected technologies (`selectedTech`), and the `loading` state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in React components, such as fetching data from an API or local file. I used it to automatically fetch the technology list from `data.json` when the page first loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which items have changed, been added, or removed. It optimizes performance during rendering and prevents incorrect UI updates.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying specific UI components based on certain conditions. In this project, I used conditional rendering in `Sidebar.jsx` to show an empty state message when no tech is selected, and the list of selected tech cards when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed down using `props`.
- **Child to Parent:** The parent passes a callback function down as a prop, and the child calls that function with data as arguments.