import axios from 'axios';

export const getAllProjects = () => axios.get('/api/projects');

const apis = { getAllProjects }; 
export default apis;