import React from "react";

// Alternative method to passing props and creating variables is destructuring the props object in the argument
// Standard call
// export default function BlogList(props)
export default function BlogList({ blogs, title, handleDelete }) {
  // These would be used with a standard props argument
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}.</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
}
