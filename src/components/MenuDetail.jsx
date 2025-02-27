import { useParams } from 'react-router'

const MenuDetail = () => {
    const { mealType } = useParams()
    const loadMealData = (mealType) => {
        switch(mealType) {
            case 'breakfast':
                return (
                    <div>
                        <h2>Breakfast</h2>
                        <p>This is your breakfast menu</p>
                    </div>
                )
            case 'lunch':
                return (
                    <div>
                        <h2>Lunch</h2>
                        <p>This is your Lunch menu</p>
                    </div>
                )
            case 'dinner':
                return (
                    <div>
                        <h2>Dinner</h2>
                        <p>This is your Dinner menu</p>
                    </div>
                )
            default:
                return (
                    <div>
                        <p> The meal type you requested was not found.</p>
                    </div>
                )
        }
        
    }

    return loadMealData(mealType)
    
}
export default MenuDetail