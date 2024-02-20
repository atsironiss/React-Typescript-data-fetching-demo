import { type ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts.tsx";
import { get } from "./util/http";
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from "./components/ErrorMessage.tsx";
// using jsonplaceholder dummy api for data resource

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false); // <boolean> is inferred from initial value
  const [error, setError] = useState<string>(); //string or undefined which is the initial value

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = await get('https://jsonplaceholder.typicode.com/posts') as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        }); // yielding a new array of data
        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        //setError('Failed to fetch posts.')
        //setError((error as Error)?.message (|| 'Failed to fetch posts.' can be ommited));
      }

      setIsFetching(false);
      
    }
    fetchPosts();

  }, [])

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>
  }

  if (error) {
    content = <ErrorMessage text={error} />
  }

  return <main>
    <img src={fetchingImg} alt="An abstract image depicting a data fetching resource." />
    {content}
  </main>;
}

export default App;
