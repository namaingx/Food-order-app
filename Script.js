let order = [];
let total = 0;

fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuDiv = document.getElementById('menu');
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>ราคา: ${item.price} บาท</p>
        <button onclick="addToOrder(${item.id}, '${item.name}', ${item.price})">สั่งซื้อ</button>
      `;
      menuDiv.appendChild(div);
    });
  });

function addToOrder(id, name, price) {
  order.push({ id, name, price });
  total += price;
  renderOrder();
}

function renderOrder() {
  const orderList = document.getElementById('orderList');
  const totalText = document.getElementById('total');
  orderList.innerHTML = '';
  order.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} บาท`;
    orderList.appendChild(li);
  });
  totalText.textContent = total;
}
