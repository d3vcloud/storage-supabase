import { useState } from 'react';
import { signInWithMagicLink } from '../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email);
    await signInWithMagicLink(email)
    setEmail('')
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className='w-2/5'>
        <h1 className="text-2xl mb-5 font-bold">Login with Magic Link</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 column flex-col mb-3">
            <label htmlFor="email" className='text-md font-medium'>Email</label>
            <input type="email" name="email" id='email' 
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1" 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button className='bg-blue-500 py-2 px-3 text-white w-full rounded-md font-semibold'>Send Link</button>
        </form>
      </div>
    </div>
  )
}

export default Login;