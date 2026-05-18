import { useState } from 'react'

function AddCityForm({ refreshCities }) {

  const [formData, setFormData] = useState({
    city: '',
    traffic: '',
    air: '',
    status: ''
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    await fetch('http://localhost:5000/cities', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(formData)

    })

    setFormData({
      city: '',
      traffic: '',
      air: '',
      status: ''
    })

    refreshCities()

  }

  return (
    <div className="bg-[#0D1B2A] border border-cyan-900 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        إضافة مدينة
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="city"
          placeholder="اسم المدينة"
          value={formData.city}
          onChange={handleChange}
          className="w-full bg-[#08111F] border border-cyan-900 rounded-2xl p-4 text-white outline-none"
        />

        <input
          type="text"
          name="traffic"
          placeholder="نسبة المرور"
          value={formData.traffic}
          onChange={handleChange}
          className="w-full bg-[#08111F] border border-cyan-900 rounded-2xl p-4 text-white outline-none"
        />

        <input
          type="text"
          name="air"
          placeholder="جودة الهواء"
          value={formData.air}
          onChange={handleChange}
          className="w-full bg-[#08111F] border border-cyan-900 rounded-2xl p-4 text-white outline-none"
        />

        <input
          type="text"
          name="status"
          placeholder="الحالة"
          value={formData.status}
          onChange={handleChange}
          className="w-full bg-[#08111F] border border-cyan-900 rounded-2xl p-4 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-2xl p-4 font-bold"
        >
          إضافة المدينة
        </button>

      </form>

    </div>
  )
}

export default AddCityForm