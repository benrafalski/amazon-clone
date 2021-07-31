import { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Orders.css'
import Order from './Order'
import axios from '../axios.js'

const Orders = () => {
    const [{ cart, user }, dispatch] = useStateValue()
    const [orders, setOrders] = useState([])
    
    // must be signed in to get orders
    useEffect(() => {
        if(user){
            // fetch orders by email address
            const fetchOrder = async () => {
                const res = await axios.get(`/orders/${user.email}`)
                setOrders(res.data)
                console.log(res.data)
            }
    
            fetchOrder()
        } else {
            setOrders([])
        }
    }, [user])
    
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                { user ? <Order order={orders}/> : <p>Please sign in to view orders</p>}
            </div>
        </div>
    )
}

export default Orders
