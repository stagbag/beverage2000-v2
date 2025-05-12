import client from "../sanityClient";

export const get = async () => {
    const posts = await client.fetch(/* groq */ `*[_type == "blogpost"
    ][0..10]{
    _id,
    name,
    }`);

    return {
        body: {
            posts,
        },
    };
};