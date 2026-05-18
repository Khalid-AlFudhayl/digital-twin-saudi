function StatCard({ title, value, color }) {
  return (
    <div className="
      bg-[#111827]/70
      border border-cyan-500/20
      backdrop-blur-xl
      rounded-2xl
      p-6
      shadow-lg
      shadow-cyan-500/5
      transition
      duration-300
      hover:scale-[1.02]
      hover:border-cyan-400/40
    ">

      <p className="text-sm text-gray-400 mb-3">
        {title}
      </p>

      <h2 className={`text-3xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  )
}

export default StatCard