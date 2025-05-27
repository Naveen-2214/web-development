import { useState } from "react";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Please fill required fields with valid data.");
      return;
    }

    try {
      await axios.post("https://your-backend-url.com/submit", formData);
      setStatus("Lead submitted successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("Error submitting lead.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Lead Form</h2>
        <input name="name" required value={formData.name} onChange={handleChange} placeholder="Name" className="input" />
        <input name="email" required value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
        <input name="company" value={formData.company} onChange={handleChange} placeholder="Company (optional)" className="input" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message (optional)" className="input" />
        <button type="submit" className="btn mt-4">Submit</button>
        <p className="text-sm mt-2">{status}</p>
      </form>
    </div>
  );
}
