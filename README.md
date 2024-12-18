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

### Next Steps
- Continue to refine and enhance the visual design with more detailed CSS and possibly additional libraries or frameworks.
- Integrate the frontend with the backend services using JavaScript and React.
- Implement the backend services for user authentication, data retrieval, and real-time updates.
- Continuously commit and push changes to GitHub to track progress and maintain version control.

## Service Deliverable

### Overview
In this deliverable, we have enhanced the CloudBooks Pro application by integrating a backend service using Node.js and Express. This includes creating API endpoints to fetch data from third-party services, setting up environment variables for secure configuration, and ensuring seamless communication between the frontend and backend.

### Implemented Features
1. **Backend Setup**:
   - Set up a Node.js and Express backend.
   - Created a `service/index.js` file to handle backend logic.

2. **Environment Configuration**:
   - Used the `dotenv` package to manage environment variables securely.
   - Created a `.env` file to store the Fixer API key.

3. **API Endpoints**:
   - Implemented an endpoint to fetch exchange rates from the Fixer API.
   - Converted exchange rates to USD manually due to Fixer API limitations on the free tier.

4. **Frontend Integration**:
   - Updated the frontend to fetch data from the new backend endpoints.
   - Displayed exchange rates in a table format on the Data page.
   - Added a scroll bar to the table to handle large datasets.

5. **Concurrent Server Setup**:
   - Used the `concurrently` package to run both the backend and frontend servers with a single command.
   - Updated `package.json` to include scripts for starting both servers concurrently.

### Next Steps
- Implement a database using MongoDB to persistently store the user's data
- Implement the backend services for user authentication, data retrieval, and real-time updates.
- Continuously commit and push changes to GitHub to track progress and maintain version control.

## Database Deliverable

### Overview
In this deliverable, we have enhanced the CloudBooks Pro application by integrating MongoDB for data persistence and user authentication. This includes setting up database connections, creating API endpoints for user management, and ensuring secure handling of user credentials.

### Implemented Features
1. **Database Connection**:
   - Set up a connection to MongoDB using the `MongoClient` from the `mongodb` package.
   - Created a `database.js` file to handle database operations and connection logic.

2. **User Management Endpoints**:
   - Implemented endpoints in `index.js` for user registration (`/auth/create`), login (`/auth/login`), and logout (`/auth/logout`).
   - Used `bcrypt` to hash user passwords before storing them in the database.
   - Generated and managed user tokens for authentication.

3. **Data Persistence**:
   - Persisted user data in MongoDB, including storing hashed passwords and authentication tokens.
   - Created functions in `database.js` to add, update, and delete user data.

4. **Frontend Integration**:
   - Updated the frontend to handle user registration, login, and logout.
   - Used local storage to manage authentication tokens on the client side.
   - Conditionally rendered content based on the user's authentication state.

5. **Authorization**:
   - Restricted access to certain parts of the application based on user authentication.
   - Displayed user data and exchange rates only to authenticated users.
   - Provided a login prompt for unauthenticated users attempting to access restricted content.

### Next Steps
- Continue to refine and enhance the backend services with more detailed API endpoints and possibly additional third-party integrations.
- Implement WebSocket to create a service chat feature where the placeholder currently is
- Continuously commit and push changes to GitHub to track progress and maintain version control.
- add a message that appears when a log-in attempt does not work and when registering does not work

## WebSocket Deliverable

### Overview
In this deliverable, we have enhanced the CloudBooks Pro application by integrating WebSocket functionality for real-time chat support. This includes setting up a WebSocket server, connecting the WebSocket from the frontend, and ensuring messages are correctly sent and received between clients.

### Implemented Features
1. **WebSocket Server Setup**:
   - Set up a WebSocket server using the `ws` library in `index.js`.
   - Configured the WebSocket server to handle connections, messages, and disconnections.

2. **Frontend WebSocket Connection**:
   - Updated the `Support.jsx` component to establish a WebSocket connection.
   - Used the `useRef` hook to ensure only one WebSocket connection is created per client.

3. **Message Handling**:
   - Implemented logic to send messages from the client to the WebSocket server.
   - Updated the WebSocket server to broadcast messages to all connected clients.
   - Ensured the frontend correctly handles incoming messages and updates the chat window.

4. **Username Integration**:
   - Included the username of the client in the message object.
   - Displayed the username in the chat window for each message.

5. **Proxy Configuration**:
   - Configured `vite.config.js` to proxy WebSocket requests during development.

### Next Steps
- Continue to refine and enhance the WebSocket functionality with additional features such as message history and notifications.
- Implement more detailed logging and error handling for WebSocket connections.
- Continuously commit and push changes to GitHub to track progress and maintain version control.
- Add a message that appears when a log-in attempt does not work and when registering does not work.