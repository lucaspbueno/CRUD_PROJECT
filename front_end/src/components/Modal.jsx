function Modal({ modalRef, closeModal, func }) {
  return (
    <dialog id="my_modal_1" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Deseja excluir o(s) equipamento(s)?</h3>
        <p className="py-4">Esse mudança não poderá ser desfeita!</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-primary text-white" onClick={ closeModal }>Cancelar</button>
            <button className="btn btn-outline btn-neutral ml-3" onClick={ func }>Confirmar</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal