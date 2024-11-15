# Contact Management

## Overview

The Contact Management feature helps users keep track of important contact information for customers and clients. It allows users to add, view, update, and delete contact details all in one place. This makes it easy for users to find and manage information, which is especially helpful in a business setting where keeping track of relationships is key.

## Features

- **Add a New Contact**: Users can add a contact with essential details like name, email, phone number, company, and job title.
- **View Contacts**: A table view lists all contacts, with sorting and pagination options to make large contact lists easier to browse.
- **Edit Contact Information**: Users can update contact details when information changes.
- **Delete a Contact**: Users can remove outdated or duplicate entries.

## Tech Stack

- **Frontend**: React, Vite, Material-UI (MUI)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Tools**: Axios, Nodemon

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Create a .env file with the following content:

```bash
MONGO_URI=mongodb://localhost:27017/contactManagement
PORT=5000
```

## Start the server:

```bash
npm start
```

## Frontend

### Navigate to the frontend directory.

### Install dependecies:

```bash
npm install
```

## Start the development server:

```bash
npm run dev
```

## MongoDB Schema Script

```bash
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
```

## Major Technical Decisions

```bash
1. Tech Stack: The MERN stack (MongoDB, Express, leact, Node.js) was chosen for its popularity and efficiency in building full-stack applications. Vite was used for its fast build times and modern development fratures.

2. Material-UI (MUI): MUI was chosen for the frontend to provide a consistent and modern Ut with pre-built components.

3. Axios: Axins was used for making HITIP requests from the frontend to the backond due to its simplicity and ease of use.

4. Nodemort: Nodemon was used in the backend for automatic server restarts during development, improving the developnrent workflow.
```

## How Each Part of the App Works

### Backend

```bash
Server Setup: the server is set up using Express and connects to MongoDB using Mongoose the server listens on a specified port and handles API requests.

Controllers: The controllers handle the logic for each API endpoint, including creating, retrieving, updating, and deleting contacts.

Models: The models define the schema for the contacts using Mongoose, ensuring data consistency and validation.
```

### Frontend

```bash
App Component: The main component that manages the state of the contacts and rendes the Contacthome and Lontactlabic components.

Contactform Component: A form that allows users to add now contacts. It captures user input and sends a 1051 request to the backend to create a new contact.

Contact lable Component: A table that displays all contacts with pagination and sorting. It also includes buttons for editing and deleting contacts.

EditContactDialog Component: A dialog that allows users to edit contact details. It captures user input and sends a PUT request to the backend to update the contact.
```

## Challenges and Solutions

```bash
Handling CORS
Solution: Used the cors middleware in the backend to allow cross-origin requests.

Form Validation
Solution: Implemented form validation in the frontend using MUI components and handled errors in the backend using Mongoose validation.

Connecting Frontend to Backend
Solution: Used Axios for making HTTP requests from the frontend to the backend API endpoints.

Edit Functionality
Solution: Added a dialog component to handle editing of contact details and updated the state management in the parent component.
```

## Database Choice

```bash
MongoDB was chosen for this project due to its felexibility and ease of use with JSON-like documents, which aligns well with the structure of contact information.
```
