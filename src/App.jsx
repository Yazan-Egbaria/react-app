import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
const url = "https://www.course-api.com/react-tours-project";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex w-full items-center justify-center p-12">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}
