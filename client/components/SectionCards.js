import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataForTheCurrentWeek } from '../redux/reducers/reducerDataAsteroids'
import LargeHazardSection from './ReuseComponents/SectionsHazards/LargeHazardSection'
import LowHazardSection from './ReuseComponents/SectionsHazards/LowHazardSection'
import MiddleHazardSection from './ReuseComponents/SectionsHazards/MiddleHazardSection'

const SectionCards = ({ isDangerous }) => {
  const dispatch = useDispatch()
  const { currentWeekData } = useSelector((s) => s.reducerDataAsteroids)

  useEffect(() => {
    dispatch(getDataForTheCurrentWeek())
  }, [])

  return Object.keys(currentWeekData)
    .slice(0, -1)
    .reduceRight((acc, keyDateForArray) => {
      return [
        ...acc,
        currentWeekData[keyDateForArray].map((asteroidForAParticularDay) => {
          const regex = /(?<=\()\w*\s*\w*/g
          const name = asteroidForAParticularDay.name.match(regex).join('')
          const { is_potentially_hazardous_asteroid: hazardous } = asteroidForAParticularDay
          const averageDiameter = () => {
            const { meters } = asteroidForAParticularDay.estimated_diameter
            const { estimated_diameter_min: min, estimated_diameter_max: max } = meters
            return +Math.round(max - min).toFixed(0)
          }
          const dateAsteroid =
            asteroidForAParticularDay.close_approach_data[0].close_approach_date_full
          const date = new Date(dateAsteroid).toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })

          return (
            <div key={asteroidForAParticularDay.id}>
              {!isDangerous && averageDiameter() <= 300 && !hazardous && (
                <LowHazardSection
                  idParticularAsteroid={asteroidForAParticularDay.id}
                  keyDateForArray={keyDateForArray}
                  distance={asteroidForAParticularDay.close_approach_data[0].miss_distance}
                  diameter={averageDiameter()}
                  name={name}
                  date={date}
                />
              )}
              {!isDangerous && averageDiameter() > 300 && !hazardous && (
                <MiddleHazardSection
                  idParticularAsteroid={asteroidForAParticularDay.id}
                  keyDateForArray={keyDateForArray}
                  distance={asteroidForAParticularDay.close_approach_data[0].miss_distance}
                  diameter={averageDiameter()}
                  name={name}
                  date={date}
                />
              )}
              {hazardous && (
                <LargeHazardSection
                  idParticularAsteroid={asteroidForAParticularDay.id}
                  keyDateForArray={keyDateForArray}
                  distance={asteroidForAParticularDay.close_approach_data[0].miss_distance}
                  diameter={averageDiameter()}
                  name={name}
                  hazardous={hazardous}
                  date={date}
                />
              )}
            </div>
          )
        })
      ]
    }, [])
}

SectionCards.propTypes = {}

export default memo(SectionCards)
