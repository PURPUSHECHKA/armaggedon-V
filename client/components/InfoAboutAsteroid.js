import React, { memo } from 'react'
import Header from './Header'

const InfoAboutAsteroid = () => {
  return (
    <>
      <Header />
      <section className="text-indigo-200 body-font p-5 bg-gray-900">
        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <figure className="visible">
              <div className="">
                <div className="pt-10 px-2 sm:px-6">
                  <span className="inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
                    Featured Courses
                  </span>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                    Before they sold out
                    <br className="hidden lg:inline-block" />
                    readymade gluten
                  </h1>
                  <p className="text-indigo-200 text-base pb-6">
                    From local banks to local government, we partner with organizations on their
                    journey to digital transformation. Our customers include 15 million
                    professionals in 175 countries and 800 of the fortune 1000.
                  </p>
                  <p className="text-indigo-200 text-base pb-8">
                    We can`t believe how far we have come in the last 6 months. I really did not
                    think this awesome career move would come so quickly. Thanks to each of you put
                    into SI and the partner relationships.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center pb-12">
                      <div className="h-12 w-12">asdasd</div>
                      <p className="text-indigo-200 font-bold ml-3">
                        Jane Doe <br />
                        <span className="text-indigo-200 text-base font-light">Apple Inc</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">fdhgdh</div>
        </div>
      </section>
    </>
  )
}

InfoAboutAsteroid.propTypes = {}

export default memo(InfoAboutAsteroid)
