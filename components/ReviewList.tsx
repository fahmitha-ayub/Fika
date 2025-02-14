"use client"

import { useState, useEffect } from "react"

interface Review {
  id: string
  name: string
  date: string
  review: string
}

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews")
        if (response.ok) {
          const data = await response.json()
          setReviews(data)
        } else {
          console.error("Failed to fetch reviews")
        }
      } catch (error) {
        console.error("Error fetching reviews:", error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{review.name}</h3>
          <p className="text-gray-600 mb-4">{new Date(review.date).toLocaleDateString()}</p>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  )
}

