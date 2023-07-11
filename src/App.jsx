import Footer from "./Components/Footer/Footer";
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";



function App() {

  return (
    <>
      
      <Header title={document.title} />
      <Content/>
      <Footer/>
    </>
  )
}

export default App
