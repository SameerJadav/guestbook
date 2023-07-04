import Heading from "~/components/heading"
import Nav from "~/components/nav"
import PostWizard from "~/components/post-wizard"

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
