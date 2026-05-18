import Navbar from '../components/Navbar'

const alerts = [
  {
    title: 'ازدحام مروري مرتفع',
    level: 'High',
  },

  {
    title: 'ارتفاع استهلاك الطاقة',
    level: 'Medium',
  },

  {
    title: 'تحسن جودة الهواء',
    level: 'Low',
  },
]

function Alerts() {
  return (
    <div className="p-8">

      <Navbar />

      <div className="space-y-6">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="
              bg-[#111827]/70
              border
              border-cyan-500/10
              rounded-3xl
              p-6
              backdrop-blur-xl
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h2 className="text-xl font-bold text-white">
                {alert.title}
              </h2>

              <p className="text-gray-400 mt-2">
                Smart Alert System
              </p>

            </div>

            <div className="
              bg-red-500/20
              text-red-400
              px-4
              py-2
              rounded-xl
            ">
              {alert.level}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Alerts