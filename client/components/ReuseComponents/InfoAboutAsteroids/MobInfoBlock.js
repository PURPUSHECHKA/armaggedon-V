import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getParticularAsteroid } from '../../../redux/reducers/reducerDataAsteroids'
import {changeFlagForBasketList} from '../../../redux/reducers/reducerFlagRender'

const MobInfoBlock = ({
  date,
  diameter,
  distance,
  hazardous,
  idParticularAsteroid,
  keyDateForArray
}) => {
  const { changedDistances, listNonEmpty } = useSelector((s) => s.reducerFlagRender)
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(false)

  const getDistance = () => {
    const kilometers = Math.round(distance.kilometers)
    const lunar = Math.round(distance.lunar)
    return (changedDistances && `${lunar}`) || `${kilometers} км`
  }

  const sendAsteroid = () => {
    dispatch(getParticularAsteroid(idParticularAsteroid, keyDateForArray))
    dispatch(changeFlagForBasketList(!listNonEmpty))
    setDisabled(!disabled)
  }
  return (
    <div className="md:hidden mx-16 mb-19">
      <div className="mb-22">
        <div className="flex flex-row mb-8">
          <span>Дата</span>
          <span className="flex flex-grow border-b border-black border-dashed mb-1" />
          <span>{date}</span>
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
      <div className="text-center mx-48">
        <span>
          Оценка: <br />
          <p className="font-bold mb-8">{(hazardous && 'Опасен') || 'Не опасен'}</p>
        </span>
        <button
        disabled={disabled}
          onClick={sendAsteroid}
          type="button"
          className="rounded-full focus:outline-none transition duration-500 ease-in-out bg-blue hover:bg-red transition transform hover:translate-y-1"
        >
          <div className="mx-16 my-14 whitespace-nowrap text-white focus:outline-none">
            {(disabled && 'Отправлено') || ' На уничтожение'}
          </div>
        </button>
      </div>
    </div>
  )
}
MobInfoBlock.propTypes = {}

export default memo(MobInfoBlock)
