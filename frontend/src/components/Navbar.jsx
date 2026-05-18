function Navbar({ onLogout }) {

  return (
    <div className="flex justify-between items-center mb-10">

      <div>

        <h1 className="text-5xl font-bold text-white">
          أبها
        </h1>

        <p className="text-gray-400 text-xl mt-2">
          منصة ذكية لمحاكاة وتحليل المدن
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="
          bg-[#0D1B2A]
          border
          border-cyan-900
          px-5
          py-3
          rounded-2xl
        ">

          <p className="text-cyan-400">
            Live System
          </p>

        </div>

        <button
          onClick={onLogout}
          className="
            bg-red-500/20
            border
            border-red-500/40
            text-red-400
            px-5
            py-3
            rounded-2xl
          "
        >
          تسجيل الخروج
        </button>

      </div>

    </div>
  )
}

export default Navbar