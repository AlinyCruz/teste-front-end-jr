function BtnComponent(image: string) {
  return (
    <button key={ image }>
      {' '}
      <img src={ image } alt={ image } />
      {' '}
    </button>
  );
}

export default BtnComponent;
