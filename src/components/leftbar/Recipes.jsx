import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch("json-data.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5'>
            {
                recipes.map((recipe,id) => (<Recipe key={id} recipe={recipe} handleWantToCook={handleWantToCook}/>))
            }
        </div>
    );
};
Recipes.propTypes = {
    handleWantToCook: PropTypes.func
}
export default Recipes;