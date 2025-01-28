import * as express from 'express';

const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: '13.201.6.102', // Typically 'localhost' or '127.0.0.1'
  database: 'qairis30', // Replace with your database name
  password: 'PJkT@2o23095@13', // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

export default pool;