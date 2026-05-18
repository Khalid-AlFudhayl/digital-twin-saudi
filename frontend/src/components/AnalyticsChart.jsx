import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Sat', traffic: 30 },
  { name: 'Sun', traffic: 45 },
  { name: 'Mon', traffic: 40 },
  { name: 'Tue', traffic: 70 },
  { name: 'Wed', traffic: 55 },
  { name: 'Thu', traffic: 90 },
]

function AnalyticsChart() {
  return (
    <div className="
      bg-[#111827]/70
      border
      border-cyan-500/10
      rounded-3xl
      p-6
      h-[400px]
      backdrop-blur-xl
      glow
    ">

      <h2 className="text-xl font-bold mb-4">
        تحليل حركة المرور
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <LineChart data={data}>

          <XAxis dataKey="name" stroke="#777" />

          <YAxis stroke="#777" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="traffic"
            stroke="#00E6FF"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}

export default AnalyticsChart