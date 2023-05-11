import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function Slider (): JSX.Element {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1617422275558-e5f616302690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://images8.alphacoders.com/111/1110066.jpg'
    },
    {
      url: 'https://media-public.canva.com/_srgM/MAELsi_srgM/1/s2.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1560130055-e3306e04884b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80'
    },
    {
      url: 'https://media-public.canva.com/dPLhE/MADyRMdPLhE/1/s2.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev + 1 >= slides.length) {
          return 0
        }
        return prev + 1
      })
    }, 1000 * 7) // 7 segs

    return () => {
      clearInterval(interval)
    }
  }, [])

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
        className="h-full w-full bg-cover bg-center bg-no-repeat duration-500"
      />
      <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[95%] left-1/2 m-auto flex justify-center rounded-full bg-black/20">
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
