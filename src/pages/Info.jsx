import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import apiClient from '../axios/apiClient';
function Info() {
  const {id} = useParams()
  const [food, setFood] = useState([]);
  const getMeals = async () => {
    try {
      const res = await apiClient.get(`/lookup.php?i=${id}`)
      setFood(res.data.meals)
      return res.data.meals;

    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect (() =>{getMeals()},[])
  console.log(food);
  return (
    <div>
      <h2>{id}</h2>
      {
        food[0]?.strCategory
      }
      <h3>{food[0]?.strArea}</h3>
      <img src={food[0]?.strMealThumb} alt="" />
    </div>
  )
}

export default Info
