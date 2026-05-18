function SmartCityMap() {
  return (
    <div className="
      bg-[#111827]/70
      border
      border-cyan-500/10
      rounded-3xl
      p-6
      h-[500px]
      backdrop-blur-xl
      glow
    ">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-xl font-bold mb-2">
            خريطة المدينة الذكية
          </h2>

          <p className="text-gray-400">
            مراقبة وتحليل المناطق الحيوية
          </p>
        </div>

        <div className="
          bg-cyan-500/10
          border
          border-cyan-400/30
          px-4
          py-2
          rounded-xl
          text-cyan-300
        ">
          Live Monitoring
        </div>

      </div>

      <div className="
        relative
        w-full
        h-[380px]
        rounded-3xl
        overflow-hidden
        bg-[#08111F]
        border
        border-cyan-500/10
      ">

        <div className="absolute top-10 left-16 w-6 h-6 rounded-full bg-cyan-400 animate-pulse"></div>

        <div className="absolute top-32 right-24 w-6 h-6 rounded-full bg-green-400 animate-pulse"></div>

        <div className="absolute bottom-16 left-1/2 w-6 h-6 rounded-full bg-orange-400 animate-pulse"></div>

        <div className="absolute bottom-24 right-40 w-6 h-6 rounded-full bg-red-400 animate-pulse"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <h1 className="text-7xl font-black text-cyan-500/10">
            ABHA
          </h1>

        </div>

      </div>

    </div>
  )
}

export default SmartCityMap