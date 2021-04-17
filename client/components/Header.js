import React, { memo } from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className="flex flex-wrap mb-sm">
          <span className="font-helvetica text-xl ">ARMAGGEDON V</span>
          <button type="button" className="flex items-center ml-auto font-bold focus:outline-none">
            Астероиды
          </button>
          <button type="button" className="flex items-center ml-lg underline focus:outline-none">
            Уничтожение
          </button>
        </div>
        <p className="mb-lg">
          Сервис мониторинга и уничтожения астероидов, <br /> опасно подлетающих к Земле.
        </p>
      </header>
    </>
  )
}

Header.propTypes = {}

export default memo(Header)
