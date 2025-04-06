import React from "react";
import TicketDisplay from "../components/TicketDisplay";
import ControlPanel from "../components/ControlPanel";

const Dashboard = ({
  tickets,
  submissions,
  statusMessage,
  submissionSuccess,
  handleStart,
  handleStop,
  handleReset,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        {submissionSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded animate-pulse">
            Configuration updated successfully!
          </div>
        )}

        {statusMessage && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded">
            {statusMessage}
          </div>
        )}
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          System Dashboard
        </h2>

        {submissions.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Current Configuration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(submissions[0]).map(
                ([key, value]) =>
                  key !== "id" && (
                    <div key={key} className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-600 mb-1">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </div>
                      <div className="text-2xl font-bold text-blue-900">
                        {value}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            System Controls
          </h3>
          <ControlPanel
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
          />
        </div>
      </div>

      <TicketDisplay tickets={tickets} />

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          System Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Available Tickets"
            value={tickets.filter((t) => t.status === "Available").length}
            total={tickets.length}
            color="green"
          />
          <StatCard
            title="Sold Tickets"
            value={tickets.filter((t) => t.status === "Sold").length}
            total={tickets.length}
            color="blue"
          />
          <StatCard
            title="Utilization"
            value={
              tickets.length > 0
                ? Math.round(
                    (tickets.filter((t) => t.status === "Sold").length /
                      tickets.length) *
                      100
                  )
                : 0
            }
            unit="%"
            color="purple"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, total, unit, color }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
  };

  return (
    <div className={`p-4 rounded-lg ${colorClasses[color]}`}>
      <div className="text-sm mb-1">{title}</div>
      <div className="text-3xl font-bold">
        {value}
        {unit}
        {total && <span className="text-lg opacity-70"> / {total}</span>}
      </div>
    </div>
  );
};

export default Dashboard;
