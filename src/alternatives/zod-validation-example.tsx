// import { z } from 'zod';
// // other imports ...
 
// // outside of App component function (since this doesn't need to be re-created all the time)
// const rawDataBlogPostSchema = z.object({
//   id: z.number(),
//   userId: z.number(),
//   title: z.string(),
//   body: z.string(),
// });
// // z.array() is a Zod method that creates a new schema based on another schema
// // as the name suggests, it's simply an array containing the expected objects
// const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);
 
// function App() {
//   // other code like useState() etc ...
 
//   useEffect(() => {
//     async function fetchPosts() {
//       setIsFetching(true);
//       try {
//         const data = await get(
//           'https://jsonplaceholder.typicode.com/posts'
//         );
//         const parsedData = expectedResponseDataSchema.parse(data);
//         // No more type casting via "as" needed!
//         // Instead, here, TypeScript "knows" that parsedData will be an array
//         // full with objects as defined by the above schema
//         const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
//           return {
//             id: rawPost.id,
//             title: rawPost.title,
//             text: rawPost.body,
//           };
//         });
//         setFetchedPosts(blogPosts);
//       } catch (error) {
//         if (error instanceof Error) {
//           setError(error.message);
//         }
//         // setError('Failed to fetch posts!');
//       }
 
//       setIsFetching(false);
//     }
 
//     fetchPosts();
//   }, []);
 
//   // other code ...
// }