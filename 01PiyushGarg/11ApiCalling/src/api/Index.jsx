export const getPosts = async() => {
    const respose = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
    });
    return await respose.json();
};