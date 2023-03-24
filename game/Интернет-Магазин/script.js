let activeTabId = 'goods';

const initialTab = getActiveId();

initialTab.classList.add('active');

const tabsContainer = document.querySelector('.tabs');

const tabs = document.querySelectorAll('button.tab');

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];

  tab.addEventListener('click', clickHandler);
}

function clickHandler(event) {
  const activeTab = getActiveId();

  activeTab.classList.remove('active');
  event.target.classList.add('active');

  const activeContent = document.querySelector(
    `[data-active-tab-content="true"]`
  );

  if (activeContent) {
    activeContent.remove();
  }

  if (activeTabId === 'goods') {
    tabsContainer.insertAdjacentHTML('afterend', renderGoods());
  } else {
    tabsContainer.insertAdjacentHTML('afterend', renderCart());
  }

  activeTabId = event.target.dataset.tabId;
}

function getActiveId() {
  return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
}

function renderTabContentById(tabId) {
  let html = '';
  if (tabId === 'goods') {
    html = renderGoods();
  } else {
    html = renderCart();
  }
}

function renderCart() {
  return `
    <div  data-active-tab-content="true" class="product-items">
      <div class="product-item">
        <img src="img/html.png" />
        <div class="product-list">
          <h3>Уроки по HTML</h3>
          <p class="price">₽ 300</p>
          <button class="button">В корзину</button>
        </div>
      </div>

      <div class="product-item">
        <img src="img/css.png" />
        <div class="product-list">
          <h3>Уроки по CSS</h3>
          <p class="price">₽ 150</p>
          <button class="button">В корзину</button>
        </div>
      </div>

      <div class="product-item">
        <img src="img/js.png" />
        <div class="product-list">
          <h3>Уроки по JS</h3>
          <p class="price">₽ 260</p>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>

    `;
}

function renderGoods() {
  return `
   <div data-active-tab-content="true" class="cart-items">
      <div class="cart-item">
        <div class="cart-item-title">Уроки по HTML</div>
        <div class="cart-item-count">3шт.</div>
        <div class="cart-item-price">₽ 150</div>
      </div>

      <div class="cart-item">
        <div class="cart-item-title">Уроки по CSS</div>
        <div class="cart-item-count">1шт.</div>
        <div class="cart-item-price">₽ 450</div>
      </div>

      <div class="cart-item">
        <div class="cart-item-title">Уроки по JS</div>
        <div class="cart-item-count">6шт.</div>
        <div class="cart-item-price">₽ 550</div>
      </div>
    </div>
    `;
}

// const goods = document.querySelector('button[data-id="goods"]');
// const cart = document.querySelector('button[data-id="cart"]');

// function clickHandler(event) {
//event.target.datset.id;
//event.target.getAttribute('data-id');
//   console.log(event.target.getAttribute('data-id'));
//   const id = event.target.dataset.id;
//   if (id === 'goods') {
//     goods.classList.add('active');
//     cart.classList.remove('active');
//   } else if (id === 'cart') {
//     goods.classList.remove('active');
//     cart.classList.add('active');
//   }
//   goods.classList.toggle('active');
//   cart.classList.toggle('active');
//}

// goods.addEventListener('click', clickHandler);
// cart.addEventListener('click', clickHandler);
