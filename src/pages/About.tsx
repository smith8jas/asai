import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import Section from "../components/Section";
import CTABanner from "../components/CTABanner";

const teamImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbucp7yrviC1MuEmQ9n2V9XsXbINeHAeic7APsSFbbBloy-XV_ML9iKxMtN4_pNmziFOysSGU-bc3w93h0AibdXvVk8XoIL37F_WTvgn412naJFMAfdU1iXPp8CRX4A0zvV8WU3oYXr3ryalhR2iduE1jHUg_GDRa2p6vTDA6DZZDF5r9gdlLcLEnUt6TixkbckN9CTpUTm0xHVrlA5gZ5hUU-MYd-gXnn4O0Ch48gI3igYSvck2Se8MuH_1Bs3AR-bzz6DSjF4eI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_iPT2f8k6nISstmRLmmwfIStM8qDFNd6jFUulRfCz1zRjw45SiLXdvmnyrbi7SxcLVQ6sEUMSP5roWQSOs5wsZYax7ePzHsmvnm3RpV2pSCVJ4nBzJqgqupWKEpbsmLJayFCIHy4C-xfsWxk6uDFCRrDOxBkqd88-EvSK9YWTf0V4tWEPPuzHdpyWHJY5LvqUk_T7pJpmDCp5fTrIVbox1KMvjoGAP5RxaYvokLE5XWFbiLWmKNwfy3Nn_398inCuE3ghE9x-aQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcGIOGz66RZ6On_e9lYnY3wUD8XZErodOsLRe7UiN6wa6yFI9MMF3x_Ug8fQiBVo8bTlkjF5KqTLYqaG2ZJAErkH7fFYV1lLpFXy4xTDLBQFL9Z4yMje6-4YCavKKi0OBRWqePSe1LhKAHiiF64nK54m5Gvm183EN79quMPsSMNzuX9Lt5g198BBxM7j-ChJZYlx7tTLYGx8rdETYdYBNR7uWQuxvxpGWf-boLjua-lb4MmFRNT1KJUnpNMLeKE5I6DjRdwgoK3Fo",
];

