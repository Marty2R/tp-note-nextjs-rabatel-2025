import { fetchLatestUsers, fetchLatestCourses } from "@/app/lib/data";
import { title } from "process";

export default async function AddCourses() {
  const users = await fetchLatestUsers();

  return (
    <main className="p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Ajouter un nouveau cours</h1>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Titre du cours
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description du cours
          </label>
          <textarea
            name="description"
            id="description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="instrument"
            className="block text-sm font-medium text-gray-700"
          >
            Instrument
          </label>
          <input
            type="text"
            name="instrument"
            id="instrument"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="teacherId"
            className="block text-sm font-medium text-gray-700"
          >
            Sélectionner le professeur
          </label>
          <select
            name="teacherId"
            id="teacherId"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            {users
              .filter((user) => user.role === "teacher")
              .map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700"
          >
            Niveau
          </label>
          <select
            name="level"
            id="level"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="beginner">Débutant</option>
            <option value="intermediate">Intermédiaire</option>
            <option value="advanced">Avancé</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="schedule"
            className="block text-sm font-medium text-gray-700"
          >
            Horaires
          </label>
          <input
            type="datetime-local"
            name="schedule"
            id="schedule"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Capacité
          </label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Ajouter le cours
        </button>
      </form>
    </main>
  );
}
