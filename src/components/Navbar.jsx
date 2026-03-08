import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white">
       <Link href='/'>
        <h1 className="text-xl font-bold cursor-pointer">
           🌍 Countries Explorer
        </h1>
       </Link>
        <div className="flex items-center gap-8">
            <Link href='/' className="hover:text-gray-300">
                Home  
            </Link>
            <Link href='/countries' className="hover:text-gray-300">
                Countries
            </Link>

            <div className="bg-white text-black rounded-2xl px-3 py-1">
                Favorites : 
            </div>
        </div>
    </nav>
  )
}

export default Navbar