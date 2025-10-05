import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../axios/apiClient'
import ProductList from '../components/ProductList/ProductList'
function Search() {
    const {title} = useParams()
    const [box, setBox] = useState([])

    async function getMealsBySearch(){
        try {
            const res = await apiClient.get(`/search.php?s=${title}`)
            console.log(res);
            setBox(res.data.meals)
        } catch (error) {
            console.log(error);
            
        }        
    }
    useEffect(() => {
        getMealsBySearch()
    }, [])
  return (
    <div>
        <ProductList data={box}/>
    </div>
  )
}

export default Search
