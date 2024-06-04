import React, { useState } from 'react';
import styles from '../../styles/Footer.module.scss'
import { Link } from 'react-router-dom';
import { footer_links, footer_top } from '../../constants/footer'

export const Footer = () => {

    const [email, setEmail] = useState<string>('')
    const handleSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return(
        <footer>
            <section className={styles.footer__top}>
                {footer_top.map((el, i) => {
                    return (
                        <div key={i}>
                            <div></div>
                            <h1>{el[0]}</h1>
                            <p>{el[1]}</p>
                        </div>
                    )
                })}
            </section>
            <section className={styles.footer__buttons}>
                <div className={styles.email__block}>
                    <div>
                        <h3>Sign Up To Our Newsletter.</h3>
                        <p>Be the first to hear about the latest offers.</p>
                    </div>
                    <form onSubmit={handleSubmitEmail}>
                        <input type="text" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>
                <div className={styles.links__block}>
                    {footer_links.map((el, i) => {
                        return (
                            <div key={i}>
                                <h1>{el[0]}</h1>
                                <div>
                                    {el.slice(1).map((elem, i) => {
                                        return elem.length === 2 ? <Link key={i} to={elem[1]}>{elem[0]}</Link> : <div key={i} className='flex flex-row'><p className='mr-1'>{elem[0]}:</p><Link to={elem[2]}><span>{elem[1]}</span></Link></div>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.info__block}>
                    <hr />
                    <div className={styles.info__buttons}>
                        <div className={styles.social__media}>
                            <Link to='/'></Link>
                            <Link to='/'></Link>
                        </div>
                        <div className={styles.cards}>
                            <Link to="/"></Link>
                            <Link to="/"></Link>
                            <Link to="/"></Link>
                            <Link to="/"></Link>
                            <Link to="/"></Link>
                        </div>
                        <p className={styles.copyright}>Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                </div>
            </section>
        </footer>
    );
};
