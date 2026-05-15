"use client";

export default function Home() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    if (data.payment === "Cash App") {
      alert("Task posted. Now send the $3 posting fee to Cash App: $Trey1506");
      window.location.href = "https://cash.app/$Trey1506";
    } else if (data.payment === "Venmo") {
      alert("Task posted. Now send the $3 posting fee to Venmo: 312-785-8076");
      window.location.href = "https://venmo.com/";
    } else if (data.payment === "Zelle") {
      alert("Task posted. Send $3 with Zelle to: 312-785-8076 or trexrussell50@gmail.com");
    } else if (data.payment === "Apple Pay") {
      alert("Task posted. Send $3 with Apple Pay to: 312-785-8076");
    } else {
      alert("Please choose a payment method.");
    }

    e.currentTarget.reset();
  }

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
              Post quick jobs around University of Hartford — moving, errands, pickups, cleaning, tutoring help, and more.
            </p>

            <a href="#post-task" className="inline-block bg-[#DA1A32] hover:bg-red-700 px-8 py-4 rounded-2xl font-black">
              Post a Task
            </a>
          </div>

          <form id="post-task" onSubmit={handleSubmit} className="bg-white text-black rounded-[2rem] p-8 shadow-2xl space-y-4">
            <h2 className="text-4xl font-black">Post your task</h2>
            <p className="text-gray-500">Tell students what you need done.</p>

            <input required name="name" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="phone" placeholder="Phone" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="task" placeholder="Task title" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="description" placeholder="Task details" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="price" placeholder="What will you pay the helper?" className="w-full p-4 rounded-xl bg-gray-100" />

            <select required name="payment" defaultValue="" className="w-full p-4 rounded-xl bg-gray-100">
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

            <button type="submit" className="w-full bg-[#DA1A32] hover:bg-red-700 text-white py-4 rounded-xl font-black">
              Submit Task + Pay
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}