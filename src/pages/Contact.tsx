import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Section from "../components/Section";

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <header className="pt-32 pb-16 px-8 max-w-4xl mx-auto text-center">
        <span className="text-tertiary font-sans text-sm uppercase tracking-[0.3em] mb-6 block">{t.contact.heroTag}</span>
        <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6">
          {t.contact.heroTitle1} <span className="italic">{t.contact.heroTitle2}</span> {t.contact.heroTitle3}
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">{t.contact.heroText}</p>
      </header>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-primary mb-8">{t.contact.formTitle}</h2>
            {submitted ? (
              <div className="bg-primary-container/10 p-10 rounded-xl text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">check_circle</span>
                <h3 className="font-serif text-2xl text-on-surface mb-2">{t.contact.sentTitle}</h3>
                <p className="text-on-surface-variant text-sm">{t.contact.sentText}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans font-semibold text-on-surface mb-2 uppercase tracking-wider">{t.contact.nameLabel}</label>
                    <input type="text" id="name" required className="w-full bg-surface-container-low border-0 border-b border-outline/20 py-3 px-4 rounded-t-lg text-on-surface focus:ring-0 focus:border-primary transition outline-none" placeholder={t.contact.namePlaceholder} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-semibold text-on-surface mb-2 uppercase tracking-wider">{t.contact.emailLabel}</label>
                    <input type="email" id="email" required className="w-full bg-surface-container-low border-0 border-b border-outline/20 py-3 px-4 rounded-t-lg text-on-surface focus:ring-0 focus:border-primary transition outline-none" placeholder={t.contact.emailPlaceholder} />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-sans font-semibold text-on-surface mb-2 uppercase tracking-wider">{t.contact.interestLabel}</label>
                  <select id="interest" className="w-full bg-surface-container-low border-0 border-b border-outline/20 py-3 px-4 rounded-t-lg text-on-surface focus:ring-0 focus:border-primary transition outline-none">
                    <option value="">{t.contact.selectService}</option>
                    <option value="yoga">{t.contact.optionYoga}</option>
                    <option value="nutrition">{t.contact.optionNutrition}</option>
                    <option value="healing">{t.contact.optionHealing}</option>
                    <option value="workshops">{t.contact.optionWorkshops}</option>
                    <option value="corporate">{t.contact.optionCorporate}</option>
                    <option value="other">{t.contact.optionOther}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-sans font-semibold text-on-surface mb-2 uppercase tracking-wider">{t.contact.messageLabel}</label>
                  <textarea id="message" rows={5} required className="w-full bg-surface-container-low border-0 border-b border-outline/20 py-3 px-4 rounded-t-lg text-on-surface focus:ring-0 focus:border-primary transition resize-none outline-none" placeholder={t.contact.messagePlaceholder} />
                </div>
                <button type="submit" className="bg-primary text-on-primary px-10 py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:scale-[1.02] transition-all duration-300">
                  {t.contact.sendMessage}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-3xl text-primary mb-8">{t.contact.infoTitle}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">{t.contact.addressLabel}</h3>
                  <p className="text-on-surface-variant text-sm whitespace-pre-line">{t.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">{t.contact.hoursLabel}</h3>
                  <p className="text-on-surface-variant text-sm">{t.contact.hoursWeekday}</p>
                  <p className="text-on-surface-variant text-sm">{t.contact.hoursWeekend}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h3 className="font-semibold text-on-surface mb-1">{t.contact.contactLabel}</h3>
                  <p className="text-on-surface-variant text-sm">hello@thebreath.com</p>
                  <p className="text-on-surface-variant text-sm">(303) 555-0192</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-container/10 p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl mb-3">spa</span>
              <h3 className="font-serif text-xl text-on-surface mb-3">{t.contact.firstVisitTitle}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{t.contact.firstVisitText}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
