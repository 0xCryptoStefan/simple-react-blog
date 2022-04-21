import React from "react";
import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
    console.log("useEffect ran");
  }, []); // add empty dependency array here if only want to run once, or add each state element to be monitored into the array e.g. [] or [data, additionalData, furtherData]

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's blogs"
      /> */}
    </div>
  );
}
