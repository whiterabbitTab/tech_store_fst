import { Image } from 'antd';
import styles from '../../styles/Basket.module.scss';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useGetProductByIdQuery } from '../../store/api/productApi';
import { useUpdateBasketMutation, useGetUserQuery } from '../../store/api/userApi';
import { IBasket, IUser } from '../../types/users.type';
import { useTypedSelector } from '../../hooks/redux';

export const BasketItem = ({ id_product, count }: { id_product: string, count: number } ) => {

  const isauth = useTypedSelector(state => state.user.slice(1,-1))
  const [countProducts, setCountProducts] = useState<string>(String(count))
  const { data: product, isLoading, isSuccess, isError } = useGetProductByIdQuery(id_product, {
    pollingInterval: 3000
  })
  const { data } = useGetUserQuery(isauth)
  const [user, setUser] = useState<IUser>()
  const [newbasket, setBasket] = useState<IBasket[]>()
  const [changeCount] = useUpdateBasketMutation()

  useEffect(() => {
    setUser({...user, basket: newbasket})
  }, [newbasket])

  useEffect(() => {
    user && changeCount(user)
  }, [user])

  useEffect(() => {
    setUser(data)
  }, [])

  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    Number(e.target.value) > 1 ? setCountProducts(e.target.value) : setCountProducts('1')
    let updatedBasket: IBasket[] = user?.basket.map((item) => {
      if (item.id === id_product) {
        return {...item, count: Number(e.target.value)}
      }
      return item
    })
    setBasket(updatedBasket)
  }

  const handleDeleteProduct = () => {
    setBasket(user?.basket.filter((prod) => prod.id !== id_product))
  }

  return(
    <>
      {
        isLoading ? (<div>Loading</div>) : isError ? (<span>Error</span>) : isSuccess ? (
          <>
            <div className={styles.product__preview}>
            <Image src={product.image} alt='basket image' preview={false} width={120} height={120} />
            <p>{product.name}</p>
          </div>
          <h2 className='font-semibold text-base border-t-2 py-[25px]'>{`$${product.price}`}</h2>
          <div className='w-[70px] h-[50px] py-[25px] border-t-2'>
            <input min={1} value={countProducts} type="number" onChange={(e) => handleChangeCount(e)}></input>
          </div>
          <div className='flex justify-between w-[182px] border-t-2 -translate-x-6 pl-6'>
            <h2 className='font-semibold text-base py-[25px]'>{`$${product.price * Number(countProducts)}`}</h2>
            <div className='flex flex-col mt-6 pr-2 justify-between h-[60px]'>
              <button onClick={handleDeleteProduct} className='size-[26px] border-2 rounded-full border-[#CACDD8]' style={{ background: 'url(../../../public/krestik.png) center center no-repeat' }}></button>
              <button className='size-[26px] border-2 rounded-full border-[#CACDD8]' style={{ background: 'url(../../../public/pen.png) center center no-repeat' }}></button>
            </div>
          </div>
        </>
        ) : (<div>NotFound</div>)
      }
    </>
  );
};
