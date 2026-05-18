function AIInsights() {

  const insights = [

    {
      title: 'ازدحام متوقع',
      description: 'يتوقع النظام ارتفاع الازدحام شمال أبها خلال الساعتين القادمة.',
      color: 'cyan'
    },

    {
      title: 'تحسن جودة الهواء',
      description: 'النظام يتوقع تحسن جودة الهواء بنسبة 18٪ مساءً.',
      color: 'green'
    },

    {
      title: 'استهلاك طاقة مرتفع',
      description: 'تم رصد ارتفاع غير طبيعي في استهلاك الطاقة بالقطاع الغربي.',
      color: 'orange'
    }

  ]

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
            تحليلات الذكاء الاصطناعي
          </h2>

          <p className="text-gray-400 mt-2">
            تنبؤات وتوصيات ذكية للنظام
          </p>

        </div>

        <div className="
          bg-cyan-500/10
          border
          border-cyan-500/30
          text-cyan-400
          px-4
          py-2
          rounded-2xl
        ">
          AI ACTIVE
        </div>

      </div>

      <div className="space-y-5">

        {insights.map((insight, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900/40
              rounded-2xl
              p-5
            "
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-xl font-bold text-white">
                  {insight.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-8">
                  {insight.description}
                </p>

              </div>

              <div className={`
                w-4
                h-4
                rounded-full
                ${insight.color === 'cyan' && 'bg-cyan-400'}
                ${insight.color === 'green' && 'bg-green-400'}
                ${insight.color === 'orange' && 'bg-orange-400'}
              `}></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default AIInsights