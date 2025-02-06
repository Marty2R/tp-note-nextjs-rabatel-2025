'use server';
 
import { signIn } from '@/auth';
import { z } from 'zod';
import postgres from 'postgres'; 
import { AddCourse } from './schemas'; 
import { log } from 'console';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

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

type CoursesData = {
  title:string;
  description:string;
  schedule:string;
  instrument:string;
  teacherId:string;
  level:string;
  capacity:number;
}

export async function addNewCourses(data: CoursesData) {

  const {title, description, schedule, instrument, teacherId, level, capacity} = data

  if (!data) return {success: false}


  const res = await sql`
    INSERT INTO courses (id, title, description, instrument, teacherid, level, schedule, capacity)
    VALUES (gen_random_uuid(), ${title}, ${description}, ${instrument}, ${teacherId}, ${level}, ${schedule}, ${capacity})
  `;

  redirect("/dashboard/courses")

  return {success: true}
}