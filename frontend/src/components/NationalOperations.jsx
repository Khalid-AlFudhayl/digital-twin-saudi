function NationalOperations() {

  const operations = [

    {
      name: 'تشغيل المدن الذكية',
      status: 'نشط',
      value: '99%',
      color: 'text-green-400'
    },

    {
      name: 'مراقبة البنية التحتية',
      status: 'مستقر',
      value: '97%',
      color: 'text-cyan-400'
    },

    {
      name: 'أنظمة الطوارئ',
      status: 'جاهزة',
      value: '100%',
      color: 'text-red-400'
    },

    {
      name: 'تحليلات الذكاء الاصطناعي',
      status: 'AI Active',
      value: 'Realtime',
      color: 'text-purple-400'
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
            مركز العمليات الوطني
          </h2>

          <p className="text-gray-400 mt-2">
            إدارة وتشغيل الأنظمة الوطنية الذكية
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
          NATIONAL AI
        </div>

      </div>

      <div className="space-y-5">

        {operations.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900/40
              rounded-3xl
              p-5
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h3 className="text-2xl font-bold">
                {item.name}
              </h3>

              <p className={`mt-2 font-bold ${item.color}`}>
                {item.status}
              </p>

            </div>

            <div className={`text-2xl font-bold ${item.color}`}>

              {item.value}

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default NationalOperations