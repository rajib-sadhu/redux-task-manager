import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { Edit2, Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            title={task.priority}
            className={cn("size-3 rounded-full", {
              "bg-green-500": task?.priority === "low",
              "bg-yellow-500": task?.priority === "medium",
              "bg-red-500": task?.priority === "high",
            })}
          ></div>
          <h1 className={task.isCompleted ? "line-through" : ""}>
            {task?.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-2 text-green-500">
            <Edit2 />
          </Button>
          <Button
            variant="link"
            onClick={() => dispatch(deleteTask(task?.id))}
            className="p-2 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task?.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task?.id))}
          />
        </div>
      </div>
      <p className="mt-5 ps-5">{task?.description}</p>
    </div>
  );
};

export default TaskCard;
