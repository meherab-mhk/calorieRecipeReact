import PropTypes from 'prop-types';

const WaitingForCook = ({recipe_data,handlePreparing}) => {
    
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
                    recipe_data.map((item,index)=> {
                        const {recipe_name,preparing_time,calories} = item;
                        return (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{recipe_name}</td>
                                <td>{preparing_time} min</td>
                                <td>{calories} calorie</td>
                                <td>
                                <button onClick={()=>handlePreparing(item)} className="btn bg-green-400 mx-3 rounded-3xl hover:bg-green-400">Preparing</button>
                                </td>
                            </tr>
                        )})
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};
WaitingForCook.propTypes={
    recipe_data: PropTypes.array,
    handlePreparing: PropTypes.func
}
export default WaitingForCook;