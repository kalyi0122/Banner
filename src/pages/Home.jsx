import React,{useEffect, useState} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import apiClient from '../axios/apiClient'
import Alfavit from '../components/Alfavit/Alfavit'
function Home() {
  const [products, setProduct] = useState([])
  async function getMeals() {
    try {
      const res = await apiClient.get(`/search.php?s=a`)
      console.log(res);
      setProduct(res.data.meals)
      
      
    } catch (error) {
      console.log(error);

      
    }
  }
  useEffect(() => {
    getMeals()
  },[])
  return (
    <div>
    <Banner/>
    <ProductList data={products}/>
    <Alfavit/>
        </div>
  )
}

export default Home
