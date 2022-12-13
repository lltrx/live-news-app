import { categories } from "../constants"

async function page() {

  const news: NewsResponse = await fetchNews(categories.join(','))
  return (
    <div>
      
    </div>
  )
}

export default page