import { categories } from '../../constants'
import NavLink from './navLink'

function navLinks() {
  return (
    <nav>
     {categories.map((category) => (
          <NavLink key={category} category={category} isActive={true} />
     ))}
    </nav>
  )
}

export default navLinks