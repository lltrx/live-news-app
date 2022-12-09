import Link from 'next/link'

type Props = {
     category: string;
     isActive: boolean;
}

function navLink({category, isActive}: Props) {
  return (
     <Link href={`/news/${category}`}
     className={`navlink ${isActive 
     && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'
     }`} >
          {category}
     </Link>
  )
}

export default navLink