import React, { memo } from 'react'

import DesktopLargeAsteroid from '../Asteroids/DesktopAsteroids/DesktopLargeAsteroid'
import MobLargeAsteroid from '../Asteroids/MobAsteroids/MobLargeAsteroid'
import DesktopDino from '../Dino/DesktopDino'
import MobDino from '../Dino/MobDino'
import DesktopInfoBlock from '../InfoAboutAsteroids/DesktopInfoBlock'
import MobInfoBlock from '../InfoAboutAsteroids/MobInfoBlock'

const LargeHazardSection = ({ diameter, name, distance, hazardous }) => {
  return (
    <section className="rounded-md border border-black mb-19 md:mb-16">
      <div className="grid grid-cols-14 grid-rows-8 relative h-145 md:h-200 minmd:border bg-gradient-to-r from-lightRed to-red rounded-md">
        <DesktopLargeAsteroid />
        <MobLargeAsteroid />
        <div className="z-40 whitespace-nowrap col-start-2 col-end-4 row-start-7 row-end-8 md:col-start-6 md:col-end-8 md:row-start-2 md:row-end-2">
          <span className="text-lg border-b border-black">{name}</span>
        </div>
        <DesktopInfoBlock diameter={diameter} distance={distance} hazardous={hazardous} />
        <DesktopDino />
        <MobDino />
      </div>
      <MobInfoBlock diameter={diameter} distance={distance} hazardous={hazardous} />
    </section>
  )
}

LargeHazardSection.propTypes = {}

export default memo(LargeHazardSection)
