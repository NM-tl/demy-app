import axios from 'axios';

export const fetchComments = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        _limit: 10
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch comments');
  }
};
