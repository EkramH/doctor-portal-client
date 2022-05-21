import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date || new Date(), "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);

  return (
    <div className="px-8 my-10">
      <h2 className="text-secondary text-2xl text-center">
        Available Appointment on {format(date || new Date(), "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-3">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
