import { customerLoginError, customerLoginSuccess, customerLoginRequest, reducerRegisterError, reducerRegisterSuccess, reducerRegisterRequest } from './Type'

const loginInitialState = {
    loading: false,
    details: {},
    error: ""
}

const registerInitialState = {
    loading: false,
    details: {},
    error: ""
}

export const reducerLogin = (state = loginInitialState, action) => {
    switch (action.type) {
        case customerLoginRequest: return {
            ...state,
            loading: true
        }
        case customerLoginSuccess: return {
            ...state,
            loading: false,
            details: action.payload
        }
        case customerLoginError: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const reducerRegister = (state = registerInitialState, action) => {
    switch (action.type) {
        case reducerRegisterRequest: return {
            ...state,
            loading: true
        }
        case reducerRegisterSuccess: return {
            ...state,
            loading: false,
            details: action.payload
        }
        case reducerRegisterError: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}
