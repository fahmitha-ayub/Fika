import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

const REVIEWS_FILE = path.join(process.cwd(), "data", "reviews.json")

interface Review {
  id: string
  name: string
  date: string
  review: string
}

function getReviews(): Review[] {
  if (!fs.existsSync(REVIEWS_FILE)) {
    return []
  }
  const fileContents = fs.readFileSync(REVIEWS_FILE, "utf8")
  return JSON.parse(fileContents)
}

function saveReviews(reviews: Review[]) {
  const dirPath = path.dirname(REVIEWS_FILE)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2))
}

export async function GET() {
  const reviews = getReviews()
  return NextResponse.json(reviews)
}

export async function POST(request: Request) {
  const reviews = getReviews()
  const newReview = await request.json()

  const reviewWithId: Review = {
    id: uuidv4(),
    ...newReview,
  }

  reviews.push(reviewWithId)
  saveReviews(reviews)

  return NextResponse.json(reviewWithId, { status: 201 })
}

