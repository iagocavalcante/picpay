const createUserElement = ( user ) => {
  return `<div class="list-row">
      <div class="list-row-cell pic">
        <span>
          <img src="${user.img}" alt="">
        </span>
      </div>
      <div class="list-row-cell description">
        <h3>${user.name}</h3>
        <p>id: ${user.id}</p>
        <p>${user.username}</p>
      </div>
      <div class="list-row-cell pay">
        <button>$</button>
        <a href="#">
          <p class="text-pagar">PAGAR</p>
          <p class="arrow">❭</p>
        </a>
      </div>
    </div>`
}