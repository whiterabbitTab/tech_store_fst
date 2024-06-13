import { Image } from 'antd';
import { ReactNode } from 'react';

export const InfoContact = ({ image, label, info }: { image: string, label: string, info: ReactNode }) => {
  return(
    <>
      <Image src={`../../public/${image}_contact.png`} alt={image} width={30} height={30} preview={false} />
      <p className='ml-3'>
        <span>{label}:</span>
        {info}
      </p>
    </>
  );
};
