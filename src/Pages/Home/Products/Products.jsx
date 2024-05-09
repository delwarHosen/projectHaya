import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AllProduct from '../../Shared/AllProduct/AllProduct';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='pt-28'>
            <SectionTitle
                subHeading={'Haya Collection'}
                heading={'Our Product'}
                paragraph={'Nullam gravida, dolor ac ultrices lobortis, mi dolor justo'}
            ></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5 my-5 m-14 justify-center items-center'>
                {
                    products.map(product => <AllProduct
                        key={product._id}
                        product={product}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Products;