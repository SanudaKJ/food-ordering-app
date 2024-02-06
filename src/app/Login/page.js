"use client";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginInProgress, setLoginInProgress] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    const { ok } = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setLoginInProgress(false);
  }
  return (
    <section className="mt-5">
      <h1 className="mb-4 text-4xl text-center text-red-500">Login </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={false}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={false}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={false}>
          Login
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
  );
}
