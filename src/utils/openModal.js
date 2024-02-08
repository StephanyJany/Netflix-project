export function openModal(container, ComponentModal, submitForm) {
  container.innerHTML += ComponentModal();
  if (submitForm) {
    submitForm();
  }
}
