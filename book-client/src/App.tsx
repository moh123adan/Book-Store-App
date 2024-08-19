import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(todosEndpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

const createTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch(todosEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  return response.json();
};

const updateTodo = async (updatedTodo: Todo): Promise<Todo> => {
  const response = await fetch(`${todosEndpoint}/${updatedTodo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return response.json();
};

const deleteTodo = async (todoId: number): Promise<void> => {
  const response = await fetch(`${todosEndpoint}/${todoId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
  return;
};

const TodoApp: React.FC = () => {
  const queryClient = useQueryClient();

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleCreate = () => {
    const newTodo = { title: "New Todo", completed: false };
    createTodoMutation.mutate(newTodo);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleCreate}>Add Todo</button>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  );
}

export default App;
