import { useState } from 'react'

function EditCityModal({

  city,
  closeModal,
  refreshCities

}) {

  const [formData, setFormData] = useState({

    city: city.city,
    traffic: city.traffic,
    air: city.air,
    status: city.status

  })

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    await fetch(`http://localhost:5000/cities/${city.id}`, {

      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(formData)

    })

    refreshCities()

    closeModal()

  }

  return (

    <div className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="
        bg-[#0D1B2A]
        border
        border-cyan-900
        rounded-3xl
        p-8
        w-[500px]
      ">

        <h2 className="text-3xl font-bold mb-8">
          تعديل بيانات المدينة
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="اسم المدينة"
            className="
              w-full
              bg-[#08111F]
              border
              border-cyan-900
              rounded-2xl
              p-4
              outline-none
            "
          />

          <input
            type="text"
            name="traffic"
            value={formData.traffic}
            onChange={handleChange}
            placeholder="حركة المرور"
            className="
              w-full
              bg-[#08111F]
              border
              border-cyan-900
              rounded-2xl
              p-4
              outline-none
            "
          />

          <input
            type="text"
            name="air"
            value={formData.air}
            onChange={handleChange}
            placeholder="جودة الهواء"
            className="
              w-full
              bg-[#08111F]
              border
              border-cyan-900
              rounded-2xl
              p-4
              outline-none
            "
          />

          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="الحالة"
            className="
              w-full
              bg-[#08111F]
              border
              border-cyan-900
              rounded-2xl
              p-4
              outline-none
            "
          />

          <div className="flex gap-4 pt-4">

            <button
              type="submit"
              className="
                flex-1
                bg-cyan-500
                hover:bg-cyan-400
                transition
                text-black
                font-bold
                py-4
                rounded-2xl
              "
            >
              حفظ التعديلات
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="
                flex-1
                bg-red-500/20
                border
                border-red-500/30
                text-red-400
                rounded-2xl
              "
            >
              إلغاء
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default EditCityModal