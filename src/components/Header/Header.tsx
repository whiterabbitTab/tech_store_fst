import { useEffect, useState } from 'react';
import { userApi } from '../../store/api/userApi';
import styles from '../../styles/Header.module.scss'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/redux';
import { Image } from 'antd';

export const Header = () => {

    const isauth = useTypedSelector(state => state.user.slice(1, -1))
    const { data: user } = userApi.useGetUserQuery(isauth)
    const userIcon = user === undefined ? 'None' : user.user_icon

    const lst_links = [[<Image src='../../../public/logo.png' alt='Logo' preview={false} width={23} height={28} />, '/'], ['Laptops', 'catalog/laptop'], ['Desktop PCs', 'catalog/desktop'], ['Networking Devices', 'catalog/netdev'], ['Printers & Scanners', 'catalog/scan'], ['PC Parts', 'catalog/pcparts'], ['All Other Products', 'catalog/other'], ['Repairs', '/'], ['Our Deals', '/']] 
    
    useEffect(() => {
        if (userIcon === 'None') {
            let user_link = document.getElementsByClassName(styles.user)[0] as HTMLLinkElement
            if (isauth === 'not') {
                user_link.style.cssText = `background: url(../../../public/login_icon.png) center center no-repeat; background-size: cover; border-radius: 0;`
            } else {
                user_link.style.cssText = `background: url(../../../public/empty_user_icon.png) center center no-repeat; background-size: cover; border-radius: 0;`
            }
        }
    }, [isauth])
    if (userIcon !== 'None') {
        let user_link = document.getElementsByClassName(styles.user)[0] as HTMLLinkElement
        user_link.style.cssText = `background: url(../../../${userIcon}) center center no-repeat; background-size: cover`
    }

    return(
        <header className={styles.header}>
            <section className={styles.header__info}>
                <div>
                    <p><span>Mon-Thu: </span>9:00 AM - 5:30 PM</p>
                </div>
                <div>
                    <p><span>Visit our showroom in 1234 Street Adress City Address, 1234</span><Link to='/contact'>Contact us</Link></p>
                </div>
                <div>
                    <p>Call Us: (00) 1234 5678</p>
                    <Link to='/'></Link>
                    <Link to='/'></Link>
                </div>
            </section>
            <section className={styles.header__links_bg}>
                <section className={styles.header__links}>
                    <div className={styles.pages__links}>
                        {lst_links.map((el, i) => {
                            return (
                                <Link className='' key={i} to={el[1]}>{el[0]}</Link>
                            )
                        })}
                    </div>
                    <div className={styles.user__links}>
                        <Link to="/" className={styles.search}></Link>
                        {user && user.basket && user.basket.length > 0 ? <Link to="/basket" className={styles.basket}><div className='relative left-[18px] flex items-center justify-center size-4 rounded-full bg-[#0156FF] text-white font-bold text-[10px]'>{user.basket.length}</div></Link> : <Link to="/basket" className={styles.basket}></Link>}
                        <Link to={`${isauth === 'not' ? '/login' : `user/${isauth}/main`}`} className={styles.user}></Link>
                    </div>
                </section>
            </section>
        </header>
    );
};
