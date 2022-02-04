import React from "react";

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  maxLines: number;
}

const Input: React.FC<Props> = (props: Props) => {
  return props.maxLines === 1 ? (
    <input
      className="w-full rounded-md border-2 border-slate-700 bg-input px-4 py-2 focus:outline-none focus:ring 
                 focus:ring-violet-300"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  ) : (
    <textarea
      className="w-full resize-none rounded-md border-2 border-slate-700 bg-input px-4 py-2 focus:outline-none 
               focus:ring focus:ring-violet-300"
      value={props.value}
      rows={props.maxLines}
      draggable={false}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Input;
