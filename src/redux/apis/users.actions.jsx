import {axiosService} from '../helpers/axios';

export const RegistrationOfUser = async (formData) => {
    try {
        return await axiosService.post('/users', formData);
    } catch (error) {
        console.log(error);
        throw new error();
    }
};

export const LogginOfUser = async (formData) => {
    try {
        return await axiosService.post('/login', formData);
    } catch (error) {
        console.log(error);
        throw new error();
    }
};
export const GetUserById = async (id) => {
    try {
        return await axiosService.post(`/users/${id}`);
    } catch (error) {
        console.log(error);
        throw new error();
    }
};
