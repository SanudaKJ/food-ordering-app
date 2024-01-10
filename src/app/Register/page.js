"use client";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <section className="mt-5">
        <h1 className="mb-4 text-4xl text-center text-red-500">Register </h1>
        <form className="block max-w-xs mx-auto">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Placeholder" />
          <button type="submit" className="">
            Register
          </button>
          <div className="my-4 text-center text-gray-500">
            or Login with provider
          </div>
          <button className="flex justify-center gap-4">
            <Image src={"/google.png"} width={30} height={30} alt="google" />
            Login with Google
          </button>
        </form>
      </section>
    </>
  );
}
