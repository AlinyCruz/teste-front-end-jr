function BtnComponent(image: string) {
  return (
    <button key={ image } id="btn-tag-compras">
      {' '}
      <img src={ image } alt={ image } />
      {' '}
    </button>
  );
}

export default BtnComponent;
