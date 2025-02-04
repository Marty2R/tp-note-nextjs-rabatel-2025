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
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </main>
  );
}
