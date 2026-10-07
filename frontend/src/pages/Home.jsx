import { Link } from 'react-router-dom'
function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-slate-950 font-black">
            S
          </div>

          <span className="text-xl font-semibold tracking-tight">
            SmartWaste
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#how-it-works" className="hover:text-white transition">
            How it works
          </a>

          <a href="#impact" className="hover:text-white transition">
            Impact
          </a>

          <a href="#bins" className="hover:text-white transition">
            Find a bin
          </a>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-emerald-300 transition">
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-24">

        <div className="max-w-4xl">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900 text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Intelligent waste infrastructure
          </div>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]">
            Waste has
            <span className="block text-emerald-400">
              a journey.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-400">
            SmartWaste connects AI-powered waste recognition, smart bins,
            automated segregation and rewards into one intelligent platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

           <Link
  to="/bins"
  className="px-6 py-3.5 rounded-full bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition"
>
  Find a Smart Bin →
</Link>

            <button className="px-6 py-3.5 rounded-full border border-slate-700 text-white hover:bg-slate-900 transition">
              Explore the system
            </button>

          </div>

        </div>
        {/* Live Smart Bin */}
<section className="mt-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">

  {/* Bin visualization */}
  <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 min-h-[430px]">

    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">LIVE DEMO BIN</p>
        <h2 className="text-2xl font-semibold mt-1">
          SmartWaste · AIT Campus
        </h2>
      </div>

      <div className="flex items-center gap-2 text-sm text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Online
      </div>
    </div>

    {/* Bin */}
    <div className="flex justify-center mt-10">

      <div className="relative w-52">

        {/* Lid */}
        <div className="h-8 rounded-t-2xl bg-slate-600 border border-slate-500" />

        {/* Body */}
        <div className="h-64 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-[2rem] border border-slate-500 shadow-2xl">

          {/* Sensor */}
          <div className="flex justify-center pt-7">
            <div className="w-20 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Compartments */}
          <div className="grid grid-cols-3 gap-2 px-5 mt-12">

            <div className="h-20 rounded-xl bg-slate-700 border border-slate-600 flex flex-col items-center justify-center">
              <span className="text-xs text-slate-400">WET</span>
              <span className="text-lg mt-1">01</span>
            </div>

            <div className="h-20 rounded-xl bg-slate-700 border border-slate-600 flex flex-col items-center justify-center">
              <span className="text-xs text-slate-400">DRY</span>
              <span className="text-lg mt-1">02</span>
            </div>

            <div className="h-20 rounded-xl bg-slate-700 border border-slate-600 flex flex-col items-center justify-center">
              <span className="text-xs text-slate-400">METAL</span>
              <span className="text-lg mt-1">03</span>
            </div>

          </div>

        </div>

        {/* Ground */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-64 h-3 bg-slate-800 rounded-full blur-sm" />

      </div>

    </div>
  </div>

  {/* Live status */}
  <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

    <p className="text-sm text-slate-500">
      CURRENT SYSTEM STATE
    </p>

    <h2 className="text-2xl font-semibold mt-2">
      Waiting for waste
    </h2>

    <p className="text-slate-400 mt-3 leading-relaxed">
      The smart bin is monitoring its surroundings. When waste is
      detected, the system can trigger image recognition and
      automated segregation.
    </p>

    <div className="mt-8 space-y-3">

      <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <span className="text-slate-400">AI recognition</span>
        <span className="text-slate-500">Standby</span>
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <span className="text-slate-400">Weight sensor</span>
        <span className="text-emerald-400">Ready</span>
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
        <span className="text-slate-400">Segregation</span>
        <span className="text-slate-500">Standby</span>
      </div>

    </div>

    <button className="w-full mt-8 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition text-sm">
      View live bin →
    </button>

  </div>

</section>

        {/* System flow */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-800 rounded-3xl overflow-hidden border border-slate-800">

          <div className="bg-slate-950 p-7">
            <p className="text-emerald-400 text-sm font-medium">01</p>
            <h3 className="mt-4 text-xl font-semibold">Identify</h3>
            <p className="mt-2 text-sm text-slate-400">
              Scan the bin QR and connect your disposal to your account.
            </p>
          </div>

          <div className="bg-slate-950 p-7">
            <p className="text-emerald-400 text-sm font-medium">02</p>
            <h3 className="mt-4 text-xl font-semibold">Recognize</h3>
            <p className="mt-2 text-sm text-slate-400">
              Computer vision identifies the waste category.
            </p>
          </div>

          <div className="bg-slate-950 p-7">
            <p className="text-emerald-400 text-sm font-medium">03</p>
            <h3 className="mt-4 text-xl font-semibold">Segregate</h3>
            <p className="mt-2 text-sm text-slate-400">
              The smart mechanism directs waste to the correct compartment.
            </p>
          </div>

          <div className="bg-slate-950 p-7">
            <p className="text-emerald-400 text-sm font-medium">04</p>
            <h3 className="mt-4 text-xl font-semibold">Reward</h3>
            <p className="mt-2 text-sm text-slate-400">
              Your disposal becomes measurable impact and reward points.
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Home