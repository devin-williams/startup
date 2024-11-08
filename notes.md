# Notes for CS 260
## How to use Markdown
- for different headings use:
```
# first level (biggest)
## second level
### third level (smallest)
```

- for typing out code blocks use backticks (``)
- styling text:
    - **bold** - (`**word**` or `__word__`) - use asterisks or double underscore
    - *italic* - (`*word*` or `_word_`) - use one asterisk or one underscore
    - ~~Strikethrough~~ - (`~~word~~`) - use double tilde
    - **bold and _nested_ italic** - (`**bolded words and _italicized_ words**`) - double asterisk and one underscore
    - ***all bold and italic*** - (`***words***`) - three asterisks
    - Sub<sub>script</sub> - (`word and <sub>subscripted</sub> word`) - use html `<sub>` code
    - Super<sup>script</sup> - (`word and <sup>scripted</sup> word`) - use html `<sup>` code


## AWS
- ssh command to access my server
```
ssh -i /path/to/.pem/file ubuntu@98.82.89.111
```
- server ip address: **98.82.89.111**


## What I learned from this first assignment
- I learned about how to write effective markdown notes and am excited to learn more about it. I have used github for awhile now but I haven't ever really used the README or any type of markdown file before
- also it was fun to learn more about merging conflicts


# Midterm Questions and Notes
## 1. In the following code, what does the link element do?
- **Notes**: The `<link>` element is used to link external resources to the HTML document. It is most commonly used to link CSS stylesheets.
- **Example**:
  ```html
  <link rel="stylesheet" href="styles.css">
- This links the styles.css file to the HTML document, applying the styles defined in the CSS file.
## 2. In the following code, what does a div tag do?
- **Notes**: The `<div>` tag is a block-level container used to group other HTML elements. It has no semantic meaning but is useful for applying styles or scripts to a group of elements.
- **Example**:
  ```html
  <div class="container">
      <p>This is a paragraph inside a div.</p>
  </div>
## 3. In the following code, what is the difference between the #title and .grid selector?
- **Notes**: 
  - `#title` is an ID selector, used to select an element with the specific ID "title".
  - `.grid` is a class selector, used to select all elements with the class "grid".
- **Example**:
  ```css
  #title {
      font-size: 24px;
  }
  .grid {
      display: grid;
  }
## 4. In the following code, what is the difference between padding and margin?
- **Notes**: 
  - **Padding**: The space between the content and the border of an element.
  - **Margin**: The space outside the border of an element.
- **Example**:
  ```css
  .box {
      padding: 20px;
      margin: 10px;
  }
## 5. Given this HTML and this CSS how will the images be displayed using flex?
- **Notes**: Flexbox is used to create a flexible layout. The `display: flex;` property makes the container a flex container, and its children become flex items.
- **Example**:
  ```html
  <div class="flex-container">
      <img src="image1.jpg">
      <img src="image2.jpg">
  </div>
  ```css
  .flex-container {
    display: flex;
  }
### Flexbox Properties
- **`display: flex;`**: Defines a flex container and enables a flex context for all its direct children.

- **`flex-direction`**: Specifies the direction of the flex items.
  - `row` (default): Items are placed in a row, from left to right.
  - `row-reverse`: Items are placed in a row, from right to left.
  - `column`: Items are placed in a column, from top to bottom.
  - `column-reverse`: Items are placed in a column, from bottom to top.
  ```css
  .flex-container {
      display: flex;
      flex-direction: row;
  }
- **`justify-content`**: Defines the alignment along the main axis (horizontal by default).
  - `flex-start` (default): Items are packed toward the start of the flex container.
  - `flex-end`: Items are packed toward the end of the flex container.
  - `center`: Items are centered along the main axis.
  - `space-between`: Items are evenly distributed with the first item at the start and the last item at the end.
  - `space-around`: Items are evenly distributed with equal space around them.
  ```css
  .flex-container {
      display: flex;
      justify-content: center;
  }
- **`align-items`**: Defines the default behavior for how flex items are laid out along the cross axis (vertical by default).
  - `stretch` (default): Items are stretched to fill the container.
  - `flex-start`: Items are aligned to the start of the flex container.
  - `flex-end`: Items are aligned to the end of the flex container.
  - `center`: Items are centered along the cross axis.
  - `baseline`: Items are aligned such that their baselines align.
  ```css
  .flex-container {
      display: flex;
      align-items: center;
  }
- **`flex-wrap`**: Specifies whether flex items should wrap or not.
  - `nowrap` (default): All flex items will be on one line.
  - `wrap`: Flex items will wrap onto multiple lines, from top to bottom.
  - `wrap-reverse`: Flex items will wrap onto multiple lines, from bottom to top.
  ```css
  .flex-container {
      display: flex;
      flex-wrap: wrap;
  }
