import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetApi = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c4819bfa5e4f49908f83c129f7cd08a3');
        setLatest(res.data.articles);
        res.data.articles.map((data, index) => {
           
          console.log("title: " + data.title);
          console.log("link: " + data.url);
            
        });
      } catch (err) {
        console.log("Error occurred when fetching API:", err);
      }
    }
  
    fetchData();
  }, []);


  return (
            <div>
    <h1>Latest 6 News Sources</h1>
    <pre>{JSON.stringify(
      latest.filter((data, index) => index < 6).map((data) => ({title: data.title, url: data.url})),
      null, 2
    )}</pre>
  </div>
          );
   

};

export default GetApi;
