import React, { memo } from 'react'
import {useSelector} from 'react-redux'

const DesktopInfoBlock = ({ diameter, distance, hazardous }) => {

  const {changedDistances} = useSelector(s => s.reducerFlagRender)

  const getDistance = () => {
    const kilometers = Math.round(distance.kilometers)
    const lunar = Math.round(distance.lunar)
    return (changedDistances && `${lunar}`) || `${kilometers} км`
  }

  return (
    <>
      <div className="mdmax:hidden col-start-6 col-end-11 row-start-3 row-end-7 text-start mt-16">
        <div className="flex flex-row mb-8">
          <span>Дата</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>12 сентября 2021</span>
        </div>
        <div className="flex flex-row mb-8">
          <span>Расстояние</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>{getDistance()}</span>
        </div>
        <div className="flex flex-row">
          <span>Размер</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>{diameter} м</span>
        </div>
      </div>
      <div className="mdmax:hidden col-start-13 col-end-14 row-start-2 row-end-6 justify-self-center text-center">
        <span>
          Оценка: <br />
          <p className="font-bold mb-8">{(hazardous && 'Опасен') || 'Не опасен'}</p>
        </span>
        <button
          type="button"
          className="rounded-full focus:outline-none transition duration-500 ease-in-out bg-blue  transition transform hover:translate-y-1 "
        >
          <div className="mx-16 my-14 whitespace-nowrap text-white">На уничтожение</div>
        </button>
      </div>
    </>
  )
}

DesktopInfoBlock.propTypes = {}

export default memo(DesktopInfoBlock)
