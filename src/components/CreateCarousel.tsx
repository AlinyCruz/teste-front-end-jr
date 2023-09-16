import { useState } from 'react';
import Modal from './Modal';
import BtnComprar from './BtnComprar';

function CreateCarousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);

  const itemsPerPage = 4;
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
        key={ item.productName }
        className="slide"
        onClick={ () => openModal(item) }
      >
        <img src={ item.photo } alt={ item.productName } />
        <p>{item.productName}</p>
        <p>{item.price}</p>
        <BtnComprar />
      </div>
    ));
  };

  return (
    <div>
      <div id="carrossel">
        <button onClick={ prevSlide }>
          <img
            src="src/images/Vector.png"
            alt="Vector"
          />
        </button>

        <div id="slides-container">
          {renderItems()}
        </div>

        <button onClick={ nextSlide }>
          <img
            src="src/images/Vector (1).png"
            alt="Vector"
          />
        </button>
      </div>
      {modalOpen && (
        <Modal
          produto={ selectedProduto }
          onClose={ closeModal }
        />
      )}
    </div>
  );
}

export default CreateCarousel;
