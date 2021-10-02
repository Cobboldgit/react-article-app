import "./App.css";
import { useState, useEffect } from "react";
import News from "./pages/News";
import HeroSection from "./component/HeroSection";
import Footer from './component/Footer'
import {Spinner} from 'react-bootstrap'

function App() {
  const [article, setArticle] = useState([]);
  const [term, setTerm] = useState("world");
  const [isLoading, setIsLoading] = useState(true);

  const getArticle = async () => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=XtFEnROqyLO1tOboNj4geVFBMLcjzPbU`
    )
      .then((response) => response.json())
      .then((articleData) => {
        setArticle(articleData.response.docs);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getArticle();
    return setArticle([]);
  }, [term]);

  


  return (
    <div>
      <HeroSection term={term} searchText={(text)=> setTerm(text)}/>
      {isLoading ? (
        <div className="isLoading"><Spinner animation="border" variant="primary" size="lg" /></div>
      ) : (
        article.map((articles, index) => {
          return (
            <div key={index}>
              <News
                article={articles}
                key={articles._id}
                isLoading={isLoading}
              />
            </div>
          );
        })
      )}
      <Footer/>
    </div>
  );
}

export default App;
