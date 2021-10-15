const addBtn = document.getElementById("add");
const exitBtn = document.getElementById("exit");
const addModal = document.getElementById("add-container");
const openModal = () => {
  addModal.classList.toggle("open-modal");
};
// addBtn.addEventListener("click");
addBtn.addEventListener("click", openModal);
exitBtn.addEventListener("click", openModal);
