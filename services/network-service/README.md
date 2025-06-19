# Network Service

A comprehensive social networking service built with Hono and OpenAPI for managing user connections and follow relationships.

## API Endpoints

### Follow Routes

#### Private Routes (Authentication Required)

- `POST /follow` - Create a follow relationship
- `DELETE /follow` - Remove a follow relationship

#### Public Routes

- `GET /follow/{userId}/followers` - Get all followers for a user
- `GET /follow/{userId}/followers/count` - Get follower count for a user

### Connection Routes

#### Private Routes (Authentication Required)

- `POST /connection` - Send a connection request
- `DELETE /connection` - Remove/cancel a connection
- `PUT /connection/accept` - Accept a pending connection request

#### Public Routes

- `GET /connection/{userId}/connections` - Get all accepted connections for a user
- `GET /connection/{userId}/connections/count` - Get connection count for a user

### Response Codes

- `200` - Success (data retrieved/updated)
- `201` - Resource created successfully
- `204` - Resource deleted successfully
- `400` - Bad request (validation failed)
- `401` - Unauthorized (authentication required)
- `404` - Resource not found
- `409` - Conflict (relationship already exists)
- `500` - Internal server error

## Database Structure

```sql
-- Follow table structure
follow (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user1Id     UUID NOT NULL REFERENCES user(id),  -- Follower
  user2Id     UUID NOT NULL REFERENCES user(id),  -- Following
  created_at  TIMESTAMP DEFAULT NOW(),
  UNIQUE(user1Id, user2Id)
)

-- Connection table structure
connection (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user1Id     UUID NOT NULL REFERENCES user(id),  -- Requester
  user2Id     UUID NOT NULL REFERENCES user(id),  -- Recipient
  accepted    BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMP DEFAULT NOW(),
  UNIQUE(user1Id, user2Id)
)
```

## Request/Response Schema

### Follow Requests

#### Create/Delete Follow Request

```json
{
  "user2Id": "123e4567-e89b-12d3-a456-426614174000"
}
```

#### Follow Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "user1Id": "456e7890-e12b-34c5-a678-901234567890",
  "user2Id": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### Followers Count Response

```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "followersCount": 150
}
```

### Connection Requests

#### Create/Delete Connection Request

```json
{
  "user2Id": "123e4567-e89b-12d3-a456-426614174000"
}
```

#### Accept Connection Request

```json
{
  "user1Id": "456e7890-e12b-34c5-a678-901234567890"
}
```

#### Connection Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "user1Id": "456e7890-e12b-34c5-a678-901234567890",
  "user2Id": "789e0123-e45f-67g8-a901-234567890123",
  "accepted": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T11:00:00Z"
}
```

#### Connections Count Response

```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "connectionsCount": 89
}
```

## Project Structure

```
network-service/
├── .github/
├── .husky/
├── src/
│   ├── lib/              # Database & logging clients
│   ├── routes/
│   │   ├── follow/       # Follow route definitions & handlers
│   │   ├── connection/   # Connection route definitions & handlers
│   │   └── types.ts      # Zod schemas
│   ├── utils/            # Utility functions
│   └── index.ts          # Main entrypoint
├── .env.sample
├── docker-compose.yaml
├── Dockerfile
├── package.json
└── README.md
```

## Environment Variables

Copy `.env.sample` to `.env` and configure:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT token verification
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
