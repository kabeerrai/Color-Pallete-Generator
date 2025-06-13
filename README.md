# 🎨 Color Palette Generator

An interactive web tool that generates a palette of **5 random hex colors**.
Users can copy individual colors and lock them to prevent changes when generating a new palette.

---

## 💡 Features

* Generate a palette of **5 random colors**
* Copy any color’s hex code to the clipboard
* Lock individual colors to keep them unchanged on regenerate
* Smooth color-transition animations

---

## 🧠 Pseudo Code

### ✅ Core Logic

1. **Create 5 color blocks** (`div`s) and one **Generate** button in HTML.

2. Inside each color block, add:

   * a **Lock button** (toggles lock/unlock)
   * a **Copy button** (copies the hex code)

3. Use JavaScript to access all elements via **DOM selectors**.

4. Define a hex-character array:

   ```js
   const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
   ```

5. Add an event listener to the **Generate** button:

   * For each color block:

     * If it's **not locked**, generate a new hex color:

       * Loop 6 times, each time randomly selecting from the `hexChars` array
       * Concatenate into a final string like `#A1B2C3`
     * Update the block’s **background color** and **display the hex code**

### 🔒 Lock Button Logic

* Each color block maintains a **lock state** (e.g., via a `locked` class or `data-locked="true"`).
* Clicking the lock button:

  * **Toggles** the lock/unlock state
  * **Swaps** the lock icon (e.g., 🔓 ↔ 🔒)
* During generation, **skip** updating blocks that are locked

### 📋 Copy Button Logic

* Clicking the copy button:

  * **Reads** the block’s current hex code

  * Executes:

    ```js
    navigator.clipboard.writeText(hexCode);
    ```

  * **display feedback** like a tooltip or a "Copied!" message

---

## 🛠 Built With

| Tech       | Purpose                                            |
| ---------- | -------------------------------------------------- |
| HTML       | Structure for color blocks and buttons             |
| CSS        | Layout, styling, and transition effects            |
| JavaScript | Color generation, DOM manipulation, event handling |
