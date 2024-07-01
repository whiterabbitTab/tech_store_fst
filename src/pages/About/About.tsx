import { aboutInfo } from '../../constants/about.constants';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';
import styles from '../../styles/About.module.scss';
import { Reviews } from '../../components/Reviews/Reviews';

export const About = () => {
  return(
    <div className={styles.about__page}>
      <div className='flex flex-row text-xs font-semibold w-[73%] mx-auto'>Home<span className='mx-2 text-[#0156FF]'>{">"}</span>{location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)}</div>
      <h1>About Us</h1>
      <div className={styles.about__blocks}>
        {aboutInfo.map(info => 
          <AboutBlock darkMode={info.darkMode} heading={info.heading} text={info.text} img={info.img} key={info.img} />
        )}
      </div>
      <Reviews styles={styles} />
    </div>
  );
};

