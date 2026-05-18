import { useState } from 'react'

function Login({ onLogin }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {

    e.preventDefault()

    if (
      email === 'admin@baseerah.ai' &&
      password === '123456'
    ) {

      localStorage.setItem('isLoggedIn', 'true')

      onLogin()

    } else {

      alert('بيانات الدخول غير صحيحة')

    }

  }

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#0A0F1C]
      text-white
      p-6
    ">

      <div className="
        w-full
        max-w-md
        bg-[#0D1B2A]
        border
        border-cyan-900
        rounded-3xl
        p-8
      ">

        <div className="mb-8 text-center">

          <h1 className="text-5xl font-black">
            بصيرة
          </h1>

          <p className="text-cyan-400 mt-3 tracking-[0.3em]">
            BASEERAH AI
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              bg-[#08111F]
              border
              border-cyan-900
              rounded-2xl
              p-4
              outline-none
            "
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              bg-[#08111F]
              border
              border-cyan-900
              rounded-2xl
              p-4
              outline-none
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-cyan-500
              hover:bg-cyan-400
              transition
              rounded-2xl
              p-4
              font-bold
            "
          >
            تسجيل الدخول
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login