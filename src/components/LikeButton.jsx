import React, { useEffect, useState } from "react";

function LikeButton() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Datafatch = async () => {
      try {
        const response = await fetch("http://localhost:8080/post");
        const result = await response.json();
        setData(result);
      } catch (error) {}
    };
    Datafatch();
  }, []);

  const CountLike = async (item) => {
    try {
      await fetch(`http://localhost:8080/post/${item.id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      setData((previousData) => {
        return previousData.map((i) =>
          i.id === item.id ? { ...i, likes: i.likes + 1 } : i
        );
      });
    } catch (error) {
      console.error("Error updating like count:", error);
    }
  };
  return (
    <div>
      <h3>Exercise 8 : Like Button</h3>
      {data?.map((post) => (
        <div
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <div key={post.id} style={{ textDecoration: "none" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Likes: {post.likes}</p>
            <button onClick={() => CountLike(post)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LikeButton;
