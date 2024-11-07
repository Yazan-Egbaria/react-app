import { useState } from "react";
import Btn from "./Btn";
import Guest from "./Guest";

const initialGuests = [
  {
    id: 1,
    src: "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
    alt: "man portrait",
    h3: "Bertie Yates",
    p: "29 years",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dqzkirtbz/image/upload/w_auto/q_auto,f_auto,dpr_auto/v1698342290/Website/blog/male_portrait_postcrest.jpg",
    alt: "man portrait",
    h3: "Hester Hogan",
    p: "32 years",
  },
  {
    id: 3,
    src: "https://i.etsystatic.com/20525733/r/il/8578de/5117587364/il_570xN.5117587364_bmz8.jpg",
    alt: "man portrait",
    h3: "Larry Little",
    p: "36 years",
  },
  {
    id: 4,
    src: "https://www.adobe.com/creativecloud/photography/discover/media_19eaf89ab2259ef98af0d257570b1d85fcfa55a5f.png?width=750&format=png&optimize=medium",
    alt: "man portrait",
    h3: "Sam Wealesh",
    p: "24 years",
  },
  {
    id: 5,
    src: "https://images.squarespace-cdn.com/content/v1/59962ced37c58197c0ae86f8/1503337875054-55GKXXJ6Z1U3MR5JMCLM/portrait-photography-tutorial-posing.jpg?format=500w",
    alt: "man portrait",
    h3: "David William",
    p: "27 years",
  },
];

const BirthdayContainer = () => {
  const [guests, setGuests] = useState(initialGuests);

  return (
    <div className="flex w-[500px] flex-col gap-8 bg-white p-4">
      <h1 className="text-2xl text-black">{guests.length} Birthdays Today</h1>

      <div className="flex flex-col gap-4">
        {guests.map((guest) => (
          <Guest
            key={guest.id}
            src={guest.src}
            alt={guest.alt}
            h3={guest.h3}
            p={guest.p}
          />
        ))}
      </div>

      <Btn
        btnFn={() => {
          setGuests([]);
        }}
      />
    </div>
  );
};

export default BirthdayContainer;
