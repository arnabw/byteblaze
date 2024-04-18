import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticleData = async () => {
    try {
      const response = await axios.get("https://dev.to/api/articles/latest");
      const { data } = response;
      setArticles(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Failed to fetch articles data.", error);
    }
  };

  useEffect(() => {
    fetchArticleData();
  }, []);

  return { articles, isLoading };
};

export default useFetchData;
