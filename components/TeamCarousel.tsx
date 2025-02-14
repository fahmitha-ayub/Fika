"use client"

import { useState } from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Fabin Sunny",
    role: " The Brain",
    image: "/fabin.jpg?height=200&width=200",
    bio: "The mastermind of our team, always coming up with brilliant ideas. ",
  },
  {
    name: "Merin Joe",
    role: "The Heart",
    image: "/merin.jpg?height=200&width=200",
    bio: "The motivator who keeps the team's spirit alive.",
  },
  {
    name: "Fahmitha",
    role: "The Right Hand",
    image: "/fahmi.jpg?height=200&width=200",
    bio: "The go-to person who gets things done efficiently.",
  },
  {
    name: "Emin Jabbir",
    role: "The Left Hand",
    image: "/emin.jpg?height=200&width=200",
    bio: "The reliable support, always there when you need them.",
  },
  {
    name: "Judit Merina",
    role: "The Fixer",
    image: "/judit.jpg?height=200&width=200",
    bio: "The problem-solver who tackles challenges head-on. ",
  },
  {
    name: "Kapil M",
    role: "The Backbone",
    image: "/kapil.jpg?height=200&width=200",
    bio: " Holds everything together, keeping us strong and steady.",
  },
  {
    name: "Libin",
    role: "The Hidden Shield",
    image: "/libin.jpg?height=200&width=200",
    bio: "The quiet protector who guards the team from setbacks.",
  },
  {
    name: "Geevarghese Mathew",
    role: "The Silent Backbone ",
    image: "/varkey.jpg?height=200&width=200",
    bio: " keeping us strong and steady.",
  },
  {
    name: "Joseph Hadlee",
    role: "The Calm Catalyst",
    image: "/hadlee.jpg?height=200&width=200",
    bio: "The peaceful presence who sparks progress with a calm mind.",
  },
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-80">
          <Image
            src={teamMembers[currentIndex].image || "/placeholder.svg"}
            alt={teamMembers[currentIndex].name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="bg-white p-6 text-center">
          <h3 className="text-2xl font-bold mb-2">{teamMembers[currentIndex].name}</h3>
          <p
            className={`text-lg mb-4 ${
              teamMembers[currentIndex].role === "Captain" || teamMembers[currentIndex].role === "Vice Captain"
                ? "text-teal-600 font-bold"
                : "text-gray-600"
            }`}
          >
            {teamMembers[currentIndex].role}
          </p>
          <p className="text-gray-600">{teamMembers[currentIndex].bio}</p>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  )
}

