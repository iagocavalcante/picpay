const listContainer = document.querySelector('.list-item')
const fetchUser = () => {
  axios.get('http://careers.picpay.com/tests/mobdev/users')
    .then( response => {
      listContainer.innerHTML = ''
      response.data.forEach( (user, index) => {
        listContainer.innerHTML += createUserElement( user, index)
        listContainer.innerHTML += createPaymentModal( user )
        showModal( index, user.id )
      })
    })
    .catch( err => window.alert('Não foi possível recuperar os usuários!'))
}