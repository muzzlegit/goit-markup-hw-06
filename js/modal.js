(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    explosionModalBtn: document.querySelector('[data-modal-explosion]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.explosionModalBtn.addEventListener('click', explosionModal);
  function toggleModal() {
    refs.modal.classList.remove('is-explosion');     
    refs.modal.classList.toggle('is-hidden');  

  }
  function explosionModal() {
    refs.modal.classList.toggle('is-hidden'); 
    refs.modal.classList.toggle('is-explosion');
  }
})();