function Modal({ modalRef, closeModal, func, children, title, description, fl_hide }) {
  return (
    <dialog id="my_modal_1" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{description}</p>
        <div className="modal-action">
          {/* Remova o atributo method="dialog" */}
          {children}
          {!fl_hide && (
            <section className="flex justify-end mt-3">
              <button
                type="button"
                className="btn btn-outline btn-neutral"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                type="button" // Altere para "button" ao invés de "submit"
                className="btn btn-primary text-white ml-3"
                onClick={ func }
              >
                Confirmar
              </button>
            </section>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
