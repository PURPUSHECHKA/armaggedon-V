import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataForTheCurrentWeek } from '../redux/reducers/reducerDataAsteroids'
import LargeHazardSection from './ReuseComponents/SectionsHazards/LargeHazardSection'
import LowHazardSection from './ReuseComponents/SectionsHazards/LowHazardSection'
import MiddleHazardSection from './ReuseComponents/SectionsHazards/MiddleHazardSection'

const SectionCards = () => {
  const dispatch = useDispatch()
  const { currentWeekData } = useSelector((s) => s.reducerDataAsteroids)

  useEffect(() => {
    dispatch(getDataForTheCurrentWeek())
  }, [])

  return Object.keys(currentWeekData).reduceRight((acc, asteroidArray) => {
    return [
      ...acc,
      currentWeekData[asteroidArray].map((asteroidForAParticularDay) => {
        const rx = /(?<=\()\w*\s*\w*/g
        const name = asteroidForAParticularDay.name.match(rx).join('')
        const { is_potentially_hazardous_asteroid: hazardous } = asteroidForAParticularDay
        const averageDiameter = () => {
          const { meters } = asteroidForAParticularDay.estimated_diameter
          const { estimated_diameter_min: min, estimated_diameter_max: max } = meters
          return +(Math.round(max - min).toFixed(0))
        }
        return (
          <div key={asteroidForAParticularDay.id}>
            {averageDiameter() <= 300 && !hazardous && (
              <LowHazardSection
                distance={asteroidForAParticularDay.close_approach_data[0].miss_distance}
                diameter={averageDiameter()}
                name={name}
                date={asteroidForAParticularDay.close_approach_data[0].epoch_date_close_approach}
              />
            )}
            {averageDiameter() > 300 && !hazardous && (
              <MiddleHazardSection
                distance={asteroidForAParticularDay.close_approach_data[0].miss_distance}
                diameter={averageDiameter()}
                name={name}
                date={asteroidForAParticularDay.close_approach_data[0].epoch_date_close_approach}
              />
            )}
            {hazardous && (
              <LargeHazardSection
                distance={asteroidForAParticularDay.close_approach_data[0].miss_distance}
                diameter={averageDiameter()}
                name={name}
                date={asteroidForAParticularDay.close_approach_data[0].epoch_date_close_approach}
                hazardous={hazardous}
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
