import React, { memo } from 'react'

const MobInfoBlock = () => {
  return (
    <div className="md:hidden mx-16 mb-19">
      <div className="mb-22">
        <div className="flex flex-row mb-8">
          <span>Дата</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>12 сентября 2021</span>
        </div>
        <div className="flex flex-row mb-8">
          <span>Расстояние</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>7 235 024 км</span>
        </div>
        <div className="flex flex-row">
          <span>Размер</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>85 м</span>
        </div>
      </div>
      <div className="text-center mx-48">
        <span>
          Оценка: <br />
          <p className="font-bold mb-8">Не опасен</p>
        </span>
        <button
          type="button"
          className="rounded-full focus:outline-none transition duration-500 ease-in-out bg-blue hover:bg-red transition transform hover:translate-y-1"
        >
          <div className="mx-16 my-14 whitespace-nowrap text-white focus:outline-none">
            На уничтожение
          </div>
        </button>
      </div>
    </div>
  )
}
MobInfoBlock.propTypes = {}

export default memo(MobInfoBlock)
