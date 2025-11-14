// src/pages/AuditForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkyawoe"; // replace

export default function AuditForm() {
  const [status, setStatus] = useState("idle");
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
        {/* ======================================
          CHANGED:
          - REMOVED: "font-serif" for brand consistency.
          ======================================
        */}
        <h1 className="text-2xl font-bold mb-2">Book your free 15-minute business audit</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Quick audit focused on customer experience and lead conversion. We'll review your site and give 3 immediate fixes.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="New Audit Booking from Bantern" />
          <input type="hidden" name="source" value="bantern-audit-form" />

          {/* ...other fields (name, email, etc.) no change... */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Full name</span>
              <input name="name" required className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="Your Full Name" />
            </label>
            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Business / Company name</span>
              <input name="business_name" required className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="Your Business Name" />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Phone</span>
              <input name="phone" required type="tel" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="+91 98xxxxxx" />
            </label>
            <label className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Email</span>
              <input name="email" required type="email" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="your@email.com" />
            </label>
          </div>
          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Website (if any)</span>
            <input name="website" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="https://yourwebsite.com (optional)" />
          </label>

          {/* ======================================
            CHANGED: Select Box
            - CHANGED: "bg-transparent" to "bg-card" on the <select>
            - REMOVED: "text-black" from all <option> tags.
            - WHY: This lets the OS handle the dropdown text color
                   (white on dark, black on light) which is bulletproof.
            ======================================
          */}
          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">What industry are you in?</span>
            <select name="industry" required className="px-3 py-2 border border-border rounded-md bg-card text-foreground">
              <option value="">Select</option>
              <option value="e-commerce">E-Commerce</option>
              <option value="local-service">Local Service (Plumber, Salon, etc.)</option>
              <option value="restaurant">Restaurant / Food</option>
              <option value="tech-saas">Tech / SaaS</option>
              <option value="professional-service">Professional Service (Law, etc.)</option>
              <option value="other">Other</option>
            </select>
          </label>

          {/* ...other fields (time, message) no change... */}
          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Preferred audit time (approx)</span>
            <input name="preferred_time" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="Mon-Fri, 10am - 2pm IST" />
          </label>
          <label className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">What is your main goal?</span>
            <textarea name="message" required rows="4" className="px-3 py-2 border border-border rounded-md bg-transparent" placeholder="More leads, better online booking, e-commerce setup..."></textarea>
          </label>

          {/* ...button and status (no change)... */}
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