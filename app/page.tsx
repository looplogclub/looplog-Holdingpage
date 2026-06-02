export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section
        className="relative min-h-[100svh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/stardust-hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
          <div className="text-sm font-bold tracking-[0.35em] text-white">
            LOOPLOG
          </div>

          <a
            href="#join"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Join the queue
          </a>
        </header>

        <div className="relative z-10 flex min-h-[calc(100svh-84px)] items-end px-5 pb-12 sm:items-center sm:px-8 lg:px-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Coming soon
            </p>

            <h1 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Track every thrill.
              <br />
              Share every ride.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/75 sm:text-lg">
              LoopLog is a new way for coaster fans to log rides, build counts,
              earn milestones, and join a global community of riders.
            </p>

            <form
              id="join"
              action="https://assets.mailerlite.com/jsonp/2353004/forms/189184314595870149/subscribe"
              method="post"
              target="_blank"
              className="mt-8 max-w-md rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur-md"
            >
              <input
                type="email"
                name="fields[email]"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 outline-none transition focus:border-amber-300"
              />

              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />

              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-amber-400 px-6 py-4 font-bold text-black transition hover:bg-amber-300"
              >
                Join the queue
              </button>

              <p className="mt-3 text-center text-xs text-white/50">
                Early access. No spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {[
            ["Log", "Save every coaster you ride and build your personal count."],
            ["Earn", "Unlock badges, milestones, and future rewards."],
            ["Join", "Connect with coaster fans and compare rides worldwide."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <h2 className="text-2xl font-bold text-amber-300">{title}</h2>
              <p className="mt-3 leading-7 text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}