"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A14] text-white">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-3xl font-black">
            Task<span className="text-[#DA1A32]">U</span>
          </div>
          <a href="https://instagram.com/thetasku" target="_blank" className="text-sm text-gray-300 hover:text-white">
            @THETASKU
          </a>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex bg-[#DA1A32]/15 text-[#ff4b5f] px-4 py-2 rounded-full text-sm font-bold mb-6">
              Built for UHart students
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
              Campus help. <br />
              <span className="text-[#DA1A32]">Right now.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-xl">
              Post quick jobs around University of Hartford — moving, errands,
              pickups, cleaning, tutoring help, and more.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#post-task" className="bg-[#DA1A32] hover:bg-red-700 px-8 py-4 rounded-2xl font-black">
                Post a Task
              </a>
              <a href="/how-it-works" className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl font-black">
                How it Works
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-3xl font-black">$3</p>
                <p className="text-xs text-gray-400">posting fee</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-3xl font-black">Fast</p>
                <p className="text-xs text-gray-400">student help</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-3xl font-black">UHart</p>
                <p className="text-xs text-gray-400">campus focused</p>
              </div>
            </div>
          </div>

          <form
            id="post-task"
            className="bg-white text-black rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)] space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                task: formData.get("task"),
                description: formData.get("description"),
                price: formData.get("price"),
                payment: formData.get("payment"),
              };

              await fetch("https://script.google.com/macros/s/AKfycbxH-ZTy83lz5-d954qbjFACzfp965vmTOVUZYtbc6eKZUtoMOzHenk3L0T9ohmhOjju0w/exec", {
                method: "POST",
                body: JSON.stringify(data),
              });

              let paymentInstructions = "";

              if (data.payment === "Cash App") {
                paymentInstructions = "Send $3 to Cash App: $Trey1506";
              } else if (data.payment === "Venmo") {
                paymentInstructions = "Send $3 to Venmo: 312-785-8076";
              } else if (data.payment === "Zelle") {
                paymentInstructions = "Send $3 to Zelle: 312-785-8076 or trexrussell50@gmail.com";
              } else if (data.payment === "Apple Pay") {
                paymentInstructions = "Send $3 via Apple Pay to: 312-785-8076";
              }

              alert(paymentInstructions + "\n\nAfter payment, your task has been submitted.");
            }}
          >
            <div>
              <h2 className="text-4xl font-black">Post your task</h2>
              <p className="text-gray-500 mt-1">Tell students what you need done.</p>
            </div>

            <input name="name" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]" />
            <input name="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]" />
            <input name="phone" placeholder="Phone" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]" />
            <input name="task" placeholder="Task title" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]" />
            <input name="description" placeholder="Task details" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]" />
            <input name="price" placeholder="What will you pay the helper?" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]" />

            <select name="payment" defaultValue="" required className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-[#DA1A32]">
              <option value="" disabled>Choose payment method</option>
              <option value="Cash App">Cash App</option>
              <option value="Zelle">Zelle</option>
              <option value="Venmo">Venmo</option>
              <option value="Apple Pay">Apple Pay</option>
            </select>

            <div className="bg-gray-100 rounded-xl p-4 text-sm flex justify-between">
              <span>Posting fee</span>
              <strong>$3</strong>
            </div>

            <button type="submit" className="w-full bg-[#DA1A32] hover:bg-red-700 transition text-white py-4 rounded-xl font-black">
              Submit Task + Get Payment Info
            </button>

            <p className="text-center text-xs text-gray-400">
              Fast help for University of Hartford students.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}