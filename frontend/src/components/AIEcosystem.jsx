function AIEcosystem() {

  const ecosystems = [

    {
      title: 'شبكة المدن الذكية',
      status: 'متصلة',
      value: 'ACTIVE',
      color: 'text-cyan-400'
    },

    {
      title: 'الأنظمة الوطنية',
      status: 'مستقرة',
      value: '99%',
      color: 'text-green-400'
    },

    {
      title: 'ذكاء البنية التحتية',
      status: 'Realtime',
      value: 'LIVE',
      color: 'text-purple-400'
    },

    {
      title: 'معالجة البيانات المركزية',
      status: 'AI Running',
      value: '24/7',
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
            منظومة الذكاء الوطني
          </h2>

          <p className="text-gray-400 mt-2">
            تشغيل وربط الأنظمة الوطنية الذكية
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
          AI ECOSYSTEM
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {ecosystems.map((item, index) => (

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
                {item.title}
              </h3>

              <span className={`font-bold ${item.color}`}>
                {item.value}
              </span>

            </div>

            <p className={`mt-4 font-bold ${item.color}`}>
              {item.status}
            </p>

          </div>

        ))}

      </div>

    </div>

  )

}

export default AIEcosystem