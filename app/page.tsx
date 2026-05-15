"use client";

import type { FormEvent } from "react";

const STRIPE_LINK = "https://buy.stripe.com/test_dRm7sL1HI24R1c1dd48IU00";
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxH-ZTy83lz5-d954qbjFACzfp965vmTOVUZYtbc6eKZUtoMOzHenk3L0T9ohmhOjju0w/exec";

export default function Home() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      task: formData.get("task"),
      description: formData.get("description"),
      price: formData.get("price"),
      payment: formData.get("payment"),
    };

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors", // prevents blocking
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log("Sheet error:", err);
    }

    // ALWAYS redirect (this fixes your issue)
    window.location.href = STRIPE_LINK;
  }

  return (
    <main className="min-h-screen bg-[#070A14] text-white overflow-hidden">
      <section className="relative max-w-7xl mx-auto px-6 py-10">

        {/* glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DA1A32]/30 blur-[140px] rounded-full" />

        {/* NAV */}
        <nav className="relative flex justify-between items-center mb-20">
          <div className="text-4xl font-black tracking-tight">
            Task<span className="text-[#DA1A32]">U</span>
          </div>

          <a
            href="#post-task"
            className="bg-white text-black px-5 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Post Now
          </a>
        </nav>

        {/* HERO */}
        <div className="relative grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-block bg-[#DA1A32]/20 text-[#ff4b5f] px-4 py-2 rounded-full font-bold mb-6">
              University of Hartford Students
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
              Get help on campus{" "}
              <span className="text-[#DA1A32]">fast.</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl mb-10">
              Need help moving, picking something up, cleaning, tutoring,
              or doing a quick task? Post it and get help from UHart students.
            </p>

            {/* stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-black">$3</h3>
                <p className="text-sm text-gray-400">posting fee</p>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-black">Fast</h3>
                <p className="text-sm text-gray-400">responses</p>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-black">UHart</h3>
                <p className="text-sm text-gray-400">students only</p>
              </div>
            </div>

            <a
              href="#post-task"
              className="inline-block bg-[#DA1A32] hover:bg-red-700 px-8 py-4 rounded-2xl font-black transition"
            >
              Post a Task
            </a>
          </div>

          {/* FORM */}
          <form
            id="post-task"
            onSubmit={handleSubmit}
            className="bg-white text-black rounded-[2rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.6)] space-y-4"
          >
            <h2 className="text-4xl font-black">Post your task</h2>
            <p className="text-gray-500">
              Submit your task and pay the $3 fee to go live.
            </p>

            <input required name="name" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]" />
            <input required name="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]" />
            <input required name="phone" placeholder="Phone" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]" />
            <input required name="task" placeholder="Task title" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]" />
            <input required name="description" placeholder="Describe the task" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]" />
            <input required name="price" placeholder="What will you pay?" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]" />

            <select required name="payment" defaultValue="" className="w-full p-4 rounded-xl bg-gray-100 focus:ring-2 focus:ring-[#DA1A32]">
              <option value="" disabled>Preferred payment method</option>
              <option value="Cash App">Cash App</option>
              <option value="Zelle">Zelle</option>
              <option value="Venmo">Venmo</option>
              <option value="Apple Pay">Apple Pay</option>
            </select>

            <div className="bg-gray-100 p-4 rounded-xl flex justify-between">
              <span>Posting fee</span>
              <strong>$3</strong>
            </div>

            <button
              type="submit"
              className="w-full bg-[#DA1A32] hover:bg-red-700 text-white py-4 rounded-xl font-black transition"
            >
              Submit Task + Pay
            </button>

            <p className="text-xs text-center text-gray-400">
              You’ll be redirected to secure checkout.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}