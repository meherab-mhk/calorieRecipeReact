import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Banner from './components/banner/Banner'
import Heading from './components/heading/Heading'
import Recipes from './components/leftbar/Recipes'
import Navbar from './components/navbar/Navbar'
import Rightbar from './components/rightbar/Rightbar'


function App() {
  const [recipe_data, setRecipe_data] = useState([]);
  const handleWantToCook = (singleRecipe) => {
    const isExist = recipe_data.find(data=>data.recipe_id == singleRecipe.recipe_id);
    if(!isExist){
      const waitRecipe = [...recipe_data,singleRecipe];
      setRecipe_data(waitRecipe);
    }
    else{
      toast("This item is already in the want to cook list!");
    }
    
  }
  //another button 
  const [recipeData, setRecipeData] = useState([]);
  const [totalMin, setTotalMin] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const handlePreparing = (item)=> {
    const removeRecipe = recipe_data.filter(data => data.recipe_id !== item.recipe_id);
    setRecipe_data(removeRecipe);
    const newItem = [...recipeData,item]
    setRecipeData(newItem);
    setTotalMin(totalMin+item.preparing_time);
    setTotalCalories(totalCalories+item.calories);
  }
  return (
    <>
    <div className='mx-4 lg:w-[1320px] lg:mx-auto mb-20'>
      <Navbar />
      <Banner />
      <Heading />
      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
          <Recipes handleWantToCook={handleWantToCook}/>
          <Rightbar recipe_data={recipe_data} handlePreparing={handlePreparing} 
          recipeData={recipeData} totalMin={totalMin} totalCalories={totalCalories}/>
      </div>
      <ToastContainer />
    </div>
      
      
    </>
  )
}

export default App
