function SecurityCenter() {

  const threats = [

    {
      title: 'محاولات دخول غير مصرح',
      level: 'منخفض',
      color: 'text-green-400'
    },

    {
      title: 'مراقبة الشبكة',
      level: 'مستقر',
      color: 'text-cyan-400'
    },

    {
      title: 'تحليل الأنظمة',
      level: 'نشط',
      color: 'text-yellow-400'
    },

    {
      title: 'AI Threat Detection',
      level: 'يعمل',
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
            مركز المراقبة الأمنية
          </h2>

          <p className="text-gray-400 mt-2">
            مراقبة ذكية لحالة الأنظمة والشبكات
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
        ">
          SECURITY AI
        </div>

      </div>

      <div className="space-y-5">

        {threats.map((threat, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900
              rounded-3xl
              p-5
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h3 className="text-xl font-bold">
                {threat.title}
              </h3>

              <p className={`mt-2 font-bold ${threat.color}`}>
                {threat.level}
              </p>

            </div>

            <div className="
              w-4
              h-4
              rounded-full
              bg-cyan-400
              animate-pulse
            "></div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default SecurityCenter