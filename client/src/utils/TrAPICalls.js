import axios from 'axios'

const axiosInstance = axios.create({
    //baseURL: window._env_.APP_DB4,
    baseURL: window._env_.APP_DB4,
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



export const add = (data) => {
    //return axiosInstance.post(window._env_.APP_DB4 + '/add', data).then(user => {
        return axiosInstance.post(window._env_.APP_DB4 + '/add', data).then(user => {
            // delete axiosInstance.defaults.headers.common["Authorization"];
        return user
    })
}



export const fetchTr = (name) => {
    return axiosInstance.post('/',{name}).then(user => {
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

export const addTodo = (title, description) => {
    return axiosInstance.post('/todo/add', {
        title,
        description
    }).then(todo => {
        return todo.data
    })
}

export const listTodo = () => {
    //I have used post instead of get, read https://blog.teamtreehouse.com/the-definitive-guide-to-get-vs-post
    return axiosInstance.post('/todo/list').then(todos => {
        return todos.data
    })
}


export const updateTodo = (_id, important = null, done = null) => {
    //I have used post instead of get, read https://blog.teamtreehouse.com/the-definitive-guide-to-get-vs-post
    const fieldsToUpdate = {
        _id
    }

    if (important !== null) {
        fieldsToUpdate.important = important
    }
    if (done !== null) {
        fieldsToUpdate.done = done
    }
    return axiosInstance.patch('/todo/update', fieldsToUpdate).then(todo => {
        return todo.data
    })
}


export const deleteTodo = (_id) => {
    //I have used post instead of get, read https://blog.teamtreehouse.com/the-definitive-guide-to-get-vs-post
    return axiosInstance.delete('/todo/delete', {
        data: {
            _id,
        }
    }).then(todo => {
        return todo
    })
}