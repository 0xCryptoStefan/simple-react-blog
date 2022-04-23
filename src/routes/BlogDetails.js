import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  function handleDelete(event) {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
}
