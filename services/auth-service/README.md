# Auth Service

A minimal authentication service built with Hono and OpenAPI for user registration and login functionality.

## API Endpoints

### Authentication
- `POST /login` - User login with email/password, returns JWT token
- `POST /register` - User registration with email/password/type

### Response Codes
- `200` - Login successful (returns JWT token)
- `201` - User registered successfully  
- `403` - Invalid password
- `404` - User not found
- `409` - User already exists
- `500` - JWT secret not set

## Database Structure

```sql
-- Users table structure
users (
  id          UUID PRIMARY KEY,
  email       VARCHAR UNIQUE NOT NULL,
  password    VARCHAR NOT NULL,
  type        VARCHAR DEFAULT 'user',
  created_at  TIMESTAMP DEFAULT NOW(),
  last_login  TIMESTAMP
)
```

## Request/Response Schema

### Auth Request
```json
{
  "email": "example@example.com",
  "password": "password",
  "type": "user"
}
```

### Login Response
```json
{
  "token": "eyJSb2xlIjoiQWRtaW4i..."
}
```

## Project Structure

```
auth-service/
├── .github/
├── .husky/
├── src/
│   ├── lib/          # Database & logging clients
│   ├── routes/       # API route definitions
│   ├── utils/        # Utility functions
│   └── index.ts      # Main entrypoint
├── .env.sample
├── docker-compose.yaml
├── Dockerfile
├── package.json
└── README.md
```

## Environment Variables

Copy `.env.sample` to `.env` and configure:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT signing