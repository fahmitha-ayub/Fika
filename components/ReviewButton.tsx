"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ReviewButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const reviewData = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      })

      if (response.ok) {
        console.log("Review submitted successfully")
        setIsOpen(false)
        form.reset()
        // You might want to update the UI here, e.g., show a success message
      } else {
        console.error("Failed to submit review")
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error submitting review:", error)
      // Handle error, e.g., show an error message to the user
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">Add Workshop Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Workshop Review</DialogTitle>
          <DialogDescription>Share your thoughts about today's workshop. Your feedback is valuable!</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name" required />
          <Input name="date" type="date" required />
          <Textarea name="review" placeholder="Your Review" required />
          <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white">
            Submit Review
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

