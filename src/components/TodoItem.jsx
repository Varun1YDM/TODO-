
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center justify-center">
        {!todo.completed && (
          <button
            className="text-sm  rounded mt-1"
            onClick={() => dispatch(markCompleted(index))}
          >
            <MdCheckBoxOutlineBlank size={24} />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm mt-1  rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <MdOutlineCheckBox size={24} />
          </button>
        )}
        <span className="mr-4 text-gray-500 ml-2">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8 flex items-center">
        <button
          className="mr-2 text-sm bg-blue-400 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
