import icon from './check.png'

function RecipeApi({label, image, calories, ingredients, totalTime}) {
    return (<div>
       <div className="parent">
            <h2 className='label'>{label}</h2>
        </div>
        <div className="parent">
            <img className="tasty" src={image} alt='food'/>
        </div>
        <ul className="list parent">
            {ingredients.map((ingredient, id) => (
                <li key={id} className="check"> <img className='icon2' src={icon} alt='check'/> {ingredient}</li>
            ))}
        </ul>
        <div className="parent">
        <p className="par">{calories.toFixed()} calories</p>
        <p className="par">{totalTime} min cooking time</p>
    </div>
</div>
    )
}
export default RecipeApi;