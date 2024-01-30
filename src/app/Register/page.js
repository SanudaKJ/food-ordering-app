"use client";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function HandleFormSubit(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <>
      <section className="mt-5">
        <h1 className="mb-4 text-4xl text-center text-red-500">Register </h1>
        <form className="block max-w-xs mx-auto" onSubmit={HandleFormSubit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit" className="">
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
