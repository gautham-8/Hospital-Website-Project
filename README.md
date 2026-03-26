# Hospital Website

A full-stack hospital management web app built with React.js, Node.js, Express.js and MongoDB.

## Features

**Patients** can register, log in, book appointments across specializations (General, Pediatric, Orthopedic, Cardiology) and view or cancel their own appointments.

**Staff** can view all appointments across patients.

**Admins** can view all appointments, manage users and register new staff accounts.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, React Router, Redux Toolkit, Bootstrap 5, React Hook Form |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | JWT, bcrypt password hashing, Google OAuth 2.0 (Passport.js) |

## Notable implementation details

- **Role-based access control** - three roles (patient, staff, admin) with protected routes on both the frontend (route guards) and backend (Express middleware)
- **Secure auth** - JWTs stored in `httpOnly` + `SameSite: strict` cookies so tokens are never accessible to JavaScript and passwords hashed with bcrypt
- **Google OAuth 2.0** - sign in with Google via Passport.js; new users are auto-registered and existing accounts are linked by email
- **Rate limiting** - login endpoint throttled to 10 attempts per 15 minutes to prevent brute-force attacks
- **Single binary deployment** - Express serves the React build as static files, so the same Node process handles both the API and the frontend

---

# Running the application locally 🚀



### Set up environment variables

Copy the example env file and fill in your credentials:

```shell
cp .env.example .env
```

Then open `.env` and set the following values:

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string - get this from [MongoDB Atlas](https://cloud.mongodb.com) after creating a free M0 cluster. Format: `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority` |
| `JWT_SECRET` | A long random secret used to sign JWTs. Generate one with: `openssl rand -hex 32` |
| `GOOGLE_CLIENT_ID` | OAuth 2.0 client ID from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 client secret from the same credentials page |
| `GOOGLE_CALLBACK_URL` | OAuth redirect URI (defaults to `http://localhost:4000/api/auth/google/callback`) |
| `PORT` | Port for the Express server (defaults to `4000`) |

### Install the dependencies
```shell
npm i
```

### Start the frontend
```shell
npm run dev
```

### Start the backend
```shell
npm run server
```
