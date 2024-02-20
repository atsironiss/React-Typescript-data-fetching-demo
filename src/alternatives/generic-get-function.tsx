// export async function get<T>(url: string) {
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error('Failed to fetch data.');
//     }

//     const data = await response.json() as unknown;
//     return data as T;
// } // a generic function that accepts the expected return value type as a type argument
// //type casting takes place inside the get function and forces TS to treat data as type T
// // T is then set when calling get : const data = await get<RawDataBlogPost[]>(
// //   'https://jsonplaceholder.typicode.com/posts'
// //   );


// // Combined with zod schema
// import { z } from 'zod';

// export async function get<T>(url: string, zodSchema: z.ZodType<T>) {
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error('Failed to fetch data.');
//     }

//     const data = (await response.json()) as unknown;

//     try {
//         return zodSchema.parse(data);
//     } catch (error) {
//         throw new Error('Invalid data received from server.');
//     }
// }

// /**
//  * Since Zod would throw an error if parsing the data fails, TypeScript knows that if it succeeds, the data will be a value of the type defined by the Zod schema (i.e., TypeScript will narrow the type to be of that type).
// Therefore, no more type casting is needed anywhere. Instead, in the place where get() should be called, you just need to define a Zod schema that describes the expected type and pass it to get().
//  */
// import { z } from 'zod';
 
 
// const rawDataBlogPostSchema = z.object({
//   id: z.number(),
//   userId: z.number(),
//   title: z.string(),
//   body: z.string(),
// });
 
// const data = await get('https://jsonplaceholder.typicode.com/posts', z.array(rawDataBlogPostSchema));
 
// data[0].userId; // works => TypeScript knows that userId will exist on the returned data
