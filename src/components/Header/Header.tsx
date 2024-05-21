import { useEffect } from 'react';
import { userApi } from '../../store/api/userApi';
// import styles from "@styles/Header.module.scss"
import styles from '../../styles/Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {

    const { data } = userApi.useGetUserQuery('ui1')
    const lst_links = [['', '/'], ['Laptops', '/'], ['Desktop PCs', '/'], ['Networking Devices', '/'], ['Printers & Scanners', '/'], ['PC Parts', '/'], ['All Other Products', '/'], ['Repairs', '/'], ['Our Deals', '/']] 
    const userIcon = data == undefined ? 'None' : data.user_icon

    useEffect(() => {
        if (userIcon === 'None') {
            let user_link = document.getElementsByClassName(styles.user)[0] as HTMLLinkElement
            user_link.style.cssText = `background: url(src/images/header/login_icon.png) center center no-repeat; background-size: cover; border-radius: 0;`
        }
    }, [])

    if (userIcon !== 'None') {
        let user_link = document.getElementsByClassName(styles.user)[0] as HTMLLinkElement
        user_link.style.cssText = `background: url(${userIcon}) center center no-repeat; background-size: cover`
    }

    return(
        <header className={styles.header}>
            <section className={styles.header__info}>
                <div>
                    <p><span>Mon-Thu: </span>9:00 AM - 5:30 PM</p>
                </div>
                <div>
                    <p><span>Visit our showroom in 1234 Street Adress City Address, 1234</span><Link to='/'>Contact us</Link></p>
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
                                <Link key={i} to={el[1]}>{el[0]}</Link>
                            )
                        })}
                    </div>
                    <div className={styles.user__links}>
                        <Link to="/" className={styles.search}></Link>
                        <Link to="/" className={styles.basket}></Link>
                        <Link to="/" className={styles.user}></Link>
                    </div>
                </section>
            </section>
        </header>
    );
};
