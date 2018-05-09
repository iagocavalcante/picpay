const createPaymentModal = ( user ) => {
  return `<div class="modal" id="#${user.id}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-header--title">
            <p class="text-title">Pagamento para ${user.name}</p>
          </div>
          <a href="#${user.id}" class="btn-close" aria-hidden="true">×</a>

        </div>
        <div class="modal-body">
          <p>One modal example here! :D</p>
        </div>
        <div class="modal-footer">
          <a href="#${user.id}" class="btn">Nice!</a>
        </div>
      </div>
    </div>`
}