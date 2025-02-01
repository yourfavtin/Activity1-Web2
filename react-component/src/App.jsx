import Profile from './components/Profile'
import Contact from './components/ContactInformation'
import Experience from './components/WorkExperience'
import Skills from './components/Skills'
import About from './components/AboutMe'

function App() {
  return (
    <div className="container mx-auto p-3 ">
      <Profile 
      name = "Justin Valladolid"
       />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 drop-shadow-2xl hover:bg-auto">
        <Contact 
            Email = "catc.valladolid@gmail.com"
            Phone = "0912 - 345 - 6789"
            Address = "Morong, Rizal"
        />
        <Experience />

            <Skills/>   

               <About />
      </div>
    </div>
  );
}

export default App;
