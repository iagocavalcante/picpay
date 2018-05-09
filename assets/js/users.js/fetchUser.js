const listContainer = document.querySelector('.list-item')
const fetchUser = () => {
  axios.get('http://careers.picpay.com/tests/mobdev/users')
    .then( response => {
      listContainer.innerHTML = ''
      response.data.forEach( user => {
        listContainer.innerHTML += createUserElement( user )
        listContainer.innerHTML += createPaymentModal( user )
      })
    })
    .catch( err => window.alert('Não foi possível recuperar os usuários!'))
}