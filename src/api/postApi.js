import axiosInstance from ".";

const postUrl = '/posts';
const userUrl = '/users';
const userAuthUrl = '/users/auth';
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

export const postPosts = (body) => {
    return axiosInstance.post(postUrl, body)
}

//user block

export const getUsers = () => {
    return axiosInstance.get(userUrl);
}

export const postUsers = (body) => {
    return axiosInstance.post(userUrl,body);
}

export const postUserAuth = (body) => {
    return axiosInstance.post(userAuthUrl,body);
}

// topic block

export const getTopics = () => {
    return axiosInstance.get(topicUrl);
}