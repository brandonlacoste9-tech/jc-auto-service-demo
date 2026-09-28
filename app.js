const I18N = {
en: {
  "contact.addr": "Address",
  "contact.cta": "Call now to book",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 9:00 AM – 5:30 PM<br>Sat: 9:30 AM – 2:30 PM<br>Sun: closed",
  "contact.kicker": "Come see us",
  "contact.phone": "Phone",
  "contact.title": "Book your repair",
  "faq.a1": "Monday to Friday, 9:00 AM to 5:30 PM, and Saturday 9:30 AM to 2:30 PM. Closed Sundays.",
  "faq.a2": "Yes — cars, SUVs and light trucks of all makes, with quality parts.",
  "faq.a3": "We hook your vehicle up to our electronic diagnostic equipment, explain the problem and confirm the price before any repair.",
  "faq.a4": "Appointments are recommended — call (916) 492-1377 or drop by during opening hours.",
  "faq.kicker": "Good to know",
  "faq.q1": "What are your opening hours?",
  "faq.q2": "Do you service all vehicle brands?",
  "faq.q3": "How does a diagnostic work?",
  "faq.q4": "Do I need an appointment?",
  "faq.title": "Frequently asked questions",
  "footer.tag": "Auto repair & maintenance · Sacramento, California",
  "gallery.c1": "Oil changes, done with care",
  "gallery.c2": "Wheel alignments, done precisely",
  "gallery.c3": "Diagnostics with modern equipment",
  "gallery.kicker": "The shop in action",
  "gallery.title": "A tidy shop, careful work",
  "hero.cta1": "Book a repair",
  "hero.cta2": "See services",
  "hero.kicker": "Sacramento, California · Auto repair & maintenance",
  "hero.sub": "JC Auto Service Center keeps Sacramento drivers on the road with full-service auto repair — brakes, A/C, diagnostics and more, with clear prices and careful work.",
  "hero.title": "Your car,<br>cared for right.",
  "nav.call": "(916) 492-1377",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.services": "Services",
  "nav.why": "Why us",
  "reviews.kicker": "What drivers say",
  "reviews.more": "5.0 out of 5 from 94 Yelp reviews — see what customers say about us",
  "reviews.title": "Rated 5.0 by Sacramento drivers",
  "services.kicker": "What we do",
  "services.s1d": "Oil and filter changes plus tune-ups to keep your engine running strong.",
  "services.s1t": "Oil Changes & Tune-Ups",
  "services.s2d": "Pads, rotors and clutch service — your safety first.",
  "services.s2t": "Brakes & Clutches",
  "services.s3d": "Recharge, leak detection and A/C repair for Sacramento summers.",
  "services.s3t": "A/C Service",
  "services.s4d": "Check-engine light? We find the real problem with modern equipment.",
  "services.s4t": "Engine Diagnostics",
  "services.s5d": "Precision alignments for even tire wear and straight tracking.",
  "services.s5t": "Wheel Alignment",
  "services.s6d": "Transmission service and repair from an experienced local team.",
  "services.s6t": "Transmissions",
  "services.title": "Full-service auto care under one roof",
  "stats.diag": "electronic diagnostics",
  "stats.diagNum": "100%",
  "stats.hours": "weekdays 9–5:30, Sat till 2:30",
  "stats.hoursNum": "Mon – Sat",
  "stats.makes": "makes & models serviced",
  "stats.makesNum": "All",
  "stats.quote": "quote before every repair",
  "stats.quoteNum": "Clear",
  "walkin.w1d": "Sat 9:30am – 2:30pm",
  "walkin.w1t": "Mon – Fri 9am – 5:30pm",
  "walkin.w2d": "Full-service auto care",
  "walkin.w2t": "Repair + maintenance",
  "walkin.w3d": "Cars, SUVs, light trucks",
  "walkin.w3t": "All makes",
  "why.intro": "JC Auto Service Center is a Sacramento neighborhood shop built on repeat customers — an accurate diagnosis, a price explained up front and work you can trust.",
  "why.kicker": "Why choose us",
  "why.l1d": "We explain what is needed — and what isn't.",
  "why.l1t": "Honest diagnosis",
  "why.l2d": "The price is confirmed before we touch your car.",
  "why.l2t": "Clear quote",
  "why.l3d": "We stand behind every repair we do.",
  "why.l3t": "Careful work",
  "why.l4d": "On T St in Sacramento, open six days a week.",
  "why.l4t": "Easy to reach",
  "why.title": "Honest work, clearly explained"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "JC Auto Service Center — Auto Repair in Sacramento, CA | Trusted Mechanics";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
