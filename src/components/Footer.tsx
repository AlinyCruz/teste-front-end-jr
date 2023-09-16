function Footer() {
  const cards = {
    card1: 'src/images/formas_pagamento.png',
    alt1: 'formas_pagamento',
  };

  const cardFlags = [
    { flag: 'src/images/023-facebook.png', alt: 'facebook' },
    { flag: 'src/images/044-instagram.png', alt: 'instagram' },
    { flag: 'src/images/116-youtube.png', alt: 'youtube' },
  ];

  return (
    <footer>
      <section id="footer1">
        <div id="sobre-info-pag">
          <div id="sobre">
            <h3>Sobre nós</h3>
            <h4>CONHEÇA</h4>
            <h4>COMO COMPRAR</h4>
            <h4>INDICAÇÃO E DESCONTO</h4>
            <div id="icons-rede">
              {
              cardFlags.map((item) => {
                return (
                  <img key={ item.alt } src={ item.flag } alt={ item.alt } />
                );
              })
            }
            </div>
          </div>

          <div id="informacoes">
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <h4>FALE CONOSCO</h4>
            <h4>DÚVIDAS</h4>
            <h4>PRAZO DE ENTREGA</h4>
            <h4>FORMAS DE PAGAMENTO</h4>
            <h4>POLÍTICA DE PRIVACIDADE</h4>
            <h4>TROCAS E DEVOLUÇÕES</h4>
          </div>

          <div id="pagamentos">
            <h3>FORMAS DE PAGAMENTO</h3>
            <img src={ cards.card1 } alt={ cards.alt1 } />
          </div>
        </div>

        <div id="cadastre-se">
          <div>
            <h3>CADASTRE-SE E RECEBA NOSSAS</h3>
            <h4>NOVIDADES DE PROMOÇÕES</h4>
          </div>
          <h5>
            Excepteur sint occaecat cudatat non ent,
            sunt in culpa qui officia lorem ipsum
          </h5>
          <div>
            <input type="text" placeholder="SEU E-MAIL" />
            <button>OK</button>
          </div>
        </div>
      </section>

      <section id="footer2">
        <h5>
          Copyright © 2019. Todos os direitos reservados.
          Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem
          expressa autorização.
        </h5>
        <img id="img-footer" src="src/images/Group 831.png" alt="Group" />
      </section>
    </footer>
  );
}

export default Footer;
