import { FaMinus, FaPlus } from "react-icons/fa";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "@/components/ui/button";
function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (num: number) => {
    dispatch(increment(num));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="text-black grid place-content-center h-screen">
      <div className="">
        <h1 className="text-center text-xl uppercase mb-4 font-semibold">
          Counter with Redux
        </h1>
        <div className="flex justify-around gap-3 items-center p-3 border">
          <button
            className="bg-red-500 px-3 rounded-md py-3 cursor-pointer"
            onClick={handleDecrement}
          >
            <FaMinus />
          </button>
          <p className="text-2xl font-bold">{count}</p>
          <button
            className="bg-green-500 px-3 rounded-md py-3 cursor-pointer"
            onClick={() => handleIncrement(1)}
          >
            {" "}
            <FaPlus />
          </button>
          <button
            className="bg-green-500 px-3 rounded-md py-3 cursor-pointer flex items-center gap-2"
            onClick={() => handleIncrement(5)}
          >
            <span className="text-xl font-semibold">5</span> <FaPlus />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
