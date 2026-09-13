# DevStack
## **Live Link :**
https://dev-stack-opal.vercel.app/

## 📖 About the Project

**DevStack** is a responsive React application where users can explore popular development technologies and create their own technology stack.
Each technology card displays useful information such as its category, difficulty, rating, badge, and description.

Users can add technologies to **Your Stack**, remove individual technologies, or clear the entire stack. The interface also provides toast notifications and prevents the same technology from being added more than once.

## 🛠️ Technologies Used

-   **React** --- Component-based user interface
-   **TypeScript** --- Type-safe JavaScript development
-   **Tailwind CSS** --- Responsive and modern styling
-   **React Toastify** --- User-friendly toast notifications
-   **React Suspense & use()** --- Loading asynchronous technology
    data
-   **JSON** --- Stores the technology data used by the application

## Key Features

### 1. Explore Technologies

Browse responsive technology cards containing the technology name, icon,
category, difficulty, rating, badge, and description.

### 2. Build Your Own Stack

Click **Add to Stack** to add a technology to the **Your Stack** panel.
A technology cannot be added twice, and an added card changes to **✓
Added to Stack**.

### 3. Manage Your Stack

Remove a single technology with the **🗑️** button or clear the entire selection with **Remove All**. React Toastify provides feedback for add, duplicate, remove, and remove-all actions.

------------------------------------------------------------------------

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is JavaScript XML; we can write HTML and JavaScript in the same place.


### 2. What is the difference between props and state?

Props is passed data from a parent component to a child component, and State is data managed in a component.


### 3. What does the useState hook do, and where did you use it in this project?

useState stores state in component memory. It works like a variable and set variable value function.


### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is side effects after a component renders, such as fetching data, setting timers, or working with browser APIs.


### 5. Why does every item in a .map() list need a unique key prop?

key helps to identify which list item was added, removed, or changed. This helps to update the correct element easily.


### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the "Your Stack" component.


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from a parent component to a child component using props.

To send something back to the parent, the parent passes a callback function as a prop.
The child calls that function when needed, then the parent component get the responds. 


------------------------------------------------------------------------

## 💡 Project Summary

DevStack demonstrates important React concepts including reusable components, TypeScript props, state management, conditional rendering, list rendering, event handling, lifting state up, Suspense-based data loading, and responsive UI design with Tailwind CSS.

------------------------------------------------------------------------

Made with using React, TypeScript, and Tailwind CSS.

------------------------------------------------------------------------

## 💻 Run the Project Locally

Follow these steps to run **DevStack** on your local computer.

### 1. Clone the Repository

Open your terminal or Git Bash and run:

```bash
git clone https://github.com/TanvirRahman888/DevStack.git

cd DevStack

npm install

npm run dev

```

After starting the development server, Vite will show a local URL in the terminal, usually similar to: http://localhost:5173


## Requirements 

### Before running the project, make sure you have:

1. Node.js installed
2. npm installed
3. Git installed
4. A modern web browser

### You can check your installed versions with:
```
node -v
npm -v
git -v
```

**Author:** Md Tanvir Rahman

**LinkedIn:**  https://www.linkedin.com/in/tanvirrahman888/
