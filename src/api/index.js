import axios from 'axios';

export const getAllProjects = () => axios.get('/api/project');

const apis = { getAllProjects }; 
export default apis;