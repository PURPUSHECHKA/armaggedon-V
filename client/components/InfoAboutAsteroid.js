import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import dataAboutAsteroid from './ReuseComponents/reuseFunctions/dataAboutAsteroid'
import calculateDistance from './ReuseComponents/reuseFunctions/calculateDistance'
import Header from './Header'
import detailedInformation from './ReuseComponents/reuseFunctions/detailedInformation'
import { updateListOfAsteroids } from '../redux/reducers/reducerDataAsteroids'

const InfoAboutAsteroid = () => {
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()
  const addAsteroidForDestroy = () => {
    dispatch(updateListOfAsteroids())
    setDisabled(!disabled)
  }
  const { changedDistances } = useSelector((s) => s.reducerFlagRender)
  const { particularAsteroid, approximationList } = useSelector((s) => s.reducerDataAsteroids)
  const { name, hazardous, averageDiameter, date, distance } = dataAboutAsteroid(particularAsteroid)
  const getDistance = calculateDistance(distance, changedDistances)

  const classHazardous = (hazardous && 'text-red text-xl pb-8') || 'text-indigo-200 text-xl pb-8'
  return (
    <div className=" md:w-920 mx-16 md:mx-auto">
      <Header />
      <section className="text-indigo-200 body-font p-5 bg-gray-900">
        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard mb-19">
          <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <figure className="visible">
              <div className="pt-10 px-2 sm:px-6">
                <h1 className="grid title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                  <span>Информация об астероиде</span>
                  <span>{name}</span>
                </h1>
                <div className="text-2xl text-gray-500">
                  Размер:
                  <p className="text-indigo-200 text-xl pb-6">{averageDiameter()} метров</p>
                </div>
                <div className="text-2xl text-gray-500">
                  Оценка опасности:
                  <p className={classHazardous}>{(hazardous && 'Опасен') || 'Не опасен'}</p>
                </div>
                <div className="text-2xl text-gray-500">
                  Расстояние до Земли:
                  <p className="text-indigo-200 text-xl pb-8">{getDistance}</p>
                </div>
                <div className="text-2xl text-gray-500">
                  Дата максимального подлёта:
                  <p className="text-indigo-200 text-xl pb-8">{date}</p>
                </div>
              </div>
              <button
                disabled={disabled}
                onClick={addAsteroidForDestroy}
                type="button"
                className="rounded-full focus:outline-none transition duration-500 ease-in-out bg-blue  transition transform hover:translate-y-1 "
              >
                <div className="mx-16 my-14 whitespace-nowrap text-white">
                  {(disabled && 'Отправлено') || 'На уничтожение'}
                </div>
              </button>
            </figure>
          </div>
        </div>
        <h2 className="grid title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 text-center">
          Подробная информация о сближениях астероида{' '}
        </h2>
        <table className="rounded-t-lg mx-auto bg-gray-600 text-gray-200">
          <thead>
            <tr className="grid grid-cols-4 self-center border-b border-gray-300">
              <th>Скорость относительно Земли</th>
              <th>Время максимального сближения</th>
              <th>Расстояние до Земли</th>
              <th>Орбита</th>
            </tr>
          </thead>
          <tbody>
            {approximationList.map((approximation) => {
              const { velocity, getDate, currentDistance, orbiting } = detailedInformation(
                approximation
              )
              return (
                <tr
                  key={approximation.epoch_date_close_approach}
                  className="grid grid-cols-4 place-items-center  border-b border-gray-300"
                >
                  <td>{velocity}</td>
                  <td>{getDate}</td>
                  <td>{currentDistance}</td>
                  <td>{orbiting}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

InfoAboutAsteroid.propTypes = {}

export default memo(InfoAboutAsteroid)
