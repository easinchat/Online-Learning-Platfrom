"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import { authClient, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const links = (
    <>
      <li>
        <Navlink href={"/"}>Home</Navlink>
      </li>
      <li>
        <Navlink href={"/course"}>Courses</Navlink>
      </li>
      <li>
        <Navlink href={"/my-profile"}>My Profile</Navlink>
      </li>
      <li>
        <Navlink href={"/allCourses"}>Course Details</Navlink>
      </li>
    </>
  );

  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
          E-Learning
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {isPending ? (
          <span>Loading...</span>
        ) : user ? (
          <>
            <span className="text-sm">{user.name}</span>

            <button
              className="btn bg-purple-500 text-white"
              onClick={async () => {
                await authClient.signOut();
              }}
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <button>
              <Link href="/login" className="btn">
                Login
              </Link>
            </button>

            <button onClick={signInWithGoogle}>
              <Link href="/register" className="btn">
                Google Sign In
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
