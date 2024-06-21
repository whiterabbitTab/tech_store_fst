import { Image } from 'antd';
import styles from '../../styles/Checkout.module.scss';

export const ProgressCheckout = ({ completeFields }: { completeFields: boolean }) => {
  return(
    <div className={styles.progress__checkout}>
      <div className='flex flex-col justify-center items-center gap-y-5 w-1/2'>
        <div className={styles.shipping}>
          <div className='relative -z-10 w-full h-[3px] bg-[#0156FF]'></div>
          <div className='flex items-center justify-center absolute z-10 rounded-full size-[40px] bg-white border-[3px] border-[#0156FF]'><Image src='../../../public/checkmark_icon.png' alt='mark' width={15} height={12} preview={false} /></div>
        </div>
        <p>Shipping</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-y-5 w-1/2'>
        <div className={styles.payment}>
          <div className={`relative -z-10 w-full h-[3px] bg-[#${completeFields === true ? '0156FF' : 'CACDD8'}]`}></div>
          <div className={`flex items-center justify-center absolute z-10 rounded-full size-[40px] bg-white border-[3px] border-[#${completeFields === true ? '0156FF' : 'CACDD8'}] font-semibold text-base`}>
            {completeFields === true ? <Image src='../../../public/checkmark_icon.png' alt='mark' width={15} height={12} preview={false} /> : 2}
          </div>
        </div>
        <p className={`text-[#${completeFields === true ? "ffffff" : "A2A6B0"}]`}>Review & Payments</p>
      </div>
    </div>
  );
};
// CACDD8
// 0156FF - blue