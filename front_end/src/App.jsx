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
  const [editBtnIsDisabled, setEditBtnIsDisabled] = useState(true)
  const [selectedItems, setSelectedItems] = useState([])

  const urlEquipments = 'http://localhost:8000/api/v1/equipment/'

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
    if (selectedItems.length === 1) {
      setEditBtnIsDisabled(false)
      setDeleteBtnIsDisabled(false)
      return 
    }
    if (selectedItems.length > 0) {
      setDeleteBtnIsDisabled(false)
      return 
    }
    
    setDeleteBtnIsDisabled(true)
    setEditBtnIsDisabled(true)
  }, [selectedItems]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Header></Header>
      <Wrapper>
        <FilterSection
          setShouldFetchData={setShouldFetchData}
          deleteBtnIsDisabled={deleteBtnIsDisabled}
          setDeleteBtnIsDisabled={setDeleteBtnIsDisabled}
          selectedItems={selectedItems}
          editBtnIsDisabled={editBtnIsDisabled}
          setEditBtnIsDisabled={setEditBtnIsDisabled}
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
