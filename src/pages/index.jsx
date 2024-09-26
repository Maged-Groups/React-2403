import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'

import LoadingFullScreen from '../components/LoadingFullScreen'

// pages
import Home from './Home';
import About from './About';


import Product from './Product';

import User from './User';

import P404 from './P404';
// import Products from './Products';

import { useSelector } from 'react-redux';

const Products = lazy(() => import('./Products'))
const Users = lazy(() => import('./Users'))

export default function Pages() {

  const { loggedin } = useSelector(store => store.userSlice)

  return (
    <Suspense fallback={<LoadingFullScreen />}>
      <div className="p-4">
        <Routes>
          <Route path='/about' element={<About />} />

          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />

          {
            loggedin && <>
              <Route path='/Users' element={<Users />} />
              <Route path='/Users/:id' element={<User />} />
            </>
          }

          <Route path='/' element={<Home />} />
          <Route path='*' element={<P404 />} />
        </Routes>
      </div >
    </Suspense>
  )
}
