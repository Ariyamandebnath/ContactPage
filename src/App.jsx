import './App.css'
import ContactHeader from './components/contactHeader/ContactHeader'
import Navbar from './components/Navigation/Navbar'
import ContactForm from './components/ContactForm/ContactForm'
function App() {

  return (
    <div>

      <Navbar />
      <main className="main_container">
      <ContactHeader />
      <ContactForm/>

      </main>
      
    </div>
  )
}

export default App
