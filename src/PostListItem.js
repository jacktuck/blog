import React from "react";
import { Link } from "react-router-dom";

const Post = (params) => {
  console.log('post params', params)
  let pub = new Date(params.item.sys.createdAt).toLocaleDateString('en', {
    day: 'numeric',
    month: 'short', 
    year: 'numeric'
  })

  return (
    <div>
      <div id="createdDate">{pub}</div>
      <h1><Link to={`blog/${params.item.fields.slug}`}>{params.item.fields.title}</Link></h1>
    </div>
  );
};
export default Post;