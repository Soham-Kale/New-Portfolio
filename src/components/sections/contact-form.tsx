"use client";

import { Check, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-line-strong bg-surface-2 px-4 py-3 text-[0.9375rem] text-fg placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none focus-visible:outline-none";

/**
 * The site is fully static, so the form composes an email in the visitor's mail app
 * (subject and body pre-filled) instead of posting to a server.
 */
export function ContactForm({ email, topics }: { email: string; topics: string[] }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `${topic || "Project enquiry"} — ${name}`;
    const body = `${message}\n\n— ${name}\n${from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">What can I help with?</span>
          <select name="topic" defaultValue="" className={cn(field, "appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a1a6b2' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
            <option value="" disabled>
              Choose a topic
            </option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Project details</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="A few lines about your goals, timeline and any links."
            className={cn(field, "resize-y")}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-fg-subtle" aria-live="polite">
          {sent ? (
            <span className="inline-flex items-center gap-2 text-success">
              <Check className="h-4 w-4" aria-hidden /> Your email app should open with the message ready to send.
            </span>
          ) : (
            "Opens your email app with everything filled in."
          )}
        </p>
        <button
          type="submit"
          className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-fg px-6 text-[0.9375rem] font-medium text-canvas transition-[background-color,transform] duration-300 hover:bg-white active:scale-[0.98]"
        >
          Send message
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
        </button>
      </div>
    </form>
  );
}
