import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function Slider (): JSX.Element {
  const slides = [
    {
      url: 'https://images8.alphacoders.com/111/1110066.jpg'
    },
    {
      url: 'https://content.syndigo.com/asset/d8ae579b-3eb1-4a75-86e1-dba49124327f/1920.webp'
    },
    {
      url: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1560130055-e3306e04884b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1617422275558-e5f616302690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://content.syndigo.com/asset/28ba0488-7526-4b85-aaa6-ee027bc80f21/1920.jpeg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: React.SetStateAction<number>): void => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="group relative m-auto h-[600px] w-full">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-full w-full bg-center duration-500 bg-no-repeat bg-cover"
      />
      <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute top-[95%] right-[35%] m-auto flex justify-center rounded-full bg-black/20">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex)
            }}
            className="cursor-pointer text-2xl text-white"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
