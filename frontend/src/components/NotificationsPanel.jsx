import { notifications } from '../data/dashboardData'

function NotificationsPanel() {
  return (
    <div className="
      bg-[#111827]/70
      border
      border-cyan-500/10
      rounded-3xl
      p-6
      backdrop-blur-xl
    ">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          التنبيهات الذكية
        </h2>

        <div className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
          {notifications.length}
        </div>

      </div>

      <div className="space-y-4">

        {notifications.map((notification) => (

          <div
            key={notification.id}
            className="
              bg-[#08111F]
              p-4
              rounded-2xl
              border
              border-cyan-500/10
            "
          >

            <p className="text-white">
              {notification.title}
            </p>

            <p className="text-gray-400 text-sm mt-2">
              {notification.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default NotificationsPanel