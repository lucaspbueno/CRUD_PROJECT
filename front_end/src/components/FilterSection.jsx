import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputSearch from "./InputSearch"
import OffCanvas from "./OffCanvas"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import Modal from "./Modal";
import { useRef } from "react";
import { deleteData } from "@/utils/fetchData";

function FilterSection({ setShouldFetchData, deleteBtnIsDisabled, selectedItems, setShouldCheckDeleteBtn }) {
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const url = 'http://0.0.0.0:8000/api/v1/equipment/bulk-delete/';

  console.log(selectedItems);

  const deleteEquipment = async () => {
    try {
      await deleteData(url, selectedItems);
      setShouldFetchData(true)
      setShouldCheckDeleteBtn(true)
    } catch (error) {
      console.error('Erro ao excluir dados:', error.message);
    }
  }

  return (
    <section className="flex justify-between mb-5">
      <InputSearch></InputSearch>
      <section className="flex gap-5">
        <button className="btn btn-outline btn-warning">
          <FontAwesomeIcon icon={faPen} />
        </button>

          <button
            className="btn btn-outline btn-error"
            disabled={deleteBtnIsDisabled}
            onClick={ openModal }
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          <Modal
            modalRef={ modalRef }
            closeModal={ closeModal }
            func={ deleteEquipment }
          >
          </Modal>

        <OffCanvas setShouldFetchData={ setShouldFetchData }></OffCanvas>
      </section>
    </section>
  )
}

export default FilterSection