import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../store/api/productApi';
import { Product } from './Product';

export const ProductPage = () => {
  
  const { id } = useParams<string>()
  if (id !== undefined) {
    const { data: product, isLoading, isSuccess, isError } = useGetProductByIdQuery(id)
    return(
      <div className='flex flex-col w-full'>
        {
          isLoading ? (<div>Loading</div>) : isError ? (<div>Error</div>) : isSuccess ? (
            <Product product={product} />
          ) : (<div>NotFound</div>)
        }
      </div>
    );
  } else {
    return (
      <div>Not Found</div>
    )
  }
};
