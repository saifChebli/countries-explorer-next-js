import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">
         Countries Explorer
      </h1>
      <p className="mt-4">
        Discover countries using Next.js
      </p>
      <Link href='/countries'>
        <button className="bg-black text-white px-6 py-3 rounded-md cursor-pointer mt-6">
          Explore Countries
        </button>
      </Link>
      {/* <Image 
        src="https://cdn.pixabay.com/photo/2025/08/24/17/00/akbarnemati-astronomy-9794338_960_720.jpg" 
        alt=""
        width={300}
        height={200}
        /> */}
    </div>
  );
}
