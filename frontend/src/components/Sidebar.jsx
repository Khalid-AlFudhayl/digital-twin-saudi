import { NavLink } from 'react-router-dom'

function Sidebar() {

  const linkStyle = ({ isActive }) =>
    isActive
      ? `
        bg-cyan-500/10
        border
        border-cyan-400/30
        text-cyan-300
        shadow-lg
        shadow-cyan-500/10
      `
      : `
        text-gray-400
        hover:text-white
        hover:bg-white/5
      `

  return (
    <div
      className="
      w-72
      min-h-screen
      bg-[#081120]/80
      backdrop-blur-xl
      border-r
      border-cyan-500/10
      p-6
      flex
      flex-col
      justify-between
    "
    >

      <div>

        <div className="mb-14">

          <h1 className="text-4xl font-extrabold text-white">
            بصيرة
          </h1>

          <p className="text-cyan-400 text-sm mt-2 tracking-[0.4em]">
            BASEERAH AI
          </p>

        </div>

        <ul className="space-y-4">

          <li>

            <NavLink
              to="/"
              className={linkStyle}
            >
              {({ isActive }) => (
                <div
                  className={`
                    p-4
                    rounded-2xl
                    transition
                    ${isActive
                      ? `
                        bg-cyan-500/10
                        border
                        border-cyan-400/30
                        text-cyan-300
                        shadow-lg
                        shadow-cyan-500/10
                      `
                      : `
                        text-gray-400
                        hover:text-white
                        hover:bg-white/5
                      `
                    }
                  `}
                >
                  الرئيسية
                </div>
              )}
            </NavLink>

          </li>

          <li>

            <NavLink to="/cities">

              {({ isActive }) => (

                <div
                  className={`
                    p-4
                    rounded-2xl
                    transition
                    ${isActive
                      ? `
                        bg-cyan-500/10
                        border
                        border-cyan-400/30
                        text-cyan-300
                      `
                      : `
                        text-gray-400
                        hover:text-white
                        hover:bg-white/5
                      `
                    }
                  `}
                >
                  المدن والمناطق
                </div>

              )}

            </NavLink>

          </li>

          <li>

            <NavLink to="/analytics">

              {({ isActive }) => (

                <div
                  className={`
                    p-4
                    rounded-2xl
                    transition
                    ${isActive
                      ? `
                        bg-cyan-500/10
                        border
                        border-cyan-400/30
                        text-cyan-300
                      `
                      : `
                        text-gray-400
                        hover:text-white
                        hover:bg-white/5
                      `
                    }
                  `}
                >
                  التحليلات الذكية
                </div>

              )}

            </NavLink>

          </li>

          <li>

            <NavLink to="/alerts">

              {({ isActive }) => (

                <div
                  className={`
                    p-4
                    rounded-2xl
                    transition
                    ${isActive
                      ? `
                        bg-cyan-500/10
                        border
                        border-cyan-400/30
                        text-cyan-300
                      `
                      : `
                        text-gray-400
                        hover:text-white
                        hover:bg-white/5
                      `
                    }
                  `}
                >
                  التنبيهات
                </div>

              )}

            </NavLink>

          </li>

          <li>

            <NavLink to="/settings">

              {({ isActive }) => (

                <div
                  className={`
                    p-4
                    rounded-2xl
                    transition
                    ${isActive
                      ? `
                        bg-cyan-500/10
                        border
                        border-cyan-400/30
                        text-cyan-300
                      `
                      : `
                        text-gray-400
                        hover:text-white
                        hover:bg-white/5
                      `
                    }
                  `}
                >
                  الإعدادات
                </div>

              )}

            </NavLink>

          </li>

        </ul>

      </div>

      <div className="
        bg-[#111827]/70
        border
        border-cyan-500/10
        rounded-3xl
        p-5
        backdrop-blur-xl
      ">

        <h3 className="text-white font-bold text-lg">
          خالد الفضيل
        </h3>

        <p className="text-gray-400 mt-1">
          مدير النظام
        </p>

      </div>

    </div>
  )
}

export default Sidebar