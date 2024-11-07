const Member = ({ src, name, job, desc }) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={src}
        alt={name}
        className="mx-auto h-52 w-52 rounded-full object-cover"
      />

      <div id="memberTitle" className="text-center">
        <h3 id="name" className="text-sm font-bold uppercase">
          {name}
        </h3>
        <p id="job" className="text-sm font-light uppercase">
          {job}
        </p>
      </div>

      <p id="desc" className="w-96 text-center">
        {desc}
      </p>
    </div>
  );
};

export default Member;
