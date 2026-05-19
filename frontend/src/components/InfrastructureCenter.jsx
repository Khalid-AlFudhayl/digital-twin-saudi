function InfrastructureCenter() {

  const systems = [

    {
      title: 'شبكة الكهرباء',
      status: 'مستقرة',
      value: '98%',
      color: 'text-green-400'
    },

    {
      title: 'شبكة المياه',
      status: 'نشطة',
      value: '93%',
      color: 'text-cyan-400'
    },

    {
      title: 'الاتصالات',
      status: 'ممتازة',
      value: '99%',
      color: 'text-purple-400'
    },

    {
      title: 'مراقبة الطاقة',
      status: 'ذكية',
      value: 'AI Active',
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
            البنية التحتية الذكية
          </h2>

          <p className="text-gray-400 mt-2">
            مراقبة وطنية للبنية التحتية والطاقة
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
          INFRA AI
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {systems.map((system, index) => (

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

export default InfrastructureCenter