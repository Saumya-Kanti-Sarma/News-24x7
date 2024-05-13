import React, { useEffect, useState } from 'react';
import styles from "./Headlines.module.css";

const Headlines = () => {
  const [article, setArticle] = useState(null); // Initialize as null

  useEffect(() => {

    const url = 'https://newsdata.io/api/1/news?apikey=pub_440474795d31aa774416df4707500b3b1633f&country=in&language=en&category=business';
    fetch(url)
      .then(fetchData => fetchData.json())
      .then(data => {
        setArticle(data.results);
      })
  }, []);

  return (
    <>
      {/* Business News */}
      <div className={styles.main}>
        {article && article.length > 1 ? ( // Check if article is not null or undefined
          article.map((contexts, index) => (
            <div className='individuals' key={index}>
              <img src={contexts.image_url || "def.jpg"} onError={(e) => { e.target.src = 'def.jpg' }} />
              <div className='content-area'>
                <div className='content-heading '>
                  <b>Heading:</b>
                  <p>{contexts.title}</p>
                </div>
                <div className='content-heading '>
                  <b>Author: </b><p>{contexts.source_id || 'Unknown'}</p>
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
