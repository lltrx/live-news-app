type Article ={
     author: string | null;
     category: Category;
     country: string;
     description: string;
     image: string | null ;
     language: string;
     published_at: string;
     source: string;
     title: string;
     url: string;
}

type Pagination = {
     count: Int;
     total: Int;
     offset: Int;
     limit: Int;
}


type NewsResponse = {
     pagination: Pagination;
     data: Article[];
}


type Category =
     | "business"
     | "entertainment"
     | "general"
     | "health"
     | "science"
     | "sports"
     | "technology";
     