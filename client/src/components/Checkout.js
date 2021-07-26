import '../styles/Checkout.css'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'/>
                <div>
                    <h2 className='checkout__title'>
                        Shopping Cart
                    </h2>
                </div>
            </div>
            <div className='checkout__right'>
                <h2> The subtotal goes here</h2>
            </div>
        </div>
    )
}

export default Checkout
