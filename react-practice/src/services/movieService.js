import { getOmdb } from "./OmdbClient";

export async function searchMoviesByTitle(title) {
    const client = getOmdb();
    const list = await client.search(title);
    return list;
}