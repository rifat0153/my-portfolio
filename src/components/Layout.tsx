import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChild;
};

const Layout = (props: Props) => {
  return <div className="mx-auto max-w-5xl">{props.children}</div>;
};

export default Layout;
