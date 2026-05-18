import { useEffect, useState } from 'react'

function AutomationPanel() {

  const [automationStatus, setAutomationStatus] =
    useState([])

  useEffect(() => {

    const generateAutomation = () => {

      const systems = [

        {
          title: 'تحليل المرور',
          status: 'تم اكتشاف ازدحام مرتفع'
        },

        {
          title: 'الطاقة الذكية',
          status: 'النظام قام بتقليل الاستهلاك'
        },

        {
          title: 'مراقبة الهواء',
          status: 'جودة الهواء مستقرة'
        },

        {
          title: 'الأمان الذكي',
          status: 'لا توجد مخاطر حالية'
        }

      ]

      const randomSystem =
        systems[Math.floor(Math.random() * systems.length)]

      setAutomationStatus((prev) => [

        {
          ...randomSystem,
          time: new Date().toLocaleTimeString()
        },

        ...prev.slice(0, 4)

      ])

    }

    generateAutomation()

    const interval = setInterval(() => {

      generateAutomation()

    }, 7000)

    return () => clearInterval(interval)

  }, [])

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
            نظام الأتمتة الذكي
          </h2>

          <p className="text-gray-400 mt-2">
            مراقبة وتحليل تلقائي مباشر
          </p>

        </div>

        <div className="
          bg-green-500/20
          border
          border-green-500/30
          text-green-400
          px-4
          py-2
          rounded-2xl
        ">
          AUTO ACTIVE
        </div>

      </div>

      <div className="space-y-4">

        {automationStatus.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900/40
              rounded-2xl
              p-5
            "
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.status}
                </p>

              </div>

              <div className="text-cyan-400 text-sm">

                {item.time}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default AutomationPanel