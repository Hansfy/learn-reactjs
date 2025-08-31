import React, { use, useEffect } from "react";

const FetchDataEffect = () => {
  const [post, setPost] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
      console.log(data);
    };

    fetchData();
  }, []);
  // log the data to the console
  return (
    <div>
      <h1>Firts post title:</h1>
      {post.length > 0 ? <p>{post[0].title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
