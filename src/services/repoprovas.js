import axios from 'axios';
const BASE_URL = 'http://localhost:4000';

export function getSubjects() {
    return axios.get(`${BASE_URL}/subjects`);
}

export function getClasses(subjectId) {
    return axios.get(`${BASE_URL}/classes?subject=${subjectId}`);
}

export function createTest(body) {
    return axios.post(`${BASE_URL}/tests`, body);
}

export function getTestsOptions(searchBy) {
    return axios.get(`${BASE_URL}/${searchBy}s`);
}

export function getTests({ searchBy, id }) {
    return axios.get(`${BASE_URL}/tests/${searchBy}/${id}`);
}
