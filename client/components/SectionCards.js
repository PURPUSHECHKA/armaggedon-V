import React, { memo } from 'react'

import LargeHazardSection from './ReuseComponents/SectionsHazards/LargeHazardSection'
import LowHazardSection from './ReuseComponents/SectionsHazards/LowHazardSection'
import MiddleHazardSection from './ReuseComponents/SectionsHazards/MiddleHazardSection'

const SectionCards = () => {
  return (
    <>
      <LowHazardSection />
      <MiddleHazardSection />
      <LargeHazardSection />
    </>
  )
}

SectionCards.propTypes = {}

export default memo(SectionCards)
