function CommandCenter() {

  const commands = [

    {
      title: 'تحليل المرور الذكي',
      status: 'نشط',
      color: 'text-green-400'
    },

    {
      title: 'نظام مراقبة الطاقة',
      status: 'متصل',
      color: 'text-cyan-400'
    },

    {
      title: 'تحليل الأمان',
      status: 'قيد التشغيل',
      color: 'text-yellow-400'
    },

    {
      title: 'محرك الذكاء الاصطناعي',
      status: 'مستقر',
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
            مركز الأوامر الذكي
          </h2>

          <p className="text-gray-400 mt-2">
            التحكم المباشر بأنظمة بصيرة AI
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
          COMMAND CENTER
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {commands.map((command, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900
              rounded-3xl
              p-5
            "
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-xl font-bold">
                  {command.title}
                </h3>

                <p className={`mt-3 font-bold ${command.color}`}>
                  {command.status}
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

          </div>

        ))}

      </div>

    </div>

  )

}

export default CommandCenter