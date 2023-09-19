import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import TodoListWrapper from './components/TodoListWrapper';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>Todo List</p>
      </header>
      <QueryClientProvider client={queryClient}>
        <TodoListWrapper />
      </QueryClientProvider>
    </div>
  );
}

export default App;
