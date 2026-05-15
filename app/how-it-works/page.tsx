export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl font-bold mb-10">
        How TaskU Works
      </h1>

<p className="text-gray-400 mb-8 text-lg">
  Get help around campus in minutes.
</p>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 text-lg text-gray-300 max-w-xl">

        <p><strong>1.</strong> Post a task with details.</p>
        <p><strong>2.</strong> Pay the small posting fee.</p>
        <p><strong>3.</strong> Students nearby contact you.</p>
        <p><strong>4.</strong> You pay them directly after completion.</p>

      </div>

<a
  href="/#post-task"
  className="mt-10 bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-bold"
>
  Post a Task
</a>
    </main>
  );
}




