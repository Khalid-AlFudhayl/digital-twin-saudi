function DecisionCenter() {

  const decisions = [

    {
      title: 'اقتراح تخفيف الازدحام',
      action:
        'يوصي النظام بتحويل الحركة المرورية للطريق الغربي لمدة ساعتين.',
      priority: 'عالية',
      color: 'red'
    },

    {
      title: 'تقليل استهلاك الطاقة',
      action:
        'النظام يقترح تخفيض استهلاك الإنارة الذكية بنسبة 12٪.',
      priority: 'متوسطة',
      color: 'orange'
    },

    {
      title: 'تحسين جودة الهواء',
      action:
        'زيادة تشغيل أجهزة المراقبة البيئية في المناطق الشمالية.',
      priority: 'منخفضة',
      color: 'green'
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
            مركز القرارات الذكي
          </h2>

          <p className="text-gray-400 mt-2">
            توصيات وقرارات ذكية للنظام
          </p>

        </div>

        <div className="
          bg-yellow-500/20
          border
          border-yellow-500/30
          text-yellow-400
          px-4
          py-2
          rounded-2xl
        ">
          AI DECISION
        </div>

      </div>

      <div className="space-y-5">

        {decisions.map((decision, index) => (

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

            <div className="flex justify-between items-center mb-5">

              <h3 className="text-2xl font-bold">
                {decision.title}
              </h3>

              <div className={`
                px-4
                py-2
                rounded-2xl
                text-sm
                font-bold
                ${decision.color === 'red' &&
                  'bg-red-500/20 text-red-400 border border-red-500/30'}

                ${decision.color === 'orange' &&
                  'bg-orange-500/20 text-orange-400 border border-orange-500/30'}

                ${decision.color === 'green' &&
                  'bg-green-500/20 text-green-400 border border-green-500/30'}
              `}>

                {decision.priority}

              </div>

            </div>

            <p className="text-gray-400 leading-8 text-lg">

              {decision.action}

            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default DecisionCenter