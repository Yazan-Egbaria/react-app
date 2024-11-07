const Guest = ({ src, alt, h3, p }) => {
  return (
    <div className="flex gap-4">
      <img
        className="h-[50px] w-[50px] rounded-full object-cover"
        src={src}
        alt={alt}
      />

      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black">{h3}</h3>
        <p className="text-gray-300">{p}</p>
      </div>
    </div>
  );
};

export default Guest;
