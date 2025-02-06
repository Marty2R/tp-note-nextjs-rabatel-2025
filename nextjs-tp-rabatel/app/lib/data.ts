import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchLatestUsers() {
  try {
    const data = await sql`
      SELECT id, name, email, role
      FROM users
      ORDER BY createdAt DESC
      LIMIT 5`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest users.');
  }
}

export async function fetchLatestTeacher() {
  try {
    const data = await sql`
      SELECT id, name, email, role
      FROM users
      WHERE role = 'teacher'`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest users.');
  }
}

export async function fetchLatestCourses() {
  try {
    const data = await sql`
      SELECT *
      FROM courses
      `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest users.');
  }
}