const teamData = [
  { name: "Elena Thorne", roleKey: "Founder & Lead Vinyasa", quoteKey: "I believe that movement is the most honest form of conversation with oneself." },
  { name: "Marcus Chen", roleKey: "Ashtanga & Breathwork Expert", quoteKey: "Breath is the bridge that connects the body to the mind, and the mind to the spirit." },
  { name: "Sasha Reeves", roleKey: "Yin & Restorative Guide", quoteKey: "Finding power in the pause is where the most profound transformation occurs." },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="text-tertiary font-sans text-sm uppercase tracking-[0.3em] mb-6 block">{t.about.heroTag}</span>
            <h1 className="text-6xl md:text-7xl font-serif text-primary leading-tight mb-8">
              {t.about.heroTitle1} <br /> {t.about.heroTitle2} <span className="italic">{t.about.heroTitle3}</span>.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">{t.about.heroText}</p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-2">
              <img className="w-full h-full object-cover" alt="Studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlTbUmRn4L8yKmTkEOS5btynDP1upG94Pe5jCzUub7jR5l38nhI41nfGD4Y4DsPrtfTfWHQMAw4GaSHDRK8skw5c1JA9yuz537KmArh5IW9yRhlKcXn-sHWXIoabiF7Efqqv7-Pkz4sGuC1fKz5_XCqv9mw2IAYMb9Yrbn4XfJVab0U5YcRvP1UBeS0Ja5WgKxVPeFgjXl9u2UdJj1pWSTH0ZMmLKB0omdu0H5tqP14xh5luUzWfHkTVOWy7zqdFmGcYR_dfGfnPg" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </header>

      <Section bg="low">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img className="rounded-xl shadow-lg -rotate-2 relative z-10" alt="Tea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGsc--ON7Mf1mKt_v_cMawAQB-yv0hbGRVZRzPCjsBqK0K5gRaYgysPgfz5THeirlwa7ChIk5tGWBrP0rjRySnSaAxTMnnuvVt48PTdXbmvXYfO4BtIGws9Nl0cxtamiFkloWBbRZyYXhIpXIJvKkVRVynAbhZ0-N2_uk6qPE-7xOCFme5VabRRl2VZsEPpWkfKDXPdVp4LvuC1JIgxFEaYH5dfW9Q_ujXAyOXVLXklNmu2LwE2pm9EWM7VAXFVMduibWYinLeEDs" />
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary-container/30 rounded-xl -z-0" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-serif text-primary">{t.about.storyTitle}</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">{t.about.storyText1}</p>
            <p className="text-on-surface-variant text-lg leading-relaxed">{t.about.storyText2}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">{t.about.valuesTitle}</h2>
          <p className="text-tertiary uppercase tracking-widest text-sm">{t.about.valuesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container p-10 rounded-xl hover:bg-primary-container/10 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
            <h3 className="text-2xl font-serif text-primary mb-4">{t.about.organicGrowth}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t.about.organicGrowthText}</p>
          </div>
          <div className="bg-primary text-on-primary p-10 rounded-xl md:row-span-2 shadow-xl">
            <span className="material-symbols-outlined text-on-primary text-4xl mb-6">diversity_2</span>
            <h3 className="text-3xl font-serif mb-6">{t.about.inclusiveCommunity}</h3>
            <p className="opacity-90 text-lg leading-relaxed mb-8">{t.about.inclusiveCommunityText}</p>
            <div className="h-1 w-20 bg-primary-container" />
            <div className="mt-12 overflow-hidden rounded-lg">
              <img className="w-full h-48 object-cover opacity-80 mix-blend-luminosity" alt="Community" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBq9Uk93Mcpa2AahBhze6WMWIYUIdad1Ij_pTrjDit_hHd9TL3ldP18BfzVFBe0zWFJvNUKRb-oHQLofhFtff6Kkxf0oij7ydARAkwfkS9k8BDmltts57vicRzMxd6vNcdvuyA3q5e0ZgCwQSZyHdkIl_hiHbVL3B9t2jPcGDVoAgl1k7UsWK2OWiV2aipeLJKtjI_5Rdl3bHYtQc5_XmoCkJiowhnktPYG9LCzZQbQcUixT6JVvC1-a4F8Mn-jk6vzJIlEwxr5gc" />
            </div>
          </div>
          <div className="bg-surface-container p-10 rounded-xl hover:bg-primary-container/10 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
            <h3 className="text-2xl font-serif text-primary mb-4">{t.about.scientificExpertise}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t.about.scientificExpertiseText}</p>
          </div>
          <div className="md:col-span-1 bg-surface-container-high p-10 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl font-serif text-primary block mb-2">500+</span>
              <span className="text-tertiary text-sm uppercase tracking-widest">{t.about.certifiedHours}</span>
            </div>
          </div>
          <div className="bg-surface-container p-10 rounded-xl hover:bg-primary-container/10 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">self_improvement</span>
            <h3 className="text-2xl font-serif text-primary mb-4">{t.about.mindfulLiving}</h3>
            <p className="text-on-surface-variant leading-relaxed">{t.about.mindfulLivingText}</p>
          </div>
        </div>
      </Section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-primary mb-4">{t.about.instructorsTitle}</h2>
              <p className="text-lg text-on-surface-variant">{t.about.instructorsText}</p>
            </div>
            <Link to="/contact" className="text-primary font-semibold flex items-center gap-2 group">
              {t.about.viewAll}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.map((member, i) => (
              <div key={member.name} className="group">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" alt={member.name} src={teamImages[i]} />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-primary">{member.name}</h3>
                <p className="text-tertiary text-sm uppercase tracking-widest mb-4">{member.roleKey}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed italic">"{member.quoteKey}"</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-0" />
      </section>

      <Section bg="low" className="text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
        <h2 className="text-3xl font-serif text-primary mb-8">{t.about.trustTitle}</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold tracking-tighter text-on-surface">YOGA ALLIANCE</span>
            <span className="text-xs text-on-surface-variant">RYS 200/500</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold tracking-tighter text-on-surface">NASM</span>
            <span className="text-xs text-on-surface-variant">{t.about.certifiedPartner}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold tracking-tighter text-on-surface">WELLNESS PRO</span>
            <span className="text-xs text-on-surface-variant">{t.about.accreditedFacility}</span>
          </div>
        </div>
      </Section>

      <CTABanner heading={t.about.ctaHeading} text={t.about.ctaText} buttonLabel={t.about.ctaButton} />
    </>
  );
}
