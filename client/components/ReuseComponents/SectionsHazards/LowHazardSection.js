import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getAsteroid, listOfAllApproximation } from '../../../redux/reducers/reducerDataAsteroids'
import DesktopSmallAsteroid from '../Asteroids/DesktopAsteroids/DesktopSmallAsteroid'
import MobSmallAsteroid from '../Asteroids/MobAsteroids/MobSmallAsteroid'
import DesktopDino from '../Dino/DesktopDino'
import MobDino from '../Dino/MobDino'
import DesktopInfoBlock from '../InfoAboutAsteroids/DesktopInfoBlock'
import MobInfoBlock from '../InfoAboutAsteroids/MobInfoBlock'

const LowHazardSection = ({
  diameter,
  name,
  distance,
  idParticularAsteroid,
  keyDateForArray,
  date
}) => {
  const dispatch = useDispatch()

  const sendAsteroid = () => {
    dispatch(getAsteroid(idParticularAsteroid, keyDateForArray))
  }
  const sendListApproximation = () => {
    dispatch(listOfAllApproximation())
  }

  return (
    <section className="rounded-md border border-black mb-19 md:mb-16">
      <div className="grid grid-cols-14 grid-rows-8 relative mdmax:mb-16 h-145 md:h-200 minmd:border bg-gradient-to-r from-lightGreen to-darkGreen rounded-md">
        <DesktopSmallAsteroid />
        <MobSmallAsteroid />
        <div className="whitespace-nowrap col-start-2 col-end-4 row-start-7 row-end-8 md:col-start-6 md:col-end-8 md:row-start-2 md:row-end-2">
          <Link
            to="/aboutAsteroid"
            onClick={() => {
              return [sendAsteroid(), sendListApproximation()]
            }}
            className="text-lg border-b border-black"
          >
            {name}
          </Link>
        </div>
        <DesktopInfoBlock
          idParticularAsteroid={idParticularAsteroid}
          keyDateForArray={keyDateForArray}
          diameter={diameter}
          distance={distance}
          date={date}
        />
        <DesktopDino />
        <MobDino />
      </div>
      <MobInfoBlock
        idParticularAsteroid={idParticularAsteroid}
        keyDateForArray={keyDateForArray}
        diameter={diameter}
        distance={distance}
        date={date}
      />
    </section>
  )
}

LowHazardSection.propTypes = {}

export default memo(LowHazardSection)
