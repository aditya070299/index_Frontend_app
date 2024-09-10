import React, { useEffect, useState } from "react";

function TodList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/todoitems");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched data:", data); // Log the data to inspect its structure
      setData(data);
    } catch (error) {
      console.log("Failed to fetch data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addTodoItem = async () => {
    const newItem = { title: search };
    try {
      const response = await fetch("http://localhost:8080/addtodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      setSearch("");
      fetchData();
    } catch (error) {
      console.log("Failed to add:", error);
    }
  };

  return (
    <div>
      <h3>Exercise 9: TODO LIST</h3>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter TODO Item"
        />
        <button onClick={addTodoItem}>Add</button>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h4>
              {typeof item.title === "string"
                ? item.title
                : JSON.stringify(item.title)}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodList;
