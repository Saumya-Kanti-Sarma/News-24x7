import React, { useEffect, useState } from 'react';
import styles from "./Headlines.module.css";

const Headlines = () => {
  const [article, setArticle] = useState(null); // Initialize as null

  useEffect(() => {
    const apiKey = '9182c935c52e41e6be544709356d5da2';
    const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setArticle(data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.main}>
        {article !== null && article !== undefined ? ( // Check if article is not null or undefined
          article.map((contexts, index) => (
            <div className='individuals' key={index}>
              <img src={contexts.urlToImage || "def.jpg"} onError={(e) => { e.target.src = 'def.jpg' }} />
              <div className='content-area'>
                <div className='content-heading '>
                  <b>Heading:</b>
                  <p>{contexts.title}</p>
                </div>
                <div className='content-heading '>
                  <b>Author: </b><p>{contexts.author || 'Unknown'}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Headlines;