- **`align-content`**: Aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how `justify-content` aligns individual items within the main-axis.
  - `flex-start`: Lines are packed toward the start of the flex container.
  - `flex-end`: Lines are packed toward the end of the flex container.
  - `center`: Lines are centered in the flex container.
  - `space-between`: Lines are evenly distributed with the first line at the start and the last line at the end.
  - `space-around`: Lines are evenly distributed with equal space around them.
  - `stretch` (default): Lines stretch to take up the remaining space.
  ```css
  .flex-container {
      display: flex;
      align-content: space-between;
  }
## 6. What does the following padding CSS do?
- **Notes**: Padding adds space inside an element, between the content and the border.
- **Example**:
  ```css
  .box {
      padding: 10px 20px 30px 40px; /* top right bottom left */
  }
## 7. What does the following code using arrow syntax function declaration do?
- **Notes**: Arrow functions provide a concise syntax for writing functions in JavaScript. If the function body consists of a single expression, it is implicitly returned without needing the `return` keyword.
- **Example**:
  ```javascript
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // Outputs: 5

  // Equivalent function using the return keyword
  const addWithReturn = function(a, b) {
      return a + b;
  };
  console.log(addWithReturn(2, 3)); // Outputs: 5
## 8. What does the following code using map with an array output?
- **Notes**: The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // Outputs: [2, 4, 6]
## 9. What does the following code output using getElementByID and addEventListener?
- **Notes**: `getElementById` selects an element by its ID, and `addEventListener` attaches an event handler to the selected element.
- **Example**:
  ```html
  <button id="myButton">Click me</button>
  <script>
      document.getElementById('myButton').addEventListener('click', () => {
          console.log('Button clicked');
      });
  </script>
- When the button is clicked, it logs "Button clicked" to the console.
## 10. What does the following line of Javascript do using a # selector?
- **Notes**: The `#` selector is used to select an element by its ID.
- **Example**:
  ```javascript
  document.querySelector('#myElement').style.color = 'red';
- This changes the text color of the element with the ID "myElement" to red.
## 11. Which of the following are true? (mark all that are true about the DOM)
- **Notes**: The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
- **Example**: True statements might include:
  - The DOM represents the document as nodes and objects.
  - The DOM can be manipulated with JavaScript.
## 12. By default, the HTML span element has a default CSS display property value of:
- **Notes**: The `<span>` element is an inline element.
- **Example**:
  ```css
  span {
      display: inline;
  }
## 13. How would you use CSS to change all the div elements to have a background color of red?
- **Notes**: Use the `div` selector to apply styles to all `<div>` elements.
- **Example**:
  ```css
  div {
      background-color: red;
  }
## 14. How would you display an image with a hyperlink in HTML?
- **Notes**: Use the `<a>` tag to create a hyperlink and the `<img>` tag to display an image.
- **Example**:
  ```html
  <a href="https://example.com">
      <img src="image.jpg" alt="Example Image">
  </a>
## 15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- **Notes**: The CSS box model consists of the following layers:
  - Content
  - Padding
  - Border
  - Margin
- **Example**:
  ```css
  .box {
      padding: 10px;
      border: 1px solid black;
      margin: 20px;
  }
## 16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- **Notes**: Use a class or ID to target the specific text.
- **Example**:
  ```html
  <p>This is <span class="highlight">trouble</span> and double.</p>
  ```
  ```css
  .highlight {
      color: green;
  }
## 17. What will the following code output when executed using a for loop and console.log?
- **Notes**: The `for` loop iterates over a block of code a number of times.
- **Example**:
  ```javascript
  for (let i = 0; i < 3; i++) {
      console.log(i);
  }
  // Outputs: 0, 1, 2
## 18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- **Notes**: Use `getElementById` to select the element and change its style.
- **Example**:
  ```javascript
  document.getElementById('byu').style.color = 'green';
## 19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- **Notes**:
  - Paragraph: `<p>`
  - Ordered list: `<ol>`
  - Unordered list: `<ul>`
  - Second level heading: `<h2>`
  - First level heading: `<h1>`
  - Third level heading: `<h3>`
