import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../utils/newsList";
import { categories } from "../../../constants";


type Props = {
     params: { category: Category};
};

async function NewsCategoryPage({params: {category}}: Props) {
     const news: NewsResponse = await fetchNews(category);

  return (
    <div>
     <h1 className="headerTitle"> {category}</h1>
     <NewsList news={news} />

    </div>
  )
}

export default NewsCategoryPage

export async function generateStaticPaths() {
  return categories.map((category) => ({
    category: category,
  }))
}