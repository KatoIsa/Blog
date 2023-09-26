## Under development
# Welcome to Simplified.js main site

**Simplified.js** is a JavaScript Helper Library by [Kato Isa](https://katoisa256.netlify.app). It's designed to simplify your JavaScript coding experience, making your code more readable and accessible. Whether you're a beginner or an experienced developer, Simplified.js provides a set of functions and utilities to streamline common tasks when working with HTML elements, events, and local storage.

## Key Features

Simplified.js offers the following key features:

- **Easy HTML Element Selection and Manipulation:** Simplify the process of selecting and manipulating HTML elements on your web page.

- **Effortless Event Handling and Delegation:** Manage and handle events with ease, including event delegation to efficiently manage multiple elements.

- **Simple Database Management with localStorage:** Easily work with local storage to store and retrieve data for your web applications.

- **Convenient Utility Functions:** Access handy utility functions that simplify everyday coding tasks.

## Usage Examples

Here are some examples of how you can use Simplified.js in your projects:

```javascript
// Select an element and add a class
_.Select('.my-element').addClass('highlighted');

// Add a click event listener
_.Event('button', 'click', () => {
    alert('Hello world');
});

// Create and retrieve data from a local database
_.DB.Create('User', 'Kato Isa');
const userName = _.DB.Get('User');
