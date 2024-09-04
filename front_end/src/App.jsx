import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import TableComponent from "./components/TableComponent"
import FilterSection from "./components/FilterSection"
import { useEffect, useState } from "react"
import fetchData from "./utils/fetchData"

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const urlEquipments = 'http://localhost:8000/api/v1/equipments/'

  useEffect(() => {
    const fetchApiData = async () => {
    try {
      setLoading(true);
      /* console.log(urlEquipments); */
      
      const result = await fetchData(urlEquipments);
      /* console.log(result); */
      // Chama a função importada
      setData(result);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
  };

    fetchApiData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Header></Header>
      <Wrapper>
        <FilterSection></FilterSection>
        <TableComponent data={data}></TableComponent>
      </Wrapper>
    </>
  )
}

export default App
