// var btnAbrirModal = document.getElementById('data-modal-open'),
//     backdrop = document.getElementById('data-modal'),
//     modal = document.getElementById('modal'),
//     btnCerrarModal = document.getElementById('data-modal-close');

//     btnAbrirModal.addEventListener('click', function(){
//         backdrop.classList.add('active');
//     })


(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();