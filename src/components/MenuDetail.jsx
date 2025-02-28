import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
const testData = {
    'breakfast': {
        title: 'Breakfast Menu',
        description: 'There is our breakfast menu'
    },
    'lunch': {
        title: 'Lunch Menu',
        description: 'There is our lunch menu'
    },
    'dinner': {
        title: 'Dinner Menu',
        description: 'There is our dinner menu'
    }
}
const fetchData = (mealType) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mealData = testData[mealType]
            if (mealData) {
                resolve(mealData)
            } else {
                reject('The meal type you requested was not found.')
            }
        }, 1000)
        
    })
}
const MenuDetail = () => {
    const { mealType } = useParams()
    const [mealData, setMealData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    useEffect(() => {
        if (!mealType) return
        setLoading(true)
        fetchData(mealType).then(data => {
            setMealData(data)
        }).catch(err => {   
            setError(err)
            setMealData(null)
        }).finally(() => {
            setLoading(false)
        })
    }, [mealType])
    if (loading) return <LoadingView />
    if (!loading && !mealData) return <ErrorView error={error} />
    return (
        <div className='p-4'>
            <h2 className='text-2xl text-gray-800'>{mealData.title}</h2>
            <p className='text-gray-600'>{mealData.description}</p>
        </div>
    )
}
const LoadingView = () => (
    <div className='text-gray-600'>
        Loading data, please wait....
    </div>
)

const ErrorView = ({error}) => (
    <div className='text-red-600'>
        {error}
    </div>
)
export default MenuDetail
