import { IProduct } from '../../types/products.type';
import { Image, Carousel, InputNumber } from 'antd';
import styles from '../../styles/ProductPage.module.scss'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { About } from './About';
import { Details } from './Details';
import { Specs } from './Specs';
import { useEffect, useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { CarouselBlock } from '../CarouselBlock/CarouseBlock';
import { CardsProduct } from '../CardsProduct/CardsProduct';
import { lst_bg, lst_cards } from '../../constants/product';
import { IAboutPage, IDetailsPage, ISpecsPage } from '../../types/productCard.type';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { basketSlice } from '../../store/userSlice/basket.slice';
import { useGetUserQuery } from '../../store/api/userApi';

export const Product = ({ product }: {product: IProduct}) => {

  const isauth = useTypedSelector(state => state.user.slice(1, -1))
  const { data: user } = useGetUserQuery(isauth)
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const [count, setCount] = useState(1)
  const handleAddCart = (e: MouseEvent) => {
    user && dispatch(basketSlice.actions.addToBasket({ id: product.id, count: 1 }))
  }

  useEffect(() => {
    user && user.basket.map((prod) => {dispatch(basketSlice.actions.addToBasket(prod))})
  }, [])

  const about: IAboutPage = { name: product.name, description: product.description, colors: product.colors, image_about: product.image_about }
  const info: IDetailsPage  = { name: product.name, details: product.details, image_about: product.image_about }
  const specs: ISpecsPage = { name: product.name, specs: product.specs, image_about: product.image_about }

  return(
    <>
      <div className={styles.filter__block}>
        <div className={styles.info__block}>
          <NavLink to={`/product/${product.id}/about`} className={({ isActive }) => isActive ? `${styles.btn__active} ${styles.btn__filter}` : styles.btn__filter}>About Product</NavLink>
          <NavLink to={`/product/${product.id}/details`} className={({ isActive }) => isActive ? `${styles.btn__active} ${styles.btn__filter}` : styles.btn__filter}>Details</NavLink>
          <NavLink to={`/product/${product.id}/specs`} className={({ isActive }) => isActive ? `${styles.btn__active} ${styles.btn__filter}` : styles.btn__filter}>Specs</NavLink>
        </div>
        <div className={styles.buttons}>
          <div className={styles.sale__info}>
            <p className="flex text-center font-normal text-sm w-[140px]">On Sale from<span className='ml-3 text-center font-semibold text-sm'>{product.price}$</span></p>
            <InputNumber className='border-none bg-[#F5F7FF] hover:bg-[#F5F7FF]' defaultValue={count} min={1} onChange={(e) => setCount(e)} />
          </div>
          <CustomButton onClick={user?.basket.filter((prod) => prod.id === product.id).length === 0 ? handleAddCart : () =>  navigate('/basket')} title={user?.basket.filter((prod) => prod.id === product.id).length === 0 ? 'Add to Cart' : 'Go to basket'} className='transition-all duration-200 hover:opacity-80 text-center px-3 py-3 text-white font-semibold rounded-[50px] bg-main_blue w-[131px]'/>
          <CustomButton width={72} height={18} icon='../../../public/paypal_text.png' className='transition-all duration-200 hover:opacity-80 rounded-[50px] bg-yellow-400 w-[131px]'/>
        </div>
      </div>
      <Routes>
        <Route path={`/about`} element={<About about={about} />} />
        <Route path={`/details`} element={<Details info={info} />} />
        <Route path={`/specs`} element={<Specs specs={specs} />} />
      </Routes>
      <Carousel autoplay autoplaySpeed={6000} className={styles.intel__carousel}>
        {lst_bg.map((el, i) => {
          return <CarouselBlock key={i} text={el.text} bg={el.image} remark={el.remark} heading={el.heading} />
        })}
      </Carousel>
      <div className='flex flex-col justify-center items-center w-full h-[407px] gap-y-5' style={{ background: 'url(../../public/support_bg.png) center center no-repeat' }}>
        <Link className={styles.sup__btn} to='#'><p>Product Support</p><Image src='../../public/arrow_right.png' alt='Arrow right' preview={false} /></Link>
        <Link className={styles.sup__btn} to='#'><p>FAQ</p><Image src='../../public/arrow_right.png' alt='Arrow right' preview={false} /></Link>
        <Link className={styles.sup__btn} to='#'><p>Our Buyer Guide</p><Image src='../../public/arrow_right.png' alt='Arrow right' preview={false} /></Link>
      </div>
      <div className={styles.features__block}>
        <div className='flex flex-col items-center gap-y-16'>
          <div className='flex flex-col items-center gap-y-5'>
            <h1 className='font-medium text-[38px]'>Features</h1>
            <p className='text-center w-[418px]'>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
          </div>
          <div className='flex gap-x-[47px] w-[65%]'>
            {lst_cards.map((card, i) => {
              return <CardsProduct key={i} image={card.image} text={card.text} />
            })}
          </div>
        </div>
      </div>
    </>
  );
};
