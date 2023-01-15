import fetchNews from "../../lib/fetchNews";
import NewsList from "../utils/newsList";

type Props = {
  searchParams?: { term: string };
};

async function searchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="headerTitle">
        {" "}
        Search Results for : {searchParams?.term}
      </h1>

      <NewsList news={news} />
    </div>
  );
}

export default searchPage;
