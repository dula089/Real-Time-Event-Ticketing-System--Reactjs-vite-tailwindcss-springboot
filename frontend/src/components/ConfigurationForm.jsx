import React from "react";
import ControlPanel from "./ControlPanel";

const ConfigurationForm = ({
  formData,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <div className="flex items-center justify-center min-h-80  py-5 font-mono ">
      <div className=" flex-col w-1/3">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          <h2 className="font-bold text-2xl py-2 text-center text-blue-900">
            Configuration form
          </h2>
          <div>
            <label
              className="block text-sm font-bold text-gray-700 mb-2"
              htmlFor="totalTickets"
            >
              Total Tickets:
            </label>
            {errors.totalTickets && (
              <p className="text-red-500 text-xs ">{errors.totalTickets}</p>
            )}
            <input
              type="number"
              id="totalTickets"
              name="totalTickets"
              value={formData.totalTickets}
              onChange={handleChange}
              placeholder="Enter total tickets"
              className="mb-6 w-full p-2 border rounded focus:outline-none focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-700 mb-2"
              htmlFor="ticketReleaseRate"
            >
              Ticket Release Rate:
            </label>
            {errors.ticketReleaseRate && (
              <p className="text-red-500 text-xs">{errors.ticketReleaseRate}</p>
            )}
            <input
              type="number"
              id="ticketReleaseRate"
              name="ticketReleaseRate"
              value={formData.ticketReleaseRate}
              onChange={handleChange}
              placeholder="Enter ticket release rate"
              className="mb-6 w-full p-2 border rounded focus:outline-none focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-700 mb-2"
              htmlFor="customerRetrievalRate"
            >
              Customer Retrieval Rate:
            </label>
            {errors.customerRetrievalRate && (
              <p className="text-red-500 text-xs">
                {errors.customerRetrievalRate}
              </p>
            )}
            <input
              type="number"
              id="customerRetrievalRate"
              name="customerRetrievalRate"
              value={formData.customerRetrievalRate}
              onChange={handleChange}
              placeholder="Enter customer retrieval rate"
              className="mb-6 w-full p-2 border rounded focus:outline-none focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-700 mb-2"
              htmlFor="maxTicketCapacity"
            >
              Max Ticket Capacity:
            </label>
            {errors.maxTicketCapacity && (
              <p className="text-red-500 text-xs">{errors.maxTicketCapacity}</p>
            )}
            <input
              type="number"
              id="maxTicketCapacity"
              name="maxTicketCapacity"
              value={formData.maxTicketCapacity}
              onChange={handleChange}
              placeholder="Enter max ticket capacity"
              className="mb-6 w-full p-2 border rounded focus:outline-none focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default ConfigurationForm;
