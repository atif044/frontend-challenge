import { FieldValues, useForm } from "react-hook-form";
import { formData } from "../../@core/interfaces";
import FormErrorMessage from "../Shared/form-error-message/FormErrorMessage";
import { useRecoilState } from "recoil";
import { todoListState } from "../../@core/state/state";
import toast from "react-hot-toast";
import { HiPlus } from "react-icons/hi2";
const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<formData>({
    mode: "onChange",
  });
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onSumbit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (data) {
      const todo = {
        title: data.title,
        description: data.description,
        completed: false,
        id: Date.now(),
      };
      setTodoList([todo, ...todoList]);
    }
    reset();
    toast.success("Todo Created Successfully!");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-5 md:p-10">
      <h1 className="font-semibold text-[32px] hover:underline text-white rounded-md mb-10">
        Todo Application
      </h1>
      <form
        className="bg-white/10 flex flex-col md:flex-row justify-between max-w-[1150px] w-full h-auto md:h-[230px] rounded-lg shadow-md p-3"
        onSubmit={handleSubmit(onSumbit)}
      >
        <div className="flex flex-col mb-10 md:mb-0 w-full pr-0 md:pr-20 gap-12">
          <div className="mb-4 h-[30px] w-full">
            <h1 className="font-semibold text-[#D6D4D4] text-[16px] ">Title</h1>
            <input
              {...register("title", {
                required: "Title is a required field",
              })}
              className="rounded-md w-full bg-white/20 text-white h-[40px] p-2 outline-none"
            />
            <FormErrorMessage
              message={errors.title?.message as string}
              className="text-white mt-1"
            />
          </div>
          <div className="mb-4 md:h-[40px] h-[60px]  w-full ">
            <h1 className="font-semibold text-[16px] text-[#D6D4D4]">
              Description
            </h1>
            <textarea
              {...register("description", {
                required: "Description is a required field",
              })}
              rows={5}
              className="w-full resize-none text-white h-[70px] rounded-md bg-white/20 outline-none p-2"
            />
            <FormErrorMessage
              message={errors.description?.message as string}
              className="text-white"
            />
          </div>
        </div>

        <div className="h-full flex mt-3 md:mt-0 justify-end items-end">
          <button
            disabled={!isValid}
            className="disabled:bg-green-600 bg-green-500 hover:bg-green-600 text-white w-[170px] h-[40px] font-normal rounded-md p-2"
          >
            {" "}
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
                Adding
              </div>
            ) : (
              <span className="h-auto gap-2 w-full flex justify-center items-center">
                <HiPlus className="font-semibold text-lg" />
                Add Task
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
