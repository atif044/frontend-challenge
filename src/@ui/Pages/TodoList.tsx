import AddTodo from "../Components/AddTodo";
import TodoTable from "../Components/TodoTable";

const TodoList = () => {
  return (
    <div className="bg-gradient-to-br from-purple-950 to-black h-full">
      <AddTodo />
      <TodoTable />
    </div>
  );
};

export default TodoList;
