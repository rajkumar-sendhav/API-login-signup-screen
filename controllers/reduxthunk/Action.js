import { customerLoginRequest, customerLoginSuccess, customerLoginError, customerRegisterRequest, customerRegisterSuccess, customerRegisterError } from './Type'
import axios from 'axios'

const customerLogin_Request = () => {
    return {
        type: customerLoginRequest
    }
}
const customerLogin_Success = (details) => {
    return {
        type: customerLoginSuccess,
        payload: details
    }
}
const customerLogin_Error = (err) => {
    return {
        type: customerLoginError,
        payload: err
    }
}

const customerRegister_Request = () => {
    return {
        type: customerRegisterRequest
    }
}
const customerRegister_Success = (details) => {
    return {
        type: customerRegisterSuccess,
        payload: details
    }
}
const customerRegister_Error = (err) => {
    return {
        type: customerRegisterError,
        payload: err
    }
}

export const customerlogin = (phone, password) => {
    return function (dispatch) {
        dispatch(customerLogin_Request())

        let params = {
            phone: phone,
            password: password
        }

        axios.post('https://pitambara-app.moviemasti.co.in/api/login', params)
            .then((response) => {
                // console.log(response.data)
                var details = response.data
                dispatch(customerLogin_Success(details))
            })
            .catch((err) => {
                console.log(err)
                dispatch(customerLogin_Error(err))
            })
    }
}

export const customerregister = (name, phone, email, password, address) => {
    return function (dispatch) {
        dispatch(customerRegister_Request())

        let params = {
            name: name,
            phone: phone,
            email: email,
            password: password,
            address: address
        }

        axios.post('https://pitambara-app.moviemasti.co.in/api/register', params)
            .then((response) => {
                // console.log(response.data)
                var details = response.data
                dispatch(customerRegister_Success(details))
            })
            .catch((err) => {
                console.log(err)
                dispatch(customerRegister_Error(err))
            })
    }
}


