function BtnComponent(image: string) {
  return (
    <button>
      {' '}
      <img src={ image } alt={ image } />
      {' '}
    </button>
  );
}

export default BtnComponent;
