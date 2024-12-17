import AddTodo from "../Components/AddTodo";
import TodoTable from "../Components/TodoTable";

const TodoList = () => {
  return (
    <div className="bg-gradient-to-br from-purple-950 to-black h-screen">
      <AddTodo />
      <TodoTable />
    </div>
  );
};

export default TodoList;
