# Simplified.js Documentation

#### **Version:** 1.0.0
#### **Author:** KATO ISA
#### **Website:** [katoisa256.netlify.app](https://www.katoisa256.netlify.app)
#### **Contact:** WhatsApp: +256 705207718

## Introduction

**Simplified.js** is a JavaScript helper library designed to simplify common tasks in web development, making your code more readable and accessible. It offers a collection of functions to streamline tasks like selecting HTML elements, adding event listeners, and basic local storage-based database management. This documentation provides an overview of the library's functions and how to use them effectively.

## Table of Contents

1. [Installation](#installation)
2. [Functions](#functions)
    - [Select](#select)
    - [Each](#each)
    - [Event](#event)
    - [addClass](#addclass)
    - [removeClass](#removeclass)
    - [EventAll](#eventall)
    - [HTMLcreate](#htmlcreate)
    - [GetTAG](#gettag)
    - [Print](#print)
    - [DB](#db)
        - [Create](#create)
        - [Get](#get)
        - [Edit](#edit)

## Installation <a name="installation"></a>

To use **Simplified.js** in your project, include it as a script tag in your HTML file:

download the files from git hub and add them to the root directory of your website, make sure the javascript files that are going to access simplify are below it, then javascript will do its magic.

```html
 <html>
   <head>
    <title>page</title>
  </head>
  <body>
     Random page content ...
  <!-- add simplify.js script tag here -->
  <script src="./lib/Simplified.js" ></script>

  <!--JS files that need to access simplify must be below it-->
  <script src='./js/main.js'></script>
  <!-- like this one here -->

   </body>
 </html>
```

* YOUR NOW SATE, LOOK THROUGH THE DOC AND SEE WHAT YOU CAN DO WITH SIMPLLIFY.
# <a name="functions">Functions</a>
## <a name="select">Select</a>
The Select function allows you to select HTML elements by their CSS selector. If you want to select multiple elements, set the MultiElements parameter to true.

```js
_.Select('element'); // Selects a single element
_.Select('element', true); // Selects multiple elements

```

## <a name="each">Each</a>
The Each function is used for iterating over a collection of elements and performing a task on each element. You can pass either a string selector or a variable containing elements.

```js
_.Each('element', AssignedName); // Using a string selector
_.Each(element, AssignedName, true); // Using a variable with iteration
```

## <a name="event">Event</a>
The Event function simplifies adding event listeners to HTML elements. You can pass an element selector, event type, task (function), and an optional Type parameter.

```js
_.Event('.button', 'click', () => {
    alert('hello world');
}, true);

```

## <a name="addclass">addClass</a>
The addClass function adds a CSS class to a DOM element.

```js
_.addClass(element, 'className');

```

## <a name="removeclass">removeClass</a>
The removeClass function removes a CSS class from a DOM element.

```js
_.removeClass(element, 'className');

```

##  <a name="eventall">EventAll</a>
The EventAll function is similar to Event but can be used to attach the same event handler to multiple elements.

```js
_.EventAll('.buttons', 'click', () => {
    alert('Button clicked!');
}, true);

```

##  <a name="htmlcreate">HTMLcreate</a>
The HTMLcreate function creates a new HTML element of the specified type (e.g., 'div', 'span').

```js
let newElement = _.HTMLcreate('div');
```

## <a name="gettag">GetTAG</a>
The GetTAG function gets elements by their HTML tag name.

```js
let elements = _.GetTAG('div');
```

## <a name="print">Print</a>
The Print function logs a value to the console, similar to console.log.

```js
_.Print('hello world');
```

## <a name="db">DB</a>
The DB object provides simple database management functions using localStorage.

<a name="create">Create</a>

  The Create function writes data to the database under the given primary key.

  ```js
  _.DB.Create('primaryKey', 'data');
  ```
<a name="get">Get</a>

   The Get function retrieves data from the database based on the primary key. If the Print parameter is true, it also logs the data to the console.

   ```js
   _.DB.Get('primaryKey', true);
   ```
<a name="edit">Edit</a>

  The Edit function updates data in the database under the given primary key.

  ```js
  _.DB.Edit('primaryKey', 'newData');
  ```

# Conclusion

Simplified.js aims to simplify your JavaScript code and enhance code readability in web development projects. Feel free to use this library in your projects and customize it to suit your specific needs.