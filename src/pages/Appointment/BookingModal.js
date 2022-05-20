import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking For: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center pt-5"
          >
            <input
              type="text"
              value={format(date || new Date(), "PP")}
              disabled
              className="input input-bordered w-full max-w-xs font-semibold"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option> //use index as unique 'key' prop
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""} //undefined value to definer value error solved with || "".
              disabled
              className="input input-bordered w-full max-w-xs font-semibold"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""} //undefined value to definer value error solved with || "".
              disabled
              className="input input-bordered w-full max-w-xs font-semibold"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
