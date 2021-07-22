import { useState } from "react";

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  return (
    <form action="">
      <div>
        {/* setParam(Object.assign({}, param, {name:evt.target.value}))
         */}
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </div>
    </form>
  );
};
