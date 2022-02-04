import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChild;
};

const Layout = (props: Props) => {
  return <div className="mx-auto h-max max-w-7xl pt-28">{props.children}</div>;
};

export default Layout;
