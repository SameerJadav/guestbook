import Feed from "~/components/Feed"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

export default function Home() {
  return (
    <>
      <h1 className="w-full pt-6 text-start text-3xl font-bold">
        Sign my guestbook
      </h1>
      <Header />
      <Feed />
      <Footer />
    </>
  )
}
