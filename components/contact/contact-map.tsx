export function ContactMap() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Service Coverage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based in Hyderabad with extensive coverage across Telangana and Andhra Pradesh
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Service Area Coverage</h3>
                  <p className="text-muted-foreground">Telangana & Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold">Telangana Coverage</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>• Hyderabad (Main)</div>
                <div>• Warangal</div>
                <div>• Karimnagar</div>
                <div>• Nizamabad</div>
                <div>• Khammam</div>
                <div>• Mahbubnagar</div>
                <div>• Nalgonda</div>
                <div>• Adilabad</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold">Andhra Pradesh Coverage</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>• Vijayawada</div>
                <div>• Guntur</div>
                <div>• Vizag</div>
                <div>• Tirupati</div>
                <div>• Kurnool</div>
                <div>• Nellore</div>
                <div>• Rajahmundry</div>
                <div>• Kakinada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
