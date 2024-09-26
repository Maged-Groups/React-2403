import { useEffect, useState } from 'react';

import { BsCartDash, BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'


// redux
import { useDispatch, useSelector } from 'react-redux'
import { rdx_add_to_cart } from '../../redux/cartSlice';

export default function ProductCard({ product }) {

    const [inCart, setInCart] = useState(false)
    const [cartProduct, setCartProduct] = useState({})

    // create a reusable version from useDispatch as a normal function
    const dispatch = useDispatch();


    const { cartSlice: { cart_items, ids } } = useSelector(store => store)


    // console.log(' cart_items', cart_items)
    // console.log(' component rendered')

    useEffect(() => {
        // console.log(' useEffect fired')

        if (ids.includes(product.id)) {

            const pos = ids.indexOf(product.id)

            const cart_product = cart_items[pos];

            setInCart(true);

            setCartProduct(cart_product)
        }
    }, [cart_items])

    const CartBtns = () => {
        return <>
            {
                inCart &&
                <>
                    <button className="bg-red-500 rounded-full p-2 w-8 h-8  ">
                        <BsCartDash className='text-white' onClick={() => dispatch(rdx_add_to_cart(product))} />
                    </button>
                    <span>{cartProduct.count}</span>
                </>
            }
            <button className="bg-green-500 rounded-full p-2 w-8 h-8  ">
                <BsCartPlus className='text-white' onClick={() => dispatch(rdx_add_to_cart(product))} />
            </button>
        </>
    }




    // cart_items.forEach()


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-64 object-cover" src={product.thumbnail} alt={product.title} />
            <div className="p-6">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-700">{product.description}</p>
                <div className="mt-4 flex justify-between">
                    <Link to={`/products/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link>

                    <CartBtns />

                </div>
            </div>
        </div>
    )
}
