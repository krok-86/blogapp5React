import axios from "axios";

// const getPostById = (id) => {
//     return axios.get('/...', {params: id})
// }

export const getPostById = (id) => {
    return axios.get(`http://localhost:3003/blog/posts/${id}`, {params: id})//why {params: id}?
}
console.log(getPostById (1));

export const putPostById = (id) => {
    return axios.put(`http://localhost:3003/blog/posts/${id}`, {params: id})//?
}
console.log(putPostById (1));

export const getPosts = () => {
    return axios.get("http://localhost:3003/blog/posts")
}
console.log(getPosts ());

export const deletePostById = (id) => {
    return axios.delete(`http://localhost:3003/blog/posts/${id}`, {params: id})//?
}
console.log(deletePostById (1));

export const postPosts = () => {
    return axios.post("http://localhost:3003/blog/posts")
}
console.log(postPosts ());

export const getUsers = () => {
    return axios.get("http://localhost:3003/blog/users")
}
console.log(getUsers ());

export const getTopics = () => {
    return axios.get("http://localhost:3003/blog/users")
}
console.log(getTopics ());