"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-emerald-200 selection:text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <nav className="mx-auto max-w-5xl px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="The Padel Clan logo"
              className="h-14 w-auto"
            />
            <span className="font-semibold tracking-wide text-emerald-600 text-lg">
              The Padel Clan
            </span>
          </a>
        </nav>
      </header>

      {/* Hero with padel racket background */}
      <section
        className="relative py-20 md:py-32"
        style={{
          backgroundImage: "url('/bg-padel.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "180px", // adjust to taste (e.g., 140px / 220px)
        }}
      >
        {/* Soft panel to keep text readable */}
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-xl bg-white/75 backdrop-blur-sm px-6 py-12 text-center shadow-sm">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                Coming soon
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Welcome to <span className="text-emerald-600">The Padel Clan</span>
              </h1>

              <p className="mt-5 text-neutral-700 text-lg max-w-2xl mx-auto leading-relaxed">
                A friendly padel club built around people and the joy of the game.
                We’re getting things ready—stay tuned for updates and get ready to
                play, connect, and belong.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-emerald-50">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-700">More than just a game</h2>
          <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
            The Padel Clan is all about community—meeting new people, sharing matches,
            celebrating wins, and enjoying the sport together. Everyone’s welcome,
            whatever your level.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} The Padel Clan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

