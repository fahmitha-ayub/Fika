import TeamCarousel from "../components/TeamCarousel"
import ReviewButton from "../components/ReviewButton"
import ReviewList from "../components/ReviewList"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-teal-600 text-white py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">FIKA</h1>
        <p className="text-2xl mb-8">Small Breaks, Big Ideas</p>
        <p className="max-w-2xl mx-auto text-lg">
          At FIKA, we believe in the power of short breaks to fuel creativity and innovation. Our team is dedicated to
          creating an environment where big ideas can flourish.
        </p>
      </header>

      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Meet the passionate individuals behind FIKA. Each member brings unique skills and perspectives, working
          together to turn small breaks into big opportunities.
        </p>
        <TeamCarousel />
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Workshop Reviews</h2>
          <ReviewList />
        </div>
      </section>

      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-center text-xl mb-4">Federal Institute of Science And Technology</p>
          <p className="text-center text-xl mb-4">Angamli,Ernakulam, Kerala, India - 695016</p>
          <p className="text-center text-xl mb-8">Email: fika@fisat.ac.in</p>
          <p className="text-center text-lg">
            Have questions or want to learn more about FIKA? Don't hesitate to reach out. We're always excited to
            connect with like-minded individuals and organizations.
          </p>
        </div>
      </section>

      <div className="fixed bottom-8 right-8">
        <ReviewButton />
      </div>
    </main>
  )
}

