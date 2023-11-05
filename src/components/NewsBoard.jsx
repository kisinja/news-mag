import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";
import "../css/newsboard.css";

const NewsBoard = ( {category} ) => {

    const[articles, setArticles] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data => {setArticles(data.articles); setIsLoading(false)});

    },[category]);


  return (
    <div>
      <h2 className="text-center mt-2">Latest <span className="badge bg-danger">News</span></h2>
      <hr />
      {isLoading && <div className="loader"></div>}
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  );
};

export default NewsBoard;
