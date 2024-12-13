import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchTasks = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return data;
};

export const useTasks = () => {
  const query = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 60000,
  });

  return {
    ...query,
  };
};
