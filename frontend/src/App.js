import Pages from './components/pages'
import './css/style.css'
import logo from './images/mathi.jpg'

function App() {
  return (
    <section>
      <div id="content">
      <div className="my_image">
        <img src={logo} width="150px" alt="" />
      </div>
      <div className="my_title">
        <p className="my_name">Mathi Mahalingam B.A.Sc</p>
        <p className="my_job">Software Test Specialist</p>
        <a href="./contact.html">mathi_m@hotmail.com</a>
      </div>
    </div>
    <div className="App">
        <Pages />
    </div>
     </section>
  );
}

export default App;
