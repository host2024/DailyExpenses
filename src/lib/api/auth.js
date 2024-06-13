import axios from 'axios';

const AUTH_API_HOST = 'https://moneyfulpublicpolicy.co.kr';

export const register = async ({ id, password, nickname }) => {
    try {
        const response = await axios.post(AUTH_API_HOST + '/register', {
            id: id,
            password: password,
            nickname: nickname,
        });
        return response;
    } catch (error) {
        console.log(error?.response?.data?.message);
        alert(error?.response?.data?.message);
    }
};

export const login = async ({ id, password }) => {
    try {
        const response = await axios.post(AUTH_API_HOST + '/login?expiresIn=10m', {
            id: id,
            password: password,
        });
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    } catch (error) {
        console.log(error?.response?.data?.message);
        alert(error?.response?.data?.message);
    }
};

export const getUserInfo = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        try {
            const response = await axios.get(AUTH_API_HOST + '/user', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error?.response?.data?.message);
            alert('토큰 만료');
            localStorage.clear();
        }
    }
};

export const updateProfile = async (formData) => {
    // formData를 직접 인자로 받음
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        try {
            const response = await axios.patch(AUTH_API_HOST + '/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data; // 응답 데이터 반환
        } catch (error) {
            console.error('프로필 업데이트 오류:', error.response?.data?.message || error.message); // 에러 로그 추가
            localStorage.clear();
            alert('프로필 업데이트 중 오류가 발생했습니다.');
        }
    } else {
        alert('로그인이 필요합니다.');
    }
};
