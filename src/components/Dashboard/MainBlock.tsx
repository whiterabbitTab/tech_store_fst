import { ReactNode } from "react";
import { InfoBlock } from "./InfoBlock";
import { Link, useNavigate } from "react-router-dom";

interface IMainBlock {
  headerBlock: string;
  headersInfoBlock: string[];
  info: ReactNode[];
  namesEdit: string[];
  secondLinks?: string;
  paths: string[];
  headerLink?: {
    path: string;
    name: string;
  };
}

export const MainBlock = ({ headerBlock, headersInfoBlock, info, namesEdit, secondLinks, paths, headerLink }: IMainBlock) => {

  const navigate = useNavigate()

  return(
    <div className='flex flex-col gap-y-4 w-full'>
        <h1 className='font-bold text-lg'>{headerLink ? <>{headerBlock}<Link onClick={() => navigate(-1)} className="transition-all duration-200 hover:opacity-65 text-[#0156FF] text-base font-normal ml-5 border-b border-b-[#0156FF]" to={headerLink.path}>{headerLink.name}</Link></> : headerBlock}</h1>
        <div className='w-full h-[1px] bg-[#d4d3d3]'></div>
        <div className="flex gap-x-[117px]">
          <InfoBlock header={headersInfoBlock[0]} info={info[0]} nameEdit={namesEdit[0]} secondLink={secondLinks} path={paths[0]}/>
          <InfoBlock header={headersInfoBlock[1]} info={info[1]} nameEdit={namesEdit[1]} path={paths[1]}/>
        </div>
      </div>
  );
};