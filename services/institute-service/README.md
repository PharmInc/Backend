# Institution Service

A dedicated service for managing institutions, built with Hono and OpenAPI. Supports search, retrieval, and complete CRUD operations with filtering and pagination capabilities.

## API Endpoints

### Public Routes

- `GET /institution/{id}` – Get institution by ID
- `GET /institutions` – List all institutions with pagination
- `GET /institutions/search` – Search institutions with advanced filters

### Private Routes (Authentication Required)

- `POST /institution` – Create a new institution
- `GET /institution` – Get current user's associated institution
- `PUT /institution` – Update institution details
- `DELETE /institution` – Delete institution

### Response Codes

- `200` – Success (institution retrieved/updated)
- `201` – Institution created successfully
- `204` – Institution deleted successfully
- `400` – Bad request (validation failed)
- `404` – Institution or auth not found
- `500` – Internal server error

## Database Structure

```sql
-- Institution table structure
institution (
  id                UUID PRIMARY KEY,
  name              VARCHAR NOT NULL,
  location          VARCHAR NOT NULL,
  type              VARCHAR NOT NULL,
  email             VARCHAR NOT NULL,
  verified          BOOLEAN DEFAULT FALSE,
  employees_count   VARCHAR,
  area_of_expertise VARCHAR,
  profile_picture   VARCHAR,
  banner_picture    VARCHAR,
  contact_email     VARCHAR,
  contact_number    VARCHAR,
  bio               VARCHAR,
  about             VARCHAR,
  followers         INTEGER DEFAULT 0,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW()
)
```

## Request/Response Schema

### Create Institution Request

```json
{
  "name": "Stanford University",
  "location": "California, USA",
  "type": "University",
  "email": "contact@stanford.edu",
  "employees_count": "2000+",
  "area_of_expertise": "Technology, Medicine, Engineering",
  "profile_picture": "https://example.com/logo.png",
  "banner_picture": "https://example.com/banner.jpg",
  "contact_email": "admin@stanford.edu",
  "contact_number": "+1-234-567-8900",
  "bio": "Top-tier research institution",
  "about": "Stanford is a place of discovery, innovation, and excellence."
}
```

### Institution Response

```json
{
  "id": "f17e1c68-58b2-456f-94e9-123456789abc",
  "name": "Stanford University",
  "location": "California, USA",
  "type": "University",
  "email": "contact@stanford.edu",
  "verified": true,
  "employees_count": "2000+",
  "area_of_expertise": "Technology, Medicine, Engineering",
  "profile_picture": "https://example.com/logo.png",
  "banner_picture": "https://example.com/banner.jpg",
  "contact_email": "admin@stanford.edu",
  "contact_number": "+1-234-567-8900",
  "bio": "Top-tier research institution",
  "about": "Stanford is a place of discovery, innovation, and excellence.",
  "followers": 984,
  "created_at": "2024-01-10T09:15:00Z",
  "updated_at": "2024-02-02T12:00:00Z"
}
```

### Paginated Response

```json
{
  "data": [
    {
      "id": "f17e1c68-58b2-456f-94e9-123456789abc",
      "name": "Stanford University"
    }
  ],
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
    "total": 50,
    "totalPages": 5,
    "hasNext": true,
    "hasPrevious": false
  },
  "filters": {
    "query": "medical",
    "name": "Stanford",
    "type": "University",
    "location": "California",
    "email": "contact@stanford.edu"
  }
}
```
