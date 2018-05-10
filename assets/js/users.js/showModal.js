const showModal = ( index, id ) => {
  debugger
  const elementSelected = document.querySelector(`#${index}`)
  const modal = document.querySelector(`#${id}`)
  elementSelected.addEventListener('click', function() {
    console.log(modal)
  })
}