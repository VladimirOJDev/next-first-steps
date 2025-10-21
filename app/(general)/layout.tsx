import { Navbar } from "@/components";

//importar con lrc
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg ">About</span>
        
        {children}
      </main>
    </>
  );
}

