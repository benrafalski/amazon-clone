import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' data-lpignore='true'/>
                    <h5>Password</h5>
                    <input type='password' data-lpignore='true'/>
                    <button className='login__signin__button'>Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className='login__register__button'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
