import './App.css';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

import {getTodos, Todo} from './lib/api'

function TodoApp() {
  const {data: todos} = useQuery<Todo[]>('todos', getTodos, {
    initialData: [],
  })
  return (
    <div className="App">
      {JSON.stringify(todos)}
    </div>
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App;
