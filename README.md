# Student Array Manager - Day 5

**A lightweight, interactive web application to manage a student list using vanilla JavaScript arrays.** This project demonstrates essential DOM manipulation, real-time input validation, and array operations like adding and removing elements dynamically.

---

## 🚀 Features

* **Real-time Validation:** Checks input length as you type to prevent invalid submissions.
* **Dynamic Student List:** Adds students to an array and renders them instantly as gradient cards.
* **Live Counter:** Updates the total number of registered students automatically.
* **Instant Removal:** Features an inline delete function that removes a student from the internal array and updates the interface in real time.

---

## 🛠️ Tech Stack

* **HTML5:** Structuring the form, list container, and output areas.
* **CSS3:** Clean flexbox layout styling featuring soft gradient backgrounds.
* **JavaScript (ES6):** Handling core application state, event tracking, validation rules, and DOM adjustments.

---

## 📦 File Architecture

```text
├── index.html   # Main structure and CSS layout styles
└── script.js    # Core state handling, event listeners, and array logic
```

---

## 🔧 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
You only need a modern web browser installed (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

### Setup and Running Instructions
1. Clone or download this project's code files to your computer.
2. Put both `index.html` and `script.js` directly into the same folder.
3. Double-click the `index.html` file to open and run it inside your browser.

---

## 💡 How It Works

* **Validating Input:** The system watches your text inputs. It alerts you if you type a single character or enter a string longer than 15 characters.
* **Adding Students:** Pressing the submit button pushes your trimmed input text directly into a global `student` array before clearing out the input field.
* **Updating the DOM:** The `displaystudent()` utility clears the existing visual list, reads the modern array state, and repopulates the page elements along with a dedicated delete button for each list item.
* **Removing Entries:** Clicking a student's delete button executes a `splice()` operation directly targeting that element's specific index array position.
