import React from "react";

export interface Client {
  name: string;
  image: string;
  tags: string[];
  description: string;
}

type _Props = {
  client: Client;
};

const ClientTile: React.FC<_Props> = (props: _Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 py-20 gap-4 w-full border-2 border-gray-700">
      {/* First Column */}
      <div className="col-span-2 flex justify-center items-center">
        <img
          className="object-cover h-[100px] w-[100px]  rounded-full "
          src={props.client.image}
          alt={props.client.description}
        />
      </div>

      {/* Second Column */}
      <div className="col-span-4 flex flex-col justify-center  p-4 ">
        <p className="text-3xl font-bold"> {props.client.name} </p>

        <div className="flex flex-wrap py-4">
          {props.client.tags.map((tag) => (
            <p className="py-1 px-4 mb-2 mr-2 gap-2 bg-badge text-sm rounded-sm">
              {tag}
            </p>
          ))}
        </div>

        <p className="mt-4 text-lg text-slate-400">
          {" "}
          {props.client.description}{" "}
        </p>
      </div>
    </div>
  );
};

export default ClientTile;
