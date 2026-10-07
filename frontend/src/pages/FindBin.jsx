import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function FindBin() {
  const bins = [
    {
      id: 'SW-AIT-001',
      name: 'AIT Main Block',
      position: [13.0287, 77.5482],
      status: 'Online',
      demo: true,
    },
    {
      id: 'SW-AIT-002',
      name: 'College Cafeteria',
      position: [13.0301, 77.5501],
      status: 'Online',
      demo: false,
    },
    {
      id: 'SW-AIT-003',
      name: 'Library Block',
      position: [13.0275, 77.5512],
      status: 'Offline',
      demo: false,
    },
    {
      id: 'SW-AIT-004',
      name: 'Student Activity Centre',
      position: [13.0312, 77.5468],
      status: 'Maintenance',
      demo: false,
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400 flex items-center justify-center text-slate-950 font-black">
              S
            </div>

            <span className="text-xl font-semibold">
              SmartWaste
            </span>
          </a>

          <a
            href="/"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            ← Back to home
          </a>

        </div>
      </nav>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-8 pt-12">

        <div className="max-w-2xl">
          <p className="text-sm text-emerald-400 font-medium">
            SMART BIN NETWORK
          </p>

          <h1 className="text-5xl font-semibold tracking-tight mt-3">
            Find a Smart Bin.
          </h1>

          <p className="text-slate-400 text-lg mt-5 leading-relaxed">
            Locate a nearby SmartWaste bin, check its status and
            start your disposal journey.
          </p>
        </div>

      </section>

      {/* Map + Bin list */}
      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid lg:grid-cols-[1fr_360px] gap-6">

          {/* Map */}
          <div className="h-[600px] rounded-3xl overflow-hidden border border-slate-800">

            <MapContainer
              center={[13.0295, 77.5495]}
              zoom={16}
              scrollWheelZoom={true}
              className="h-full w-full"
            >

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {bins.map((bin) => (
                <Marker key={bin.id} position={bin.position}>

                  <Popup>

                    <div className="text-slate-900 min-w-[180px]">

                      <strong className="text-base">
                        {bin.name}
                      </strong>

                      <p className="text-xs mt-1">
                        {bin.id}
                      </p>

                      <p className="text-xs mt-2">
                        Status: {bin.status}
                      </p>

                      {bin.demo && (
                        <p className="text-xs font-semibold mt-2">
                          ⭐ Demo Hardware Bin
                        </p>
                      )}

                    </div>

                  </Popup>

                </Marker>
              ))}

            </MapContainer>

          </div>

          {/* Bin list */}
          <div className="space-y-3">

            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">
                Nearby bins
              </h2>

              <span className="text-sm text-slate-500">
                {bins.length} locations
              </span>
            </div>

            {bins.map((bin) => (
              <div
                key={bin.id}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition"
              >

                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="font-medium">
                      {bin.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      {bin.id}
                    </p>
                  </div>

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      bin.status === 'Online'
                        ? 'bg-emerald-400/10 text-emerald-400'
                        : bin.status === 'Offline'
                        ? 'bg-red-400/10 text-red-400'
                        : 'bg-yellow-400/10 text-yellow-400'
                    }`}
                  >
                    {bin.status}
                  </span>

                </div>

                {bin.demo && (
                  <div className="mt-4 text-xs text-emerald-400">
                    ⭐ Physical demonstration bin
                  </div>
                )}

                <Link
  to={`/bins/${bin.id}`}
  className="block w-full mt-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm transition text-center"
>
  View bin →
</Link>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default FindBin