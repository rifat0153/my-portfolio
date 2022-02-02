import React from "react";

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  maxLines: number;
}

const Input: React.FC<Props> = (props: Props) => {
  return props.maxLines === 1 ? (
    <input
      className="bg-input w-full px-4 py-2 border-2 border-slate-700 rounded-sm focus:outline-none focus:ring 
                 focus:ring-violet-300"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  ) : (
    <textarea
      className="bg-input w-full px-4 py-2 border-2 border-slate-700 rounded-sm focus:outline-none focus:ring 
               focus:ring-violet-300"
      value={props.value}
      rows={props.maxLines}
      draggable={false}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Input;
