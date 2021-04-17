import React, { memo } from 'react'
import CardsSection from './CardsSection'

const BodyInfo = () => {
  return (
    <main>
      <article className="flex flex-col">
        <hr className=" h-1 border-none bg-black mb-lg" />
        <div  div className="flex flex-row">
        <form onSubmit="STATE">
          <label htmlFor="filterOutOnlyDangerous">
            <input className="mr-10" type="checkbox" name="languages" value="CSS" />
            Показать только опасные
          </label>
        </form>
        <span className="ml-auto">
          Расстояние в{' '}
          <button type="button" className="font-bold focus:outline-none">
            километрах
          </button>
          , в{' '}
          <button type="button" className="underline focus:outline-none">
            дистанциях до луны
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
