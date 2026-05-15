export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A14] text-white">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-black tracking-tight">TaskU</div>
          <a
            href="https://instagram.com/thetasku"
            target="_blank"
            className="text-sm text-gray-400 hover:text-white"
          >
            Instagram: @THETASKU
          </a>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex bg-red-500/10 text-red-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
              University of Hartford
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-6">
              Campus help, instantly.
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Post a task, set your price, and get connected with someone nearby
              who can help with moving, errands, pickups, and quick jobs around UHart.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#post-task"
                className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-black shadow-lg"
              >
                Post a Task
              </a>

              <a
                href="/how-it-works"
                className="bg-white/10 hover:bg-white/20 transition px-8 py-4 rounded-2xl font-black border border-white/10"
              >
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
  className="bg-white text-black rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      task: formData.get("task"),
      location: formData.get("location"),
      time: formData.get("time"),
      contact: formData.get("contact"),
      price: formData.get("price"),
      payment: formData.get("payment"),
    };

    await fetch("https://script.google.com/macros/s/AKfycbxH-ZTy83lz5-d954qbjFACzfp965vmTOVUZYtbc6eKZUtoMOzHenk3L0T9ohmhOjju0w/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Task posted!");

if (data.payment === "Cash App") {
  window.location.href = "https://cash.app/$Trey1506";
} else if (data.payment === "Venmo") {
  window.location.href = "https://venmo.com/312-785-8076";
} else if (data.payment === "Zelle") {
  alert("Send Zelle payment to: 312-785-8076 or trexrussell50@gmail.com");
} else if (data.payment === "Apple Pay") {
  alert("Send Apple Pay to: 312-785-8076");
}
  }}
>
            <div>
              <h2 className="text-4xl font-black">Post your task</h2>
              <p className="text-gray-500 mt-2">
                Tell students what you need done.
              </p>
            </div>
<input name="name" placeholder="Name" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2" />

<input name="email" placeholder="Email" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2" />

<input name="phone" placeholder="Phone" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2" />

<input name="task" placeholder="Task" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2" />

<input name="description" placeholder="Description" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2" />

<input name="price" placeholder="Price" className="w-full p-4 rounded-xl bg-gray-100 outline-none focus:ring-2" />

<select name="payment" className="...">
<option disabled selected>Choose payment method</option>
             <option>Cash App</option>
<option>Zelle</option>
<option>Venmo</option>
<option>Apple Pay</option>
            </select>

            <div className="bg-gray-100 rounded-xl p-4 text-sm flex justify-between">
              <span>Posting Fee</span>
              <strong>$3</strong>
            </div>

            <button className="w-full bg-[#070A14] hover:bg-black transition text-white py-4 rounded-xl font-black">
              Continue to Post
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
