import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataForTheCurrentWeek } from '../redux/reducers/reducerDataAsteroids'
import dataAboutAsteroid from './ReuseComponents/reuseFunctions/dataAboutAsteroid'
import sortedList from './ReuseComponents/reuseFunctions/sortedList'
import LargeHazardSection from './ReuseComponents/SectionsHazards/LargeHazardSection'
import LowHazardSection from './ReuseComponents/SectionsHazards/LowHazardSection'
import MiddleHazardSection from './ReuseComponents/SectionsHazards/MiddleHazardSection'

const SectionCards = ({ isDangerous }) => {
  const dispatch = useDispatch()
  const { currentWeekData } = useSelector((s) => s.reducerDataAsteroids)

  useEffect(() => {
    dispatch(getDataForTheCurrentWeek())
  }, [])

    const weekList = sortedList(currentWeekData)
  return weekList.slice(0, -1).reduce((acc, keyDateForArray) => {
    return [
      ...acc,
      currentWeekData[keyDateForArray].map((asteroidForAParticularDay) => {
        const { name, hazardous, averageDiameter, date, distance } = dataAboutAsteroid(
          asteroidForAParticularDay
        )
        return (
          <div key={asteroidForAParticularDay.id}>
            {!isDangerous && averageDiameter() <= 300 && !hazardous && (
              <LowHazardSection
                idParticularAsteroid={asteroidForAParticularDay.id}
                keyDateForArray={keyDateForArray}
                distance={distance}
                diameter={averageDiameter()}
                name={name}
                date={date}
              />
            )}
            {!isDangerous && averageDiameter() > 300 && !hazardous && (
              <MiddleHazardSection
                idParticularAsteroid={asteroidForAParticularDay.id}
                keyDateForArray={keyDateForArray}
                distance={distance}
                diameter={averageDiameter()}
                name={name}
                date={date}
              />
            )}
            {hazardous && (
              <LargeHazardSection
                idParticularAsteroid={asteroidForAParticularDay.id}
                keyDateForArray={keyDateForArray}
                distance={distance}
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
