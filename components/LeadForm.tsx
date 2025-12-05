import React, { useState, useEffect, useRef } from 'react';
import type { FormData } from '../types';
import { Role, EmployeeCount, ClientCount } from '../types';
import { ChevronDownIcon } from './ui/icons';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firmName: '',
    role: '',
    employeeCount: '',
    clientCount: '',
    email: '',
    phone: '',
    challenge: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reveal-Animation
  useEffect(() => {
    if (submitted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.revealable');
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [submitted]);

  // Lokale State-Updates für die Controlled Inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit an Basin
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const data = new FormData(formEl); // Browser-FormData, nicht dein Typ

    // optional: Zusatzinfos
    data.append('_referrer', window.location.href);

    try {
      const response = await fetch('https://usebasin.com/f/03729395fbad', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Basin returned an error', await response.text());
        alert(
          'Leider hat das Absenden nicht geklappt. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.'
        );
      }
    } catch (err) {
      console.error('Network error while submitting to Basin', err);
      alert(
        'Es ist ein Netzwerkfehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.'
      );
    }
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto bg-teal-50 border border-teal-200 p-10 rounded-xl">
            <h2 className="text-2xl font-bold text-teal-800">Vielen Dank!</h2>
            <p className="mt-4 text-teal-700">
              Ihre Vormerkung wurde erfolgreich übermittelt. Wir werden uns in Kürze persönlich bei Ihnen melden, um
              die nächsten Schritte zu besprechen.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white" id="form-section" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="revealable">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">
              Sichern Sie sich Ihren Platz im Pilotprogramm.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tragen Sie Ihre Daten ein, und wir melden uns persönlich bei Ihnen, um unverbindlich zu prüfen, ob
              BelegCockpit für Ihren Kanzleialltag geeignet ist.
            </p>
          </div>

          <div
            className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg revealable"
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firmName" className="block text-sm font-medium text-gray-700">
                  Kanzlei-Name
                </label>
                <input
                  type="text"
                  name="firmName"
                  id="firmName"
                  value={formData.firmName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Ihre Rolle
                  </label>
                  <div className="relative mt-1">
                    <select
                      name="role"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 pr-8"
                    >
                      <option value="" disabled>
                        Bitte wählen...
                      </option>
                      {Object.values(Role).map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">
                    Mitarbeitende (Kanzlei)
                  </label>
                  <div className="relative mt-1">
                    <select
                      name="employeeCount"
                      id="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      required
                      className="appearance-none block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 pr-8"
                    >
                      <option value="" disabled>
                        Bitte wählen...
                      </option>
                      {Object.values(EmployeeCount).map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="clientCount" className="block text-sm font-medium text-gray-700">
                  Anzahl Fibu-Mandanten
                </label>
                <div className="relative mt-1">
                  <select
                    name="clientCount"
                    id="clientCount"
                    value={formData.clientCount}
                    onChange={handleChange}
                    required
                    className="appearance-none block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 pr-8"
                  >
                    <option value="" disabled>
                      Bitte wählen...
                    </option>
                    {Object.values(ClientCount).map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-Mail (Pflichtfeld)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700">
                  Was ist heute Ihre größte Herausforderung bei Belegen & Kontobewegungen?
                </label>
                <textarea
                  name="challenge"
                  id="challenge"
                  rows={3}
                  value={formData.challenge}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md text-lg transform hover:scale-105 hover:shadow-lg"
                >
                  Pilotanfrage senden
                </button>
              </div>
            </form>

            <p className="mt-6 text-xs text-gray-500 text-center">
              Sie gehen keinerlei Verpflichtung ein. Wir verwenden Ihre Daten ausschließlich, um bezüglich des
              Pilotprogramms Kontakt mit Ihnen aufzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
