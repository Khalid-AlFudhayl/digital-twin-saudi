import { useState } from 'react'

function AIAssistant() {

  const [messages, setMessages] = useState([

    {
      sender: 'ai',
      text: 'مرحبًا، أنا مساعد بصيرة الذكي. كيف يمكنني مساعدتك اليوم؟'
    }

  ])

  const [input, setInput] = useState('')

  const handleSend = () => {

    if (!input.trim()) return

    const userMessage = {

      sender: 'user',
      text: input

    }

    let aiResponse = ''

    if (input.includes('ازدحام')) {

      aiResponse =
        'تشير التحليلات الحالية إلى ارتفاع الكثافة المرورية شمال أبها.'

    }

    else if (input.includes('الطاقة')) {

      aiResponse =
        'النظام يرصد استقرارًا عامًا في استهلاك الطاقة حاليًا.'

    }

    else if (input.includes('الهواء')) {

      aiResponse =
        'جودة الهواء مستقرة مع توقعات بتحسن إضافي مساءً.'

    }

    else {

      aiResponse =
        'تم تحليل طلبك بنجاح والنظام يعمل بشكل طبيعي.'

    }

    const aiMessage = {

      sender: 'ai',
      text: aiResponse

    }

    setMessages((prev) => [

      ...prev,
      userMessage,
      aiMessage

    ])

    setInput('')

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
            تفاعل مباشر مع النظام الذكي
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
          AI ASSISTANT
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