import PropTypes from 'prop-types';
const CurrentlyCooking = ({recipeData,totalMin,totalCalories}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-center">
                    {/* head */}
                    <thead className="fira font-medium text-base">
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody className="fira font-normal text-sm text-[#878787]">
                    {/* row 1 */}
                    {
                        recipeData.map((item,index)=> {
                            const {recipe_name,preparing_time,calories} = item;
                            return (
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{recipe_name}</td>
                                    <td>{preparing_time} min</td>
                                    <td>{calories} calorie</td>
                                </tr>

                            )})
                            
                    }
                    </tbody>
                </table>
                <div className='my-3 flex justify-end gap-5 fira'>
                    <h3 className='text-sm font-medium text-[#282828]'>Total Time: <br /> {totalMin} min</h3>
                    <h3 className='text-sm font-medium text-[#282828]'>Total Calories: <br /> {totalCalories} calorie</h3>
                </div>
                
            </div>
        </div>
    );
};
CurrentlyCooking.propTypes ={
    recipeData: PropTypes.array,
    totalMin: PropTypes.number,
    totalCalories: PropTypes.number,
}
export default CurrentlyCooking;