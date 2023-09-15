import { useState } from 'react';
import Modal from './Modal';
import ModalEnd from './ModalEnd';

const data = [
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
  { photo: 'src/images/Group 35.png', productName: 'VTEX' },
];

function CarouselEnd() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);

  const itemsPerPage = 5;
  const numPages = Math.ceil(data.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numPages) % numPages);
  };

  const openModal = (produto) => {
    setSelectedProduto(produto);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduto(null);
    setModalOpen(false);
  };

  const renderItems = () => {
    const startIndex = currentSlide * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = data.slice(startIndex, endIndex);

    return itemsToRender.map((item) => (
      <div
        key={item.productName}
        className="slide"
        onClick={() => openModal(item)}
      >
        <img src={item.photo} alt={item.productName} />
      </div>
    ));
  };

  return (
    <section>
      <h3>Produtos relacionados</h3>
      <div className="carrossel">
        <button onClick={prevSlide}>
          <img
            src="src/images/Vector.png"
            alt="Vector"
          />

        </button>
        <div className="slides-container">
          {renderItems()}
        </div>
        <button onClick={nextSlide}>
          <img
            src="src/images/Vector (1).png"
            alt="Vector"
          />
        </button>
        {modalOpen && (
          <ModalEnd
            produto={selectedProduto}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
}

export default CarouselEnd;
