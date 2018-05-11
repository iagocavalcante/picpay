const createPaymentModal = ( user ) => {
  return `<div class="modal" id="${user.id}" aria-hidden="true">
      <div class="modal-dialog" id="dialog${user.id}">
        <div class="modal-header">
          <div class="modal-header--title">
            <p class="text-title">Pagamento para ${user.name}</p>
          </div>
          <a href="#${user.id}" class="btn-close" aria-hidden="true">×</a>
        </div>
        <div class="modal-body">
          <div class="list-row">
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
          </div>
          <div class="valor">
            <input type="text" placeholder="R$ 0,00"/>
          </div>
        </div>
        <div class="modal-footer">
          <span>
            <img src="./assets/img/blue.svg">
            <p class="forma-pagamento">Forma de pagamento</p>
            <p class="cartao">Cartão de crédito com final 1111</p>
          </span>
          <button>PAGAR</button>
        </div>
      </div>
    </div>`
}