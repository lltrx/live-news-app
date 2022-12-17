import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage"

const fetchNews = async (
     category?: Category | string,
     keywords?: string,
     isDynamic?: boolean,
) => {
     const query = gql`
     query MyQuery(
          $access_key: String!
          $categories: String!
          $keywords: String
     )   {
       myQuery(
          access_key: $access_key
          categories: $categories
          countries: "gb"
          sort: "published_desc"
          keywords: $keywords
        ) {
         data {
           author
           category
           country
           language
           image
           description
           source
           published_at
           url
           title
         }
         pagination {
           count
           limit
           offset
           total
         }
       }
     }
   `;

     const res = await fetch(
          "https://piracanjuba.stepzen.net/api/impressive-badger/__graphql", 
          {
          method: "POST",
          cache: isDynamic ? "no-cache" : "default",
          next: isDynamic ? { revalidate: 0} : { revalidate: 20 },
          headers: {
               "Content-Type": "application/json",
               Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
          },
          body: JSON.stringify({
               query,
               variables: {
                    access_key: process.env.MEADISTACK_API_KEY,
                    categories: category,
                    keywords: keywords,
               },
          }),

     })

     console.log(
          "Loading new data from api for category",
          category,
          "and keywords",
          keywords  
     )


     const newsResponse = await res.json();

     const news = sortNewsByImage(newsResponse.data.myQuery)

     return news;

};



export default fetchNews;


// stepzen import curl http://api.mediastack.com/v1/news?access_key=40bbaa466ef3b9bc512e69b2386399ed&countries=gb&limit=100&offset=0&sort=published_desc