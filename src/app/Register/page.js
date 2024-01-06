export default function Register() {
  return (
    <>
      <section className="mt-5">
        <h1 className="mb-4 text-4xl text-center text-red-500">Register </h1>
        <form className="block max-w-xs mx-auto">
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Placeholder"/>
            <button type="submit" className="" >Register</button>
            <div className="my-4 text-center text-gray-500">
              or Login with provider
            </div>
            <button>Login with Google</button>
        </form>
      </section>
    </>
  );
}
