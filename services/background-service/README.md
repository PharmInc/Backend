# Background Service

A comprehensive background management service built with Hono and OpenAPI for managing user education and experience records.

## API Endpoints

### Education Routes

#### Private Routes (Authentication Required)
- `POST /education` - Create new education record
- `PUT /education/{id}` - Update education record
- `DELETE /education/{id}` - Delete education record

#### Public Routes
- `GET /education/user/{userId}` - Get all education records for a user
- `GET /education/{id}` - Get specific education record by ID

### Experience Routes

#### Private Routes (Authentication Required)
- `POST /experience` - Create new experience record
- `PUT /experience/{id}` - Update experience record
- `DELETE /experience/{id}` - Delete experience record

#### Public Routes
- `GET /experience/user/{userId}` - Get all experience records for a user
- `GET /experience/{id}` - Get specific experience record by ID

### Response Codes

- `200` - Success (record retrieved/updated)
- `201` - Record created successfully
- `204` - Record deleted successfully
- `400` - Bad request (validation failed)
- `404` - Record/User/Institution not found
- `500` - Internal server error

## Database Structure

```sql
-- Education table structure
education (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMP DEFAULT NOW(),
  updated_at     TIMESTAMP DEFAULT NOW(),
  title          TEXT NOT NULL,
  description    TEXT NOT NULL,
  start_date     TIMESTAMP NOT NULL,
  end_date       TIMESTAMP NULL,
  userId         UUID NOT NULL REFERENCES user(id),
  institutionId  UUID NOT NULL REFERENCES institute(id)
)

-- Experience table structure
experience (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMP DEFAULT NOW(),
  updated_at     TIMESTAMP DEFAULT NOW(),
  title          TEXT NOT NULL,
  description    TEXT NOT NULL,
  start_date     TIMESTAMP NOT NULL,
  end_date       TIMESTAMP NULL,
  userId         UUID NOT NULL REFERENCES user(id),
  institutionId  UUID NOT NULL REFERENCES institute(id)
)
```

## Request/Response Schema

### Education Requests

#### Create Education Request
```json
{
  "title": "Bachelor of Science in Computer Science",
  "description": "Specialized in software engineering and artificial intelligence",
  "start_date": "2020-09-01T00:00:00Z",
  "end_date": "2024-06-15T00:00:00Z",
  "institutionId": "123e4567-e89b-12d3-a456-426614174000"
}
```

#### Education Response
```json
{
  "id": "456e7890-e12b-34c5-a678-901234567890",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-20T14:45:00Z",
  "title": "Bachelor of Science in Computer Science",
  "description": "Specialized in software engineering and artificial intelligence",
  "start_date": "2020-09-01T00:00:00Z",
  "end_date": "2024-06-15T00:00:00Z",
  "userId": "789e0123-e45f-67g8-a901-234567890123",
  "institutionId": "123e4567-e89b-12d3-a456-426614174000"
}
```

### Experience Requests

#### Create Experience Request
```json
{
  "title": "Software Engineer Intern",
  "description": "Developed web applications using React and Node.js",
  "start_date": "2023-06-01T00:00:00Z",
  "end_date": "2023-08-31T00:00:00Z",
  "institutionId": "987e6543-e21d-43c5-a678-901234567890"
}
```

#### Experience Response
```json
{
  "id": "321e0987-e65f-43g2-a109-876543210987",
  "created_at": "2024-01-10T08:15:00Z",
  "updated_at": "2024-01-25T16:30:00Z",
  "title": "Software Engineer Intern",
  "description": "Developed web applications using React and Node.js",
  "start_date": "2023-06-01T00:00:00Z",
  "end_date": "2023-08-31T00:00:00Z",
  "userId": "789e0123-e45f-67g8-a901-234567890123",
  "institutionId": "987e6543-e21d-43c5-a678-901234567890"
}
```

## Project Structure

```
background-service/
├── .github/
├── .husky/
├── src/
│   ├── lib/              # Database & logging clients
│   ├── routes/
│   │   ├── education/    # Education route definitions & handlers
│   │   ├── experience/   # Experience route definitions & handlers
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

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment**
   ```bash
   cp .env.sample .env
   # Edit .env with your configuration
   ```

3. **Run database migrations**
   ```bash
   npm run migrate
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **View API documentation**
   Navigate to `http://localhost:3000/doc` for OpenAPI documentation

## API Usage Examples

### Create Education Record
```bash
curl -X POST http://localhost:3000/education \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Master of Science in Data Science",
    "description": "Advanced studies in machine learning and statistics",
    "start_date": "2024-09-01T00:00:00Z",
    "end_date": "2026-06-15T00:00:00Z",
    "institutionId": "123e4567-e89b-12d3-a456-426614174000"
  }'
```

### Create Experience Record
```bash
curl -X POST http://localhost:3000/experience \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Full Stack Developer",
    "description": "Building modern web applications with React and Node.js",
    "start_date": "2024-01-15T00:00:00Z",
    "end_date": null,
    "institutionId": "987e6543-e21d-43c5-a678-901234567890"
  }'
```

### Get User's Education
```bash
curl -X GET http://localhost:3000/education/user/789e0123-e45f-67g8-a901-234567890123
```

### Get User's Experience
```bash
curl -X GET http://localhost:3000/experience/user/789e0123-e45f-67g8-a901-234567890123
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details