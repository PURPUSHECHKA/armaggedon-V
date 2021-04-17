import React, { memo } from 'react'

import Head from '../head'
import BodyInfo from './MainInfo'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div className="flex flex-col w-920 mr-auto ml-auto">
      <Head title="V" />
      <Header />
      <BodyInfo />
      <Footer />
    </div>
  )
}

App.propTypes = {}

export default memo(App)
