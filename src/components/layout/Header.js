import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between ">
        <nav className="flex items-center gap-8 font-semibold text-gray-500 ">
          <Link className="text-2xl font-semibold text-red-500 " href="">
            {" "}
            ST PIZZA{" "}
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>

        <nav className="flex items-center gap-4 font-semibold text-gray-500">
          <Link href={'/Register'}>Register</Link>
          <Link
            className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600"
            href={""}
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}
