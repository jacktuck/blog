import React, { useState, useEffect } from "react";
import PostListItem from './PostListItem';
import './PostList.css'
import NotFound from "./NotFound";

function PostListComponent (props) {
  console.log('PROPS', props)
  if (!props.posts.items) return <div/>

  const postItems = props.posts.items.map((post) =>
    <li key={post.sys.id}><PostListItem item={post}/></li>
  )

  console.log('postItems', postItems)

  return (
    <ul id="posts">
      {postItems}
    </ul>
  );
}

const PostList = () => {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState({});

  async function fetchData() {
    const url = new URL('https://cdn.contentful.com/spaces/sfbobw4fvv5k/environments/master/entries')

    url.search = new URLSearchParams({
      access_token: '4OJtWZcNNAxKAhLrYNzedEPAuUNYgWdkD-zQJ5Rfzi0',
      order: '-sys.createdAt',
      select: 'fields.slug,fields.title,sys.id,sys.createdAt',
      content_type: 'post',
    })

    const res = await fetch(url);

    res
      .json()
      .then(res => setPosts(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (<PostListComponent posts={posts}/>)
};
export default PostList;