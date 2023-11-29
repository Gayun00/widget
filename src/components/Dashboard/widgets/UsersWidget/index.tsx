import { useUsersQuery } from "../../../../queries";

function UsersWidget() {
  const { data } = useUsersQuery();
  console.log(data);
  return <div>UsersWidget</div>;
}

export default UsersWidget;
