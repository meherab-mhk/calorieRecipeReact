import PropTypes from 'prop-types';
import CurrentlyCooking from "./CurrentlyCooking";
import WaitingForCook from "./WaitingForCook";
const Rightbar = ({recipe_data,handlePreparing,recipeData,totalMin,totalCalories}) => {
    
    return (
        <div className="col-span-2">
            <div className="border p-6 rounded-3xl lg:w-[550px]">
                <h3 className="mb-3 lexend font-semibold text-2xl text-[#282828] text-center">Want to Cook: {recipe_data.length}</h3>
                <hr />
                <WaitingForCook  recipe_data={recipe_data} handlePreparing={handlePreparing}/>
                <h3 className="my-3 lexend font-semibold text-2xl text-[#282828] text-center">Currently cooking: {recipeData.length}</h3>
                <hr />
                <CurrentlyCooking recipeData={recipeData} totalMin={totalMin} totalCalories={totalCalories}/>
            </div>
        </div>
    );
};
Rightbar.propTypes = {
    recipe_data: PropTypes.array,
    handlePreparing: PropTypes.func,
    recipeData: PropTypes.array,
    totalMin: PropTypes.number,
    totalCalories: PropTypes.number,
}
export default Rightbar;