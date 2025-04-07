import React, { useState } from "react";

const LogDisplay = ({ logs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("dateTime");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredLogs = logs.filter(
    (log) =>
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (log.saleId && log.saleId.toString().includes(searchTerm))
  );

  const sortedLogs = [...filteredLogs].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === "dateTime") {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const getTypeIcon = (message) => {
    if (message.includes("started")) return "▶️";
    if (message.includes("stopped")) return "⏹️";
    if (message.includes("reset")) return "🔄";
    if (message.includes("sold")) return "💰";
    if (message.includes("Configuration")) return "⚙️";
    if (message.includes("Error")) return "❌";
    return "📝";
  };

  const getTypeColor = (message) => {
    if (message.includes("Error")) return "bg-red-50 border-red-200";
    if (message.includes("started")) return "bg-green-50 border-green-200";
    if (message.includes("stopped")) return "bg-yellow-50 border-yellow-200";
    if (message.includes("reset")) return "bg-blue-50 border-blue-200";
    if (message.includes("sold")) return "bg-purple-50 border-purple-200";
    if (message.includes("Configuration"))
      return "bg-indigo-50 border-indigo-200";
    return "bg-gray-50 border-gray-200";
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-8xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">System Logs</h2>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                setSortField("dateTime");
                setSortDirection("desc");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="text-sm text-gray-600 mr-2">Quick Filters:</div>
          {[
            "System started",
            "System stopped",
            "System reset",
            "sold",
            "Configuration",
            "Error",
          ].map((term) => (
            <button
              key={term}
              className={`px-3 py-1 text-xs rounded-full border ${
                searchTerm.includes(term)
                  ? "bg-blue-100 border-blue-300 text-blue-800"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSearchTerm(term)}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {logs.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No logs available. System activity will be recorded here.
        </div>
      ) : (
        <div>
          <div className="text-sm text-gray-600 mb-2">
            Showing {sortedLogs.length} of {logs.length} logs
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("saleId")}
                  >
                    Sale ID
                    {sortField === "saleId" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort("dateTime")}
                  >
                    Date & Time
                    {sortField === "dateTime" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedLogs.map((log, index) => (
                  <tr
                    key={index}
                    className={`${getTypeColor(
                      log.message
                    )} hover:bg-opacity-70`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xl">
                      {getTypeIcon(log.message)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {log.saleId || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.dateTime}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {log.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogDisplay;
