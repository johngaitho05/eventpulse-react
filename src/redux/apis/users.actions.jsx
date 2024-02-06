import { axiosService } from '../helpers/axios';

export const RegistrationOfUser = async (formdata) => {
    try {
        const response = await axiosService.post('/users', formdata);
        return response;
    } catch (error) {
        console.log(error);
        throw new error();
    }
};

export const LogginOfUser = async (formData) => {
    try {
        const response = await axiosService.post('/login', formdata);
        return response;
    } catch (error) {
        console.log(error);
        throw new error();
    }
};
export const GetUserById = async (id) => {
    try {
        const response = await axiosService.post('/login', id);
        return response;
    } catch (error) {
        console.log(error);
        throw new error();
    }
};
