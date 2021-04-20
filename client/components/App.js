import React, { memo } from 'react'

import Head from './head'
import MainInfo from './MainInfo'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div className="relative flex flex-col mx-16 md:w-920 md:mr-auto md:ml-auto">
      <Head title="V" />
      <Header />
      <MainInfo />
      <Footer />
    </div>
  )
}

App.propTypes = {}

export default memo(App)
