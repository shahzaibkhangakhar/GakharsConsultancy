export const locales = ["en", "ur", "hi", "de"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { label: string; native: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", native: "EN", dir: "ltr" },
  ur: { label: "Urdu", native: "اردو", dir: "rtl" },
  hi: { label: "Hindi", native: "हिन्दी", dir: "ltr" },
  de: { label: "German", native: "DE", dir: "ltr" },
};

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale);
}

type Copy = {
  skip: string;
  nav: {
    figures: string;
    services: string;
    approach: string;
    about: string;
    contact: string;
    impressum: string;
    privacy: string;
  };
  header: {
    book: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    kicker: string;
    title: string;
    text: string;
    book: string;
    figures: string;
    scroll: string;
    imageAlt: string;
  };
  figures: {
    kicker: string;
    title: string;
    statPaths: string;
    statFormat: string;
    statSteps: string;
  };
  facts: string[];
  services: {
    kicker: string;
    title: string;
    items: { title: string; text: string; alt: string }[];
  };
  approach: {
    kicker: string;
    title: string;
    steps: { title: string; text: string; alt: string }[];
  };
  about: {
    kicker: string;
    p1: string;
    p2: string;
    imageAlt: string;
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    linkedin: string;
    sent: string;
    sending: string;
    error: string;
    name: string;
    email: string;
    phone: string;
    interest: string;
    note: string;
    submit: string;
    interests: string[];
    imageAlt: string;
  };
  footer: {
    line: string;
  };
  impressum: {
    kicker: string;
    title: string;
    body: string;
    back: string;
  };
  privacy: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    back: string;
  };
};

