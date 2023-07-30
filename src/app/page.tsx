import Feed from "~/components/Feed"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold pt-6 text-start w-full">
        Sign my guestbook
      </h1>
      <Header />
      <Feed />
      <Footer />
    </>
  )
}
