# Content Service

A comprehensive content management service for posts, comments, and job applications, built with Hono and OpenAPI. Supports hierarchical commenting, engagement tracking, trending algorithms, job application management with role-based access, and advanced search capabilities with full CRUD operations.

## API Endpoints

### Posts - Private Routes (Authentication Required)

- `POST /post` – Create a new post
- `PUT /post/{id}` – Update your post
- `DELETE /post/{id}` – Delete your post
- `GET /posts/me` – Get your own posts with pagination

### Posts - Public Routes

- `GET /post/{id}` – Get post by ID
- `GET /post` – List all posts with pagination and sorting
- `GET /post/user/{userId}` – Get all posts by specific user
- `GET /post/search` – Search posts with advanced filters
- `GET /post/trending` – Get trending posts by timeframe
- `GET /post/popular` – Get popular posts by engagement metrics

### Comments - Private Routes (Authentication Required)

- `POST /comment` – Create a new comment on a post
- `PUT /comment/{id}` – Update your comment
- `DELETE /comment/{id}` – Delete your comment
- `POST /comment/{parentId}/reply` – Reply to a comment
- `GET /comments/me` – Get your own comments
- `GET /comments/me/post/{postId}` – Get your comments on specific post

### Comments - Public Routes

- `GET /comment/{id}` – Get comment by ID
- `GET /comment` – List all comments with pagination
- `GET /comment/post/{postId}` – Get all comments on a post
- `GET /comment/user/{userId}` – Get all comments by specific user
- `GET /comment/{commentId}/replies` – Get direct replies to a comment
- `GET /comment/{commentId}/thread` – Get complete comment thread with nesting
- `GET /comment/search` – Search comments with advanced filters

### Applications - Private Routes (Authentication Required)

- `POST /application` – Create a new job application (users only)
- `PUT /application/{id}` – Update application (role-based permissions)
- `DELETE /application/{id}` – Delete your application (users only)
- `GET /application/{id}` – Get application by ID (role-based access)
- `GET /application/my` – Get applications (users: own applications, institutes: all applications)
- `GET /application/job/{jobId}` – Get applications for a job (institutes only)

### Response Codes

- `200` – Success (retrieved/updated)
- `201` – Created successfully
- `204` – Deleted successfully
- `400` – Bad request (validation failed)
- `401` – Unauthorized
- `403` – Forbidden (not your content/insufficient permissions)
- `404` – Content not found
- `409` – Conflict (duplicate application)
- `500` – Internal server error

## Database Structure

```sql
-- Posts table
post (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMP DEFAULT NOW(),
  updated_at     TIMESTAMP DEFAULT NOW(),
  content        TEXT NOT NULL,
  reactions      INTEGER DEFAULT 0,
  shares         INTEGER DEFAULT 0,
  saves          INTEGER DEFAULT 0,
  userId         UUID NOT NULL,
  title          TEXT NOT NULL,
  attachmentId   TEXT
);

-- Comments table with hierarchical structure
comment (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  content    TEXT NOT NULL,
  reactions  INTEGER DEFAULT 0,
  shares     INTEGER DEFAULT 0,
  saves      INTEGER DEFAULT 0,
  userId     UUID NOT NULL,
  postId     UUID NOT NULL REFERENCES post(id),
  parentId   UUID REFERENCES comment(id) -- NULL for top-level comments
);

-- Job applications table
application (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW(),
  jobId           UUID NOT NULL,
  userId          UUID NOT NULL,
  cover_letter    TEXT,
  resume_url      TEXT,
  portfolio_url   TEXT,
  status          TEXT DEFAULT 'pending',
  notes           TEXT,
  additional_info JSONB,
  applied_at      TIMESTAMP DEFAULT NOW(),
  reviewed_at     TIMESTAMP,
  responded_at    TIMESTAMP,
  UNIQUE(userId, jobId) -- Prevent duplicate applications
);
```

## Request/Response Schema

### Create Post Request

