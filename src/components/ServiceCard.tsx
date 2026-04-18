import { Link } from "react-router-dom";

interface ServiceCardProps {
  to: string;
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ to, icon, title, description }: ServiceCardProps) {
  return (
    <Link
      to={to}
      className="group relative block bg-surface-container-lowest p-8 rounded-xl overflow-hidden transition-transform hover:-translate-y-2 duration-300"
    >
      <div className="relative z-10">
        <span className="material-symbols-outlined text-primary text-3xl mb-6 block">{icon}</span>
        <h3 className="font-serif text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-on-surface-variant leading-relaxed mb-8">{description}</p>
        <ul className="space-y-3">
          <li className="flex items-center text-sm font-sans uppercase tracking-wider text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container mr-3" /> Private Sessions
          </li>
          <li className="flex items-center text-sm font-sans uppercase tracking-wider text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container mr-3" /> Group Classes
          </li>
        </ul>
      </div>
    </Link>
  );
}
