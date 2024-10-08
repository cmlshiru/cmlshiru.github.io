import React, { FC } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar}>
    <div className="col-12 my-3 d-flex justify-content-between">
      <div className="navbar-brand col-2 mb-0 h1 mt-auto">Home</div>
      <div className="col-2">
        <Link href={'pages/login'}>Log in</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
