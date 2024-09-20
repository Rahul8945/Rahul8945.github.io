import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Contact from './pages/Contact'
import { CustomCursor } from './components/CustomCursor'
import { MainHeader } from './components/MainHeader'
import { Loading } from './theme/Loading'


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(
            () => resolve({ success: true, data: "Sample data" }),
            2000
          )
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return ( loading ? <Loading/>:
    <>
      <CustomCursor/>
      <MainHeader/>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
    
  )
}

export default App
