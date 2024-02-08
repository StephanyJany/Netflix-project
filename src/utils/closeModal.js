export function closeModal(container) {
  if (container) {
    container.parentElement.remove();
  }
  return;
}
