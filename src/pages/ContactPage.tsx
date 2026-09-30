import React, { useState } from 'react';
import { ContactMascot } from '../components/ContactMascot';
import { FAQS } from '../data/faqs';
import { FooterSection } from '../components/FooterSection';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/40">
      <main className="contact-page-main py-10 sm:py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Mascot & Contact Chips */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
              <h1 className="contact-hub-title text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Let&apos;s Build Something Great
              </h1>
              <p className="text-xs text-slate-500 mb-6">
                Have a question or custom embedded hardware inquiry? My desk is always open.
              </p>

              {/* Recessed well containing interactive cursor-tracking mascot */}
              <div className="contact-recessed-well p-4 bg-slate-100/70 rounded-3xl border border-slate-200/80 mb-6 flex justify-center w-full max-w-[280px]">
                <ContactMascot />
              </div>

              {/* Contact Info Chips */}
              <div className="w-full space-y-3">
                <a
                  href="mailto:kabya.connect24@gmail.com"
                  className="contact-info-chip flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/70 hover:border-indigo-200 transition-all text-left group"
                >
                  <div className="contact-chip-icon-box w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope text-sm" />
                  </div>
                  <div className="contact-chip-text min-w-0">
                    <span className="contact-chip-label block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </span>
                    <span className="contact-chip-value block text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-indigo-600">
                      kabya.connect24@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+8801950440296"
                  className="contact-info-chip flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/70 hover:border-emerald-200 transition-all text-left group"
                >
                  <div className="contact-chip-icon-box w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-phone text-sm" />
                  </div>
                  <div className="contact-chip-text min-w-0">
                    <span className="contact-chip-label block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phone / WhatsApp
                    </span>
                    <span className="contact-chip-value block text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-emerald-600">
                      +880 1950-440296
                    </span>
                  </div>
                </a>

                <div className="contact-info-chip flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                  <div className="contact-chip-icon-box w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-location-dot text-sm" />
                  </div>
                  <div className="contact-chip-text min-w-0">
                    <span className="contact-chip-label block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Workshop Location
                    </span>
                    <span className="contact-chip-value block text-xs sm:text-sm font-bold text-slate-800 truncate">
                      Daffodil Smart City, Dhaka, BD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
              <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 mb-2 block">
                Send a Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                Whether you need advice on schematic design, embedded RTOS firmware, a custom IoT
                architecture, or academic collaboration — feel free to reach out.
              </p>

              {sent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl">
                    <i className="fas fa-paper-plane" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Dispatched!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you! Your message has been routed to Bapi Debnath inbox. You will receive a
                    reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-xs font-bold text-emerald-700 underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex Rahman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IoT Project Consultation / 3D CAD Prototype"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, timelines, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-indigo-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <i className="fas fa-paper-plane text-xs" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Quick FAQ Section */}
          <div className="mt-16 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 mb-1 block">
                  Quick Answers
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Common Questions
                </h3>
              </div>
              <button
                onClick={() => onNavigate('/faq')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Full Knowledge Base ({FAQS.length} FAQs)</span>
                <i className="fas fa-arrow-right text-[10px]" />
              </button>
            </div>

            <div className="space-y-3">
              {FAQS.slice(0, 4).map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <i
                        className={`fas fa-chevron-down text-xs text-slate-400 transition-transform ${
                          isOpen ? 'rotate-180 text-indigo-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <FooterSection onNavigate={onNavigate} />
    </div>
  );
};
