import axios from 'axios';

const API_URL = '/api/users/';

// register user

const register = async (userData) => { 
    try {
        const response = await axios.post(API_URL, userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

// Login User

const login = async (userData) => { 
    try {
        const response = await axios.post(API_URL + 'login', userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}


// Logout User
const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout,
    login
}

export default authService;


