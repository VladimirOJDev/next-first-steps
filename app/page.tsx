import Image from "next/image";
import Link from "next/link";


export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};


export default function Home() {
  return (
    <main className="flex flex-col  items-center ">
      <span className="text-5xl">Home page</span>

      <Link href={'/about'}> About</Link>
    </main>
  );
}
