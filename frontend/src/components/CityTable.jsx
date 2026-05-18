import { useEffect, useState } from 'react'
import AddCityForm from './AddCityForm'

function CityTable() {

  const [cities, setCities] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editData, setEditData] = useState({
    city: '',
    traffic: '',
    air: '',
    status: ''
  })

  const fetchCities = () => {

    fetch('http://localhost:5000/cities')

      .then((response) => response.json())

      .then((data) => {
        setCities(data)
      })

  }

  useEffect(() => {

    fetchCities()

  }, [])

  const deleteCity = async (id) => {

    await fetch(`http://localhost:5000/cities/${id}`, {

      method: 'DELETE'

    })

    fetchCities()

  }

  const startEdit = (city) => {

    setEditingId(city.id)

    setEditData({
      city: city.city,
      traffic: city.traffic,
      air: city.air,
      status: city.status
    })

  }

  const saveEdit = async (id) => {

    await fetch(`http://localhost:5000/cities/${id}`, {

      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(editData)

    })

    setEditingId(null)

    fetchCities()

  }

  return (
    <div className="space-y-6">

      <AddCityForm refreshCities={fetchCities} />

      <div className="bg-[#0D1B2A] border border-cyan-900 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          بيانات المدن
        </h2>

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
                تعديل
              </th>

              <th className="text-right py-4">
                حذف
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

                  {editingId === city.id ? (

                    <input
                      value={editData.city}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          city: e.target.value
                        })
                      }
                      className="bg-[#08111F] p-2 rounded-xl"
                    />

                  ) : (
                    city.city
                  )}

                </td>

                <td className="py-4">

                  {editingId === city.id ? (

                    <input
                      value={editData.traffic}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          traffic: e.target.value
                        })
                      }
                      className="bg-[#08111F] p-2 rounded-xl"
                    />

                  ) : (
                    city.traffic
                  )}

                </td>

                <td className="py-4">

                  {editingId === city.id ? (

                    <input
                      value={editData.air}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          air: e.target.value
                        })
                      }
                      className="bg-[#08111F] p-2 rounded-xl"
                    />

                  ) : (
                    city.air
                  )}

                </td>

                <td className="py-4 text-cyan-400">

                  {editingId === city.id ? (

                    <input
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          status: e.target.value
                        })
                      }
                      className="bg-[#08111F] p-2 rounded-xl"
                    />

                  ) : (
                    city.status
                  )}

                </td>

                <td className="py-4">

                  {editingId === city.id ? (

                    <button
                      onClick={() => saveEdit(city.id)}
                      className="
                        bg-green-500/20
                        border
                        border-green-500/40
                        text-green-400
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      حفظ
                    </button>

                  ) : (

                    <button
                      onClick={() => startEdit(city)}
                      className="
                        bg-cyan-500/20
                        border
                        border-cyan-500/40
                        text-cyan-400
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      تعديل
                    </button>

                  )}

                </td>

                <td className="py-4">

                  <button
                    onClick={() => deleteCity(city.id)}
                    className="
                      bg-red-500/20
                      border
                      border-red-500/40
                      text-red-400
                      px-4
                      py-2
                      rounded-xl
                    "
                  >
                    حذف
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default CityTable