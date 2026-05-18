function LiveFeed() {

  const feeds = [

    {
      title: 'تم رصد ازدحام مروري مرتفع',
      time: 'قبل ثانيتين',
      color: 'bg-red-400'
    },

    {
      title: 'الذكاء الاصطناعي قام بتحليل جديد',
      time: 'قبل 10 ثواني',
      color: 'bg-cyan-400'
    },

    {
      title: 'استقرار كامل في أنظمة الطاقة',
      time: 'قبل 18 ثانية',
      color: 'bg-green-400'
    },

    {
      title: 'رفع مستوى المراقبة الأمنية',
      time: 'قبل 30 ثانية',
      color: 'bg-yellow-400'
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
            البث المباشر للأنظمة
          </h2>

          <p className="text-gray-400 mt-2">
            مراقبة مباشرة لجميع عمليات بصيرة
          </p>

        </div>

        <div className="
          bg-red-500/20
          border
          border-red-500/30
          text-red-400
          px-4
          py-2
          rounded-2xl
          animate-pulse
        ">
          LIVE FEED
        </div>

      </div>

      <div className="space-y-5">

        {feeds.map((feed, index) => (

          <div
            key={index}
            className="
              bg-[#08111F]
              border
              border-cyan-900
              rounded-3xl
              p-5
              flex
              justify-between
              items-center
            "
          >

            <div className="flex items-center gap-4">

              <div className={`
                w-4
                h-4
                rounded-full
                animate-pulse
                ${feed.color}
              `}></div>

              <div>

                <h3 className="text-lg font-bold">
                  {feed.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {feed.time}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default LiveFeed