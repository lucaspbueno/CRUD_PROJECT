import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputSearch from "./InputSearch"
import OffCanvas from "./OffCanvas"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import Modal from "./Modal";
import { useRef } from "react";
import { deleteData } from "@/utils/fetchData";
import FormEdit from "./FormEdit";

function FilterSection({ setShouldFetchData, deleteBtnIsDisabled, selectedItems, setDeleteBtnIsDisabled, editBtnIsDisabled, setEditBtnIsDisabled }) {
  const modalRefDelete = useRef(null);
  const modalRefEdit = useRef(null);

  const openModal = (modalRef) => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = (modalRef) => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const url = 'http://0.0.0.0:8000/api/v1/equipment/bulk-delete/';

  const deleteEquipment = async () => {
    try {
      await deleteData(url, selectedItems);
      setShouldFetchData(true)
      setDeleteBtnIsDisabled(true)
      setEditBtnIsDisabled(true)
    } catch (error) {
      console.error('Erro ao excluir dados:', error.message);
    }
  }

  return (
    <section className="flex justify-between mb-5">
      <InputSearch></InputSearch>
      <section className="flex gap-5">
        <button
          className="btn btn-outline btn-warning"
          disabled={editBtnIsDisabled}
          onClick={ () => openModal(modalRefEdit) }
        >
          <FontAwesomeIcon icon={faPen} />
        </button>

          <button
            className="btn btn-outline btn-error"
            disabled={deleteBtnIsDisabled}
            onClick={ () => openModal(modalRefDelete) }
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>

          <Modal
            modalRef={ modalRefDelete }
            closeModal={ () => closeModal(modalRefDelete) }
            func={ deleteEquipment }
            title="Deseja excluir o(s) equipamento(s)?"
            description="Esse mudança não poderá ser desfeita!"
          >
          </Modal>

          <Modal
            modalRef={ modalRefEdit }
            closeModal={ () => closeModal(modalRefEdit) }
            title="Deseja editar o equipamento?"
            description="Use esse formulário para isso!"
            fl_hide={true}
          >
            <FormEdit
              setShouldFetchData={ setShouldFetchData }
              setEditBtnIsDisabled={setEditBtnIsDisabled}
              setDeleteBtnIsDisabled={setDeleteBtnIsDisabled}
              selectedItems={selectedItems}
              closeModal={ () => closeModal(modalRefEdit) }
            >
            </FormEdit>
          </Modal>

        <OffCanvas setShouldFetchData={ setShouldFetchData }></OffCanvas>
      </section>
    </section>
  )
}

export default FilterSection