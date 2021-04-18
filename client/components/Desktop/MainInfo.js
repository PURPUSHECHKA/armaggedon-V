import React, { memo } from 'react'
import CardsSection from './CardsSection'

const MainInfo = () => {
  return (
    <main>
      <article className="flex flex-col mb-56">
        <hr className=" h-1 border-none bg-black mb-lg" />
        <div div className="flex flex-col md:flex-row mb-24">
          <form onSubmit="STATE">
            <label htmlFor="filterOutOnlyDangerous">
              <input
                className="mb-16 md:mb-0 mr-10"
                type="checkbox"
                name="dataCard"
                value="cards"
              />
              Показать только опасные
            </label>
          </form>
          <span className="md:ml-auto">
            Расстояние &nbsp;
            <button type="button" className="font-bold focus:outline-none whitespace-pre">
              в километрах,
            </button>
            &nbsp;
            <button type="button" className="focus:outline-none">
              <span className="border-b border-black">в дистанциях до луны</span>
            </button>
          </span>
        </div>
        <CardsSection />
      </article>
    </main>
  )
}
MainInfo.propTypes = {}

export default memo(MainInfo)
