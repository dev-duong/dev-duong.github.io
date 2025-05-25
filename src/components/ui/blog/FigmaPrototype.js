const FigmaPrototypes = ({ images }) => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    {(Array.isArray(images) ? images : []).map((image, index) => (
      <div key={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-xl shadow-md w-full h-auto"
        />
      </div>
    ))}
  </div>
);

export default FigmaPrototypes;
