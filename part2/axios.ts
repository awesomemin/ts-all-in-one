import axios, { AxiosError } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

(async () => {
  try {
    const response = await axios.get<Post>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const response2 = await axios.post('https://jsonplaceholder.typicode.com', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
    }
    console.error((error as AxiosError).response?.data);
  }
})();
