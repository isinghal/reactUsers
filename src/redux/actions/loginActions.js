
import { toast } from 'react-toastify';

export const login = (form) => {
    return (dispatch) => {
        fetch('https://api.prontoitlabs.com/api/v1/user/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(function (res) {
                return res.json()
            }).then(function (data) {
                handleEvent(data, dispatch);
            });
    };
}




export const register = (form) => {
    return (dispatch) => {
        fetch('https://api.prontoitlabs.com/api/v1/user/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(function (res) {
                return res.json()
            }).then(function (data) {
                handleEvent(data, dispatch);
            });
    };
}

export const setUser = () => {
    return (dispatch) => {
        const user = window.localStorage.getItem('user');
        if(user) {
            dispatch({
                type: 'SET_USER',
                payload: JSON.parse(user)
            });
        }
    }
}

export const logOut= () => {
    return (dispatch) => {
        window.localStorage.removeItem('users'); 
        dispatch({
            type: 'CLEAR_USER'
        });
    }
}

const handleEvent = (data, dispatch) => {
    if(data.status) {
        window.localStorage.setItem('user', JSON.stringify(data.data));
        dispatch({
            type: 'SET_USER',
            payload: data.data
        });
    } else if(data.errorMessage) {
        toast.error(data.errorMessage, {
            position: toast.POSITION.TOP_RIGHT
          });
    }
}