## 20. How do you declare the document type to be html?
- **Notes**: Use the `<!DOCTYPE html>` declaration at the beginning of the HTML document.
- **Example**:
  ```html
  <!DOCTYPE html>
## 21. What is valid javascript syntax for if, else, for, while, switch statements?
- **Notes**:
  - **if**:
    ```javascript
    if (condition) {
        // code
    }
    ```
  - **else**:
    ```javascript
    else {
        // code
    }
    ```
  - **for**:
    ```javascript
    for (let i = 0; i < 10; i++) {
        // code
    }
    ```
  - **while**:
    ```javascript
    while (condition) {
        // code
    }
    ```
  - **switch**:
    ```javascript
    switch (expression) {
        case value1:
            // code
            break;
        case value2:
            // code
            break;
        default:
            // code
    }
    ```
## 22. What is the correct syntax for creating a javascript object?
- **Notes**: Use curly braces to define an object.
- **Example**:
  ```javascript
  const person = {
      firstName: "John",
      lastName: "Doe",
      age: 30
  };
## 23. Is it possible to add new properties to javascript objects?
- **Notes**: Yes, you can add new properties to JavaScript objects.
- **Example**:
  ```javascript
  const person = {
      firstName: "John",
      lastName: "Doe"
  };
  person.age = 30;
## 24. If you want to include JavaScript on an HTML page, which tag do you use?
- **Notes**: Use the `<script>` tag to include JavaScript.
- **Example**:
  ```html
  <script src="script.js"></script>
## 25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- **Notes**: Use `getElementById` or `querySelector` to select the element and change its text content.
- **Example**:
  ```html
  <p id="animal">animal</p>
  <p id="fish">fish</p>
  ```
  ```javascript
  document.getElementById('animal').textContent = 'crow';
  ```
## 26. Which of the following correctly describes JSON?
- **Notes**: JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.
- **Example**:
  ```json
  {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30
  }
## 27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
- **Notes**:
  - `chmod`: Change file permissions.
  - `pwd`: Print working directory.
  - `cd`: Change directory.
  - `ls`: List directory contents.
  - `vim`: Open Vim text editor.
  - `nano`: Open Nano text editor.
  - `mkdir`: Make a new directory.
  - `mv`: Move or rename files.
  - `rm`: Remove files or directories.
  - `man`: Display manual pages.
  - `ssh`: Open SSH session.
  - `ps`: Display current processes.
  - `wget`: Download files from the web.
  - `sudo`: Execute a command as superuser.
## 28. Which of the following console command creates a remote shell session?
- **Notes**: The `ssh` command creates a remote shell session.
- **Example**:
  ```bash
  ssh user@hostname
## 29. Which of the following is true when the -la parameter is specified for the ls console command?
- **Notes**: The `-la` parameter for the `ls` command lists all files, including hidden files, in long format.
- **Example**:
  ```bash
  ls -la
## 30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- **Notes**:
  - **Top-level domain (TLD)**: `click`
  - **Subdomain**: `banana.fruit.bozo`
  - **Root domain**: `bozo.click`
## 31. Is a web certificate necessary to use HTTPS?
- **Notes**: Yes, a web certificate is necessary to use HTTPS to ensure secure communication.
- **Example**: SSL/TLS certificates are used to encrypt data between the client and server.
## 32. Can a DNS A record point to an IP address or another A record?
- **Notes**: A DNS A record can point to an IP address but not to another A record.
- **Example**:
  ```plaintext
  example.com. IN A 192.0.2.1
## 33. Port 443, 80, 22 is reserved for which protocol?
- **Notes**:
  - **Port 443**: HTTPS
  - **Port 80**: HTTP
  - **Port 22**: SSH
## 34. What will the following code using Promises output when executed?
- **Notes**: 
  - **Promise**: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
  - **Asynchronous Operation**: An asynchronous operation is a process that runs independently of the main program flow, allowing the program to continue running while waiting for the operation to complete.
- **Example**:
  ```javascript
  const promise = new Promise((resolve, reject) => {
      resolve('Success!');
  });

  promise.then(result => {
      console.log(result); // Outputs: Success!
  });
  const promise = new Promise((resolve, reject) => {
    reject('Error!');
  });

  promise.then(result => {
        console.log(result);
  }).catch(error => {
        console.log(error); // Outputs: Error!
  });