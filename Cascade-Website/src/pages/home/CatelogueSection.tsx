import React from 'react'

// interface Props = {}

const CatelogueSection = () => {
  return (
    <>
    <article>
      <section>
      <div className={`flex items-center`}>
            <div className={`flex flex-col`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="10"
                viewBox="0 0 86 10"
                fill="none"
              >
                <path
                  d="M3 3.48435C25.8478 3.48402 61.8281 2.11457 83 6.70645"
                  stroke="#28BBEC"
                  stroke-width="6"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="10"
                viewBox="0 0 86 10"
                fill="none"
              >
                <path
                  d="M3 3.48435C25.8478 3.48402 61.8281 2.11457 83 6.70645"
                  stroke="#28BBEC"
                  stroke-width="6"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 className={`text-2xl font-ruberoidBold md:text-3xl`}>Our Courses </h2>
          </div>
      </section>
    </article>
    </>
  )
}

export default CatelogueSection