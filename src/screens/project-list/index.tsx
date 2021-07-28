import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import React from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import * as qs from "qs";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param, 500);
  const [users, setUsers] = useState([]);
  const client = useHttp();

  /* param变化时项目请求列表的接口 */
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
    // fetch返回一个promise,所以用then处理
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  );
};
