import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../utils/newsList";


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