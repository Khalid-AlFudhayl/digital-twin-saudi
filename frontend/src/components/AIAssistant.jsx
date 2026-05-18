import { useState } from 'react'

function AIAssistant() {

  const [messages, setMessages] = useState([

    {
      sender: 'ai',
      text: 'مرحبًا، أنا مساعد بصيرة الذكي.'
    }

  ])

  const [input, setInput] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSend = async () => {

    if (!input.trim()) return

    const userMessage = {

      sender: 'user',
      text: input

    }

    setMessages((prev) => [

      ...prev,
      userMessage

    ])

    setInput('')

    setLoading(true)

    try {

      const response = await fetch(

        'http://localhost:5000/ai',

        {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            message: input
          })

        }

      )

      const data = await response.json()

      const aiMessage = {

        sender: 'ai',
        text: data.reply

      }

      setMessages((prev) => [

        ...prev,
        aiMessage

      ])

    }

    catch (error) {

      setMessages((prev) => [

        ...prev,

        {
          sender: 'ai',
          text: 'حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.'
        }

      ])

    }

    setLoading(false)

  }

  return (

    <div className="
      bg-[#0D1B2A]
      border
      border-cyan-900
      rounded-3xl
      p-6
    ">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            مساعد بصيرة الذكي
          </h2>

          <p className="text-gray-400 mt-2">
            ذكاء اصطناعي حقيقي مباشر
          </p>

        </div>

        <div className="
          bg-cyan-500/20
          border
          border-cyan-500/30
          text-cyan-400
          px-4
          py-2
          rounded-2xl
        ">
          LIVE AI
        </div>

      </div>

      <div className="
        bg-[#08111F]
        rounded-3xl
        p-5
        h-[400px]
        overflow-y-auto
        space-y-4
      ">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`
              flex
              ${message.sender === 'user'
                ? 'justify-end'
                : 'justify-start'}
            `}
          >

            <div className={`
              max-w-[75%]
              px-5
              py-4
              rounded-3xl
              leading-8

              ${message.sender === 'user'
                ? 'bg-cyan-500 text-black'
                : 'bg-[#111827] text-white'}
            `}>

              {message.text}

            </div>

          </div>

        ))}

        {loading && (

          <div className="text-cyan-400">

            الذكاء الاصطناعي يكتب...

          </div>

        )}

      </div>

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالتك هنا..."
          className="
            flex-1
            bg-[#08111F]
            border
            border-cyan-900
            rounded-2xl
            px-5
            py-4
            outline-none
          "
        />

        <button
          onClick={handleSend}
          className="
            bg-cyan-500
            hover:bg-cyan-400
            transition
            text-black
            font-bold
            px-8
            rounded-2xl
          "
        >
          إرسال
        </button>

      </div>

    </div>
  )
}

export default AIAssistant