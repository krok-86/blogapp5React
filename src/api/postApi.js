import axiosInstance from ".";

// const getPostById = (id) => {
//     return axios.get('/...', {params: id})
// }

const postUrl = '/posts';
const userUrl = '/users';
const topicUrl = '/topics';

//post block

export const getPostById = async (id) => {
    return await axiosInstance.get(`${postUrl}/${id}`)//why {params: id}?
}

export const putPostById = (id, body) => {
    return axiosInstance.put(`${postUrl}/${id}`, body);//?
}

export const getPosts = () => {
    return axiosInstance.get(postUrl);
}

export const deletePostById = (id) => {
    return axiosInstance.delete(`${postUrl}/${id}`)//?
}

export const postPosts = () => {
    return axiosInstance.post(postUrl)
}

//user block

export const getUsers = () => {
    return axiosInstance.get(userUrl);
}

// topic block

export const getTopics = () => {
    return axiosInstance.get(topicUrl);
}