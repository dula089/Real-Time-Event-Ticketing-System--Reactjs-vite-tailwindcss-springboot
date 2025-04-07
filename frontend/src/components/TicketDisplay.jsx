import React, { useState } from "react";

const TicketDisplay = ({ tickets }) => {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  
  const filteredTickets = 
    filter === "all" ? tickets :
    filter === "available" ? tickets.filter(t => t.status === "Available") :
    tickets.filter(t => t.status === "Sold");
    
  const availableCount = tickets.filter(t => t.status === "Available").length;
  const soldCount = tickets.filter(t => t.status === "Sold").length;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2 md:mb-0">
          Ticket Status
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <button 
              className={`px-4 py-2 text-sm ${filter === "all" 
                ? "bg-blue-500 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setFilter("all")}
            >
              All ({tickets.length})
            </button>
            <button 
              className={`px-4 py-2 text-sm ${filter === "available" 
                ? "bg-green-500 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setFilter("available")}
            >
              Available ({availableCount})
            </button>
            <button 
              className={`px-4 py-2 text-sm ${filter === "sold" 
                ? "bg-purple-500 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setFilter("sold")}
            >
              Sold ({soldCount})
            </button>
          </div>
          
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <button 
              className={`px-4 py-2 text-sm ${view === "grid" 
                ? "bg-blue-500 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setView("grid")}
            >
              Grid
            </button>
            <button 
              className={`px-4 py-2 text-sm ${view === "list" 
                ? "bg-blue-500 text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setView("list")}
            >
              List
            </button>
          </div>
        </div>
      </div>
      
      {tickets.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No tickets available. Please configure the system first.
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`p-4 rounded-lg shadow-sm border transition-all transform hover:scale-105 ${
                ticket.status === "Available"
                  ? "bg-green-50 border-green-200"
                  : "bg-purple-50 border-purple-200"
              }`}
            >
              <div className="text-center">
                <div className="text-xl font-bold">{ticket.id}</div>
                <div className={`text-sm font-medium ${
                  ticket.status === "Available" ? "text-green-600" : "text-purple-600"
                }`}>
                  {ticket.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Ticket #{ticket.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ticket.status === "Available" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-purple-100 text-purple-800"
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TicketDisplay;