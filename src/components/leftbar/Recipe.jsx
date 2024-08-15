import PropTypes from 'prop-types';
const Recipe = ({recipe,handleWantToCook}) => {
    const {recipe_image,recipe_name,
    short_description,ingredients,
    preparing_time,calories} = recipe;
    
    
    return (
        <div className="col-span-1">
            <div className="card border h-full">
                <figure className="px-5 pt-5">
                    <img src={recipe_image} alt={recipe_name} className="rounded-xl w-full h-[230px]" />
                </figure>
                <div className="card-body p-5">
                    <h2 className="mb-3 card-title font-semibold lexend text-xl f-color">{recipe_name}</h2>
                    <p className="mb-3 fira text-base font-normal text-[#878787]">{short_description}</p>
                    <hr />
                    <p className="lexend font-medium text-lg text-[#282828]">Ingredients: {ingredients.length}</p>
                    <ul className="list-disc list-inside">
                        {
                            // eslint-disable-next-line react/prop-types
                            ingredients.map((ingredient,id)=> (<li key={id} className="mb-3 fira text-base font-normal text-[#878787]">{ingredient}</li>))
                        }
                    </ul>
                    <hr />
                    <div className="mb-3 flex justify-between items-center fira font-normal text-base text-[#282828]">
                        <div className="flex gap-4">
                            <img src="/clock-icon.svg" alt="" />
                            <span>{preparing_time} min</span>
                        </div>
                        <div className="flex gap-4">
                            <img src="/flame-icon.svg" alt="" />
                            <span>{calories} calorie</span>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleWantToCook(recipe)} className="btn bg-green-400 rounded-3xl text-black hover:bg-green-400 hover:text-black">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWantToCook: PropTypes.func
}
export default Recipe;