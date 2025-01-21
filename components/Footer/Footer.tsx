import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="shrink-0 bg-muted shadow-inner">
      <div className="flex flex-col-reverse gap-8 xs:flex-row-reverse xs:gap-0 px-8 py-6 max-w-screen-3xl m-auto justify-between items-center">
        <div className="flex flex-col w-40">
          <div className=" flex flex-row justify-between">
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
          <p className="text-xs font-bold">All left and rights reserved</p>
        </div>
        <div className={`h-card text-xs w-60`}>
          <Image
            className={`u-photo rounded-full brightness-125 contrast-125 shape-outside-circle float-left`}
            src="/Me.webp"
            width={72}
            height={72}
            alt="The pretty creator of the site"
          />
          <div className="">
            <Link
              className={`p-name u-url font-bold text-lg text-foreground leading-3`}
              href="https://bensden.xyz"
            >
              Ben Hammond
            </Link>
            <div className="">
              <span className={`p-category`}>Developer</span>
              {", "}
              <span className={`p-category`}>Designer</span>
              {", "}
              <span className={`p-category font-extrabold`}>Idiot</span>
            </div>
            <Link
              className={`u-email hidden`}
              href="mailto:BenHammond404@gmail.com"
            >
              BenHammond404@gmail.com
            </Link>

            <div>
              <p className={`p-note inline-block`}>A funny code boy</p>
              <span> from</span>
            </div>
            <div className="font-bold">
              <span className={`p-locality`}>Glasgow</span>
              {", "}
              <span className={`p-country-name font-extrabold text-blue-700`}>
                Scotland
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
