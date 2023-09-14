import Carousel from './Carousel';
import BtnProduto from './BtnProduto';

function Main() {
  return (
    <>
      <main>
        <img src="src/images/Rectangle 250.png" alt="Rectangle" />
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <BtnProduto />
      </main>
      <section>
        <div>
          <img src="src/images/monitorar-tablet-e-smartohone 1.png" alt="monitor" />
        </div>
        <h5>Tecnologia</h5>
      </section>
      <Carousel />

    </>
  );
}

export default Main;
