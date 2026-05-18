function AIAnalytics() {

  const analytics = [

    {
      title: 'دقة التنبؤ',
      value: '96%',
      description: 'تحليل الذكاء الاصطناعي'
    },

    {
      title: 'الاستجابات الذكية',
      value: '12,847',
      description: 'إجمالي العمليات'
    },

    {
      title: 'سرعة المعالجة',
      value: '0.8s',
      description: 'متوسط الاستجابة'
    },

    {
      title: 'كفاءة الأنظمة',
      value: '99.2%',
      description: 'استقرار المنصة'
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
            مراقبة أداء أنظمة بصيرة الذكية
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
          AI ANALYTICS
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {analytics.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900
              rounded-3xl
              p-6
            "
          >

            <p className="text-gray-400 text-sm">
              {item.title}
            </p>

            <h3 className="
              text-4xl
              font-black
              text-cyan-400
              mt-4
            ">
              {item.value}
            </h3>

            <p className="text-gray-500 mt-4 text-sm">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  )

}

export default AIAnalytics