// import Header from '../components/Header';

import BtnComponent from './BtnComponent';

function Header() {
  const arrayImages = [
    'src/images/MagnifyingGlass.png',
    'src/images/Group.png',
    'src/images/Heart.png',
    'src/images/UserCircle.png',
    'src/images/ShoppingCart.png',
  ];

  return (
    <header>
      <div id="painel-superior-1">
        <h5>
          <img src="src/images/ShieldCheck.png" alt="" />
          {' '}
          Compra 100% segura
        </h5>
        <h5>
          <img src="src/images/Truck.png" alt="" />
          {' '}
          Frete grátis acima de R$ 200
        </h5>
        <h5>
          <img src="src/images/CreditCard.png" alt="" />
          {' '}
          Parcele suas compras
        </h5>
      </div>
      <div id="painel-superior-2">
        <img src="src/images/Group 35.png" alt="logo-vtex" />
        <input placeholder="O que você está buscando?" />
        {
          arrayImages.map((image) => BtnComponent(image))
        }
      </div>
      <div id="painel-superior-3">
        <h5>TODAS CATEGORIAS</h5>
        <h5>SUPERMERCADO</h5>
        <h5>LIVROS</h5>
        <h5>MODA</h5>
        <h5>LANÇAMENTOS</h5>
        <h5>OFERTAS DO DIA</h5>
        <h5>
          <img src="src/images/CrownSimple.png" alt="" />
          ASSINATURAS
        </h5>
      </div>
    </header>
  );
}

export default Header;
