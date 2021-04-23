import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Header from './Header'

const InfoAboutAsteroid = () => {
  const { particularAsteroid, approximationList } = useSelector((s) => s.reducerDataAsteroids)
  const regex = /(?<=\()\w*\s*\w*/g
  const name = particularAsteroid.name.match(regex).join('')
  const { is_potentially_hazardous_asteroid: hazardous } = particularAsteroid
  const averageDiameter = () => {
    const { meters } = particularAsteroid.estimated_diameter
    const { estimated_diameter_min: min, estimated_diameter_max: max } = meters
    return +Math.round(max - min).toFixed(0)
  }
  const dateAsteroid = particularAsteroid.close_approach_data[0].close_approach_date_full
  const date = new Date(dateAsteroid).toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const distance = Math.round(particularAsteroid.close_approach_data[0].miss_distance.kilometers)
  console.log(approximationList)
  return (
    <div className=" md:w-920 mx-16 md:mx-auto">
      <Header />
      <section className="text-indigo-200 body-font p-5 bg-gray-900">
        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
          <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <figure className="visible">
              <div className="">
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
                    <p className="text-red text-xl pb-8">
                      {(hazardous && 'Опасен') || 'Не опасен'}
                    </p>
                  </div>
                  <div className="text-2xl text-gray-500">
                    Расстояние до Земли:<p className="text-red text-xl pb-8">{distance} км</p>
                  </div>
                  <div className="text-2xl text-gray-500">
                    Дата максимального подлёта:
                    <p className="text-red text-xl pb-8">{date}</p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">fdhgdh</div>
        </div>
      </section>
    </div>
  )
}

InfoAboutAsteroid.propTypes = {}

export default memo(InfoAboutAsteroid)
