import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav class="bg-opacity-100 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div className="space-x-5 flex">
          <a href="#" class="text-white font-bold text-2xl">
            <FaGithub />
          </a>
          <a href="#" class="text-white font-bold text-2xl">
            <FaLinkedin />
          </a>
        </div>

        <div class="space-x-4">
          <Link href="/" class="text-white">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
