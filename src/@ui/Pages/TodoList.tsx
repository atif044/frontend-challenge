import AddTodo from "../Components/AddTodo";
import TodoTable from "../Components/TodoTable";

const TodoList = () => {
  return (
    <div className="bg-gradient-to-br from-purple-950 to-black md:h-screen h-[100%]">
      <AddTodo />
      <TodoTable />
    </div>
  );
};

export default TodoList;
