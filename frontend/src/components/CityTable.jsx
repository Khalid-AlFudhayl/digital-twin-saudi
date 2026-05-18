import { useEffect, useState } from 'react'

import AddCityForm from './AddCityForm'
import EditCityModal from './EditCityModal'

function CityTable() {

  const [cities, setCities] = useState([])

  const [selectedCity, setSelectedCity] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchCities = () => {

    fetch('http://localhost:5000/cities')

      .then((response) => response.json())

      .then((data) => {

        setCities(data)

      })

  }

  useEffect(() => {

    fetchCities()

    const interval = setInterval(() => {

      fetchCities()

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  const deleteCity = async (id) => {

    await fetch(`http://localhost:5000/cities/${id}`, {
      method: 'DELETE'
    })

    fetchCities()

  }

  const openEditModal = (city) => {

    setSelectedCity(city)

    setIsModalOpen(true)

  }

  return (
    <div className="space-y-6">

      <AddCityForm refreshCities={fetchCities} />

      <div className="
        bg-[#0D1B2A]
        border
        border-cyan-900
        rounded-3xl
        p-6
      ">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold">
              بيانات المدن
            </h2>

            <p className="text-gray-400 mt-2">
              تحديث مباشر كل 5 ثواني
            </p>

          </div>

          <div className="
            bg-green-500/20
            border
            border-green-500/30
            text-green-400
            px-4
            py-2
            rounded-2xl
          ">
            LIVE
          </div>

        </div>

        <table className="w-full">

          <thead>

            <tr className="text-gray-400 border-b border-cyan-900">

              <th className="text-right py-4">
                المدينة
              </th>

              <th className="text-right py-4">
                المرور
              </th>

              <th className="text-right py-4">
                جودة الهواء
              </th>

              <th className="text-right py-4">
                الحالة
              </th>

              <th className="text-right py-4">
                التحكم
              </th>

            </tr>

          </thead>

          <tbody>

            {cities.map((city) => (

              <tr
                key={city.id}
                className="border-b border-cyan-900/40"
              >

                <td className="py-4">
                  {city.city}
                </td>

                <td className="py-4">
                  {city.traffic}
                </td>

                <td className="py-4">
                  {city.air}
                </td>

                <td className="py-4 text-cyan-400">
                  {city.status}
                </td>

                <td className="py-4">

                  <div className="flex gap-3">

                    <button
                      onClick={() => openEditModal(city)}
                      className="
                        bg-cyan-500/20
                        border
                        border-cyan-500/30
                        text-cyan-400
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      تعديل
                    </button>

                    <button
                      onClick={() => deleteCity(city.id)}
                      className="
                        bg-red-500/20
                        border
                        border-red-500/30
                        text-red-400
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      حذف
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {isModalOpen && (

        <EditCityModal
          city={selectedCity}
          closeModal={() => setIsModalOpen(false)}
          refreshCities={fetchCities}
        />

      )}

    </div>
  )
}

export default CityTable