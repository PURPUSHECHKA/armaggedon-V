import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeFlagForInfoOrDestroy } from '../redux/reducers/reducerFlagRender'

const Header = () => {
  const dispatch = useDispatch()
  const { infoOrDestroy } = useSelector((s) => s.reducerFlagRender)
  const changedFlag = () => {
    dispatch(changeFlagForInfoOrDestroy(!infoOrDestroy))
  }
  return (
    <>
      <header className="grid md:grid-cols-2 mb-18 md:mb-24">
        <div className="grid grid-row md:col-span-1 mb-sm">
          <span className="text-24 md:text-36 whitespace-nowrap">ARMAGGEDON V</span>
          <span className="md:mb-lg">
            Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
          </span>
        </div>
        <div className="grid justify-self-start text-left grid-cols-2 md:col-span-1 mb-auto md:ml-auto mt-14">
          <Link to="/" onClick={changedFlag} className="text-left md:text-right md:ml-auto">
            <span className={(infoOrDestroy && 'border-b border-black') || 'font-bold'}>
              Астероиды
            </span>
          </Link>
          <Link to="/Destroy" onClick={changedFlag} className="md:text-right md:ml-24">
            <span className={(infoOrDestroy && 'font-bold') || 'border-b border-black'}>
              Уничтожение
            </span>
          </Link>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {}

export default memo(Header)
