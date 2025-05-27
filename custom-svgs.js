// Create custom SVG for Pioneer Pharmacy badge
const pioneerBadgeSVG = `
<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A3F869" />
      <stop offset="100%" stop-color="#7AD33A" />
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="55" fill="url(#badgeGradient)" stroke="#3D2314" stroke-width="2" />
  <circle cx="60" cy="60" r="50" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2,2" />
  <path d="M60 20 L63 35 L78 35 L66 45 L70 60 L60 50 L50 60 L54 45 L42 35 L57 35 Z" fill="#3D2314" />
  <text x="60" y="80" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle" fill="#3D2314">PIONEER</text>
  <text x="60" y="92" font-family="Arial" font-size="8" text-anchor="middle" fill="#3D2314">PHARMACY</text>
</svg>
`;

// Create custom SVG for B2C newsletter mockup
const newsletterMockupSVG = `
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="280" height="180" rx="5" fill="#FFFFFF" stroke="#DDDDDD" />
  <rect x="20" y="20" width="260" height="40" fill="#A3F869" rx="3" />
  <text x="40" y="45" font-family="Arial" font-size="16" font-weight="bold" fill="#3D2314">WEED.DE NEWSLETTER</text>
  <line x1="20" y1="70" x2="280" y2="70" stroke="#EEEEEE" stroke-width="1" />
  <rect x="30" y="80" width="100" height="80" fill="#F5F5E6" rx="3" />
  <rect x="40" y="90" width="80" height="50" fill="#DDDDDD" rx="2" />
  <circle cx="80" cy="115" r="15" fill="#A3F869" />
  <rect x="40" y="150" width="80" height="5" fill="#DDDDDD" />
  <rect x="140" y="80" width="130" height="10" fill="#EEEEEE" rx="2" />
  <rect x="140" y="95" width="130" height="5" fill="#EEEEEE" rx="2" />
  <rect x="140" y="105" width="130" height="5" fill="#EEEEEE" rx="2" />
  <rect x="140" y="115" width="130" height="5" fill="#EEEEEE" rx="2" />
  <rect x="140" y="125" width="100" height="5" fill="#EEEEEE" rx="2" />
  <rect x="140" y="140" width="80" height="20" fill="#A3F869" rx="3" />
  <text x="150" y="155" font-family="Arial" font-size="10" font-weight="bold" fill="#3D2314">READ MORE</text>
</svg>
`;

// Create custom SVG for Flora Match visualization
const floraMatchSVG = `
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="floraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A3F869" />
      <stop offset="100%" stop-color="#FF99CC" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="280" height="180" rx="8" fill="#FFFFFF" stroke="#EEEEEE" />
  <text x="30" y="40" font-family="Arial" font-size="16" font-weight="bold" fill="#3D2314">FLORA MATCH™</text>
  <text x="30" y="60" font-family="Arial" font-size="10" fill="#666666">Patient-Product Matching System</text>
  
  <!-- Patient icon -->
  <circle cx="70" cy="110" r="25" fill="#F5F5E6" stroke="#DDDDDD" />
  <circle cx="70" cy="100" r="10" fill="#DDDDDD" />
  <path d="M50 130 Q70 150 90 130" fill="#DDDDDD" />
  
  <!-- Product icon -->
  <rect x="200" y="90" width="40" height="40" rx="5" fill="#F5F5E6" stroke="#DDDDDD" />
  <rect x="210" y="100" width="20" height="20" rx="2" fill="#DDDDDD" />
  
  <!-- Connection lines -->
  <path d="M95 110 Q150 80 200 110" stroke="url(#floraGradient)" stroke-width="3" fill="none" />
  <path d="M95 110 Q150 110 200 110" stroke="url(#floraGradient)" stroke-width="2" fill="none" stroke-dasharray="4,2" />
  <path d="M95 110 Q150 140 200 110" stroke="url(#floraGradient)" stroke-width="3" fill="none" />
  
  <!-- Match percentage -->
  <circle cx="150" cy="110" r="20" fill="#FFFFFF" stroke="#A3F869" stroke-width="2" />
  <text x="150" y="115" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#3D2314">94%</text>
</svg>
`;

// Create custom SVG for AI Patient Insights
const patientInsightsSVG = `
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="280" height="180" rx="8" fill="#FFFFFF" stroke="#EEEEEE" />
  <text x="30" y="40" font-family="Arial" font-size="16" font-weight="bold" fill="#3D2314">AI PATIENT INSIGHTS</text>
  
  <!-- Brain icon -->
  <path d="M150 60 Q130 50 130 70 Q120 70 120 80 Q110 80 110 90 Q110 100 120 100 Q120 110 130 110 Q130 120 140 120 L160 120 Q170 120 170 110 Q180 110 180 100 Q190 100 190 90 Q190 80 180 80 Q180 70 170 70 Q170 50 150 60" fill="#F5F5E6" stroke="#3D2314" stroke-width="1" />
  
  <!-- Insight bubbles -->
  <circle cx="80" cy="150" r="15" fill="#A3F869" opacity="0.7" />
  <text x="80" y="154" font-family="Arial" font-size="10" text-anchor="middle" fill="#3D2314">Pain</text>
  
  <circle cx="120" cy="160" r="20" fill="#A3F869" opacity="0.8" />
  <text x="120" y="164" font-family="Arial" font-size="10" text-anchor="middle" fill="#3D2314">Sleep</text>
  
  <circle cx="170" cy="155" r="25" fill="#A3F869" opacity="0.9" />
  <text x="170" y="159" font-family="Arial" font-size="10" text-anchor="middle" fill="#3D2314">Anxiety</text>
  
  <circle cx="220" cy="145" r="18" fill="#A3F869" opacity="0.7" />
  <text x="220" y="149" font-family="Arial" font-size="10" text-anchor="middle" fill="#3D2314">Focus</text>
  
  <!-- Connection lines -->
  <line x1="150" y1="120" x2="80" y2="150" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="150" y1="120" x2="120" y2="160" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="150" y1="120" x2="170" y2="155" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="150" y1="120" x2="220" y2="145" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="2,2" />
</svg>
`;

