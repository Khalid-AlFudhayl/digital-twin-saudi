function AIControlCenter() {

  const systems = [

    {
      title: 'AI Core',
      status: 'Online',
      color: 'bg-green-400'
    },

    {
      title: 'Prediction Engine',
      status: 'Active',
      color: 'bg-cyan-400'
    },

    {
      title: 'Traffic Intelligence',
      status: 'Monitoring',
      color: 'bg-yellow-400'
    },

    {
      title: 'Security Analysis',
      status: 'Secured',
      color: 'bg-purple-400'
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
            مركز تحكم الذكاء الاصطناعي
          </h2>

          <p className="text-gray-400 mt-2">
            مراقبة أنظمة بصيرة الذكية
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
          AI CENTER
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {systems.map((system, index) => (

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
                  {system.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {system.status}
                </p>

              </div>

              <div className={`
                w-4
                h-4
                rounded-full
                animate-pulse
                ${system.color}
              `}></div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default AIControlCenter