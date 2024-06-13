import { useLocation } from 'react-router-dom';
import styles from '../../styles/Contact.module.scss';
import { InputInfo } from '../../components/InputInfo/InputInfo';
import { contact__form } from '../../constants/contact.constants';
import { InfoContact } from '../../components/InfoContact/InfoContact';
import { contactInfo } from '../../constants/contact.constants';

export const Contact = () => {

  const location = useLocation()

  return(
    <div className={styles.contact__page}>
      <form className={styles.forms__block}>
        <div className='flex flex-row text-xs font-semibold'>Home<span className='mx-2 text-[#0156FF]'>{">"}</span>{location.pathname.replace('/', '').replace('c', 'C')}</div>
        <h1>Contact Us</h1>
        <p><span>We love hearing from you, our Shop customers.</span><span>Please contact us and we will make sure to get back to you as soon as we possibly can.</span></p>
        <div className={styles.contact__info}>
          {contact__form.map((el, i) => {
            return <InputInfo key={i} placeholder={el.placeholder} type={el.type} label={el.label} name={el.name} />
          })}
        </div>
        {/* <InputInfo placeholder={'Jot us a note and we’ll get back to you as quickly as possible'} type={'text'} label={<label>What’s on your mind? <span>*</span></label>} name={'message'} height={236} />
         */}
        <div className='mt-3 flex flex-col gap-y-4 h-[236px]'>
          <label htmlFor="message">What’s on your mind? <span>*</span></label>
          <textarea className='min-h-[200px]' name="message"></textarea>
        </div>
        <button type='submit' className={styles.submit__button}>Submit</button>
      </form>
      <div className={styles.info__block}>
          {contactInfo.map((el, i) => {
            return (
              <div className={styles.info__card}>
                <InfoContact key={i} info={el.info} image={el.image} label={el.label} />
              </div>
            ) 
          })}
      </div>
    </div>
  );
};