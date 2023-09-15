import BtnComprar from './BtnComprar';
import InputModal from './InputModal';

function Modal({ produto, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={produto.photo} alt={produto.productName} />
        <h2>{produto.productName}</h2>
        <p>
          Preço:
          {' '}
          {produto.price}
        </p>
        <p>
          Descrição:
          {' '}
          {produto.descriptionShort}
        </p>
        <a href="">Veja mais detalhes do produto</a>
        <InputModal />
        <BtnComprar />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
