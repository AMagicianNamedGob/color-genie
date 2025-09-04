import Link from "next/link";
import clsx from "clsx";

import { GitHubIcon, ThreadsIcon, MailIcon } from "../components/SocialIcons";

function SocialLink({ className = null, href, children, icon: Icon }: any) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium fill-zinc-500 transition-all duration-200 ease-in-out hover:fill-accent-5"
      >
        <Icon className="h-5 w-5 flex-none " />
        <span className="ml-2">{children}</span>
      </Link>
    </li>
  );
}

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="mt-28 mb-8">
      <ul
        role="list"
        className="text-sm flex flex-row flex-wrap items-center justify-start gap-6"
      >
        <SocialLink
          href="https://github.com//color-genie"
          icon={GitHubIcon}
        >
          Find it on GitHub
        </SocialLink>
        {/* <SocialLink href="#" icon={ThreadsIcon}>
        Trujared
      </SocialLink> */}
        <SocialLink href="mailto:hello@jaredtruscott.com" icon={MailIcon}>
          hello@jaredtruscott.com
        </SocialLink>
        <p className="md:ml-auto">
          © {currentYear} <a href="https://jaredtruscott.com">Jared Truscott</a>.
          All rights reserved.
        </p>
      </ul>
    </div>
  );
}
