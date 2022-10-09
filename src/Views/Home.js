import React, { useEffect, useState} from 'react'
import HelloWorld from '../Components/HelloWorld'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home(){

  const { id } = useParams()
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
  const [products, setProducts] = useState({
                      loading: false,
                      data: null,
                      error: false})


  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url)
      .then(response => {
        setProducts({
        loading: false,
        data: response.data,
        error:false})
  })
      .catch(error => setProducts({
        loading: false,
        data: null,
        error: true
      })
    )
}, [url])

let content = null

if(products.error) {
  content = <p>There was an error. Please refresh or try again later.</p>
}

if(products.loading) {
  content = <Loader/>
}

if(products.data) {
  content = products.data.map((product) =>
    <ProductCard product = {product}/>)
}



return(
  <div>
    <h1 className="font-bold text-2xl">Bestsellers</h1>
   {content}
  </div>
)
}

export default Home
