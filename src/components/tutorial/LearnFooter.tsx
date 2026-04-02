export default function LearnFooter() {
  return (
    <footer className="bg-midnight text-white/60 py-10 px-6">
      <div className="max-w-content mx-auto">
        {/* Logo */}
        <p className="font-heading font-bold text-white text-base mb-8">
          Arduino Starter Co
        </p>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1 — Tutorials */}
          <div>
            <h3 className="font-body font-semibold text-label text-white/80 uppercase tracking-wider mb-4">
              Tutorials
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/learn/project-1/1-whats-in-the-box"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Project 1: Blink
                </a>
              </li>
              <li>
                <a
                  href="/learn/project-2/1-whats-in-the-box"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Project 2: Traffic Light
                </a>
              </li>
              <li>
                <a
                  href="/learn/project-3/1-what-is-pwm"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Project 3: Temperature Monitor
                </a>
              </li>
              <li>
                <a
                  href="/learn/project-4/1-meet-the-servo"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Project 4: Distance Alarm
                </a>
              </li>
              <li>
                <a
                  href="/learn/project-5/1-meet-the-lcd"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Project 5: Motor Controller
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 — Learn More */}
          <div>
            <h3 className="font-body font-semibold text-label text-white/80 uppercase tracking-wider mb-4">
              Learn More
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blog/how-to-get-started-with-arduino"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  How to Get Started with Arduino
                </a>
              </li>
              <li>
                <a
                  href="/blog/arduino-projects-for-beginners"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Arduino Projects for Beginners
                </a>
              </li>
              <li>
                <a
                  href="/blog/what-is-in-an-arduino-kit"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  What&apos;s in an Arduino Kit
                </a>
              </li>
              <li>
                <a
                  href="/blog/arduino-vs-raspberry-pi-for-beginners"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Arduino vs Raspberry Pi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 — Product */}
          <div>
            <h3 className="font-body font-semibold text-label text-white/80 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#waitlist"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Buy the Kit ($59)
                </a>
              </li>
              <li>
                <a
                  href="/#kit-contents"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Kit Contents
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@arduinostarterco.com"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div>
            <h3 className="font-body font-semibold text-label text-white/80 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="font-body text-body-sm hover:text-white transition-colors duration-sm"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-body-sm text-white/40">
            © 2026 Arduino Starter Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
