import Link from "next/link";
import Image from "next/image";
import appLogo from "../../public/images/app-logo.png";
import { HomeIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="bg-sky-700 w-full h-16 flex items-center justify-between text-sm text-sky-50 pl-6">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={appLogo}
            alt="E-Commerce logo"
            width={70}
            quality={100}
            placeholder="blur"
            className="h-10 w-auto mr-6"
          />
        </Link>
      </div>

      <div className="flex w-[5rem] space-x-7">
        <Link href="/">
          <div className="flex flex-col items-center">
            <HomeIcon className="h-[1.6rem] w-[1.6rem]" />
            <h3 className="hidden md:inline-flex">Home</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
