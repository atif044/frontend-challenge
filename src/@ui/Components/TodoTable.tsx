import { useRecoilState } from "recoil";
import { todoListState } from "../../@core/state/state";
import { todoData } from "../../@core/interfaces";
import { HiMiniCheck, HiOutlineXMark } from "react-icons/hi2";
import { useState, useRef } from "react";
import Pagination from "../utils/Pagination";
import {
  animateCompletion,
  animateRowDeletion,
} from "../Animations/Animations";

const TodoTable = () => {
  const [data, setData] = useRecoilState(todoListState);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePreviousPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

  const tickRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const toggleComplete = (id: number, index: number) => {
    const newData = data.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setData(newData);

    setTimeout(() => {
      const completed = newData.find((todo) => todo.id === id)?.completed;
      if (completed) {
        animateCompletion(tickRefs.current[index], textRefs.current[index]);
      }
    }, 50);
  };

  const deleteTodo = (id: number) => {
    const row = document.getElementById(`todo-row-${id}`);
    animateRowDeletion(row, () => {
      const newData = data.filter((todo) => todo.id !== id);
      setData(newData);
    });
  };

  return (
    <>
      <div className="p-5 flex justify-center items-center rounded-lg w-full h-auto">
        <div className="overflow-hidden min-w-[300px] rounded-lg shadow-lg w-full max-w-6xl bg-white/10 backdrop-blur-lg">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-white bg-white/20">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Sr.</th>
                  <th className="px-6 py-3 text-left font-semibold">Title</th>
                  <th className="px-6 py-3 text-left font-semibold">
                    Description
                  </th>
                  <th className="px-6 py-3 text-start font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentTodos.length > 0 ? (
                  currentTodos.map((item: todoData, index) => (
                    <tr
                      key={item.id}
                      id={`todo-row-${item.id}`}
                      className={`todo-row border-b text-white border-[#767676] ${
                        item.completed ? "opacity-50" : "opacity-100"
                      } hover:bg-white/10`}
                    >
                      <td className="px-6 py-4">
                        {indexOfFirstTodo + index + 1}
                      </td>
                      <td className="px-6 py-4 min-w-[250px] max-w-[350px] break-words whitespace-normal">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 min-w-[350px] max-w-[450px] break-words whitespace-normal">
                        {item.description}
                      </td>
                      <td className="px-4 py-4">
                        {item.completed ? (
                          <div className="flex items-center gap-2">
                            <span
                              ref={(el) => (tickRefs.current[index] = el)}
                              className="text-green-500 text-2xl"
                            >
                              <HiMiniCheck />
                            </span>
                            <span
                              ref={(el) => (textRefs.current[index] = el)}
                              className="text-green-400 italic"
                            >
                              Completed
                            </span>
                          </div>
                        ) : (
                          <div className="flex gap-3 items-center">
                            <span
                              className="cursor-pointer text-2xl text-green-500 hover:text-green-700"
                              onClick={() => toggleComplete(item.id, index)}
                            >
                              <HiMiniCheck />
                            </span>
                            <span
                              className="cursor-pointer text-red-500 text-2xl hover:text-red-700"
                              onClick={() => deleteTodo(item.id)}
                            >
                              <HiOutlineXMark />
                            </span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-4 text-center text-[#767676] italic"
                    >
                      No todo added yet...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default TodoTable;
