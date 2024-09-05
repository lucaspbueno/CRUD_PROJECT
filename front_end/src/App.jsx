import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import TableComponent from "./components/TableComponent"
import FilterSection from "./components/FilterSection"
import { useEffect, useState } from "react"
import { fetchData } from "./utils/fetchData"

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldFetchData, setShouldFetchData] = useState(false)
  const [deleteBtnIsDisabled, setDeleteBtnIsDisabled] = useState(true)
  const [shouldCheckDeleteBtn, setShouldCheckDeleteBtn] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  const urlEquipments = 'http://0.0.0.0:8000/api/v1/equipment/'

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const result = await fetchData(urlEquipments);
        setData(result);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const result = await fetchData(urlEquipments);
        setData(result);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
    };

  if (shouldFetchData) {
    fetchApiData()
    setShouldFetchData(false)
  }

    fetchApiData();
  }, [shouldFetchData]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      setDeleteBtnIsDisabled(false)
      return 
    }
    setDeleteBtnIsDisabled(true)
  }, [selectedItems]);

  useEffect(() => {
    if (selectedItems.length) {
      setDeleteBtnIsDisabled(true)
      return 
    }
      setDeleteBtnIsDisabled(false)
  }, [shouldCheckDeleteBtn]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Header></Header>
      <Wrapper>
        <FilterSection
          setShouldFetchData={setShouldFetchData}
          deleteBtnIsDisabled={deleteBtnIsDisabled}
          selectedItems={selectedItems}
          setShouldCheckDeleteBtn={setShouldCheckDeleteBtn}
        >
          </FilterSection>
        <TableComponent
          data={data}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        >
          </TableComponent>
      </Wrapper>
    </>
  )
}

export default App
