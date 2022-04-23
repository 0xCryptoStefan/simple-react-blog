import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../modules/GlobalConstants";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(ENDPOINT.baseURL + ENDPOINT.blogpost + id);
  const navigate = useNavigate();

  function handleDelete(event) {
    fetch(ENDPOINT.baseURL + ENDPOINT.blogpost + blog.id, {
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
