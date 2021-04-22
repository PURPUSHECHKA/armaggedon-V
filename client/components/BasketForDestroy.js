import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const BasketForDestroy = () => {
  const { listOfParticularsAsteroids } = useSelector((s) => s.reducerDataAsteroids)
  const { listNonEmpty } = useSelector((s) => s.reducerFlagRender)

  return (
    <div className="grid md:w-920 mx-auto">
      <Header />
      <h1 className="justify-self-center md:text-3xl font-bold mb-19">
        Список астероидов на уничтожение
      </h1>
      <table className="rounded-t-lg mx-40 bg-gray-800 text-gray-200">
        <thead>
          <tr className="grid grid-cols-4 place-items-center border-b border-gray-300">
            <th className="col-span-1 p-3">Название</th>
            <th className="col-span-1 p-3">Дата</th>
            <th className="col-span-1 p-3">Опасность</th>
            <th className="col-span-1 p-3">Размер</th>
          </tr>
        </thead>
        <tbody>
          {(listNonEmpty &&
            listOfParticularsAsteroids.map((asteroid) => {
              const regex = /(?<=\()\w*\s*\w*/g
              const name = asteroid.name.match(regex).join('')

                    const averageDiameter = () => {
                      const { meters } = asteroid.estimated_diameter
                      const { estimated_diameter_min: min, estimated_diameter_max: max } = meters
                      return +Math.round(max - min).toFixed(0)
                    }

                    const { is_potentially_hazardous_asteroid: hazardous } = asteroid

                            const dateAsteroid =
                              asteroid.close_approach_data[0]
                                .close_approach_date_full
                            console.log('dateAsteroid', dateAsteroid)
                            const date = new Date(dateAsteroid).toLocaleString('ru', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })
              return (
                <tr
                  key={asteroid.id}
                  className="grid grid-cols-4 place-items-center bg-gray-700 border-b border-gray-600"
                >
                  <td className="col-span-1 p-3">{name}</td>
                  <td className="col-span-1 p-3">{date}</td>
                  <td className="col-span-1 p-3">{(hazardous && 'Опасен') || 'Не опасен'}</td>
                  <td className="col-span-1 p-3">{averageDiameter()}</td>
                </tr>
              )
            })) || (
            <tr>
              <td className="grid place-items-center text-3xl">Список пуст</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

BasketForDestroy.propTypes = {}

export default memo(BasketForDestroy)
