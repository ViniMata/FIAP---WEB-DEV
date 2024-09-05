import Header from "./components/Header/Index"

function App() {
const estiloTitulo = {
    backgroundColor: 'red',
    color: 'blue'
}

  return (
    <>
      <Header/>
      <h1 className="titulo"
      style={estiloTitulo}
      >Titulo da pagina</h1>
      <p className="text-fiapPrimary text-5xl w-[350px] md:text-green-600 bg-gray-400 ml-3 flex justify-center">Paragrafo</p>
    </>
  )
}

export default App
