import Heading from "~/components/Heading"
import Nav from "~/components/Nav"
import PostWizard from "~/components/PostWizard"

export default function Home() {
  return (
    <>
      <Heading />
      <div className="mt-6 border-b border-slate6 pb-6">
        <PostWizard />
      </div>
      <Nav />
    </>
  )
}