// Create custom SVG for Know Your Medicine story
const knowYourMedicineSVG = `
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="280" height="180" rx="8" fill="#FFFFFF" stroke="#EEEEEE" />
  <text x="30" y="40" font-family="Arial" font-size="16" font-weight="bold" fill="#3D2314">KNOW YOUR MEDICINE</text>
  
  <!-- Map icon -->
  <rect x="30" y="60" width="80" height="60" rx="4" fill="#F5F5E6" stroke="#DDDDDD" />
  <path d="M40 70 L60 65 L80 75 L100 70" stroke="#A3F869" stroke-width="2" fill="none" />
  <circle cx="70" cy="90" r="5" fill="#3D2314" />
  <text x="70" y="110" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">CULTIVATION REGION</text>
  
  <!-- Values icon -->
  <rect x="130" y="60" width="60" height="60" rx="4" fill="#F5F5E6" stroke="#DDDDDD" />
  <line x1="140" y1="75" x2="180" y2="75" stroke="#A3F869" stroke-width="2" />
  <line x1="140" y1="85" x2="170" y2="85" stroke="#A3F869" stroke-width="2" />
  <line x1="140" y1="95" x2="175" y2="95" stroke="#A3F869" stroke-width="2" />
  <text x="160" y="110" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">BRAND VALUES</text>
  
  <!-- Classification icon -->
  <rect x="210" y="60" width="60" height="60" rx="4" fill="#F5F5E6" stroke="#DDDDDD" />
  <rect x="220" y="70" width="40" height="10" rx="2" fill="#A3F869" opacity="0.7" />
  <rect x="220" y="85" width="30" height="10" rx="2" fill="#A3F869" opacity="0.9" />
  <rect x="220" y="100" width="20" height="10" rx="2" fill="#A3F869" />
  <text x="240" y="110" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">CLASSIFICATION</text>
  
  <!-- Connection line -->
  <path d="M30 140 L270 140" stroke="#EEEEEE" stroke-width="2" />
  <circle cx="70" cy="140" r="5" fill="#A3F869" />
  <circle cx="160" cy="140" r="5" fill="#A3F869" />
  <circle cx="240" cy="140" r="5" fill="#A3F869" />
  
  <text x="150" y="170" font-family="Arial" font-size="12" text-anchor="middle" fill="#3D2314">Dynamic Story Integration</text>
</svg>
`;

// Create custom SVG for Benchmark Comparison
const benchmarkComparisonSVG = `
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="280" height="180" rx="8" fill="#FFFFFF" stroke="#EEEEEE" />
  <text x="30" y="40" font-family="Arial" font-size="16" font-weight="bold" fill="#3D2314">BENCHMARK COMPARISON</text>
  
  <!-- Chart -->
  <line x1="50" y1="150" x2="250" y2="150" stroke="#666666" stroke-width="1" />
  <line x1="50" y1="60" x2="50" y2="150" stroke="#666666" stroke-width="1" />
  
  <!-- Your product bar -->
  <rect x="80" y="90" width="30" height="60" fill="#A3F869" rx="2" />
  <text x="95" y="160" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">YOUR PRODUCT</text>
  
  <!-- Competitor bars (anonymized) -->
  <rect x="130" y="110" width="30" height="40" fill="#DDDDDD" rx="2" />
  <text x="145" y="160" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">COMPETITOR A</text>
  
  <rect x="180" y="100" width="30" height="50" fill="#DDDDDD" rx="2" />
  <text x="195" y="160" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">COMPETITOR B</text>
  
  <rect x="230" y="120" width="30" height="30" fill="#DDDDDD" rx="2" />
  <text x="245" y="160" font-family="Arial" font-size="8" text-anchor="middle" fill="#666666">COMPETITOR C</text>
  
  <!-- Y-axis labels -->
  <text x="40" y="150" font-family="Arial" font-size="8" text-anchor="end" fill="#666666">0%</text>
  <text x="40" y="120" font-family="Arial" font-size="8" text-anchor="end" fill="#666666">50%</text>
  <text x="40" y="90" font-family="Arial" font-size="8" text-anchor="end" fill="#666666">100%</text>
  <text x="40" y="60" font-family="Arial" font-size="8" text-anchor="end" fill="#666666">150%</text>
  
  <text x="150" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="#3D2314">Anonymized Market Comparison</text>
</svg>
`;
