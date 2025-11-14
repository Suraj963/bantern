// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <main className="min-h-screen flex items-center justify-center py-20 bg-background text-foreground px-4">
      <section className="max-w-xl text-center bg-card p-8 rounded-lg border border-border">
        <h1 className="text-2xl font-serif mb-2">Thanks — we received your request</h1>
        <p className="text-sm text-muted-foreground mb-4">
          We'll email you to confirm the slot and next steps. If you don't see an email in 10 minutes, check spam or write to hello@bantern.com.
        </p>
        <Link to="/" className="text-sm text-primary underline">Return to home</Link>
      </section>
    </main>
  );
}

export default ThankYou;