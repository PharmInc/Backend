# Job Service

A comprehensive job management service built with Hono and OpenAPI for job postings, search, and CRUD operations by educational institutions.

## API Endpoints

### Public Routes

- `GET /job/{id}` - Get job details by ID
- `GET /job` - Get all jobs with pagination and optional filtering
- `GET /job/search` - Advanced job search with multiple filters
- `GET /job/institute/{institute_id}` - Get all jobs for a specific institute

### Private Routes (Authentication Required)

- `POST /job` - Create new job posting (Institute only)
- `PUT /job/{id}` - Update job posting (Institute only)
- `DELETE /job/{id}` - Delete job posting (Institute only)

### Response Codes

- `200` - Success (job retrieved/updated)
- `201` - Job created successfully
- `204` - Job deleted successfully
- `400` - Bad request (validation failed)
- `404` - Job/Institute not found
- `500` - Internal server error

## Database Structure

```sql
-- Job table structure
job (
  id               UUID PRIMARY KEY,
  institute_id     UUID NOT NULL REFERENCES institution(id),
  title            VARCHAR NOT NULL,
  description      TEXT NOT NULL,
  pay_range        VARCHAR NOT NULL,
  benefits         TEXT NOT NULL,
  category         VARCHAR NOT NULL,
  location         VARCHAR NOT NULL,
  role             VARCHAR NOT NULL,
  work_location    VARCHAR NOT NULL, -- remote/hybrid/onsite
  experience_level VARCHAR NOT NULL, -- entry/mid/senior/expert
  active           BOOLEAN DEFAULT TRUE,
  created_at       TIMESTAMP DEFAULT NOW(),
  updated_at       TIMESTAMP DEFAULT NOW()
)
```

## Request/Response Schema

### Create Job Request

```json
{
  "title": "Senior Software Engineer",
  "description": "We are looking for an experienced software engineer...",
  "pay_range": "$80,000 - $120,000",
  "benefits": "Health insurance, 401k, flexible hours",
  "category": "Engineering",
  "location": "San Francisco, CA",
  "role": "Full-time",
  "work_location": "hybrid",
  "experience_level": "senior"
}
```

### Job Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "institute_id": "456e7890-e89b-12d3-a456-426614174001",
  "title": "Senior Software Engineer",
  "description": "We are looking for an experienced software engineer...",
  "pay_range": "$80,000 - $120,000",
  "benefits": "Health insurance, 401k, flexible hours",
  "category": "Engineering",
  "location": "San Francisco, CA",
  "role": "Full-time",
  "work_location": "hybrid",
  "experience_level": "senior",
  "active": true,
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

### Search Response with Filters

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3,
    "hasNext": true,
    "hasPrevious": false
  },
  "filters": {
    "category": "Engineering",
    "location": "San Francisco",
    "work_location": "remote",
    "experience_level": "senior",
    "active": "true"
  }
}
```

## Search Parameters

### Available Filters (all optional)

- `title` - Search in job titles
- `description` - Search in job descriptions
- `pay_range` - Filter by salary range
- `benefits` - Search in benefits
- `category` - Filter by job category
- `location` - Filter by job location
- `role` - Filter by employment type
- `work_location` - Filter by work arrangement (remote/hybrid/onsite)
- `experience_level` - Filter by required experience
- `institute_id` - Filter jobs from specific institute
- `active` - Filter by active status (true/false)

### Pagination & Sorting

- `page` - Page number (default: 1)
- `limit` - Items per page (max: 100, default: 10)
- `fields` - Comma-separated list of fields to return
- `sortBy` - Field to sort by (default: created_at)
- `sortOrder` - Sort direction: asc/desc (default: desc)

### Example Search Queries

```
GET /job/search?category=engineering&location=delhi&experience_level=senior
GET /job/search?work_location=remote&pay_range=100000&active=true
GET /job/search?title=developer&institute_id=123&page=2&limit=20
GET /job/search?benefits=health&sortBy=created_at&sortOrder=asc
```

## Project Structure

```
job-service/
├── .github/
├── .husky/
├── src/
│   ├── lib/          # Database & logging clients
│   ├── routes/       # API route definitions
│   │   ├── job/      # Job-related routes
│   │   │   ├── route.ts        # OpenAPI specifications
│   │   │   ├── private.ts      # Private job routes (CRUD)
│   │   │   └── public.ts       # Public job routes (search)
│   │   └── types.ts  # Zod schemas
│   ├── utils/        # Utility functions
│   └── index.ts      # Main entrypoint
├── .env.sample
├── docker-compose.yaml
├── Dockerfile
├── package.json
└── README.md
```

## Authentication

### Private Routes

- Require Bearer token authentication
- JWT payload must contain `instituteId` for authorization
- Institutes can only manage their own job postings

### Public Routes

- No authentication required
- Anyone can search and view job postings

## Environment Variables

Copy `.env.sample` to `.env` and configure:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT verification
- `PORT` - Service port (default: 3000)
