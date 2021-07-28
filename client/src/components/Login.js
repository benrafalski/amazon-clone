import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

    }

    const register = (e) => {
        e.preventDefault()
    }

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
                    <input 
                        type='text' 
                        data-lpignore='true' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type='password' 
                        data-lpignore='true' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        className='login__signin__button'
                        type='submit'
                        onClick={signIn}
                    >Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button 
                    className='login__register__button'
                    onClick={register}
                >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
