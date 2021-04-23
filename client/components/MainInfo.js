import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changedFlagForDistances } from '../redux/reducers/reducerFlagRender'

import SectionCards from './SectionCards'

const MainInfo = () => {
  const[isDangerous, setIsDangerous] = useState(false)

  const { changedDistances } = useSelector((s) => s.reducerFlagRender)
  const dispatch = useDispatch()

  const changeDistance = () => {
    dispatch(changedFlagForDistances(!changedDistances))
  }

  const showOnlyDangerousAsteroids = (e) => {
    setIsDangerous(e.target.checked)
  }

  return (
    <main>
      <article className="flex flex-col mb-32 md:mb-56">
        <hr className=" h-1 border-none bg-black mb-lg" />
        <div div className="flex flex-col md:flex-row mb-24">
          <form onSubmit="SOMESTATE">
            <label htmlFor="filterOutOnlyDangerous">
              <input
                className="mb-16 md:mb-0 mr-10"
                type="checkbox"
                onChange={showOnlyDangerousAsteroids}
                checked={isDangerous}
              />
              Показать только опасные
            </label>
          </form>
          <span className="md:ml-auto">
            Расстояние &nbsp;
            <button type="button" onClick={changeDistance} className="focus:outline-none">
              <span className={(changedDistances && 'border-b border-black') || 'font-bold'}>
                в километрах,
              </span>
            </button>
            &nbsp;
            <button type="button" onClick={changeDistance} className="focus:outline-none">
              <span className={(changedDistances && 'font-bold') || 'border-b border-black'}>
                в дистанциях до луны
              </span>
            </button>
          </span>
        </div>
        <SectionCards isDangerous={isDangerous} />
      </article>
    </main>
  )
}
MainInfo.propTypes = {}

export default memo(MainInfo)
