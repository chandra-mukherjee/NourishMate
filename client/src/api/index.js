import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('userProfile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`;
    }
    
    return req;
});


export const fetchHealthDetail = () => API.get('/HD');
export const createHealthDetail = (newHD) => API.post('/HD', newHD);
export const updateHealthDetail = (id, updatedHD) => API.patch(`/HD/${id}`, updatedHD);
export const deleteHealthDetail = (id) => API.delete(`/HD/${id}`);


export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signup', FormData);


export const fetchUser = () => API.get('/user');
export const deleteUser = (id) => API.delete(`/user/${id}`);



export const fetchDietPost = () => API.get('/diet');
export const createDietPost = (newDietPost) => API.post('/diet', newDietPost);
export const updateDietPost = (id, updatedDietPost) => API.patch(`/diet/${id}`, updatedDietPost);
export const deleteDietPost = (id) => API.delete(`/diet/${id}`);
export const likeDietPost = (id) => API.patch(`/diet/${id}/likeDietPost`);
