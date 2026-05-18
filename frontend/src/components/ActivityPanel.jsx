function ActivityPanel() {
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
        النشاطات الأخيرة
      </h2>

      <div className="space-y-4">

        <div className="bg-[#08111F] p-4 rounded-2xl border border-cyan-500/10">
          <p className="text-white">
            ارتفاع حركة المرور في شمال أبها
          </p>

          <p className="text-gray-400 text-sm mt-2">
            قبل 5 دقائق
          </p>
        </div>

        <div className="bg-[#08111F] p-4 rounded-2xl border border-cyan-500/10">
          <p className="text-white">
            تحسن جودة الهواء بنسبة 12%
          </p>

          <p className="text-gray-400 text-sm mt-2">
            قبل 18 دقيقة
          </p>
        </div>

        <div className="bg-[#08111F] p-4 rounded-2xl border border-cyan-500/10">
          <p className="text-white">
            تنبيه ذكي لاستهلاك الطاقة
          </p>

          <p className="text-gray-400 text-sm mt-2">
            قبل 30 دقيقة
          </p>
        </div>

      </div>

    </div>
  )
}

export default ActivityPanel