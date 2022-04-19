(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("backdrop-active");
    refs.modal.classList.toggle("modal-active");
  } 
  
  window.onclick = function(event) {
  if (event.target == refs.backdrop) {
    refs.backdrop.classList.toggle("backdrop-active");
    refs.modal.classList.toggle("modal-active");
  }
}
})();
