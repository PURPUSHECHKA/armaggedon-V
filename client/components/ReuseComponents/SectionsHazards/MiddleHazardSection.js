import React, { memo } from 'react'

import DesktopDino from '../Dino/DesktopDino'
import DesktopInfoBlock from '../InfoAboutAsteroids/DesktopInfoBlock'
import DesktopMiddleAsteroid from '../Asteroids/DesktopAsteroids/DesktopMiddleAsteroid'
import MobDino from '../Dino/MobDino'
import MobMiddleAsteroid from '../Asteroids/MobAsteroids/MobMiddleAsteroid'
import MobInfoBlock from '../InfoAboutAsteroids/MobInfoBlock'

const MiddleSetion = () => {
  return (
    <section className="rounded-md border border-black mb-19 md:mb-16">
      <div className="grid grid-cols-14 grid-rows-8 relative mdmax:mb-16 h-145 md:h-200 minmd:border bg-gradient-to-r from-lightGreen to-darkGreen rounded-md">
        <DesktopMiddleAsteroid />
        <MobMiddleAsteroid />
        <div className="whitespace-nowrap col-start-2 col-end-4 row-start-7 row-end-8 md:col-start-6 md:col-end-8 md:row-start-2 md:row-end-2">
          <span className="text-lg border-b border-black">2021 FQ</span>
        </div>
        <DesktopInfoBlock />
        <DesktopDino />
        <MobDino />
      </div>
      <MobInfoBlock />
    </section>
  )
}

MiddleSetion.propTypes = {}

export default memo(MiddleSetion)
