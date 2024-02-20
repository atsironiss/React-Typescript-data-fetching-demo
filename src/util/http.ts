export async function get(url: string) {
    const response = await fetch(url);

   if (!response.ok) {
    throw new Error('Failed to fetch data.');
   }

   const data = response.json() as unknown; // could use 3rd party lib like zod to validate the data instead here we will use as unknown to make it clear we don't know for sure the shape of data
   // unknown is better than any because with any you can access any property with no error
   return data;
}