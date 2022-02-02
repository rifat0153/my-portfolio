import React, { useEffect, useState } from "react";
import Input from "./Input";

type Props = {};

const ContactSection = (props: Props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="mt-10 md:mt-20 p-4 pb-12">
      <div className="h-2 w-12 bg-theme rounded-3xl"></div>
      <p className="text-3xl py-1 font-bold">Hire me</p>

      {/* First Col */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-24 pb-8 text-slate-100">
          <div className="text-xl mb-10 font-bold">
            <p className="mb-4">Name</p>
            <Input value={name} onChange={setname} maxLines={1} />
          </div>

          <div className="text-xl mt-4 mb-10 font-bold">
            <p className="mb-4">Email</p>
            <Input value={email} onChange={setemail} maxLines={1} />
          </div>

          <div className="text-xl mt-4 mb-0 font-bold">
            <p className="mb-4">Message</p>
            <Input
              value={message}
              onChange={setmessage}
              maxLines={4}
            />
          </div>
        </div>

        {/* Second Col */}
        <div>Second</div>
      </div>

      <button className="px-6 py-2 bg-theme font-bold text-lg">
        Send it
      </button>
    </div>
  );
};

export default ContactSection;
