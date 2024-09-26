import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


export default function Product() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  // console.log('Before useEffect')

  useEffect(() => {
    // console.log('useEffect fired')

    fnc_get_product()

    // console.log('useEffect finished')
  }, [])

  // console.log('After useEffect')


  // console.log('Product Component Rendered')


  // const product_api = `https://dummyjson.com/products/${id}`;
  const product_api = 'https://dummyjson.com/products/' + id;

  // console.log(product)


  const fnc_get_product = async () => {
    // console.log('fnc_get_product fired')

    const res = await fetch(product_api);

    const data = await res.json();

    if (res.status === 200) {

      // console.log(data)

      setProduct(data);
    } else {
      setProduct(false);
    }

    // console.log(res)



  }

  // If Null = Not yet fetched

  if (product === null) {
    return <span>Loading...</span>
  }


  // If Fasle = 404 (product not found)
  if (product === false) {
    return <div className='p-4 bg-red-400 text-red-900 text-center'>Product not found</div>
  }


  // If product found

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{product.title}</h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">

              <p className="text-sm uppercase">{product.category}</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • {product.reviews.length} reviews</p>
          </div>
        </div>

        <div>
          <img src={product.thumbnail} alt="" />
        </div>


        <div className="dark:text-gray-800">
          <p>{product.description}</p>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {
            product.tags.map((tag, i) =>
              <a key={i} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>
            )
          }
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
