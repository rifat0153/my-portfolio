import React from "react";
import clients from "../data/clientList";
import ClientTile from "./ClientTile";

type Props = {};

const ClientSection = (props: Props) => {
  return (
    <div className="p-4">
      {/* Title and SubTitle */}
      <div className="h-2 w-12 rounded-3xl bg-theme"></div>
      <p className="py-1 text-3xl font-bold">My Clients</p>
      <p className="mt-4 text-xl text-slate-400">
        I’ve had the pleasure of working with multiple companies, designing and
      </p>
      <p className="mb-8 text-xl text-slate-400">
        implementing both frontend and backend.
      </p>

      <div className="grid grid-cols-1 gap-4 lg:gap-12 ">
        {clients.map((client) => (
          <ClientTile client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
