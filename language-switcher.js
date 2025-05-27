// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  // Define translations
  const translations = {
    en: {
      // Navigation
      'nav_home': 'Home',
      'nav_pharmacies': 'For Pharmacies',
      'nav_manufacturers': 'For Manufacturers',
      'nav_features': 'Features',
      'nav_pricing': 'Pricing',
      'nav_contact': 'Contact',
      
      // Hero section
      'hero_title': 'Germany\'s Leading Medical Cannabis Platform',
      'hero_subtitle': 'Connecting patients, pharmacies, and manufacturers in a seamless ecosystem',
      'hero_cta': 'Join the Network',
      'hero_secondary_cta': 'Learn More',
      
      // Pharmacy section
      'pharmacy_title': 'For Pharmacies',
      'pharmacy_subtitle': 'Enhance your visibility and streamline operations',
      'pharmacy_feature1_title': 'Increased Patient Reach',
      'pharmacy_feature1_desc': 'Connect with patients searching for specific products in your area',
      'pharmacy_feature2_title': 'Real-time Stock Updates',
      'pharmacy_feature2_desc': 'Keep your inventory current and visible to patients searching for specific products',
      'pharmacy_feature3_title': 'Enhanced Visibility',
      'pharmacy_feature3_desc': 'Responsive pharmacies with confirmed stock receive priority placement',
      'pharmacy_feature4_title': 'Streamlined Order Processing',
      'pharmacy_feature4_desc': 'Efficiently manage orders and reduce administrative workload',
      'pharmacy_feature5_title': 'Data-Driven Insights',
      'pharmacy_feature5_desc': 'Gain valuable inventory management insights from real-time data',
      
      // Manufacturer section
      'manufacturer_title': 'For Manufacturers',
      'manufacturer_subtitle': 'Connect directly with pharmacies and patients through Germany\'s leading medical cannabis platform',
      'manufacturer_feature1_title': 'Showcase Your Products',
      'manufacturer_feature1_desc': 'Create detailed product profiles with comprehensive information about your strains, cultivation methods, and quality standards',
      'manufacturer_feature2_title': 'Real-time Analytics',
      'manufacturer_feature2_desc': 'Access detailed insights on product performance, pharmacy orders, and patient preferences',
      'manufacturer_feature3_title': 'Direct Pharmacy Connections',
      'manufacturer_feature3_desc': 'Build relationships with pharmacies across Germany through our verified network',
      'manufacturer_feature4_title': 'Brand Awareness',
      'manufacturer_feature4_desc': 'Increase visibility with featured placements and educational content about your products',
      'manufacturer_profile_title': 'Manufacturer Profile Example',
      'manufacturer_profile_desc': 'Create a comprehensive brand presence with detailed product information, quality certifications, and merchandising options',
      
      // Pricing section
      'pricing_title': 'Partnership Tiers',
      'pricing_subtitle': 'Choose the partnership level that best fits your business needs and growth objectives',
      'pricing_basic': 'Basic',
      'pricing_growth': 'Growth',
      'pricing_premium': 'Premium',
      'pricing_basic_price': '€499/mo',
      'pricing_growth_price': '€999/mo',
      'pricing_premium_price': '€1,999/mo',
      'pricing_cta': 'Sign Letter of Intent',
      'pricing_download': 'Download Contract Template',
      
      // Features section
      'features_title': 'Premium Features',
      'features_item1': 'Featured product placement',
      'features_item2': 'Advanced analytics dashboard',
      'features_item3': 'Educational content creation',
      'features_item4': 'Priority pharmacy connections',
      
      // CTA section
      'cta_title': 'Sign Your Letter of Intent',
      'cta_subtitle': 'Secure your position in Germany\'s evolving medical cannabis ecosystem before our groundbreaking tech release this June',
      'cta_button': 'Sign Letter of Intent',
      'cta_download': 'Download Contract Template',
      'cta_countdown': 'Tech Release Countdown',
      'cta_days': 'Days',
      'cta_until': 'Until June 2025 Launch',
      
      // Footer
      'footer_description': 'Connecting patients, pharmacies, and manufacturers in Germany\'s medical cannabis ecosystem',
      'footer_contact': 'Contact',
      'footer_legal': 'Legal',
      'footer_follow': 'Follow Us',
      'footer_privacy': 'Privacy Policy',
      'footer_terms': 'Terms of Service',
      'footer_imprint': 'Imprint',
      'footer_copyright': '© 2025 Tortuga Technologies (Germany) GmbH, operating as Weed.de. All rights reserved',
      
      // LOI Form
      'loi_title': 'Sign Letter of Intent',
      'loi_subtitle': 'Please fill out this form to express your interest in partnering with Weed.de. Your information will be securely stored and a representative will contact you shortly',
      'loi_business_name': 'Business Name',
      'loi_contact_name': 'Contact Name',
      'loi_email': 'Email Address',
      'loi_phone': 'Phone Number',
      'loi_business_type': 'Business Type',
      'loi_select_type': 'Select business type',
      'loi_pharmacy': 'Pharmacy',
      'loi_manufacturer': 'Manufacturer',
      'loi_both': 'Both',
      'loi_tier': 'Preferred Tier',
      'loi_select_tier': 'Select preferred tier',
      'loi_additional': 'Additional Information',
      'loi_terms': 'I agree to the terms and conditions and understand this is a non-binding Letter of Intent',
      'loi_submit': 'Submit Letter of Intent',
      'loi_success_title': 'Thank you for your interest!',
      'loi_success_message': 'Your Letter of Intent has been submitted successfully. A representative will contact you shortly',
      'loi_error_title': 'Submission Error',
      'loi_error_message': 'There was a problem submitting your form. Please try again or contact us directly at info@weed.de'
    },
    de: {
      // Navigation
      'nav_home': 'Startseite',
      'nav_pharmacies': 'Für Apotheken',
      'nav_manufacturers': 'Für Hersteller',
      'nav_features': 'Funktionen',
      'nav_pricing': 'Preise',
      'nav_contact': 'Kontakt',
      
      // Hero section
      'hero_title': 'Deutschlands führende Plattform für medizinisches Cannabis',
      'hero_subtitle': 'Verbindung von Patienten, Apotheken und Herstellern in einem nahtlosen Ökosystem',
      'hero_cta': 'Dem Netzwerk beitreten',
      'hero_secondary_cta': 'Mehr erfahren',
      
      // Pharmacy section
      'pharmacy_title': 'Für Apotheken',
      'pharmacy_subtitle': 'Verbessern Sie Ihre Sichtbarkeit und optimieren Sie Ihre Abläufe',
      'pharmacy_feature1_title': 'Erhöhte Patientenreichweite',
      'pharmacy_feature1_desc': 'Verbinden Sie sich mit Patienten, die nach bestimmten Produkten in Ihrer Nähe suchen',
      'pharmacy_feature2_title': 'Echtzeit-Bestandsaktualisierungen',
      'pharmacy_feature2_desc': 'Halten Sie Ihren Bestand aktuell und sichtbar für Patienten, die nach bestimmten Produkten suchen',
      'pharmacy_feature3_title': 'Verbesserte Sichtbarkeit',
      'pharmacy_feature3_desc': 'Reaktionsschnelle Apotheken mit bestätigtem Bestand erhalten eine bevorzugte Platzierung',
      'pharmacy_feature4_title': 'Optimierte Auftragsabwicklung',
      'pharmacy_feature4_desc': 'Verwalten Sie Bestellungen effizient und reduzieren Sie den Verwaltungsaufwand',
      'pharmacy_feature5_title': 'Datengestützte Erkenntnisse',
      'pharmacy_feature5_desc': 'Gewinnen Sie wertvolle Einblicke in die Bestandsverwaltung aus Echtzeitdaten',
      
      // Manufacturer section
      'manufacturer_title': 'Für Hersteller',
      'manufacturer_subtitle': 'Verbinden Sie sich direkt mit Apotheken und Patienten über Deutschlands führende Plattform für medizinisches Cannabis',
      'manufacturer_feature1_title': 'Präsentieren Sie Ihre Produkte',
      'manufacturer_feature1_desc': 'Erstellen Sie detaillierte Produktprofile mit umfassenden Informationen über Ihre Sorten, Anbaumethoden und Qualitätsstandards',
      'manufacturer_feature2_title': 'Echtzeit-Analytik',
      'manufacturer_feature2_desc': 'Zugriff auf detaillierte Einblicke in Produktleistung, Apothekenbestellungen und Patientenpräferenzen',
      'manufacturer_feature3_title': 'Direkte Apothekenverbindungen',
      'manufacturer_feature3_desc': 'Bauen Sie Beziehungen zu Apotheken in ganz Deutschland über unser verifiziertes Netzwerk auf',
      'manufacturer_feature4_title': 'Markenbekanntheit',
      'manufacturer_feature4_desc': 'Erhöhen Sie die Sichtbarkeit mit hervorgehobenen Platzierungen und Bildungsinhalten über Ihre Produkte',
      'manufacturer_profile_title': 'Beispiel für Herstellerprofil',
      'manufacturer_profile_desc': 'Erstellen Sie eine umfassende Markenpräsenz mit detaillierten Produktinformationen, Qualitätszertifizierungen und Merchandising-Optionen',
      
      // Pricing section
      'pricing_title': 'Partnerschaftsstufen',
      'pricing_subtitle': 'Wählen Sie die Partnerschaftsstufe, die am besten zu Ihren Geschäftsanforderungen und Wachstumszielen passt',
      'pricing_basic': 'Basis',
      'pricing_growth': 'Wachstum',
      'pricing_premium': 'Premium',
      'pricing_basic_price': '499 €/Monat',
      'pricing_growth_price': '999 €/Monat',
      'pricing_premium_price': '1.999 €/Monat',
      'pricing_cta': 'Absichtserklärung unterzeichnen',
      'pricing_download': 'Vertragsvorlage herunterladen',
      
      // Features section
      'features_title': 'Premium-Funktionen',
      'features_item1': 'Hervorgehobene Produktplatzierung',
      'features_item2': 'Erweitertes Analytics-Dashboard',
      'features_item3': 'Erstellung von Bildungsinhalten',
      'features_item4': 'Prioritätsverbindungen zu Apotheken',
      
      // CTA section
      'cta_title': 'Unterzeichnen Sie Ihre Absichtserklärung',
      'cta_subtitle': 'Sichern Sie Ihre Position im sich entwickelnden medizinischen Cannabis-Ökosystem Deutschlands vor unserer bahnbrechenden Technologieeinführung im Juni',
      'cta_button': 'Absichtserklärung unterzeichnen',
      'cta_download': 'Vertragsvorlage herunterladen',
      'cta_countdown': 'Countdown zur Technologieeinführung',
      'cta_days': 'Tage',
      'cta_until': 'Bis zur Einführung im Juni 2025',
      
      // Footer
      'footer_description': 'Verbindung von Patienten, Apotheken und Herstellern im medizinischen Cannabis-Ökosystem Deutschlands',
      'footer_contact': 'Kontakt',
      'footer_legal': 'Rechtliches',
      'footer_follow': 'Folgen Sie uns',
      'footer_privacy': 'Datenschutzrichtlinie',
      'footer_terms': 'Nutzungsbedingungen',
      'footer_imprint': 'Impressum',
      'footer_copyright': '© 2025 Tortuga Technologies (Germany) GmbH, handelnd als Weed.de. Alle Rechte vorbehalten',
      
      // LOI Form
      'loi_title': 'Absichtserklärung unterzeichnen',
      'loi_subtitle': 'Bitte füllen Sie dieses Formular aus, um Ihr Interesse an einer Partnerschaft mit Weed.de zu bekunden. Ihre Informationen werden sicher gespeichert und ein Vertreter wird sich in Kürze mit Ihnen in Verbindung setzen',
      'loi_business_name': 'Firmenname',
      'loi_contact_name': 'Kontaktname',
      'loi_email': 'E-Mail-Adresse',
      'loi_phone': 'Telefonnummer',
      'loi_business_type': 'Unternehmenstyp',
      'loi_select_type': 'Unternehmenstyp auswählen',
      'loi_pharmacy': 'Apotheke',
      'loi_manufacturer': 'Hersteller',
      'loi_both': 'Beides',
      'loi_tier': 'Bevorzugte Stufe',
      'loi_select_tier': 'Bevorzugte Stufe auswählen',
      'loi_additional': 'Zusätzliche Informationen',
      'loi_terms': 'Ich stimme den Allgemeinen Geschäftsbedingungen zu und verstehe, dass dies eine unverbindliche Absichtserklärung ist',
      'loi_submit': 'Absichtserklärung einreichen',
      'loi_success_title': 'Vielen Dank für Ihr Interesse!',
      'loi_success_message': 'Ihre Absichtserklärung wurde erfolgreich eingereicht. Ein Vertreter wird sich in Kürze mit Ihnen in Verbindung setzen',
      'loi_error_title': 'Übermittlungsfehler',
      'loi_error_message': 'Bei der Übermittlung Ihres Formulars ist ein Problem aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info@weed.de'
    }
  };

  // Get all elements with data-lang attribute
  const updatePageLanguage = (lang) => {
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Update all input placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
    
    // Update all buttons with data-i18n-value
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
      const key = element.getAttribute('data-i18n-value');
      if (translations[lang][key]) {
        element.value = translations[lang][key];
      }
    });
    
    // Hide elements not matching current language
    document.querySelectorAll('[data-lang]').forEach(element => {
      if (element.getAttribute('data-lang') === lang) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
    
    // Update language switcher active state
    document.querySelectorAll('.language-option').forEach(option => {
      if (option.getAttribute('data-switch-lang') === lang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
  };

  // Initialize language switcher
  const languageOptions = document.querySelectorAll('.language-option');
  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-switch-lang');
      updatePageLanguage(lang);
    });
  });

  // Set initial language based on stored preference or browser language
  const storedLanguage = localStorage.getItem('preferredLanguage');
  const browserLanguage = navigator.language.startsWith('de') ? 'de' : 'en';
  const initialLanguage = storedLanguage || browserLanguage;
  
  // Apply initial language
  updatePageLanguage(initialLanguage);
});
