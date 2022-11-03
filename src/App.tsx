import './App.css';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import ToDoInput from './ToDoInput';

import { getTodos, Todo } from './lib/api';

function TodoApp() {
  const {
    isLoading,
    error,
    data: todos,
  } = useQuery<Todo[]>('todos', getTodos, {
    initialData: [],
  });

  console.log(todos?.length);

  return (
    <div className='App'>
      <h1>To Do!</h1>
      {/* <ToDoInput /> */}
      {todos?.map((todoData, todoIndex) => {
        return <div>{todoData.title}</div>;
      })}
    </div>
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
