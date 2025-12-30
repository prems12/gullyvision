"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("https://gullyvision.onrender.com/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit email");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "loading" || status === "success"}
        className="w-full max-w-sm px-4 py-3 rounded-md bg-[#141f35] border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
      />

      <Button
        type="submit"
        className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Joining..." : "Join Early Access"}
      </Button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>You’re on the list</span>
        </div>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
