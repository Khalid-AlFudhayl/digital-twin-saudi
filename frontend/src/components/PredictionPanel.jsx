function PredictionPanel() {

  const predictions = [

    {
      title: 'خطر ازدحام مرتفع',
      risk: '92%',
      description:
        'يتوقع النظام ارتفاعًا حادًا في الحركة المرورية خلال الساعات القادمة.',
      color: 'red'
    },

    {
      title: 'استقرار الطاقة',
      risk: '18%',
      description:
        'لا توجد مؤشرات حالية لارتفاع استهلاك الطاقة.',
      color: 'green'
    },

    {
      title: 'تحسن بيئي',
      risk: '34%',
      description:
        'النظام يتوقع تحسن جودة الهواء مساء اليوم.',
      color: 'cyan'
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
            محرك التنبؤ الذكي
          </h2>

          <p className="text-gray-400 mt-2">
            تحليل احتمالات المخاطر المستقبلية
          </p>

        </div>

        <div className="
          bg-purple-500/20
          border
          border-purple-500/30
          text-purple-400
          px-4
          py-2
          rounded-2xl
        ">
          AI PREDICTION
        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {predictions.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900/40
              rounded-3xl
              p-6
            "
          >

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <div className={`
                text-lg
                font-black
                ${item.color === 'red' && 'text-red-400'}
                ${item.color === 'green' && 'text-green-400'}
                ${item.color === 'cyan' && 'text-cyan-400'}
              `}>
                {item.risk}
              </div>

            </div>

            <p className="text-gray-400 leading-8">

              {item.description}

            </p>

            <div className="mt-6">

              <div className="
                w-full
                h-3
                bg-[#111827]
                rounded-full
              ">

                <div
                  className={`
                    h-3
                    rounded-full
                    ${item.color === 'red' && 'bg-red-400 w-[92%]'}
                    ${item.color === 'green' && 'bg-green-400 w-[18%]'}
                    ${item.color === 'cyan' && 'bg-cyan-400 w-[34%]'}
                  `}
                ></div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default PredictionPanel