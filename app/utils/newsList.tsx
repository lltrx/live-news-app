import Article from './Article'

type Props = {
     news: NewsResponse;
}

function newsList({news}: Props) {
  return (
    <main >
      {
        news.data.map(article => (
          <Article article={article} key={article.title} />
        ))
      }
    </main>
  )
}

export default newsList