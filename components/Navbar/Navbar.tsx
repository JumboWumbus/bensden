import Link from "next/link";
// import { useState } from "react";
import { MdContactPage } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import NavMenu from "./NavMenu";
import TypeLogo from "@/components/ui/icons/Logo";

export default function NavBar() {
  return (
    <header className="grid grid-cols-3 md:grid-cols-8 gap-4 items-center">
      <div className="">
        <Link href="/">
          <TypeLogo className="fill-foreground h-11 w-min" />
        </Link>
      </div>
      <NavMenu />
      <div className="hidden xs:flex col-start-3 md:col-start-1 md:col-span-2 col-span-full flex-row justify-between lg:col-start-8 lg:col-span-1 ">
        <Link href="">
          <MdContactPage className="fill-foreground h-5 w-min" />
        </Link>
        <Link href="mailto:benhammond404@gmail.com">
          <FaEnvelope className="fill-foreground h-5 w-min" />
        </Link>
        <Link href="https://github.com/JumboWumbus">
          <FaGithub className="fill-foreground h-5 w-min" />
        </Link>
        <Link href="https://www.twitter.com/GrembloProjects">
          <FaTwitter className="fill-foreground h-5 w-min" />
        </Link>
        <Link href="https://www.linkedin.com/in/benhammond404/">
          <FaLinkedin className="fill-foreground h-5 w-min" />
        </Link>
      </div>
    </header>
  );
}
