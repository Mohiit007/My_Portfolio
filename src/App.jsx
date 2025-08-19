import { ThemeProvider } from "./ThemeContext"
import BinaryBackground from "./BinaryBackground"
import Navbar from "./Navbar"
import About_Me from "./About_Me"
import Skills from "./Skills"
import Education from "./Education"
import Projects from "./Projects"
import Achievements from "./Achievements"
import Contact from "./Contact"

function App(){
  return(
    <ThemeProvider>
      <BinaryBackground />
      <Navbar />
      <About_Me />
      <Skills />
      <Education />
      <Projects />     
      <Achievements />
      <Contact />
    </ThemeProvider>
  )
}

export default App