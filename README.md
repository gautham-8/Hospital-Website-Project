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
| Auth | JWT, bcrypt password hashing |

## Notable implementation details

- **Role-based access control** - three roles (patient, staff, admin) with protected routes on both the frontend (route guards) and backend (Express middleware)
- **Secure auth** - JWTs stored in `httpOnly` + `SameSite: strict` cookies so tokens are never accessible to JavaScript and passwords hashed with bcrypt
- **Rate limiting** - login endpoint throttled to 10 attempts per 15 minutes to prevent brute-force attacks
- **Single binary deployment** - Express serves the React build as static files, so the same Node process handles both the API and the frontend

---

# Running the application locally 🚀



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
