import axios from "axios";

const url = 'https://6300ff309a1035c7f8fc2586.mockapi.io/users';

export const getUsers = async () => {
    const response = await axios.get(url);
    return response.data;
};