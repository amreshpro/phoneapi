Here is a sample **README.md** file for your project:

```markdown
# Spam Marker API

A simple API built with Express.js, TypeScript, and Mongoose to mark phone numbers as spam. This project demonstrates the implementation of authentication and basic CRUD operations with MongoDB.

## Features

- Mark phone numbers as spam.
- Prevent duplicate spam entries for the same number.
- JWT-based authentication for secure access.
- Handles various error cases gracefully.

---

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- npm or yarn

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amreshpro/phoneapi.git
   cd spam-marker-api
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbName
   JWT_SECRET=your_jwt_secret
   ```

---

## Usage

1. Start the server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. The API will run at `http://localhost:5000`.

---

## Endpoints

### 1. **Mark a Phone Number as Spam**
   - **URL**: `/api/markSpam`
   - **Method**: `POST`
   - **Headers**:
     - `Authorization: Bearer <JWT_TOKEN>`
     - `Content-Type: application/json`
   - **Body**:
     ```json
     {
       "phone": "1234567890"
     }
     ```
   - **Responses**:
     - **201 Created**:
       ```json
       {
         "message": "Number marked as spam",
         "spam": {
           "_id": "123abc",
           "phone": "1234567890",
           "reportedBy": "user123",
           "createdAt": "2025-01-01T12:00:00Z",
           "updatedAt": "2025-01-01T12:00:00Z"
         }
       }
       ```
     - **400 Bad Request**:
       ```json
       {
         "message": "This number is already marked as spam"
       }
       ```
     - **401 Unauthorized**:
       ```json
       {
         "message": "No token, authorization denied"
       }
       ```

---


## Project Structure

```plaintext
.
├── src
│   ├── controllers
│   │   └── contactController.ts  # Handles the business logic
│   ├── middlewares
│   │   └── authMiddleware.ts     # JWT authentication middleware
│   ├── models
│   │   └── Spam.ts               # Mongoose model for spam entries
│   ├── routes
│   │   └── contactRoutes.ts      # API routes
│   ├── app.ts                    # Express app setup
│   └── server.ts                 # Entry point for the server
├── .env                          # Environment variables
├── package.json                  # Project metadata and dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Language**: TypeScript
- **Authentication**: JSON Web Tokens (JWT)

---

## Contact

- **Author**: Amresh Maurya
- **GitHub**: [amreshpro](https://github.com/amreshpro)
- **Email**: amresh.terminal@gmail.com
```

You can customize this further with your specific details or requirements. Let me know if you need any changes!