import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between ">
        <Link className="text-2xl font-semibold text-red-500 " href="">
          {" "}
          ST PIZZA{" "}
        </Link>

        <nav className="flex items-center gap-8 font-semibold text-gray-500">
          <Link className="px-3 py-2 rounded-full hover:bg-red-500 hover:text-white" href={"/"}>Home</Link>
          <Link className="px-3 py-2 rounded-full hover:bg-red-500 hover:text-white"  href={"/"}>Menu</Link>
          <Link className="px-3 py-2 rounded-full hover:bg-red-500 hover:text-white"  href={"/"}>About</Link>
          <Link className="px-3 py-2 rounded-full hover:bg-red-500 hover:text-white"  href={"/"}>Contact</Link>
          <Link
            className="px-4 py-2 text-white bg-red-500 rounded-full"
            href={"/"}
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}
