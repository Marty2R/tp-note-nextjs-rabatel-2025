'use server';
 
import { signIn } from '@/auth';
import { z } from 'zod';
import postgres from 'postgres'; 
import { AddCourse } from './schemas'; 

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
export async function addCourse(formData: FormData): Promise<void> {
  const validatedFields = AddCourse.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    instrument: formData.get('instrument'),
    teacherId: formData.get('teacherId'),
    level: formData.get('level'),
    schedule: formData.get('schedule'),
    capacity: formData.get('capacity'),
  });

  // Check if validation failed
  if (!validatedFields.success) {
    // Handle validation errors
    throw new Error('Validation failed'); // Or return an error response
  }

  // Prepare data for insertion into the database
  const { title, description, instrument, teacherId, level, schedule, capacity } = validatedFields.data;

  // Ensure all values are defined or provide default values
  const validatedTitle = title || ''; // Provide a default value if necessary
  const validatedDescription = description || ''; // Provide a default value if necessary
  const validatedInstrument = instrument || ''; // Provide a default value if necessary
  const validatedTeacherId = teacherId; // Assuming teacherId is required
  const validatedLevel = level || ''; // Provide a default value if necessary
  const validatedSchedule = schedule || ''; // Provide a default value if necessary
  const validatedCapacity = capacity; // Assuming capacity is required

  // Insert data into the database
  await sql`
      INSERT INTO courses (title, description, instrument, teacher_id, level, schedule, capacity)
      VALUES (${validatedTitle}, ${validatedDescription}, ${validatedInstrument}, ${validatedTeacherId}, ${validatedLevel}, ${validatedSchedule}, ${validatedCapacity})
    `;
}

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  await signIn('credentials', formData);
}

export async function deleteCourse(idCourse: string) {
  
  if (!idCourse) return {success: false}
  const res = await sql`
      DELETE FROM courses WHERE id=${idCourse}
    `;

    if (!res) return {success: false}

    return {success: true}

}