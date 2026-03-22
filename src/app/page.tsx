export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Timeline />
        <GithubCarousel />
        <Contact />

        <footer className="py-8 text-center border-t border-white/10 glass mt-24">
          <p className="text-gray-400">
            Designed and Built by <span className="text-neon-cyan font-medium">Prakhar Maitreya Parashar</span>
          </p>
        </footer>
      </div>

      <h1>Hello Prakhar — Portfolio is LIVE 🚀</h1>
    </>
  );
}