```json
{
  "title": "Introduction to Machine Learning",
  "content": "Machine learning is transforming how we approach data analysis...",
  "attachmentId": "optional-attachment-uuid"
}
```

### Post Response

```json
{
  "id": "f17e1c68-58b2-456f-94e9-123456789abc",
  "created_at": "2024-01-10T09:15:00Z",
  "updated_at": "2024-01-10T09:15:00Z",
  "content": "Machine learning is transforming how we approach data analysis...",
  "reactions": 42,
  "shares": 12,
  "saves": 8,
  "userId": "user-uuid-here",
  "title": "Introduction to Machine Learning",
  "attachmentId": "attachment-uuid"
}
```

### Create Comment Request

```json
{
  "content": "Great insights! Thanks for sharing.",
  "postId": "post-uuid-here",
  "parentId": "parent-comment-uuid-for-replies" // Optional
}
```

### Comment Response

```json
{
  "id": "comment-uuid-here",
  "created_at": "2024-01-10T10:30:00Z",
  "updated_at": "2024-01-10T10:30:00Z",
  "content": "Great insights! Thanks for sharing.",
  "reactions": 5,
  "shares": 1,
  "saves": 0,
  "userId": "user-uuid-here",
  "postId": "post-uuid-here",
  "parentId": "parent-comment-uuid" // NULL for top-level comments
}
```

### Create Application Request

```json
{
  "jobId": "job-uuid-here",
  "cover_letter": "I am excited to apply for this position because...",
  "resume_url": "https://example.com/resume.pdf",
  "portfolio_url": "https://portfolio.example.com",
  "additional_info": {
    "expectedSalary": "80000",
    "availableStartDate": "2024-03-01"
  }
}
```

### Application Response

```json
{
  "id": "application-uuid-here",
  "created_at": "2024-01-10T14:30:00Z",
  "updated_at": "2024-01-10T14:30:00Z",
  "jobId": "job-uuid-here",
  "userId": "user-uuid-here",
  "cover_letter": "I am excited to apply for this position because...",
  "resume_url": "https://example.com/resume.pdf",
  "portfolio_url": "https://portfolio.example.com",
  "status": "pending",
  "notes": null,
  "additional_info": {
    "expectedSalary": "80000",
    "availableStartDate": "2024-03-01"
  },
  "applied_at": "2024-01-10T14:30:00Z",
  "reviewed_at": null,
  "responded_at": null
}
```

### Paginated Response

```json
{
  "data": [
    {
      "id": "f17e1c68-58b2-456f-94e9-123456789abc",
      "title": "Introduction to Machine Learning",
      "content": "Machine learning is transforming...",
      "reactions": 42,
      "created_at": "2024-01-10T09:15:00Z"
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
    "query": "machine learning",
    "userId": "user-uuid",
    "minReactions": 10,
    "dateFrom": "2024-01-01T00:00:00Z",
    "hasAttachment": true
  }
}
```

### Trending Posts Response

```json
{
  "data": [
    {
      "id": "post-uuid",
      "title": "AI Breakthroughs in 2024",
      "content": "This year has seen remarkable...",
      "reactions": 234,
      "shares": 89,
      "saves": 156,
      "trendingScore": 45.7,
      "created_at": "2024-01-08T14:20:00Z"
    }
  ],
  "pagination": {...},
  "timeframe": "week"
}
```

### Comment Thread Response

```json
{
  "comment": {
    "id": "root-comment-uuid",
    "content": "This is the main comment",
    "reactions": 15,
    "created_at": "2024-01-10T10:00:00Z"
  },
  "replies": [
    {
      "id": "reply-1-uuid",
      "content": "Great point!",
      "reactions": 3,
      "created_at": "2024-01-10T10:15:00Z",
      "replies": [
        {
          "id": "nested-reply-uuid",
          "content": "I agree completely",
          "reactions": 1,
          "created_at": "2024-01-10T10:30:00Z"
        }
      ]
    }
  ],
  "totalReplies": 5
}
```