export const messages: Record<Locale, Copy> = {
  en: {
    skip: "Skip to content",
    nav: {
      figures: "Figures",
      services: "Services",
      approach: "Approach",
      about: "About",
      contact: "Contact",
      impressum: "Impressum",
      privacy: "Privacy",
    },
    header: {
      book: "Book a consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Change language",
    },
    hero: {
      kicker: "Consultation · Kaiserslautern",
      title: "Clear guidance for Germany.",
      text: "I sit with you, pick one path, and turn it into the next application, interview, or Ausbildung step. Founder of Europe Chalo.",
      book: "Book a consultation",
      figures: "See the figures",
      scroll: "Scroll",
      imageAlt: "Historic street in Heidelberg, Germany",
    },
    figures: {
      kicker: "Figures",
      title: "The facts of the practice—not invented placements.",
      statPaths: "Consultation paths",
      statFormat: "Session format",
      statSteps: "Steps to a next action",
    },
    facts: [
      "Uni-Assist applications",
      "APS document checks",
      "German Lebenslauf",
      "Ausbildung contracts",
      "Work-permit timing",
      "Kaiserslautern based",
      "Registered in Germany",
      "South Asia corridor",
    ],
    services: {
      kicker: "Services",
      title: "Four paths. You choose one.",
      items: [
        {
          title: "University admissions",
          text: "Programme shortlists, Uni-Assist, APS, and a file German universities can process.",
          alt: "University courtyard in Europe",
        },
        {
          title: "Job placement",
          text: "Lebenslauf, interviews, and a search plan for IT and engineering roles in Europe.",
          alt: "Professional interview conversation",
        },
        {
          title: "Ausbildung",
          text: "Employer outreach and visa-ready paperwork for a vocational training contract.",
          alt: "Hands-on vocational workshop",
        },
        {
          title: "Language & landing",
          text: "German learning paths plus housing, banking, and first-week orientation.",
          alt: "European train journey at dusk",
        },
      ],
    },
    approach: {
      kicker: "Approach",
      title: "Three steps. One next action.",
      steps: [
        {
          title: "Map the goal",
          text: "Degree, language level, budget, and the date you want to be in Europe.",
          alt: "Student studying in a library",
        },
        {
          title: "Pick one path",
          text: "University, job, or Ausbildung—not all three. You leave with a shortlist.",
          alt: "Students collaborating on campus",
        },
        {
          title: "Do the next action",
          text: "A document, an application, or a message to send this week.",
          alt: "Berlin street at blue hour",
        },
      ],
    },
    about: {
      kicker: "About",
      p1: "Consultant in Kaiserslautern for people who want to study, work, or train in Germany.",
      p2: "Founder of Europe Chalo. Sessions stay 1:1—map the goal, pick one path, leave with the next action.",
      imageAlt: "Portrait of Shahzaib Gakhar",
    },
    contact: {
      kicker: "Contact",
      title: "Book a consultation.",
      text: "Tell me the path you want. I will reply with times or a first set of questions.",
      linkedin: "LinkedIn",
      sent: "Your email app opened a message to gakharconsultancy@gmail.com. Send it from the address you entered.",
      sending: "Opening email…",
      error: "Could not open your email app. Write to gakharconsultancy@gmail.com.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      interest: "I need help with",
      note: "Your situation",
      submit: "Request a session",
      interests: [
        "University admissions",
        "Job placement",
        "Ausbildung",
        "Language & landing",
      ],
      imageAlt: "Students talking on a European campus",
    },
    footer: {
      line: "Consultation",
    },
    impressum: {
      kicker: "Legal",
      title: "Impressum",
      body: "Add street address before publication. Have a German lawyer review this page. Contact:",
      back: "Back",
    },
    privacy: {
      kicker: "Datenschutz",
      title: "Privacy",
      p1: "When you click Request a session, your email app opens a message to gakharconsultancy@gmail.com with your name, email, phone number, and note. You send it from the email address you entered. This website does not store the form.",
      p2: "Replace this notice with counsel-reviewed text before collecting personal data.",
      back: "Back",
    },
  },
  de: {
    skip: "Zum Inhalt springen",
    nav: {
      figures: "Zahlen",
      services: "Leistungen",
      approach: "Ansatz",
      about: "Über mich",
      contact: "Kontakt",
      impressum: "Impressum",
      privacy: "Datenschutz",
    },
    header: {
      book: "Beratung buchen",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      language: "Sprache ändern",
    },
    hero: {
      kicker: "Beratung · Kaiserslautern",
      title: "Klare Orientierung für Deutschland.",
      text: "Wir sitzen zusammen, wählen einen Weg und machen den nächsten Antrag, das nächste Gespräch oder den nächsten Ausbildungsschritt. Gründer von Europe Chalo.",
      book: "Beratung buchen",
      figures: "Zahlen ansehen",
      scroll: "Scrollen",
      imageAlt: "Historische Straße in Heidelberg, Deutschland",
    },
    figures: {
      kicker: "Zahlen",
      title: "Die Fakten der Praxis—keine erfundenen Vermittlungen.",
      statPaths: "Beratungswege",
      statFormat: "Sitzungsformat",
      statSteps: "Schritte zur nächsten Aktion",
    },
    facts: [
      "Uni-Assist-Anträge",
      "APS-Unterlagenprüfung",
      "Deutscher Lebenslauf",
      "Ausbildungsverträge",
      "Arbeitserlaubnis-Zeitplan",
      "Sitz in Kaiserslautern",
      "In Deutschland registriert",
      "Südasien-Korridor",
    ],
    services: {
      kicker: "Leistungen",
      title: "Vier Wege. Sie wählen einen.",
      items: [
        {
          title: "Hochschulzulassung",
          text: "Programmauswahl, Uni-Assist, APS und eine Akte, die deutsche Hochschulen bearbeiten können.",
          alt: "Universitätsinnenhof in Europa",
        },
        {
          title: "Jobvermittlung",
          text: "Lebenslauf, Vorstellungsgespräche und ein Suchplan für IT- und Ingenieurstellen in Europa.",
          alt: "Professionelles Vorstellungsgespräch",
        },
        {
          title: "Ausbildung",
          text: "Arbeitgebersuche und visumfähige Unterlagen für einen Ausbildungsvertrag.",
          alt: "Praxisnahe Berufswerkstatt",
        },
        {
          title: "Sprache und Ankommen",
          text: "Deutschlernwege plus Wohnung, Konto und Orientierung in der ersten Woche.",
          alt: "Europäische Bahnreise am Abend",
        },
      ],
    },
    approach: {
      kicker: "Ansatz",
      title: "Drei Schritte. Eine nächste Aktion.",
      steps: [
        {
          title: "Ziel klären",
          text: "Abschluss, Sprachniveau, Budget und das Datum, an dem Sie in Europa sein wollen.",
          alt: "Studentin in einer Bibliothek",
        },
        {
          title: "Einen Weg wählen",
          text: "Hochschule, Job oder Ausbildung—nicht alle drei. Sie gehen mit einer Auswahlliste.",
          alt: "Studierende auf dem Campus",
        },
        {
          title: "Nächsten Schritt tun",
          text: "Ein Dokument, ein Antrag oder eine Nachricht, die diese Woche rausgeht.",
          alt: "Berliner Straße in der blauen Stunde",
        },
      ],
    },
    about: {
      kicker: "Über mich",
      p1: "Berater in Kaiserslautern für Menschen, die in Deutschland studieren, arbeiten oder eine Ausbildung machen wollen.",
      p2: "Gründer von Europe Chalo. Sitzungen bleiben 1:1—Ziel klären, einen Weg wählen, mit der nächsten Aktion gehen.",
      imageAlt: "Porträt von Shahzaib Gakhar",
    },
    contact: {
      kicker: "Kontakt",
      title: "Beratung buchen.",
      text: "Nennen Sie den gewünschten Weg. Ich antworte mit Terminen oder ersten Fragen.",
      linkedin: "LinkedIn",
      sent: "Ihr E-Mail-Programm hat eine Nachricht an gakharconsultancy@gmail.com geöffnet. Senden Sie sie von der angegebenen Adresse.",
      sending: "E-Mail wird geöffnet…",
      error: "E-Mail-Programm konnte nicht geöffnet werden. Schreiben Sie an gakharconsultancy@gmail.com.",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      interest: "Ich brauche Hilfe bei",
      note: "Ihre Situation",
      submit: "Sitzung anfragen",
      interests: [
        "Hochschulzulassung",
        "Jobvermittlung",
        "Ausbildung",
        "Sprache und Ankommen",
      ],
      imageAlt: "Studierende im Gespräch auf einem europäischen Campus",
    },
    footer: {
      line: "Beratung",
    },
    impressum: {
      kicker: "Rechtliches",
      title: "Impressum",
      body: "Straßenadresse vor der Veröffentlichung ergänzen. Diese Seite von einem deutschen Anwalt prüfen lassen. Kontakt:",
      back: "Zurück",
    },
    privacy: {
      kicker: "Datenschutz",
      title: "Datenschutz",
      p1: "Wenn Sie eine Sitzung anfragen, öffnet Ihr E-Mail-Programm eine Nachricht an gakharconsultancy@gmail.com mit Name, E-Mail, Telefonnummer und Notiz. Sie senden sie von der angegebenen Adresse. Diese Website speichert das Formular nicht.",
      p2: "Ersetzen Sie diesen Hinweis durch anwaltlich geprüften Text, bevor personenbezogene Daten erhoben werden.",
      back: "Zurück",
    },
  },
  ur: {
    skip: "مواد پر جائیں",
    nav: {
      figures: "اعداد",
      services: "خدمات",
      approach: "طریقہ",
      about: "تعارف",
      contact: "رابطہ",
      impressum: "امپریسم",
      privacy: "رازداری",
    },
    header: {
      book: "مشاورت بک کریں",
      openMenu: "مینو کھولیں",
      closeMenu: "مینو بند کریں",
      language: "زبان تبدیل کریں",
    },
    hero: {
      kicker: "مشاورت · کایزرسلاترن",
      title: "جرمنی کے لیے واضح رہنمائی۔",
      text: "میں آپ کے ساتھ بیٹھتا ہوں، ایک راستہ چنتا ہوں، اور اسے اگلی درخواست، انٹرویو یا آسبلڈونگ کے قدم میں بدل دیتا ہوں۔ یورپ چلو کے بانی۔",
      book: "مشاورت بک کریں",
      figures: "اعداد دیکھیں",
      scroll: "نیچے جائیں",
      imageAlt: "ہائیڈلبرگ، جرمنی کی تاریخی گلی",
    },
    figures: {
      kicker: "اعداد",
      title: "عمل کی حقیقتیں—من گھڑت پلیسمنٹس نہیں۔",
      statPaths: "مشاورتی راستے",
      statFormat: "سیشن کی شکل",
      statSteps: "اگلے عمل کے مراحل",
    },
    facts: [
      "یونی اسسٹ درخواستیں",
      "اے پی ایس دستاویزات",
      "جرمن لیبینزلاؤف",
      "آسبلڈونگ معاہدے",
      "ورک پرمٹ کا وقت",
      "کایزرسلاترن سے",
      "جرمنی میں رجسٹرڈ",
      "جنوبی ایشیا کوریڈور",
    ],
    services: {
      kicker: "خدمات",
      title: "چار راستے۔ آپ ایک چنیں۔",
      items: [
        {
          title: "یونیورسٹی داخلہ",
          text: "پروگرام کی فہرست، یونی اسسٹ، اے پی ایس، اور ایک فائل جو جرمن یونیورسٹیاں سنبھال سکیں۔",
          alt: "یورپ میں یونیورسٹی کا صحن",
        },
        {
          title: "ملازمت",
          text: "لیبینزلاؤف، انٹرویوز، اور یورپ میں آئی ٹی اور انجینئرنگ کی تلاش کا منصوبہ۔",
          alt: "پیشہ ورانہ انٹرویو",
        },
        {
          title: "آسبلڈونگ",
          text: "آجر تک رسائی اور ویزے کے قابل کاغذات تاکہ تربیتی معاہدہ ملے۔",
          alt: "عملی پیشہ ورانہ ورکشاپ",
        },
        {
          title: "زبان اور آمد",
          text: "جرمن سیکھنے کے راستے، رہائش، بینکنگ اور پہلے ہفتے کی رہنمائی۔",
          alt: "شام کے وقت یورپی ٹرین کا سفر",
        },
      ],
    },
    approach: {
      kicker: "طریقہ",
      title: "تین مراحل۔ ایک اگلا عمل۔",
      steps: [
        {
          title: "ہدف طے کریں",
          text: "ڈگری، زبان کی سطح، بجٹ، اور وہ تاریخ جب آپ یورپ میں ہونا چاہتے ہیں۔",
          alt: "لائبریری میں طالب علم",
        },
        {
          title: "ایک راستہ چنیں",
          text: "یونیورسٹی، ملازمت یا آسبلڈونگ—تینوں نہیں۔ آپ مختصر فہرست لے کر جاتے ہیں۔",
          alt: "کیمپس پر طلبہ",
        },
        {
          title: "اگلا کام کریں",
          text: "ایک دستاویز، ایک درخواست، یا ایک پیغام جو اس ہفتے بھیجنا ہے۔",
          alt: "نیلی شام میں برلن کی سڑک",
        },
      ],
    },
    about: {
      kicker: "تعارف",
      p1: "کایزرسلاترن میں مشیر، ان لوگوں کے لیے جو جرمنی میں پڑھنا، کام کرنا یا تربیت کرنا چاہتے ہیں۔",
      p2: "یورپ چلو کے بانی۔ سیشن ایک سے ایک رہتے ہیں—ہدف طے کریں، ایک راستہ چنیں، اگلا عمل لے کر جائیں۔",
      imageAlt: "شہزیب گکھڑ کی تصویر",
    },
    contact: {
      kicker: "رابطہ",
      title: "مشاورت بک کریں۔",
      text: "بتائیں آپ کون سا راستہ چاہتے ہیں۔ میں اوقات یا پہلے سوالات بھیجوں گا۔",
      linkedin: "لنکڈ اِن",
      sent: "آپ کا ای میل ایپ gakharconsultancy@gmail.com کے لیے پیغام کھول چکا ہے۔ اسے اپنے درج کردہ ای میل سے بھیج دیں۔",
      sending: "ای میل کھل رہا ہے…",
      error: "ای میل ایپ نہیں کھل سکی۔ gakharconsultancy@gmail.com پر لکھیں۔",
      name: "نام",
      email: "ای میل",
      phone: "فون",
      interest: "مجھے مدد چاہیے",
      note: "آپ کی صورتحال",
      submit: "سیشن کی درخواست",
      interests: ["یونیورسٹی داخلہ", "ملازمت", "آسبلڈونگ", "زبان اور آمد"],
      imageAlt: "یورپی کیمپس پر بات کرتے طلبہ",
    },
    footer: {
      line: "مشاورت",
    },
    impressum: {
      kicker: "قانونی",
      title: "امپریسم",
      body: "اشاعت سے پہلے گلی کا پتہ شامل کریں۔ اس صفحے کا جرمن وکیل سے جائزہ لیں۔ رابطہ:",
      back: "واپس",
    },
    privacy: {
      kicker: "رازداری",
      title: "رازداری",
      p1: "سیشن کی درخواست دبانے پر آپ کا ای میل ایپ gakharconsultancy@gmail.com کے لیے ایک پیغام کھولتا ہے جس میں نام، ای میل، فون نمبر اور نوٹ ہوتا ہے۔ آپ اسے اپنے درج کردہ ای میل سے بھیجتے ہیں۔ یہ ویب سائٹ فارم محفوظ نہیں کرتی۔",
      p2: "ذاتی ڈیٹا جمع کرنے سے پہلے اس نوٹس کو وکیل سے تصدیق شدہ متن سے بدل دیں۔",
      back: "واپس",
    },
  },
  hi: {
    skip: "सामग्री पर जाएँ",
    nav: {
      figures: "आँकड़े",
      services: "सेवाएँ",
      approach: "तरीका",
      about: "परिचय",
      contact: "संपर्क",
      impressum: "इम्प्रेसुम",
      privacy: "गोपनीयता",
    },
    header: {
      book: "परामर्श बुक करें",
      openMenu: "मेनू खोलें",
      closeMenu: "मेनू बंद करें",
      language: "भाषा बदलें",
    },
    hero: {
      kicker: "परामर्श · कैज़र्सलाउटरन",
      title: "जर्मनी के लिए स्पष्ट मार्गदर्शन।",
      text: "मैं आपके साथ बैठता हूँ, एक रास्ता चुनता हूँ, और उसे अगली अर्जी, इंटरव्यू या आउसबिल्ड़ुंग के कदम में बदलता हूँ। यूरोप चलो के संस्थापक।",
      book: "परामर्श बुक करें",
      figures: "आँकड़े देखें",
      scroll: "नीचे जाएँ",
      imageAlt: "हाइडेलबर्ग, जर्मनी की ऐतिहासिक सड़क",
    },
    figures: {
      kicker: "आँकड़े",
      title: "अभ्यास के तथ्य—गढ़ी हुई नियुक्तियाँ नहीं।",
      statPaths: "परामर्श मार्ग",
      statFormat: "सत्र का रूप",
      statSteps: "अगले कदम तक के चरण",
    },
    facts: [
      "यूनी-असिस्ट आवेदन",
      "एपीएस दस्तावेज़ जाँच",
      "जर्मन लेबेन्स्लाउफ़",
      "आउसबिल्ड़ुंग अनुबंध",
      "वर्क परमिट का समय",
      "कैज़र्सलाउटरन से",
      "जर्मनी में पंजीकृत",
      "दक्षिण एशिया गलियारा",
    ],
    services: {
      kicker: "सेवाएँ",
      title: "चार रास्ते। आप एक चुनें।",
      items: [
        {
          title: "विश्वविद्यालय प्रवेश",
          text: "कार्यक्रम सूची, यूनी-असिस्ट, एपीएस, और एक फ़ाइल जिसे जर्मन विश्वविद्यालय संसाधित कर सकें।",
          alt: "यूरोप में विश्वविद्यालय प्रांगण",
        },
        {
          title: "नौकरी",
          text: "लेबेन्स्लाउफ़, इंटरव्यू, और यूरोप में आईटी व इंजीनियरिंग भूमिकाओं की खोज योजना।",
          alt: "पेशेवर साक्षात्कार",
        },
        {
          title: "आउसबिल्ड़ुंग",
          text: "नियोक्ता तक पहुँच और वीज़ा योग्य कागज़ ताकि प्रशिक्षण अनुबंध मिले।",
          alt: "व्यावहारिक व्यावसायिक कार्यशाला",
        },
        {
          title: "भाषा और आगमन",
          text: "जर्मन सीखने के मार्ग, आवास, बैंकिंग और पहले सप्ताह का परिचय।",
          alt: "शाम को यूरोपीय ट्रेन यात्रा",
        },
      ],
    },
    approach: {
      kicker: "तरीका",
      title: "तीन चरण। एक अगला काम।",
      steps: [
        {
          title: "लक्ष्य तय करें",
          text: "डिग्री, भाषा स्तर, बजट, और वह तारीख जब आप यूरोप में होना चाहते हैं।",
          alt: "पुस्तकालय में विद्यार्थी",
        },
        {
          title: "एक रास्ता चुनें",
          text: "विश्वविद्यालय, नौकरी या आउसबिल्ड़ुंग—तीनों नहीं। आप छोटी सूची लेकर जाते हैं।",
          alt: "कैंपस पर विद्यार्थी",
        },
        {
          title: "अगला काम करें",
          text: "एक दस्तावेज़, एक आवेदन, या एक संदेश जो इस सप्ताह भेजना है।",
          alt: "नीली शाम में बर्लिन की सड़क",
        },
      ],
    },
    about: {
      kicker: "परिचय",
      p1: "कैज़र्सलाउटरन में सलाहकार, उन लोगों के लिए जो जर्मनी में पढ़ना, काम करना या प्रशिक्षण लेना चाहते हैं।",
      p2: "यूरोप चलो के संस्थापक। सत्र एक-से-एक रहते हैं—लक्ष्य तय करें, एक रास्ता चुनें, अगला काम लेकर जाएँ।",
      imageAlt: "शाहज़ेब गक्खर का चित्र",
    },
    contact: {
      kicker: "संपर्क",
      title: "परामर्श बुक करें।",
      text: "बताएँ आप कौन सा रास्ता चाहते हैं। मैं समय या पहले प्रश्न भेजूँगा।",
      linkedin: "लिंक्डइन",
      sent: "आपका ईमेल ऐप gakharconsultancy@gmail.com के लिए संदेश खोल चुका है। इसे अपने दिए ईमेल से भेजें।",
      sending: "ईमेल खुल रहा है…",
      error: "ईमेल ऐप नहीं खुल सका। gakharconsultancy@gmail.com पर लिखें।",
      name: "नाम",
      email: "ईमेल",
      phone: "फ़ोन",
      interest: "मुझे मदद चाहिए",
      note: "आपकी स्थिति",
      submit: "सत्र का अनुरोध",
      interests: ["विश्वविद्यालय प्रवेश", "नौकरी", "आउसबिल्ड़ुंग", "भाषा और आगमन"],
      imageAlt: "यूरोपीय कैंपस पर बात करते विद्यार्थी",
    },
    footer: {
      line: "परामर्श",
    },
    impressum: {
      kicker: "कानूनी",
      title: "इम्प्रेसुम",
      body: "प्रकाशन से पहले सड़क का पता जोड़ें। इस पृष्ठ की जर्मन वकील से जाँच करवाएँ। संपर्क:",
      back: "वापस",
    },
    privacy: {
      kicker: "गोपनीयता",
      title: "गोपनीयता",
      p1: "सत्र का अनुरोध दबाने पर आपका ईमेल ऐप gakharconsultancy@gmail.com के लिए एक संदेश खोलता है जिसमें नाम, ईमेल, फ़ोन नंबर और नोट होता है। आप इसे अपने दिए ईमेल से भेजते हैं। यह वेबसाइट फ़ॉर्म संग्रहीत नहीं करती।",
      p2: "व्यक्तिगत डेटा एकत्र करने से पहले इस सूचना को वकील द्वारा जाँचे गए पाठ से बदलें।",
      back: "वापस",
    },
  },
};
