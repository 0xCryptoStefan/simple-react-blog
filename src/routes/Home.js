import React from "react";
import { useState } from "react";
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
      author: "Foxy Dog",
      id: 2,
    },
    {
      title: "Ipsum Finite",
      body: "The quick brown fox jumps over the lazy dog",
      author: "Foxy Dog",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
    </div>
  );
}
