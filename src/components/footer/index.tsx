"use client";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "@/constant/social-links";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              Motion Educare School
            </h3>
            <p className="text-sm">
              Providing quality education from Playgroup to XII with state of
              the art facilities and expert faculty.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <Link
                  href={social.link}
                  target="_blank"
                  key={i + "social-footer"}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "Admissions", href: "/admissions" },
                { name: "Academics", href: "/academics" },
                { name: "Facilities", href: "/facilities" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block text-sm hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <address className="not-italic">
                  Kaila - Benar More
                  <br />
                  Asthawan, Nalanda
                  <br />
                  Bihar 803107
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+917461038138" className="hover:text-blue-400">
                  +91 74610 38138
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:motioneducareschool@gmail.com"
                  className="hover:text-blue-400"
                >
                  motioneducareschool@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 md:h-auto rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2107.210087550446!2d85.66803216155546!3d25.21541925278429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f25ff5d32b4b4b%3A0x66e7351365367eb8!2sMotion%20Educare%20school%20%2C%20Kaila%20-%20Benar%20more%20In%20Bind%20Road%2C%20Asthawan%2C%20Nalanda-803107!5e0!3m2!1sen!2sin!4v1739641075590!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center">
            © {new Date().getFullYear()} Motion Educare School. All rights
            reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
