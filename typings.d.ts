type DataEntry ={
     author: string | null;
     title: string;
     description: string;
     url: string;
     source: string;
     image: string | null ;
     category: Category;
     language: string;
     country: string;
     published_at: string;
}

type Pagination = {
     count: Int;
     total: Int;
     offset: Int;
     limit: Int;
}


type NewsResponse = {
     pagination: Pagination;
     data: DataEntry[];
}


type Category =
     | "general"
     | "business"
     | "entertainment"
     | "health"
     | "science"
     | "sports"
     | "technology";
     