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
      <h1 id="title"><Link to={`/post/${params.item.fields.slug}`}>{params.item.fields.title}</Link></h1>
      <div id="pub">{pub}</div>
    </div>
  );
};
export default Post;