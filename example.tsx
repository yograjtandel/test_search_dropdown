import React from "react";
import Select from "react-select";
import { dogOptions } from "./docs/data";

const options = dogOptions;

export default () => {
  const [options1, setOption1] = React.useState(options);
  const [options2, setOption2] = React.useState(options);

  return (
    <>
      <Select
        isMulti
        options={options1}
        onChange={(v1) => {
          setOption2(options.filter((o2) => !v1.includes(o2)));
        }}
      />
      <div style={{ height: 30 }} />
      <Select
        isMulti
        options={options2}
        onChange={(v2, a) => {
          setOption1(options.filter((o1) => !v2.includes(o1)));
        }}
      />
    </>
  );
};
