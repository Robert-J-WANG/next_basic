import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome Home</h1>
      <div className="box">this is a home page box</div>
      <Link href="/about">
        <button>about</button>
      </Link>
      <Link href="/blog">
        <button>blog</button>
      </Link>
      <Link href="/product">
        <button>product</button>
      </Link>
    </div>
  );
}
