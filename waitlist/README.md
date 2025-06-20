# Waitlist API

A simple, lightweight waitlist API built with vanilla Node.js and PostgreSQL.

## Quick Start

### Using the API

**Endpoint:** `POST https://waitlist.pharminc.in/waitlist`

**Add someone to the waitlist:**
```bash
curl -X POST https://waitlist.pharminc.in/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phoneNumber": "+1234567890",
    "email": "john@example.com",
    "profession": "Software Engineer"
  }'
```

**Success Response:**
```json
{
  "message": "Successfully added to waitlist",
  "data": {
    "id": 1,
    "name": "John Doe",
    "phoneNumber": "+1234567890",
    "email": "john@example.com",
    "profession": "Software Engineer",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**If email already exists:**
```json
{
  "error": "Email already exists in waitlist"
}
```

---

## Features

- **Single endpoint**: `POST /waitlist` for adding users to waitlist
- **Duplicate prevention**: Prevents duplicate emails
- **Email validation**: Validates email format
- **Auto table creation**: Creates database table on startup
- **Health check**: `GET /health` endpoint
- **CORS enabled**: Ready for frontend integration

## API Endpoints

### Add to Waitlist
- **URL**: `POST /waitlist`
- **Content-Type**: `application/json`

#### Request Body
```json
{
  "name": "John Doe",
  "phoneNumber": "+1234567890",
  "email": "john@example.com",
  "profession": "Software Engineer"
}
```

#### Success Response (201)
```json
{
  "message": "Successfully added to waitlist",
  "data": {
    "id": 1,
    "name": "John Doe",
    "phoneNumber": "+1234567890",
    "email": "john@example.com",
    "profession": "Software Engineer",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Error Responses

**400 - Missing Fields**
```json
{
  "error": "Missing required fields: name, phoneNumber, email, profession"
}
```

**400 - Invalid Email**
```json
{
  "error": "Invalid email format"
}
```

**409 - Duplicate Email**
```json
{
  "error": "Email already exists in waitlist"
}
```

### Health Check
- **URL**: `GET /health`
- **Response**: 
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Frontend Integration

### JavaScript (Fetch)
```javascript
async function addToWaitlist(userData) {
  try {
    const response = await fetch('https://waitlist.pharminc.in/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('Added to waitlist:', result.data);
      return { success: true, data: result.data };
    } else {
      console.error('Error:', result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, error: 'Network error' };
  }
}

// Usage
const result = await addToWaitlist({
  name: 'Jane Smith',
  phoneNumber: '+1987654321',
  email: 'jane@example.com',
  profession: 'Product Manager'
});
```

### HTML Form Example
```html
<form id="waitlistForm">
  <input type="text" name="name" placeholder="Full Name" required>
  <input type="tel" name="phoneNumber" placeholder="Phone Number" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="text" name="profession" placeholder="Profession" required>
  <button type="submit">Join Waitlist</button>
</form>

<script>
document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData);
  
  const result = await addToWaitlist(userData);
  
  if (result.success) {
    alert('Successfully added to waitlist!');
    e.target.reset();
  } else {
    alert('Error: ' + result.error);
  }
});
</script>
```

## Setup

### Environment Variables

Create a `.env` file:
```bash
DATABASE_URL=postgresql://username:password@host:port/database
PORT=3000
NODE_ENV=production
```

### Running with Docker

1. **Build and run:**
```bash
docker-compose up -d
```

2. **With external database:**
```bash
# Edit docker-compose.yml to remove postgres service
DATABASE_URL=your_external_db_url docker-compose up -d
```

### Running Locally

1. **Install dependencies:**
```bash
npm install
```

2. **Start server:**
```bash
npm start
```

## Database Schema

The API automatically creates this table:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  profession TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## File Structure

```
.
├── index.js           # Main server file
├── database.js        # Database connection and queries
├── package.json       # Dependencies and scripts
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose setup
├── .env.example       # Environment variables example
└── README.md          # This file
```

## Production Deployment

The API is production-ready with:
- Health checks for monitoring
- Connection pooling for PostgreSQL
- Error handling and logging
- CORS support
- Input validation
- Retry logic for database connections

## License

MIT
