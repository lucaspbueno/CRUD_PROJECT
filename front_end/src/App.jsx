import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import TableComponent from "./components/TableComponent"
import FilterSection from "./components/FilterSection"

function App() {

  return (
    <>
      <Header></Header>
      <Wrapper>
        <FilterSection></FilterSection>
        <TableComponent></TableComponent>
      </Wrapper>
      
    </>
  )
}

export default App
