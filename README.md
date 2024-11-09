# startup

## Elevator Pitch
Introducing CloudBooks Pro, the ultimate cloud hosting service for QuickBooks users! With CloudBooks Pro, you can access all the powerful desktop features of QuickBooks from anywhere, anytime, without being tied to a single device. Whether you’re managing your business finances from the office, home, or on the go, our secure cloud platform ensures seamless access to all your accounting data and tools. Experience the full desktop QuickBooks interface with the flexibility of cloud hosting, while enjoying automatic backups, enhanced security, and IT support. Empower your business with CloudBooks Pro—QuickBooks, wherever you are.
## Design
![](/CloudBooks%20Pro-1.jpg)
## Key Features
- Secure login over https
- Flexible login for multiple users
- Quick access to your virtual machine running Quickbooks
- Built in redundency to protect your data in case of crashes
- Live chat with IT support
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## Technologies
- **HTML** - structure and organization of content for the CloudBooks Pro web application including elements like: <br> 
                - Login page (for users to enter their credentials) <br>
                - Dashboard (to display QuickBooks features and user options) <br>
                - Navigation bar, buttons, input fields, and text sections for account and financial data <br>
- **CSS** - style and visually enhance the user interface, ensuring a professional, polished look<br>
                - will be used for a responsive design, ensuring the app looks good on different devices (desktop, tablet, mobile)<br>
                - styling for the login page, user dashboard, and financial data visualization<br>
                - animations for loading states or user interactions, such as button clicks or transitions between pages<br>
- **JavaScript** - add interactivity to the application and handle user interactions<br>
                    - handle dynamic actions, such as logging in, validating input fields, fetching and displaying data (e.g., transactions, account details)<br>
                    - Integrate third-party APIs for additional functionality (e.g., using a currency exchange rate API to show up-to-date rates)<br>
- **React** - build a dynamic, component-based front-end using React<br>
                - build a single-page application (SPA), with reusable components for login, dashboard, and user account sections<br>
                - implement routing to switch between views, like the login page, dashboard, and settings<br>
                - state management will ensure that as a user performs actions (e.g., viewing their transactions), the page updates instantly without needing a refresh<br>
- **Web Service** - handle communication between the frontend and backend services<br>
                    - create a backend API to manage user authentication, data retrieval (e.g., QuickBooks financial data), and account settings<br>
                    - Call third-party APIs to extend functionality, such as:<br>
                        - Using a public API like https://vatcomply.com/documentation to calculate VAT rates for different countries.<br>
                        - Fetching live stock price data via https://www.alphavantage.co to assist with financial forecasting for users<br>
- **DB/Login** - allow users to securely log in and manage their accounts, store and render persistent data, such as user information and QuickBooks data<br>
                    - implement user registration and login features, storing user credentials in a secure database (Mongo DB)<br>
                    - once logged in, users should see a personalized dashboard with their name and profile and allowing them to view their transaction history, invoices, and reports <br>
- **WebSocket** - enable real-time data updates and synchronization<br>
                    - real-time collaboration, like when multiple users are viewing the same account (e.g., a business owner and an accountant)<br>
                    - receive real-time updates on changes to financial data (e.g., when a transaction is updated, all users receive the update without refreshing)<br>
                    - display real-time notifications when new transactions, invoices, or payments are processed<br>
                    - live chat with IT support<br>
## HTML Deliverable

### Overview
In this deliverable, we have structured the initial HTML framework for CloudBooks Pro. This includes creating multiple HTML pages with placeholders for future content and functionality. The main components of the application are represented in separate HTML files, ensuring a clear and organized structure.

### Implemented Pages
1. **index.html**: The main landing page of the application. It includes:
   - A header with the application title.
   - A navigation bar with links to other pages.
   - A main content area with a brief description of the application.
   - A footer with a link to the GitHub repository.

2. **login.html**: The login page for user authentication. It includes:
   - A header with the page title.
   - A navigation bar with links to other pages.
   - A form for users to enter their username and password.
   - A footer with a link to the GitHub repository.

3. **data.html**: A placeholder page for displaying database data. It includes:
   - A header with the page title.
   - A navigation bar with links to other pages.
   - A main content area with a placeholder for database data.
   - A footer with a link to the GitHub repository.

