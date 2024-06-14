import axios from 'axios';

const JSON_SERVER_HOST = 'http://localhost:5000';

export const getExpenses = async () => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
        return response.data;
    } catch (err) {
        console.log(err);
        alert('오류');
    }
};

export const getExpense = async ({ queryKey }) => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${queryKey[1]}`);
        return response.data;
    } catch (err) {
        console.log(err);
        alert('오류');
    }
};

export const postExpense = async (newExpense) => {
    try {
        const { data } = await axios.post(`${JSON_SERVER_HOST}/expenses`, newExpense);
        return data;
    } catch (err) {
        console.log(err);
        alert('오류');
    }
};
