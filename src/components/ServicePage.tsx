import { Link } from "react-router-dom";
import Section from "./Section";
import CTABanner from "./CTABanner";

interface ScheduleItem {
  day: string;
  time: string;
  type: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  schedule: ScheduleItem[];
  icon: string;
}

export default function ServicePage({
  title,
  subtitle,
  description,
  benefits,
  schedule,
  icon,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 px-8 max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-6">{icon}</span>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mb-5 leading-tight">{title}</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </header>

      {/* Description */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">What to Expect</h2>
          <p className="text-on-surface-variant leading-relaxed text-lg">{description}</p>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="low">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-tertiary text-sm font-sans uppercase tracking-widest">Why Choose This</span>
            <h2 className="font-serif text-3xl md:text-4xl text-on-surface mt-3">Benefits</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger-children">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 bg-surface-container-lowest p-6 rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="text-on-surface-variant">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Schedule */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-tertiary text-sm font-sans uppercase tracking-widest">Plan Your Visit</span>
            <h2 className="font-serif text-3xl md:text-4xl text-on-surface mt-3">Schedule</h2>
          </div>
          <div className="overflow-hidden rounded-xl">
            <table className="w-full text-left">
              <thead className="bg-primary text-on-primary">
                <tr>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Day</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 bg-surface-container-lowest">
                {schedule.map((s, i) => (
                  <tr key={i} className="hover:bg-primary-container/5 transition-colors">
                    <td className="px-6 py-4 text-on-surface font-medium">{s.day}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{s.time}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{s.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <div className="max-w-7xl mx-auto px-8 pb-10">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-primary transition-colors font-medium">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to all services
        </Link>
      </div>

      <CTABanner />
    </>
  );
}
