import {
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { db } from "../firebase-config";
import Input from "./Input";

type Props = {};

interface Query {
  name: string;
  email: string;
  message: string;
  status: "pending" | "approved";
}

const ContactSection = (props: Props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async () => {
    const messageColl = collection(db, "messages");

    const docRef = doc(messageColl, "/", email);
    const docSnap = await getDoc(docRef);

    const data = docSnap.data() as Query | undefined;

    if (docSnap.exists() && data?.status === "pending") {
      alert("Your query is already registered");
    } else {
      await setDoc(docRef, {
        name,
        email,
        message,
        status: "pending",
        createdAt: Timestamp.now(),
      });
      alert("Your message is received");
    }

    setname("");
    setemail("");
    setmessage("");
  };

  function openInNewTab(url: string) {
    window.open(url, "_blank")?.focus();
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="mt-10 md:mt-20 p-4 pb-12">
      <div className="h-2 w-12 bg-theme rounded-3xl"></div>
      <p className="text-3xl py-1 font-bold">Hire me</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 pb-8 text-slate-100">
        {/* First Col */}
        <div className="">
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

          <button
            className="px-6 py-2 my-2 lg:my-6 bg-theme font-bold text-lg"
            onClick={handleSubmit}
          >
            Send it
          </button>
        </div>

        {/* Second Col */}
        <div className="px-2 lg:px-24 py-10 text-lg text-secondary">
          <p className="">+4474380-75886</p>
          <p className="mt-2 underline">rifat0153@gmail.com</p>

          <div className="flex pt-24 space-x-8">
            <FaGithub
              className="h-10 w-10 hover:scale-110 transform ease-in-out duration-300"
              color="white"
              onClick={() =>
                openInNewTab("https://github.com/rifat0153")
              }
            />
            <FaLinkedin
              className="h-10 w-10 hover:scale-110 transform ease-in-out duration-300"
              color="white"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/mahbubur-rahman-988508172/"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
