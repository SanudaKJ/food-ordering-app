"use client";
import { set } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  async function HandleFormSubit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    setCreatingUser(false);
    setUserCreated(true);
  }

  return (
    <>
      <section className="mt-5">
        <h1 className="mb-4 text-4xl text-center text-red-500">Register </h1>
        {userCreated && (
          <div className="my-4 text-center">
            User Created. <br /> Now you can{" "}
            <Link className="underline" href={"/login"}>
              Login &raquo;{" "}
            </Link>
          </div>
        )}
        <form className="block max-w-xs mx-auto" onSubmit={HandleFormSubit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            disabled={creatingUser}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            disabled={creatingUser}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit" disabled={creatingUser}>
            Register
          </button>
          <div className="my-4 text-center text-gray-500">
            or Login with provider
          </div>
          <button className="flex justify-center gap-4">
            <Image src={"/google.png"} width={25} height={25} alt="google" />
            Login with Google
          </button>
        </form>
      </section>
    </>
  );
}
