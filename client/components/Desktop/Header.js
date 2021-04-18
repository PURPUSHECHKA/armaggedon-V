import React, { memo } from 'react'

const Header = () => {
  return (
    <>
      <header className="grid md:grid-cols-2 mb-18 md:mb-24">
        <div className="grid grid-row md:col-span-1 mb-sm">
          <span className="text-24 md:text-36 whitespace-nowrap">ARMAGGEDON V</span>
          <span className="md:mb-lg">
            Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
          </span>
        </div>
        <div className="grid justify-self-start text-left grid-cols-2 md:col-span-1 mb-auto md:ml-auto">
          <button type="button" className="md:text-right md:ml-auto focus:outline-none">
            <span className="font-bold"> Астероиды</span>
          </button>
          <button type="button" className="md:text-right md:ml-24 focus:outline-none">
            <span className="border-b border-black">Уничтожение</span>
          </button>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {}

export default memo(Header)
