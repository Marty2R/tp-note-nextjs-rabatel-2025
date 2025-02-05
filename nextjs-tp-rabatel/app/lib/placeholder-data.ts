// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User - Admin',
    email: 'user@nextmail.com',
    password: '123456',
    role: 'user'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    name: 'Student - Lucas',
    email: 'student@nextmail.com',
    password: '123456',
    role: 'student'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442c',
    name: 'Teacher - Pierre',
    email: 'teacher@nextmail.com',
    password: '123456',
    role: 'teacher'
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442c',
    name: 'Teacher - Alain',
    email: 'teacher@nextmail.com',
    password: '123456',
    role: 'teacher'
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const courses = [
  {
    id: 'course-1',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming.',
    instrument: 'Computer',
    teacherId: '410544b2-4001-4271-9855-fec4b6a6442c',
    level: 'Beginner',
    schedule: 'Mon, Wed, Fri - 10:00 AM to 12:00 PM',
    capacity: 30,
  },
  {
    id: 'course-2',
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript and its advanced concepts.',
    instrument: 'Computer',
    teacherId: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    level: 'Advanced',
    schedule: 'Tue, Thu - 2:00 PM to 4:00 PM',
    capacity: 25,
  },
  {
    id: 'course-3',
    title: 'Data Structures and Algorithms',
    description: 'Learn about various data structures and algorithms.',
    instrument: 'Computer',
    teacherId: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    level: 'Intermediate',
    schedule: 'Mon, Wed, Fri - 1:00 PM to 3:00 PM',
    capacity: 20,
  },
  {
    id: 'course-4',
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer.',
    instrument: 'Computer',
    teacherId: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    level: 'Beginner',
    schedule: 'Sat, Sun - 10:00 AM to 2:00 PM',
    capacity: 40,
  },
];

export { users, courses };
