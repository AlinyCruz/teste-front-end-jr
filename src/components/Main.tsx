import Carousel from './Carousel';
import BtnProduto from './BtnProduto';
import BtnComponent from './BtnComponent';
import BtnConfira from './BtnConfira';
import Section from './Section';
import CarouselEnd from './CarouselEnd';

const arrayImages = [
  { srcCard: 'src/images/monitorar-tablet-e-smartohone 1.png', descricao: 'Tecnologia' },
  { srcCard: 'src/images/supermercados 1.png', descricao: 'Supermercado' },
  { srcCard: 'src/images/whiskey.png', descricao: 'Bebidas' },
  { srcCard: 'src/images/ferramentas 1.png', descricao: 'Ferramentas' },
  { srcCard: 'src/images/cuidados-de-saude 1.png', descricao: 'Saúde' },
  { srcCard: 'src/images/corrida 1.png', descricao: 'Esporte e fitness' },
  { srcCard: 'src/images/moda 1.png', descricao: 'Moda' },
];

const card1 = {
  srcCard: 'src/images/Rectangle 250.png',
  alt: 'Rectangle',
  descricao1: 'Venha conhecer nossas promoções',
  descricao2: '50% Off nos produtos',
};

const card2 = [
  {
    srcCard: 'src/images/image 45.png',
    altSrcCard1: 'image-45-1',
    srcCard2: 'src/images/image 101.png',
    altSrcCard2: 'image-101-1',
    descricao1: 'Parceiros',
    descricao2: 'Lorem ipsum dolor sit amet, consectetur',
    descricao3: 'Produtos',
  },
  {
    srcCard: 'src/images/image 45.png',
    altSrcCard1: 'image-45-2',
    srcCard2: 'src/images/image 101.png',
    altSrcCard2: 'image-101-2',
    descricao1: 'Parceiros',
    descricao2: 'Lorem ipsum dolor sit amet, consectetur',
    descricao3: 'Produtos',
  },
];

function Main() {
  return (
    <>
      <main>
        {Section(card1.srcCard, card1.alt, card1.descricao1, card1.descricao2)}
        <BtnProduto />
      </main>
      <section>
        {
          arrayImages.map((item) => {
            return (
              <div key={item.descricao} className="btn-compras">
                {BtnComponent(item.srcCard)}
                <p>{item.descricao}</p>
              </div>
            );
          })
        }
      </section>
      <Carousel />
      <section>
        {
          card2.map((item) => {
            return (
              <section key={item.altSrcCard1} className="srcCard">
                {Section(
                  item.srcCard,
                  item.altSrcCard1,
                  item.descricao1,
                  item.descricao2,
                )}
                <BtnConfira />
              </section>
            );
          })
        }
      </section>
      <section>
        <div>
          <h3>Produtos relacionados</h3>
          <a href="">Ver todos</a>
        </div>
        {
          card2.map((item) => {
            return (
              <section key={item.altSrcCard2} className="srcCard">
                {Section(
                  item.srcCard2,
                  item.altSrcCard2,
                  item.descricao3,
                  item.descricao2,
                )}
                <BtnConfira />
              </section>
            );
          })
        }
      </section>
      <section>
        <CarouselEnd />
      </section>
    </>
  );
}

export default Main;
