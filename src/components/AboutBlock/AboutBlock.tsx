import { Image } from 'antd';
import styles from '../../styles/About.module.scss';
import { IAbout } from '../../types/about.type';

export const AboutBlock = ({ darkMode, img, heading, text }: IAbout) => {
  
  return (
    <div className={styles.about__block} style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
      {darkMode ? (
        <>
          <div className={styles.about__text} style={{ color: 'white' }}>
            {heading}
            {text}
          </div>
          <div className={styles.about__image}>
            <Image src={img} alt='About' preview={false} className='pointer-events-none' />
          </div>
        </>
      ) : (
        <>
          <div className={styles.about__image}>
            <Image src={img} alt='About' preview={false} className='pointer-events-none' />
          </div>
          <div className={styles.about__text}>
            {heading}
            {text}
          </div>
        </>
      )}
    </div> 
  )
};