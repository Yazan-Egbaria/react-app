import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="flex flex-col">
      <div id="title">
        <h2 className="mb-12 text-center text-4xl underline">Our Tours</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
