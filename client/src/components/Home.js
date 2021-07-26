import '../styles/Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg' 
                />
                <div className='home__row'>
                    <Product
                        id='1'
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                        price={12.99} 
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'  
                    />
                    <Product
                        id='2'
                        title='Kate Spade 857005 Turquoise Tea Kettle' 
                        price={60.00} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/61Y4acXDpaL._AC_SL1500_.jpg'  
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='3'
                        title="Men's Regular-fit Short-Sleeve Print Shirt" 
                        price={17.71} 
                        rating={5}
                        image='https://m.media-amazon.com/images/I/81Pzxs6nadL._AC_UL320_.jpg'  
                    />
                    <Product
                        id='4'
                        title='Echo Auto- Hands-free Alexa in your car with your phone' 
                        price={49.99} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/31X1pWv1CXL._AC_.jpg'  
                    />
                    <Product
                        id='5'
                        title='Apple AirPods with Charging Case (Wired)' 
                        price={119.00} 
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg'  
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='6'
                        title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV (2019 model)' 
                        price={497.99} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg'  
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
