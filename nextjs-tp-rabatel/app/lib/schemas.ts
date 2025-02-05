import { z } from 'zod';

export const AddCourse = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  instrument: z.string().optional(),
  teacherId: z.string().min(1, 'Teacher ID is required'),
  level: z.string().optional(),
  schedule: z.string().optional(),
  capacity: z.number().min(1, 'Capacity must be at least 1'),
}); 