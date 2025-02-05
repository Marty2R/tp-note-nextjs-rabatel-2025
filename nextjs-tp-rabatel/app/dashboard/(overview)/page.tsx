import { PowerIcon } from "@heroicons/react/24/outline";
import { fetchLatestUsers } from "@/app/lib/data";

export default async function Page() {
  const users = await fetchLatestUsers();

  return (
    <main>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Welcome to dashboard
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Voici la liste des utilisateurs ayant crée un compte sur
              MusiLearn.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {users.map((user: any) => (
              <li key={user.id}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {user.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Is : {user.role}
                    </p>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      Email : {user.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
