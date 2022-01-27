import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChild;
};

const Layout = (props: Props) => {
  return (
    <div className="mx-auto max-w-7xl h-max">{props.children}</div>
  );
};

export default Layout;
