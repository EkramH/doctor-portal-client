import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import bgDoctor from "../../assets/images/appointment.png";
import MainButton from "../../shared/MainButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${bgDoctor})` }}
      className="flex justify-center items-center my-10"
    >
      <div className="flex-1 hidden lg:block">
        <img className="-mt-16" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary pb-3">Appointment</h3>
        <h2 className="text-4xl text-white">Make an appointment Today</h2>
        <p className="text-white w-3/4 py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <MainButton>Get Started</MainButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
