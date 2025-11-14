// src/pages/AuditForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkyawoe"; // replace

export default function AuditForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = new FormData(e.target);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        // OPTIONALLY: Send to your internal API or record in localStorage
        // Give user a short confirmation and redirect after 1.5s
        setTimeout(() => navigate("/thank-you"), 1400);
      } else {
        setStatus("error");
        setError(data?.error || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setError(err.message || "Network error");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center py-20 bg-background text-foreground px-4">
      <section className="w-full max-w-2xl bg-card p-6 rounded-lg border border-border shadow-sm">
        <h1 className="text-2xl font-serif mb-2">Book your free 15-minute clinic audit</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Quick audit focused on patient experience and booking conversion. We'll review your site and give 3 immediate fixes.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="New Audit Booking from Bantern" />
          <input type="hidden" name="source" value="bantern-audit-form" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Full name</span>
              <input name="name" required className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="Dr. Sanjay Kumar" />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Clinic / Practice name</span>
              <input name="clinic" required className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="Sanjay Dental Clinic" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Phone</span>
              <input name="phone" required type="tel" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="+91 98xxxxxx" />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Email</span>
              <input name="email" required type="email" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="owner@clinic.com" />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Website (if any)</span>
            <input name="website" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="https://yourclinic.com (optional)" />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Which best describes you?</span>
            <select name="speciality" required className="px-3 py-2 border border-border rounded-md bg-transparent">
              <option value="">Select</option>
              <option value="dentist">Dentist / Dental Clinic</option>
              <option value="skin">Skin / Dermatology Clinic</option>
              <option value="nutritionist">Nutritionist / Dietitian</option>
              <option value="other">Other health service</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Preferred audit time (approx)</span>
            <input name="preferred_time" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="Mon-Fri, 10am - 2pm IST" />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">What is your main goal?</span>
            <textarea name="message" required rows="4" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="More appointments, better online booking, highlight services..."></textarea>
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
            >
              {status === "sending" ? "Sending..." : "Book Audit"}
            </button>

            <div className="text-sm text-muted-foreground">
              {status === "success" && <span className="text-green-500">Booked — check your email shortly.</span>}
              {status === "error" && <span className="text-red-500">Error: {error}</span>}
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            We respect your privacy. We will only use this info to conduct the audit and follow up about our services.
          </p>
        </form>
      </section>
    </main>
  );
}
