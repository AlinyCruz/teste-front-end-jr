function Section(img, alt, h1, h2) {
  return (
    <section key={alt}>
      <img src={img} alt={alt} />
      <h1>{h1}</h1>
      <h2>{h2}</h2>
    </section>
  );
}

export default Section;
