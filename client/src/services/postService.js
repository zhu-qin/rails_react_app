import {API_URL} from '../constants';

async function fetchAllPosts() {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function fetchPost(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function deletePost(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    if (response.status === 204) {
        return null;
    }
    return response.json();
    //   try {
    //     return await response.json();
    // } catch (err) {
    //     // No JSON body (e.g., 204 No Content)
    //     return null;
    // }
}


export {fetchAllPosts, deletePost, fetchPost};