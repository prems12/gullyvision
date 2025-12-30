"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !API_URL) return;

    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/early-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
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
        disabled={status !== "idle"}
        className="w-full max-w-sm px-4 py-3 rounded-md bg-[#141f35] border border-white/20 text-white"
      />

      <Button
        type="submit"
        disabled={status !== "idle"}
        className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6"
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
        <p className="text-red-400 text-sm">Something went wrong</p>
      )}
    </form>
  );
}
