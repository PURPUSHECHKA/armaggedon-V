import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getListOfAsteroids } from '../../../redux/reducers/reducerDataAsteroids'
import calculateDistance from '../reuseFunctions/calculateDistance'

const DesktopInfoBlock = ({
  date,
  diameter,
  distance,
  hazardous,
  idParticularAsteroid,
  keyDateForArray
}) => {
  const [disabled, setDisabled] = useState(false)
  const { changedDistances } = useSelector((s) => s.reducerFlagRender)
  const dispatch = useDispatch()
  const getDistance = calculateDistance(distance, changedDistances)

  const sendAsteroid = () => {
    dispatch(getListOfAsteroids(idParticularAsteroid, keyDateForArray))
    setDisabled(!disabled)
  }

  return (
    <>
      <div className="mdmax:hidden col-start-6 col-end-11 row-start-3 row-end-7 text-start mt-16">
        <div className="flex flex-row mb-8">
          <span>Дата</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>{date}</span>
        </div>
        <div className="flex flex-row mb-8">
          <span>Расстояние</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>{getDistance}</span>
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
          disabled={disabled}
          onClick={sendAsteroid}
          type="button"
          className="rounded-full focus:outline-none transition duration-500 ease-in-out bg-blue  transition transform hover:translate-y-1 "
        >
          <div className="mx-16 my-14 whitespace-nowrap text-white">
            {(disabled && 'Отправлено') || 'На уничтожение'}
          </div>
        </button>
      </div>
    </>
  )
}

DesktopInfoBlock.propTypes = {}

export default memo(DesktopInfoBlock)
