import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "kbhbkc",
      title: "Initial frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-11",
      isComplete: false,
      priority: "high",
    },
    {
      id: "sfasafg",
      title: "Github push",
      description: "Github push front end",
      dueDate: "2025-11",
      isComplete: false,
      priority: "medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
