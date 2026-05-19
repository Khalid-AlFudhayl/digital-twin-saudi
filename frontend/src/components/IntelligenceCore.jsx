function IntelligenceCore() {

  const coreSystems = [

    {
      title: 'محرك الذكاء المركزي',
      status: 'نشط',
      value: 'ONLINE',
      color: 'text-cyan-400'
    },

    {
      title: 'تحليل القرارات اللحظية',
      status: 'Realtime',
      value: '24/7',
      color: 'text-green-400'
    },

    {
      title: 'تشغيل الأنظمة الذاتية',
      status: 'مستقر',
      value: '98%',
      color: 'text-purple-400'
    },

    {
      title: 'معالجة البيانات الوطنية',
      status: 'AI Active',
      value: 'LIVE',
      color: 'text-yellow-400'
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
            نواة الذكاء المركزي
          </h2>

          <p className="text-gray-400 mt-2">
            تشغيل وتحليل أنظمة المدن الذكية الذاتية
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
          CORE AI
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {coreSystems.map((system, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900/40
              rounded-3xl
              p-5
            "
          >

            <div className="flex justify-between items-center">

              <h3 className="text-xl font-bold">
                {system.title}
              </h3>

              <span className={`font-bold ${system.color}`}>
                {system.value}
              </span>

            </div>

            <p className={`mt-4 font-bold ${system.color}`}>
              {system.status}
            </p>

          </div>

        ))}

      </div>

    </div>

  )

}

export default IntelligenceCore