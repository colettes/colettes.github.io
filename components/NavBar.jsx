import styles from "../styles/Home.module.css";
import Link from "next/link";

const navItems = [
  { name: "Hello", path: "/about" },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      {navItems.map((item, index) => (
        <Link href={item.path} key={index}>
          <a>{item.name}</a>
        </Link>
      ))}
    </div>
  );
}

// convert styling from li to links