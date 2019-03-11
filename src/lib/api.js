import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=AB697l3fT6gnCq6aJwvVX8xn6GG3ddiaFTFtd5V7&date=${date}`);
}