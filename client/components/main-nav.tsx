import Link from "next/link"

export default function MainNav() {
    return (
        <nav className="flex items-center justify-between flex-wrap px-16 py-6 bg-gray-800 text-white text-sm font-bold">
            <div className="flex gap-16 items-center flex-shrink-0 text-white mr-6">
                <Link
                    href="/"
                >
                    <h1>GG</h1>
                </Link>
        
                <ul className="flex gap-16">
                    <li>
                        <Link className="" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="" href="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="" href="/">
                            Search
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-8">
                <button className="flex items-center px-6 py-2">
                    Sign Up 
                </button>
                <button className="flex items-center px-6 py-2 border rounded-md border-gray-500">
                    Sign In
                </button>
            </div>
        </nav>
    )

}