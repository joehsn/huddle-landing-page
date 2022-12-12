import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" as="/" className="nav-logo">
        <Image src="/logo.svg" alt="logo" width={240} height={39} />
      </Link>
      <Link href="#try-it-free" className="nav-btn">
        Try it free
      </Link>
    </nav>
  );
}
