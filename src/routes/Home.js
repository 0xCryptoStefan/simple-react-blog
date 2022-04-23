import React from "react";
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";
import { ENDPOINT } from "../modules/GlobalConstants";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(ENDPOINT.baseURL + ENDPOINT.blogs);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's blogs"
      /> */}
    </div>
  );
}
