import { fetchLatestUsers, fetchLatestTeacher } from "@/app/lib/data";
import Form from "@/app/ui/courses/add-form";
import { Metadata } from "next";

interface UserField {
  id: string; // Define properties as needed
  name: string;
  // Add other properties as necessary
}

export const metadata: Metadata = {
  title: "Create Courses",
};

export default async function AddCourses() {
  console.log(await fetchLatestTeacher());
  const data = await fetchLatestTeacher();
  return (
    <div className="p-6 rounded">
      <div className="text-2xl font-bold mb-4">Ajouter un nouveau cours</div>
      <Form users={data} />
    </div>
  );
}
