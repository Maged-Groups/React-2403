import ProductCard from "../components/products/ProductCard";

// redux
import store from '../redux'


let products = null;

try {

  const products_api = 'https://dummyjson.com/auth/products';


  const token = store.getState().userSlice.user.accessToken;


  const init = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }

  // console.log(products_api);

  const res = await fetch(products_api, init);

  // console.log(res);

  const data = await res.json();



  if (res.status === 200 && data.products) {
    products = data.products;
  } else {
    products = false;
  }
} catch (e) {
  console.log('error', e);
  products = 'unauthorized';
}

export default function Products() {

  if (products === null)
    return <div className="text-center text-3xl my-3">Loading products....</div>


  if (products === 'unauthorized')
    return <div className="text-center text-red-600 text-3xl my-3">You are not authorized to get this resources</div>



  if (products === false || Array.isArray(products) === false)
    return <div className="text-center text-3xl my-3">No products found</div>

  // console.log(products);


  return (
    <div>

      <h1 className="text-center text-6xl my-3 uppercase font-extrabold">Products</h1>

      <div className="flex flex-wrap gap-8 justify-center">

        {
          products.map(product =>
            <ProductCard key={product.id} product={product} />
          )

        }
      </div>
    </div>
  )
}
