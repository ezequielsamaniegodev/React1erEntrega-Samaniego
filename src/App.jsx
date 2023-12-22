import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListConteiner greeting={"Bienvenidos"}></ItemListConteiner>
    </>
  )
}

export default App
