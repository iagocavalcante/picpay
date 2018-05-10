const createUserElement = ( user, index ) => {
  return `<div class="list-row">
      <div class="list-row-cell pic">
        <span>
          <img src="${user.img}" alt="">
        </span>
      </div>
      <div class="list-row-cell description">
        <h2>${user.name}</h2>
        <p>id: ${user.id}</p>
        <p>${user.username}</p>
      </div>
      <div class="list-row-cell pay">
        <img src="./assets/img/pagar.svg">
        <a href="#" id="${index}">
          <p class="text-pagar">PAGAR</p>
          <img src="./assets/img/down.svg">
        </a>
      </div>
    </div>`
}