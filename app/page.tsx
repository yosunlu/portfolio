import About from '@/components/about'
import Intro from '@/components/intro'
import SectionDevider from '@/components/section-devider'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDevider/>
      <About/>
      <Projects/>
    </main>
  )
}


// <main className="flex flex-col items-center px-4"> makes the whole page centered
// px-4 ensure padding when smalle screen