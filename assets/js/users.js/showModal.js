const showModal = ( index, id ) => {
  const elementSelected = document.getElementById(`${index}`)
  const modal = document.getElementById(`${id}`)
  const dialog = document.getElementById(`dialog${id}`)
  elementSelected.addEventListener('click', function() {
    modal.style.display = 'block'
    dialog.style.display = 'block'
    document.styleSheets[0].addRule('modal:before', 'display:block');
  })
}