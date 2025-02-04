export default function AdminDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to the Admin Dashboard
        </h1>
        <p className="text-lg text-white">
          Manage your application settings and user roles here.
        </p>
      </div>
    </main>
  );
}