4. **realtime.html**: A placeholder page for displaying real-time data via WebSockets. It includes:
   - A header with the page title.
   - A navigation bar with links to other pages.
   - A main content area with a placeholder for real-time data.
   - A footer with a link to the GitHub repository.

## CSS Deliverable

### Overview
In this deliverable, we have enhanced the CSS framework for CloudBooks Pro. This includes creating a responsive and visually appealing design for the application. The main components of the application are styled to ensure a consistent and user-friendly interface.

### Implemented Styles
1. **General Styles**: 
   - Applied a consistent font family, background color, and text color across the application.
   - Ensured a flexible and responsive layout using Flexbox.

2. **Header Styles**:
   - Styled the header with a background color, padding, and box shadow.
   - Ensured the header text is centered and visually appealing.

3. **Navigation Styles**:
   - Styled the navigation bar with a background color and hover effects.
   - Ensured the active link is highlighted for better user experience.

4. **Main Content Styles**:
   - Applied padding and margin adjustments for better readability.
   - Styled images with border-radius and box shadow for a modern look.
   - Added hover effects to images for interactivity.

5. **Footer Styles**:
   - Styled the footer with a background color, padding, and box shadow.
   - Ensured the footer stays at the bottom of the page.

6. **Form Styles**:
   - Styled form elements with padding, border, and border-radius for a clean look.
   - Ensured form labels and inputs are aligned properly.
   - Styled buttons with background color, padding, and hover effects.

7. **Table Styles**:
   - Styled tables with border-collapse, padding, and box shadow for a professional look.
   - Applied alternating row colors for better readability.
   - Ensured table headers are styled with a background color and text color.

8. **Chat Window Styles**:
   - Styled the chat window with border, border-radius, and box shadow.
   - Differentiated between help representative and user messages with distinct background colors.
   - Ensured the chat input field and send button are styled for usability.

### Responsive Design
- Implemented media queries to ensure the layout looks good on different screen sizes.
- Adjusted navigation and main content styles for better responsiveness.

### GitHub Repository
The footer of each HTML page includes a link to the GitHub repository for this project, ensuring easy access for further development and collaboration.

### Next Steps
- Continue to refine and enhance the visual design with more detailed CSS and possibly additional libraries or frameworks.
- Integrate the frontend with the backend services using JavaScript and React.
- Implement the backend services for user authentication, data retrieval, and real-time updates.
- Continuously commit and push changes to GitHub to track progress and maintain version control.

## React Deliverable

### Overview
In this deliverable, we have converted the CloudBooks Pro application to use React. This includes creating a responsive and interactive user interface with multiple React components, implementing React Router for navigation, and adding state management using React hooks.

### Implemented Features
1. **Application Structure**:
   - Converted the application to use React.
   - Organized the codebase into reusable React components.

2. **React Router**:
   - Implemented React Router for navigation between different pages.
   - Added routes for Home, Login, Data, and Support pages.

3. **State Management**:
   - Used React hooks (`useState`, `useEffect`) for state management.
   - Managed form inputs, chat messages, and feature expansion states.

4. **Home Page**:
   - Added a feature list with expandable sections.
   - Users can click on feature titles to expand or collapse the descriptions.
   - Added arrows to indicate that the features are expandable.

5. **Login Page**:
   - Managed form inputs for username and password using `useState`.
   - Handled form submission and logged input values to the console.

6. **Data Page**:
   - Fetched and displayed mock data using `useEffect`.
   - Rendered data in a table format.

7. **Support Page**:
   - Implemented a live chat feature with message input and display.
   - Differentiated between help representative and user messages with distinct background colors.
   - Ensured the chat input field and send button are styled for usability.
   - Implemented word wrapping to ensure long messages are displayed correctly.
   - Ensured the "You" label and the text message always appear on the same line.

### Responsive Design
- Implemented media queries to ensure the layout looks good on different screen sizes.
- Adjusted navigation and main content styles for better responsiveness.

### GitHub Repository
The footer of each HTML page includes a link to the GitHub repository for this project, ensuring easy access for further development and collaboration.

### Next Steps
- Continue to refine and enhance the visual design with more detailed CSS and possibly additional libraries or frameworks.
- Integrate the frontend with the backend services using JavaScript and React.
- Implement the backend services for user authentication, data retrieval, and real-time updates.
- Continuously commit and push changes to GitHub to track progress and maintain version control.