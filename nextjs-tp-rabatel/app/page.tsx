import { ArrowRightIcon, PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { signOut } from "@/auth";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to MusiLearn</h1>
        <p className="text-lg text-white">Log in to access your space</p>
        <Link href="/login" legacyBehavior>
          <a className="flex items-center space-x-2 rounded-lg bg-white px-4 py-2 text-lg font-semibold text-purple-700 shadow-lg hover:bg-gray-100">
            <span>Login</span>
            <ArrowRightIcon className="h-5 w-5 text-purple-700" />
          </a>
        </Link>
      </div>
    </main>
  );
}
