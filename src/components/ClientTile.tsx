import React from "react";

export interface Client {
  name: string;
  image: string;
  tags: string[];
  description: string;
}

const ClientTile = (props: { client: Client }) => {
  return (
    <div className="grid grid-cols-5 gap-4  h-48 w-full border-2 border-gray-700">
      <div className="col-span-1 flex justify-center items-center">
        <img
          className="object-cover w-1/2 h-1/2 rounded-full "
          src={props.client.image}
          alt={props.client.description}
        />
      </div>
      <div className="col-span-4">col 2</div>
    </div>
  );
};

export default ClientTile;
