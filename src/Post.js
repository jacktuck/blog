import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import NotFound from "./NotFound";
import './Post.css'

const Post = (params) => {
  console.log('POST->', params);



  

  const [hasError, setErrors] = useState(false);
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const url = new URL('https://cdn.contentful.com/spaces/sfbobw4fvv5k/environments/master/entries')

    url.search = new URLSearchParams({
      access_token: '4OJtWZcNNAxKAhLrYNzedEPAuUNYgWdkD-zQJ5Rfzi0',
      order: '-sys.createdAt',
      select: 'fields.title,fields.content,sys.createdAt',
      content_type: 'post',
      'fields.slug[in]': params.match.params.slug
    })

    const res = await fetch(url);

    res
      .json()
      .then(res => {
        setIsLoading(false)

        if (res.total !== 1) {
          return
        }

        const item = res.items[0]
        item.fields.pub = new Date(item.sys.createdAt)
          .toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' })

        setPost(item.fields)
        document.title = `${item.fields.title} — jtuck.io`

        console.log('ITEM', res.items[0])
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    {
      isLoading ? <div/> : post.title ?
        (
          <div>
            <p id="backBtn"><a href="/">← back to list</a></p>
            <div id="post">
              <h1>{post.title}</h1>
              <p>Published {post.pub}</p>
              <p><ReactMarkdown source={post.content} /></p>
            </div>
          </div>
        ) : (<NotFound/>)
    }
    </div>
  )
};
export default Post;