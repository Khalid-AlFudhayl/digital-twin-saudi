function EmergencyCenter() {

  const emergencies = [

    {
      city: 'الرياض',
      type: 'ازدحام حاد',
      level: 'مرتفع',
      color: 'text-red-400'
    },

    {
      city: 'جدة',
      type: 'حادث مروري',
      level: 'متوسط',
      color: 'text-yellow-400'
    },

    {
      city: 'أبها',
      type: 'جودة هواء',
      level: 'مستقر',
      color: 'text-green-400'
    }

  ]

  return (

    <div className="
      bg-[#0D1B2A]
      border
      border-red-900/40
      rounded-3xl
      p-6
    ">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            مركز الطوارئ الذكي
          </h2>

          <p className="text-gray-400 mt-2">
            مراقبة الحالات الحرجة والاستجابة الفورية
          </p>

        </div>

        <div className="
          bg-red-500/20
          border
          border-red-500/30
          text-red-400
          px-4
          py-2
          rounded-2xl
          animate-pulse
        ">
          EMERGENCY AI
        </div>

      </div>

      <div className="space-y-5">

        {emergencies.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-red-900/30
              rounded-3xl
              p-5
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h3 className="text-2xl font-bold">
                {item.city}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.type}
              </p>

            </div>

            <div className={`font-bold text-lg ${item.color}`}>

              {item.level}

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default EmergencyCenter