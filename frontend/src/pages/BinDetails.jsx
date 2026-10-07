import { Link, useParams } from 'react-router-dom'

function BinDetails() {
  const { id } = useParams()

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-slate-950 font-black">
              S
            </div>

            <span className="text-xl font-semibold">
              SmartWaste
            </span>
          </Link>

          <Link
            to="/bins"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            ← All bins
          </Link>

        </div>
      </nav>

      {/* Main */}
      <section className="max-w-5xl mx-auto px-8 py-14">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          <div>
            <p className="text-sm text-emerald-400 font-medium">
              SMART BIN
            </p>

            <h1 className="text-5xl font-semibold tracking-tight mt-3">
              AIT Main Block
            </h1>

            <p className="text-slate-500 mt-3">
              Bin ID: {id}
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 text-emerald-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Online
          </div>

        </div>

        {/* Demo notice */}
        <div className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7">

          <p className="text-sm text-emerald-400 font-medium">
            PHYSICAL DEMONSTRATION BIN
          </p>

          <h2 className="text-2xl font-semibold mt-2">
            Ready for disposal
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl leading-relaxed">
            This is the demonstration SmartWaste bin. In the final system,
            the bin will communicate with the platform through the ESP32
            controller and send waste detection, classification and sensor
            information to the backend.
          </p>

        </div>

        {/* Status */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-500">AI recognition</p>
            <p className="text-xl font-semibold mt-2">
              Ready
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-500">Weight sensor</p>
            <p className="text-xl font-semibold mt-2">
              Ready
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-500">Compartments</p>
            <p className="text-xl font-semibold mt-2">
              3 available
            </p>
          </div>

        </div>

        {/* Start disposal */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center">

          <p className="text-slate-400">
            Ready to dispose your waste?
          </p>

          <h2 className="text-3xl font-semibold mt-2">
            Start your disposal journey
          </h2>

          <p className="text-slate-500 mt-3">
            Identify yourself before placing waste into the Smart Bin.
          </p>

          <Link
            to={`/bins/${id}/login`}
            className="inline-block mt-7 px-7 py-3.5 rounded-full bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition"
          >
            Continue →
          </Link>

        </div>

      </section>

    </main>
  )
}

export default BinDetails