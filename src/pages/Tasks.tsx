import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  return (
    <div className="mt-10 px-4">
      <div>
        <h1 className="text-xl font-semibold uppercase">Tasks</h1>
      </div>
      <div className="mt-5 space-y-5">
        {tasks.map((task) => {
          return <TaskCard key={task?.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
