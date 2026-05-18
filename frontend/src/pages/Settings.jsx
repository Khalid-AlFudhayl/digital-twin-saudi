import Navbar from '../components/Navbar'

function Settings() {
  return (
    <div className="p-8">

      <Navbar />

      <div className="
        bg-[#111827]/70
        border
        border-cyan-500/10
        rounded-3xl
        p-8
        backdrop-blur-xl
        max-w-3xl
      ">

        <h2 className="text-3xl font-bold mb-8">
          إعدادات المنصة
        </h2>

        <div className="space-y-6">

          <div>

            <label className="block mb-2 text-gray-400">
              اسم المدينة
            </label>

            <input
              type="text"
              placeholder="أبها"
              className="
                w-full
                bg-[#08111F]
                border
                border-cyan-500/10
                rounded-2xl
                p-4
                outline-none
                text-white
              "
            />

          </div>

          <div>

            <label className="block mb-2 text-gray-400">
              وضع الذكاء الاصطناعي
            </label>

            <select
              className="
                w-full
                bg-[#08111F]
                border
                border-cyan-500/10
                rounded-2xl
                p-4
                outline-none
                text-white
              "
            >

              <option>
                Smart Monitoring
              </option>

              <option>
                AI Prediction
              </option>

            </select>

          </div>

          <button
            className="
              bg-cyan-500
              hover:bg-cyan-400
              transition
              px-6
              py-4
              rounded-2xl
              text-black
              font-bold
            "
          >
            حفظ الإعدادات
          </button>

        </div>

      </div>

    </div>
  )
}

export default Settings