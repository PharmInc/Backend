const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Initialize database table
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone_number TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        profession TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    process.exit(1);
  }
}

// Add person to waitlist
async function addToWaitlist(name, phoneNumber, email, profession) {
  try {
    const result = await pool.query(
      'INSERT INTO waitlist (name, phone_number, email, profession) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, phoneNumber, email, profession]
    );
    return result.rows[0];
  } catch (error) {
    if (error.code === '23505') { // Unique constraint violation
      throw new Error('Email already exists in waitlist');
    }
    throw error;
  }
}

module.exports = {
  initDB,
  addToWaitlist
};