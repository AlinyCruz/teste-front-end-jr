import BtnComponent from './BtnComponent';

function Header() {
  const arrayImages = [
    { srcImage: 'src/images/Group.png' },
    { srcImage: 'src/images/Heart.png' },
    { srcImage: 'src/images/UserCircle.png' },
    { srcImage: 'src/images/ShoppingCart.png' },
  ];

  const btnCompras = [
    { srcCompras: 'src/images/ShieldCheck.png', descricao: 'Compra 100% segura' },
    { srcCompras: 'src/images/Truck.png', descricao: 'Frete grátis acima de R$ 200' },
    { srcCompras: 'src/images/CreditCard.png', descricao: 'Parcele suas compras' },
  ];

  return (
    <header>
      <div id="painel-superior-1">
        {
          btnCompras.map((item) => {
            return (
              <div key={ item.descricao } className="icons-sup">
                <img
                  src={ item.srcCompras }
                  alt={ item.srcCompras }
                  className="img-sup"
                />
                <p>{item.descricao}</p>
              </div>
            );
          })
        }
      </div>

      <div id="painel-superior-2">
        <img
          src="src/images/Group 35.png"
          alt="logo-vtex"
          id="logo-vtex"
        />
        <div id="input-button">
          <input placeholder="O que você está buscando?" id="input-topo" />
          <button id="button-topo">
            <img
              src="src/images/MagnifyingGlass.png"
              alt="MagnifyingGlass"
              id="magnifyingGlass"
            />
          </button>
        </div>
        <div id="four-buttons">
          {
          arrayImages.map((image) => BtnComponent(image.srcImage))
        }
        </div>
      </div>

      <div id="painel-superior-3">
        <h5>TODAS CATEGORIAS</h5>
        <h5>SUPERMERCADO</h5>
        <h5>LIVROS</h5>
        <h5>MODA</h5>
        <h5>LANÇAMENTOS</h5>
        <h5 id="oferta-do-dia">OFERTAS DO DIA</h5>
        <h5>
          <img src="src/images/CrownSimple.png" alt="" />
          ASSINATURAS
        </h5>
      </div>
    </header>
  );
}

export default Header;
