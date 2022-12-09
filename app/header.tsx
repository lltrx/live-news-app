import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from 'next/link'

function Header() {
  return (
    <header>
          <div className="grid grid-cols-3 p-10 items-center">
               <Bars3Icon className="h-8 w-8 cursor-pointer"/>
               <Link href='/' prefetch={false}>
                    <h1 className="text-2xl font-bold cursor-pointer">Live News</h1>

               </Link>
                <div>
                    <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 lg:py-4">
                         Subscribe now
                    </button>
                </div>
          </div>
    </header>
  )
}

export default Header