# Counter Website

This is a simple yet attractive counter website built with HTML, CSS, and JavaScript. The main purpose of this application is to provide a clean and interactive counting experience with a special notification feature.

## Features

- **Main Counter**: A prominent counter that increments with each click on the central button.
- **Circular Button**: A large, visually appealing circular button with a jelly-like animation on click.
- **Notification System**: A modal notification appears when the main counter reaches 108.
- **Secondary Counter**: Tracks the number of times the main counter has been reset after reaching 108.
- **Modern UI**: A clean and modern user interface with a centered layout and smooth animations.

## Technologies Used

- **HTML**: The standard markup language for creating the structure of the web page.
- **CSS**: Used for styling the website, including the layout, colors, and animations.
- **JavaScript**: Powers the functionality of the counters, the notification system, and the button interactions.

## How to Use

To run this website, simply open the `index.html` file in your web browser. No special setup or dependencies are required.

1.  Clone the repository or download the files.
2.  Navigate to the project directory.
3.  Open `index.html` in your preferred web browser.

## Mechanism

The core logic of the application is handled by `script.js`. Here’s a breakdown of how it works:

1.  **Event Listener**: An event listener is attached to the main circular button. When the button is clicked, it triggers the counting logic.
2.  **Main Counter**: A `mainCounter` variable is incremented on each click. The displayed count is updated in real-time.
3.  **Notification Trigger**: When the `mainCounter` reaches 108, a notification modal is displayed.
4.  **Reset and Secondary Counter**: The notification has a close button. When clicked, the `mainCounter` is reset to 0, and a `secondaryCounter` is incremented to track the number of resets.
5.  **DOM Manipulation**: The script dynamically updates the content of the HTML elements to reflect the current state of the counters.

## File Structure

```
.
├── index.html
├── style.css
└── script.js
```

- **`index.html`**: Contains the basic structure of the website.
- **`style.css`**: Contains all the styling rules for the layout, button, and notification.
- **`script.js`**: Contains the logic for the counters and user interactions.
