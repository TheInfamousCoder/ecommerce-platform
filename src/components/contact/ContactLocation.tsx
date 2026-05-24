import { MapPin } from "lucide-react";
const ContactLocation = ({ contactPurp }) => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-rest">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Map */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[360px] lg:min-h-[420px]">
            <iframe
              title="FillCart headquarters map"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[0.95]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.425%2C37.768%2C-122.405%2C37.782&layer=mapnik&marker=37.775%2C-122.415"
              loading="lazy"
            />

            {/* Location pin */}
            <div
              className="pointer-events-none absolute left-1/2 top-[42%] z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white shadow-md"
              style={{ backgroundColor: `${contactPurp}` }}
              aria-hidden
            />

            {/* Map info card */}
            <div className="absolute left-1/2 top-[18%] z-20 w-[min(100%,280px)] -translate-x-1/2 rounded-xl bg-white p-4 shadow-lg sm:left-[55%] sm:top-[22%] sm:translate-x-0 lg:left-[52%]">
              <div className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: `${contactPurp}` }}
                >
                  F
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-black">FillCart Inc.</p>
                  <p className="text-xs text-gray-500">
                    Shop Beyond Limits Together
                  </p>
                  <p className="mt-2 text-xs text-gray-600">
                    San Francisco, USA
                  </p>
                  <p className="text-xs text-gray-600">
                    123 Tech Boulevard, Suite 456
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Tech+Boulevard+Suite+456+San+Francisco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-medium hover:underline"
                    style={{ color: `${contactPurp}` }}
                  >
                    Open Google Maps &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="max-w-md lg:max-w-none">
            <p className="text-sm font-bold text-black">Our Location</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Connecting Near and Far
            </h2>
            <h3 className="mt-8 text-lg font-bold text-black">Headquarters</h3>
            <address className="mt-4 space-y-0.5 text-base not-italic leading-relaxed text-gray-600">
              <p>FillCart Inc.</p>
              <p>San Francisco, USA</p>
              <p>123 Tech Boulevard, Suite 456</p>
              <p>San Francisco, CA 12345</p>
              <p>United States</p>
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=123+Tech+Boulevard+Suite+456+San+Francisco"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline lg:hidden"
              style={{ color: `${contactPurp}` }}
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
