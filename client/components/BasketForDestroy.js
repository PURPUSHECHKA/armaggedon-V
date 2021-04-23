import React, { memo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const BasketForDestroy = () => {
  const { listOfParticularsAsteroids } = useSelector((s) => s.reducerDataAsteroids)
  const [asteroidState, setAsteroidState] = useState([])
  useEffect(() => {
    setAsteroidState(
      listOfParticularsAsteroids.map((obj) => {
        return { select: false, ...obj }
      })
    )
  }, [])
  const removeAsteroids = () => {
    setAsteroidState(asteroidState.filter(({ select }) => !select))
  }
  return (
    <div className="grid md:w-920 mx-auto bg-yellow-200 rounded-lg px-2">
      <Header />
      <div className="pb-10 mx-40">
        <div className="max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-blue max-h-screen shadow-2xl flex-row rounded-b-lg relative mb-19">
          <div className="p-2 text-blue-900 text-center rounded-t">
            <h5 className="text-white text-2xl capitalize">Бригада им. Брюса Уиллиса</h5>
          </div>
          <div className="p-2 w-full h-full overflow-y-auto text-gray-100">
            <p className="text-justify py-2">
              Отважная команда под руководством Брюса Уиллиса готова выполнить нелегкую работу по
              уничтожению астероидов. Выберите астероиды из списка ниже, которые нужно уничтожить, а
              затем нажмите кнопку «Заказать бригаду!»
            </p>
          </div>
        </div>
        <table className="rounded-t-lg mx-auto bg-purple-600 text-gray-200">
          <thead>
            <tr className="grid grid-cols-5 justify-items-stretch border-b border-gray-300">
              <th className="p-3">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const { checked } = e.target
                    setAsteroidState(
                      asteroidState.map((obj) => {
                        obj.select = checked
                        return obj
                      })
                    )
                  }}
                />
              </th>
              <th className="auto-cols-fr p-3">Название</th>
              <th className="col-span-1 p-3">Дата</th>
              <th className="col-span-1 p-3">Опасность</th>
              <th className="col-span-1 p-3">Размер</th>
            </tr>
          </thead>
          <tbody>
            {(asteroidState.length > 0 &&
              asteroidState.map((asteroid) => {
                const regex = /(?<=\()\w*\s*\w*/g
                const name = asteroid.name.match(regex).join('')

                const averageDiameter = () => {
                  const { meters } = asteroid.estimated_diameter
                  const { estimated_diameter_min: min, estimated_diameter_max: max } = meters
                  return +Math.round(max - min).toFixed(0)
                }

                const { is_potentially_hazardous_asteroid: hazardous } = asteroid

                const dateAsteroid = asteroid.close_approach_data[0].close_approach_date_full
                const date = new Date(dateAsteroid).toLocaleString('ru', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })
                return (
                  <tr
                    key={asteroid.id}
                    className="grid grid-cols-5 justify-items-stretch text-center border-b border-gray-300"
                  >
                    <th className="p-3">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          const { checked } = e.target
                          setAsteroidState(
                            asteroidState.map((obj) => {
                              if (obj.id === asteroid.id) {
                                obj.select = checked
                                console.log(checked)
                              }
                              return obj
                            })
                          )
                        }}
                        checked={asteroid.select}
                      />
                    </th>
                    <td className=" p-3">{name}</td>
                    <td className=" p-3">{date}</td>
                    <td className=" p-3">{(hazardous && 'Опасен') || 'Не опасен'}</td>
                    <td className=" p-3">{averageDiameter()}</td>
                  </tr>
                )
              })) || (
              <tr>
                <td className="grid place-items-center text-3xl">Список пуст</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="grid place-items-center text-center">
          <div className="mr-2 mt-2">
            <button
              onClick={removeAsteroids}
              type="button"
              className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-pink-500 hover:bg-pink-600 hover:shadow-lg"
            >
              Заказать бригаду!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

BasketForDestroy.propTypes = {}

export default memo(BasketForDestroy)
