# User Service

A comprehensive user management service built with Hono and OpenAPI for user profiles, search, and CRUD operations.

## API Endpoints

### Public Routes

- `GET /user/{id}` - Get user profile by ID
- `GET /users` - Get all users with pagination
- `GET /users/search` - Search users with filters (name, role, location)

### Private Routes (Authentication Required)

- `POST /user` - Create new user profile
- `GET /user` - Get current user profile
- `PUT /user` - Update user profile
- `DELETE /user` - Delete user account

### Response Codes

- `200` - Success (user retrieved/updated)
- `201` - User created successfully
- `204` - User deleted successfully
- `400` - Bad request (validation failed)
- `404` - User not found
- `500` - Internal server error

## Database Structure

```sql
-- User table structure
user (
  id              UUID PRIMARY KEY,
  name            VARCHAR NOT NULL,
  location        VARCHAR NOT NULL,
  role            VARCHAR NOT NULL,
  email           VARCHAR NOT NULL,
  verified        BOOLEAN DEFAULT FALSE,
  profile_picture VARCHAR,
  banner_picture  VARCHAR,
  bio             VARCHAR,
  about           VARCHAR,
  followers       INTEGER DEFAULT 0,
  connections     INTEGER DEFAULT 0,
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW()
)
```

## Request/Response Schema

### Create User Request

```json
{
  "name": "John Doe",
  "location": "New York, NY",
  "role": "Software Engineer"
}
```

### User Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "location": "New York, NY",
  "role": "Software Engineer",
  "email": "john@example.com",
  "verified": true,
  "profile_picture": "https://example.com/avatar.jpg",
  "bio": "Full-stack developer",
  "followers": 150,
  "connections": 89,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-20T14:45:00Z"
}
```

### Paginated Response

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15,
    "hasNext": true,
    "hasPrevious": false
  }
}
```

## Project Structure

```
user-service/
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
- `JWT_SECRET` - Secret key for JWT verification
