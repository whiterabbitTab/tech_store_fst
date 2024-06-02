import { Image } from 'antd';
export const HomeLogotypes = () => {

  const logotypes = ['roccat', 'msi', 'razer', 'thermaltake', 'adata', 'packard', 'gigabyte']

  return(
    <div className='flex w-full justify-between items-center'>
      {logotypes.map((logo) => {
          return (
            <div className='flex items-center justify-center py-9 px-6'>
              <Image src={`../../public/${logo}_logo_home.png`} preview={false} width={152} height={79} />
            </div>
        )})}
    </div>
  );
};
