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

    // SAVE TO GOOGLE SHEET
    await fetch("https://script.google.com/macros/s/AKfycbxH-ZTy83lz5-d954qbjFACzfp965vmTOVUZYtbc6eKZUtoMOzHenk3L0T9ohmhOjju0w/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // SEND TO STRIPE PAYMENT
    window.location.href = "https://buy.stripe.com/test_dRm7sL1HI24R1c1dd48IU00";
  }

  return (
    <main className="min-h-screen bg-[#070A14] text-white">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-3xl font-black">
            Task<span className="text-[#DA1A32]">U</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-black mb-6">
              UHart Tasks
            </h1>

            <p className="text-gray-300 mb-8">
              Post a task and get help from students fast.
            </p>

            <a href="#post-task" className="bg-[#DA1A32] px-6 py-3 rounded-xl font-bold">
              Post a Task
            </a>
          </div>

          <form
            id="post-task"
            onSubmit={handleSubmit}
            className="bg-white text-black rounded-3xl p-8 space-y-4"
          >
            <h2 className="text-3xl font-bold">Post your task</h2>

            <input required name="name" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="phone" placeholder="Phone" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="task" placeholder="Task title" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="description" placeholder="Task details" className="w-full p-4 rounded-xl bg-gray-100" />
            <input required name="price" placeholder="What will you pay?" className="w-full p-4 rounded-xl bg-gray-100" />

            <select required name="payment" defaultValue="" className="w-full p-4 rounded-xl bg-gray-100">
              <option value="" disabled>Choose payment method</option>
              <option value="Cash App">Cash App</option>
              <option value="Zelle">Zelle</option>
              <option value="Venmo">Venmo</option>
              <option value="Apple Pay">Apple Pay</option>
            </select>

            <div className="bg-gray-100 p-4 rounded-xl flex justify-between">
              <span>Posting fee</span>
              <strong>$3</strong>
            </div>

            <button type="submit" className="w-full bg-[#DA1A32] text-white py-4 rounded-xl font-bold">
              Submit Task + Pay
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}