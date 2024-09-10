import React, { useEffect, useState } from "react";

function Pagination() {
  const [currentpage, setCurrentpage] = useState(1);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          currentpage: currentpage,
        });
        const url = `http://localhost:8080/search?${params}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log("result: ", result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentpage]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Current Page: {currentpage}</h3>
      </div>
      {/* <h3>{data}</h3> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "25px",
            border: "solid black 4px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {data?.map((item, key) => (
            <p key={key}>{item}</p>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            style={{
              marginRight: "20px",
              backgroundColor: "pink",
              color: "black",
            }}
            onClick={() => setCurrentpage(currentpage - 1)}
            disabled={currentpage <= 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentpage(currentpage + 1)}
            disabled={currentpage >= 10}
            style={{
              marginLeft: "20px",
              backgroundColor: "pink",
              color: "black",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
