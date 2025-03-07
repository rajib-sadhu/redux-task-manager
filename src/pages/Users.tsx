import AddUser from "@/components/module/users/AddUser";
import { Button } from "@/components/ui/button";
import { removeUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";

const Users = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-10 px-4">
      <div className="flex justify-end items-center gap-5">
        <h1 className="text-xl font-semibold mr-auto">Users</h1>
        <div>
          <AddUser />
        </div>
      </div>
      <div className="mt-5 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
        {users.map((v) => {
          return (
            <div
              key={v.id}
              className="border-2 p-4 rounded-md flex justify-between items-center"
            >
              <h1 className="text-xl">
                Name: <span className="font-semibold">{v?.name}</span>
              </h1>
              <Button
                variant="link"
                className="p-2 text-red-500 cursor-pointer"
                title="Delete"
                onClick={() => dispatch(removeUser(v?.id))}
              >
                <Trash2 />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
