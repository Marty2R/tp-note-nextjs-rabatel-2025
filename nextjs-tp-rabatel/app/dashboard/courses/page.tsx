import { fetchLatestCourses, fetchLatestUsers } from "@/app/lib/data";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline"; // Import TrashIcon

export default async function Courses() {
  const courses = await fetchLatestCourses();
  const users = await fetchLatestUsers();

  return (
    <main className="p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Courses à venir...</h1>

      <div>
        <a
          href="/dashboard/courses/add"
          className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter un cours
        </a>
      </div>

      <table className="w-full mt-5 rounded">
        <thead>
          <tr className="bg-gray-200 rounded">
            <th className="p-2">Titre</th>
            <th className="p-2">Description</th>
            <th className="p-2">Instrument</th>
            <th className="p-2">Horaires</th>
            <th className="p-2">Capacité</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((cours) => (
            <tr key={cours.id} className="border-b rounded">
              <td className="p-2">{cours.title}</td>
              <td className="p-2">{cours.description}</td>
              <td className="p-2">{cours.instrument}</td>
              <td className="p-2">{cours.schedule}</td>
              <td className="p-2">{cours.capacity}</td>
              <td className="p-2 text-center flex">
                <a
                  href={`/dashboard/courses/${cours.id}/delete`}
                  className="inline-flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3"
                >
                  <TrashIcon className="h-5 w-5 text-white" />
                </a>

                <a
                  href={`/dashboard/courses/edite/${cours.id}`}
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  <PencilIcon className="h-5 w-5 text-white" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
