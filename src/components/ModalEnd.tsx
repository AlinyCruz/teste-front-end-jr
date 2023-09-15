function ModalEnd({ produto, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={produto.photo} alt={produto.productName} />
        <h2>{produto.productName}</h2>
        <a href="">Veja mais detalhes do produto</a>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ModalEnd;
