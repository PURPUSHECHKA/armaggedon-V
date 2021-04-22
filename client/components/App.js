import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import MainInfo from './MainInfo'
import Header from './Header'
import Footer from './Footer'
import BasketForDestroy from './BasketForDestroy'

const App = () => {
  const { InfoOrDestroy } = useSelector((s) => s.reducerFlagRender)
  return (
    <div className="relative flex flex-col mx-16 md:w-920 md:mr-auto md:ml-auto">
      <Head title="V" />
      <Header />
      {InfoOrDestroy && <BasketForDestroy />}
      <MainInfo />
      <Footer />
    </div>
  )
}

App.propTypes = {}

export default memo(App)
