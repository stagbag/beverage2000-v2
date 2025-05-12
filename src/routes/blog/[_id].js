import client from "../.../sanityClient";

export const get = async (event) => {
    //acccess the _id from params object
    const { _id } = event.params;
    const post = await client.fetch(
        /* groq */ `*[
        _type == "post" &&
        _id == $_id
        ][0]`,
        { _id }
    );

    if (!post?._id) {
        return {
            status:404,
        };
    }

    return {
        body: {
            post,
        },
    };
};