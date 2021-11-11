import { useFetch, DateInterval } from "@better-typed/react-fetch";

import { getUsers } from "server/user.api";

export const GetUsersComponent = () => {
  const { data, error, loading } = useFetch(getUsers, {
    refresh: true,
    refreshTime: DateInterval.second * 3,
  });

  return (
    <div>
      <h1>Component</h1>
      {loading && <div>Loading...</div>}
      {data && <div>HAS DATA!!!</div>}
      {error && <div>Has error!!!</div>}
    </div>
  );
};