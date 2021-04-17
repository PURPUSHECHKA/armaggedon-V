import React, { memo } from 'react'
import CardsSection from './CardsSection'

const BodyInfo = () => {
  return (
    <main>
      <article className="flex flex-col mb-56">
        <hr className=" h-1 border-none bg-black mb-lg" />
        <div div className="flex flex-row mb-lg">
          <form onSubmit="STATE">
            <label htmlFor="filterOutOnlyDangerous">
              <input className="mr-10" type="checkbox" name="dataCard" value="cards" />
              Показать только опасные
            </label>
          </form>
          <span className="ml-auto">
            Расстояние в{' '}
            <button type="button" className="font-bold focus:outline-none">
              километрах
            </button>
            , в{' '}
            <button type="button" className="focus:outline-none">
              <span className="border-b border-black">дистанциях до луны</span>
            </button>
          </span>
        </div>
        <CardsSection />
      </article>
    </main>
  )
}
BodyInfo.propTypes = {}

export default memo(BodyInfo)
