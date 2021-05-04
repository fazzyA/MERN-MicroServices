import axios from 'axios'

const axiosInstance = axios.create({
    //baseURL: window._env_.APP_DB3,
    baseURL: window._env_.APP_DB3,
    // withCredentials: true,
});


axiosInstance.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return Promise.reject(error.response)
    }
);



export const login = (data) => {
    //return axiosInstance.post(window._env_.APP_DB3 + '/add', data).then(user => {
        return axiosInstance.post(window._env_.APP_DB3 + '/login', data).then(user => {
            // delete axiosInstance.defaults.headers.common["Authorization"];
        return user
    })
}
export const Register = (data) => {
    //return axiosInstance.post(window._env_.APP_DB3 + '/add', data).then(user => {
        return axiosInstance.post(window._env_.APP_DB3 + '/register', data).then(user => {
            // delete axiosInstance.defaults.headers.common["Authorization"];
        return user
    })
}



export const fetchUser = () => {
    return axiosInstance.get('/').then(user => {
        // axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${user.data.token}`;
        return user
    })
}

export const deleteCall = (id) => {
    return axiosInstance.delete('/delete', {
id    }).then(user => {
        return user.data
    })
}




