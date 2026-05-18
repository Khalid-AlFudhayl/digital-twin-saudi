function SystemStatus() {
  return (
    <div className="
      bg-[#111827]/70
      border
      border-cyan-500/10
      rounded-3xl
      p-6
      backdrop-blur-xl
    ">

      <h2 className="text-xl font-bold mb-4">
        حالة الأنظمة
      </h2>

      <div className="space-y-5">

        <div>

          <div className="flex justify-between mb-2">
            <p>الطاقة</p>
            <p>87%</p>
          </div>

          <div className="w-full h-3 bg-[#08111F] rounded-full">

            <div className="w-[87%] h-3 bg-cyan-400 rounded-full"></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">
            <p>المرور</p>
            <p>64%</p>
          </div>

          <div className="w-full h-3 bg-[#08111F] rounded-full">

            <div className="w-[64%] h-3 bg-yellow-400 rounded-full"></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">
            <p>الأمان</p>
            <p>92%</p>
          </div>

          <div className="w-full h-3 bg-[#08111F] rounded-full">

            <div className="w-[92%] h-3 bg-green-400 rounded-full"></div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SystemStatus