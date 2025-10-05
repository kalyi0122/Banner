import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import apiClient from '../axios/apiClient';
import ProductList from '../components/ProductList/ProductList';

const MealLetter = () => {
    const {letter} = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    async function fetchMealsByLetter() {
        try {
            setLoading(true);
            const res = await apiClient.get(`/search.php?f=${letter}`);
            setMeals(res.data.meals);
            setLoading(false);
            return res.data.meals;
        } catch (error) {
            error.log(error);
            setError("Failed to fetch meals");
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchMealsByLetter();
    },[])
console.log(meals);

  return (
    <div style={{textAlign:"center", fontSize:"30px", marginTop:"20px"}}>
      <h3>Meals starting with "{letter}"</h3>
      {/* {meals?.length === 0 ? <h2>No meals found for this letter.</h2>:
      loading ? <h2>Loading...</h2> :
      error ? <h2>{error}</h2> : null
      } */}
        <ProductList data={meals}/>
        {/* {letter} */}
    </div>
  )
}

export default MealLetter