import axios from 'axios';

axios.defaults.baseURL = 'https://6786c74df80b78923aa8220f.mockapi.io/';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};
