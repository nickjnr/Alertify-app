import './App.css'
import Navbar from './compoents/Navbar'
import Header from './compoents/Header'
import Clients from './compoents/Clients'
import TopFeatures from './compoents/TopFeatures'
import Playbooks from './compoents/Playbooks'
import Compatibility from './compoents/Compatibility'
import Analytics from './compoents/Analytics'
import Workflow from './compoents/Workflow'
import Faq from './compoents/FAQ'
import Blogs from './compoents/Blogs'
import Footer from './compoents/Footer'
import Testimonials from './compoents/Testinomals'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Clients/>
      <TopFeatures/>
      <Playbooks/>
      <Compatibility/>
      <Analytics/>
      <Workflow/>
      <Faq/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
