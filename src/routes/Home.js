import React from "react";
import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "Lorem",
      body: "The quick brown fox jumps over the lazy dog",
      author: "Foxy Dog",
      id: 1,
    },
    {
      title: "Ipsum",
      body: "The quick brown fox jumps over the lazy dog",
      author: "Mario",
      id: 2,
    },
    {
      title: "Ipsum Finite",
      body: "The quick brown fox jumps over the lazy dog",
      author: "Mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
  }, []); // add empty dependency array here if only want to run once, or add each state element to be monitored into the array e.g. [] or [data, additionalData, furtherData]

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's blogs"
      />
    </div>
  );
}
