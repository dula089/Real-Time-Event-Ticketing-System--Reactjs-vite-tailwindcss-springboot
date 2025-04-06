import React, { useEffect, useState } from "react";

const TicketAnimation = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const initialTickets = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      speed: Math.random() * 1 + 0.5,
      angle: Math.random() * 360,
      scale: Math.random() * 0.4 + 0.8,
      rotate: Math.random() * 20 - 10,
    }));

    setTickets(initialTickets);

    const interval = setInterval(() => {
      setTickets((prevTickets) =>
        prevTickets.map((ticket) => {
          const radians = (ticket.angle * Math.PI) / 180;
          let newX = ticket.x + Math.cos(radians) * ticket.speed;
          let newY = ticket.y + Math.sin(radians) * ticket.speed;
          let newAngle = ticket.angle;

          if (newX < 0 || newX > 100) {
            newAngle = 180 - newAngle;
          }
          if (newY < 0 || newY > 100) {
            newAngle = 360 - newAngle;
          }

          newX = Math.max(0, Math.min(100, newX));
          newY = Math.max(0, Math.min(100, newY));

          return {
            ...ticket,
            x: newX,
            y: newY,
            angle: newAngle,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 bg-blue-50 rounded-xl overflow-hidden border-2 border-blue-200">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="absolute flex items-center justify-center"
          style={{
            left: `${ticket.x}%`,
            top: `${ticket.y}%`,
            transform: `translate(-50%, -50%) scale(${ticket.scale}) rotate(${ticket.rotate}deg)`,
            transition: "left 0.5s ease, top 0.5s ease",
          }}
        >
          <div className="bg-white p-2 rounded-lg shadow-md border-2 border-blue-300 w-20">
            <div className="text-xs text-center font-bold text-blue-800">
              TICKET #{ticket.id + 1}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketAnimation;
