import React, { memo } from 'react'

import Head from './head'
import BodyInfo from './BodyInfo'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <div className="flex flex-col  w-920 mr-auto ml-auto border">
      <Head title="V" />
      <Header />
      <BodyInfo />
      <Footer />
    </div>
  )
}

Main.propTypes = {}

export default memo(Main)
