import { categories } from "../constants"
import  fetchNews  from "../lib/fetchNews"
import NewsList from "./utils/newsList"

async function page() {

  const news: NewsResponse = await fetchNews(categories.join(","));
  // console.log(news)
  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default page