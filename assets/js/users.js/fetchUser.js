const listContainer = document.querySelector('.list-item')
const doc = document
const fetchUser = () => {
  return axios.get('http://careers.picpay.com/tests/mobdev/users')
}