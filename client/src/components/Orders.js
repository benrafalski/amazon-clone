import { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [{ cart, user }, dispatch] = useStateValue()

    useEffect(() => {
        
    }, [])
    
    return (
        <div className='orders'>
            <h1>orders</h1>
        </div>
    )
}

export default Orders
