import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IInfoBlock {
  info: ReactNode;
  header: string;
  path: string;
  secondLink?: string;
  nameEdit: string;
}

export const InfoBlock = ({ info, header, path, secondLink, nameEdit }: IInfoBlock) => {

  const navigate = useNavigate()

  return(
    <div className='flex gap-x-[118px]'>
      <div className='flex flex-col gap-y-4'>
        <h1 className="font-semibold text-base">{header}</h1>
        <div className="flex flex-col gap-y-1 mb-4">
          {info}
        </div>
        <div className="flex gap-x-6 mb-9">
          <Link onClick={() => navigate(-1)} to={path} className='transition-all duration-200 hover:opacity-65 text-[#0156FF] text-sm border-b border-b-[#0156FF]'>{nameEdit}</Link>
          {secondLink && <Link onClick={() => navigate(-1)} className="transition-all duration-200 hover:opacity-65 text-[#0156FF] text-sm border-b border-b-[#0156FF]" to={path}>{secondLink}</Link>}
        </div>
      </div>
    </div>
  );
};
