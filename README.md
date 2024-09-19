# CMS - Credits management system

## Repository Description

This repository hosts the user interface for the Credit Management System (CMS). The frontend application is designed to interact with the CMS API, providing an intuitive and accessible user experience for managing extracurricular credits in an educational institution. Through CRUD (Create, Read, Update, Delete) operations, users can view, modify and manage credit information efficiently, with an interface that facilitates navigation and interaction with the system.

## Project Description 

The Credit Management System (CMS) is a comprehensive project composed of this frontend repository and another component called “api-c-management-system”, which manages the backend infrastructure and data synchronization. Together, these two repositories form a complete solution that optimizes the monitoring and administration of students' academic credits during their extracurricular activities, ensuring effective management and a smooth user experience.

[Repository of "api-c-management-system" ](https://github.com/GlzLXochitl/api-c-management-system.git)

## Dependencies

The project uses the following dependencies:

- `@testing-library/jest-dom`: Custom jest matchers to test the state of the DOM.
- `@testing-library/react`: Simple and complete React DOM testing utilities.
- `@testing-library/user-event`: Fire events the same way the user does.
- `animate.css`: A library of ready-to-use, cross-browser animations.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `body-parser`: Middleware to parse incoming request bodies in a middleware.
<!-- - `dotenv`: Loads environment variables from a `.env` file into `process.env`. -->
- `jspdf`: Library to generate PDFs in JavaScript.
- `jspdf-autotable`: Plugin for jsPDF to generate tables.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Serves as the entry point to the DOM and server renderers for React.
- `react-icons`: Include popular icons in your React projects easily.
- `react-router-dom`: DOM bindings for React Router.
- `react-scripts`: Scripts and configuration used by Create React App.
- `web-vitals`: A tiny library for measuring all the Web Vitals metrics.


## Installation

Follow these steps to set up and run the project in your local environment:

1. Clone the repository:

   ```sh
   git clone https://github.com/GlzLXochitl/react-c-management-system.git
   cd react-c-management-system
   ```

2. Installs the project dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```sh
   REACT_APP_API_IP_ADDRESS=http://localhost:3001
   ```

   Replace the value of `REACT_APP_API_IP_ADDRESS` with the URL of the API server. This is the URL where the API server is running.


4. Start the server in development mode:

   ```sh
   npm start
   ```

   This will start the server using `nodemon`, which will automatically restart the application when changes to the files are detected.

## Use

Once the server is up and running, you can access the application at `http://localhost:3000` (or whatever port you have configured).

<!-- - 

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

-->