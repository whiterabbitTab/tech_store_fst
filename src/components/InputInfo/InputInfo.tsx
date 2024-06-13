import { ReactNode } from "react";

export const InputInfo = ({ type, label, placeholder, name }: { type: string, label: ReactNode, placeholder: string, name: string }) => {
  return(
    <div className={`mt-3 flex flex-col gap-y-4 h-20`}>
      {label}
      <input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
