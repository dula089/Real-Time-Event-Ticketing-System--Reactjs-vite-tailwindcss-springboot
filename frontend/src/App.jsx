import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ConfigurationForm from "./components/ConfigurationForm";
import TicketDisplay from "./components/TicketDisplay";
import ControlPanel from "./components/ControlPanel";
import LogDisplay from "./components/LogDisplay";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
  });

  const [tickets, setTickets] = useState([]);
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errors, setErrors] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
  });

  const [submissions, setSubmissions] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.totalTickets) {
      newErrors.totalTickets = "* Total Tickets is required";
    } else if (parseInt(formData.totalTickets) <= 0) {
      newErrors.totalTickets = "* Total Tickets must be greater than 0";
    }

    if (!formData.ticketReleaseRate) {
      newErrors.ticketReleaseRate = "* Ticket Release Rate is required";
    } else if (parseInt(formData.ticketReleaseRate) <= 0) {
      newErrors.ticketReleaseRate =
        "* Ticket Release Rate must be greater than 0";
    }

    if (!formData.customerRetrievalRate) {
      newErrors.customerRetrievalRate = "* Customer Retrieval Rate is required";
    } else if (parseInt(formData.customerRetrievalRate) <= 0) {
      newErrors.customerRetrievalRate =
        "* Customer Retrieval Rate must be greater than 0";
    }

    if (!formData.maxTicketCapacity) {
      newErrors.maxTicketCapacity = "* Max Ticket Capacity is required";
    } else if (parseInt(formData.maxTicketCapacity) <= 0) {
      newErrors.maxTicketCapacity =
        "* Max Ticket Capacity must be greater than 0";
    } else if (
      parseInt(formData.maxTicketCapacity) < parseInt(formData.totalTickets)
    ) {
      newErrors.maxTicketCapacity =
        "* Max Ticket Capacity cannot be less than Total Tickets";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);
      setSubmissionSuccess(false);

      const response = await axios.post(
        "http://localhost:8081/api/configuration",
        formData
      );

      if (response.status === 201) {
        setSubmissions([response.data]);

        const log = {
          saleId: null,
          dateTime: new Date().toLocaleString(),
          message: "Configuration updated successfully!",
        };

        await saveLog(log);

        const initializedTickets = Array.from(
          { length: parseInt(formData.totalTickets) },
          (_, i) => ({ id: i + 1, status: "Available" })
        );
        setTickets(initializedTickets);
        setSubmissionSuccess(true);

        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorLog = {
        saleId: null,
        dateTime: new Date().toLocaleString(),
        message: "Error: Failed to submit configuration",
      };

      await saveLog(errorLog);
    } finally {
      setLoading(false);
    }
  };

  const saveLog = async (log) => {
    try {
      await axios.post("http://localhost:8081/api/logs", log);
      setLogs((prevLogs) => [...prevLogs, log]);
    } catch (error) {
      console.error("Error saving log:", error);
    }
  };

  const handleStart = async () => {
    if (tickets.length === 0) {
      setStatusMessage("Please configure the system first.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    setRunning(true);
    setStatusMessage("System started.");
    const log = {
      saleId: null,
      dateTime: new Date().toLocaleString(),
      message: "System started.",
    };
    await saveLog(log);
    setTimeout(() => setStatusMessage(""), 3000);
  };

  const handleStop = async () => {
    if (!running) {
      setStatusMessage("System is not running.");
      setTimeout(() => setStatusMessage(""), 3000);
      return;
    }

    setRunning(false);
    setStatusMessage("System stopped.");
    const log = {
      saleId: null,
      dateTime: new Date().toLocaleString(),
      message: "System stopped.",
    };
    await saveLog(log);
    setTimeout(() => setStatusMessage(""), 3000);
  };

  const handleReset = async () => {
    setRunning(false);
    setStatusMessage("System reset.");
    setFormData({
      totalTickets: "",
      ticketReleaseRate: "",
      customerRetrievalRate: "",
      maxTicketCapacity: "",
    });
    setTickets([]);
    setSubmissions([]);
    const log = {
      saleId: null,
      dateTime: new Date().toLocaleString(),
      message: "System reset.",
    };
    await saveLog(log);
    setErrors({
      totalTickets: "",
      ticketReleaseRate: "",
      customerRetrievalRate: "",
      maxTicketCapacity: "",
    });
    setSubmissionSuccess(false);
    setTimeout(() => setStatusMessage(""), 3000);
  };

  useEffect(() => {
    if (running && tickets.length > 0) {
      const interval = setInterval(() => {
        setTickets((prevTickets) => {
          const availableTickets = prevTickets.filter(
            (t) => t.status === "Available"
          );
          if (availableTickets.length === 0) {
            // All tickets are sold, stop the system
            setRunning(false);
            setStatusMessage("All tickets have been sold.");
            const log = {
              saleId: null,
              dateTime: new Date().toLocaleString(),
              message: "System stopped: All tickets have been sold.",
            };
            saveLog(log);
            setTimeout(() => setStatusMessage(""), 3000);
            return prevTickets;
          }

          const updatedTickets = [...prevTickets];
          const randomIndex = Math.floor(
            Math.random() * availableTickets.length
          );
          const ticketToSell = availableTickets[randomIndex];

          const ticketIndex = updatedTickets.findIndex(
            (t) => t.id === ticketToSell.id
          );
          if (ticketIndex !== -1) {
            updatedTickets[ticketIndex].status = "Sold";
            const log = {
              saleId: ticketToSell.id,
              dateTime: new Date().toLocaleString(),
              message: `Ticket #${ticketToSell.id} sold.`,
            };
            saveLog(log);
          }

          return updatedTickets;
        });
      }, 1000 / (formData.customerRetrievalRate || 1));

      return () => clearInterval(interval);
    }
  }, [running, formData.customerRetrievalRate]);

  // Fetch logs on component mount
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/logs");
        if (response.data) {
          setLogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/config"
            element={
              <div className="container mx-auto px-4 py-8">
                <ConfigurationForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  errors={errors}
                />

                <div className="mt-8">
                  <Dashboard
                    tickets={tickets}
                    submissions={submissions}
                    statusMessage={statusMessage}
                    submissionSuccess={submissionSuccess}
                    handleStart={handleStart}
                    handleStop={handleStop}
                    handleReset={handleReset}
                  />
                </div>
              </div>
            }
          />

          <Route path="/logs" element={<LogDisplay logs={logs} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
    
  );
}

export default App;
