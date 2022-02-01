import React, { useEffect, useState } from "react";

type Props = {};

const ContactSection = (props: Props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="mt-10 md:mt-20 p-4">
      <div className="h-2 w-12 bg-theme rounded-3xl"></div>
      <p className="text-3xl py-1 font-bold">Hire me</p>

      <div className="py-24 text-slate-100">
        <Input value={name} onChange={setname} />
      </div>
    </div>
  );
};

const Input = (props: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      className="bg-input px-4 py-2 rounded-sm focus:outline-none focus:ring 
                 focus:ring-violet-300"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default ContactSection;
