import CreateCarousel from './CreateCarousel';
import fetchAPI from '../services/fetchAPI';

const JSON = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const API = await fetchAPI(JSON);
console.log(API);

function Carousel() {
  return (
    <div id="div-carousel">
      <h3>Produtos relacionados</h3>
      <section id="produtos-relacionados">
        <h5 id="cel">CELULAR</h5>
        <h5>ACESSÓRIOS</h5>
        <h5>TABLETS</h5>
        <h5>NOTEBOOKS</h5>
        <h5>TVS</h5>
        <h5>VER TODOS</h5>
      </section>
      <section>
        <CreateCarousel data={ API } />
      </section>
    </div>
  );
}

export default Carousel;
