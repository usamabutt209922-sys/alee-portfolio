// Curated from "Portfolio projects.xlsx" (Final sheet, 109 real entries).
// Per direction: ~4-5 projects featured per section rather than all 109.
// Fields map directly to sheet columns; nothing here is invented.
// caseStudy: true => one of the 5 flagship projects named in the resume's
// "Selected Product Experience" section (Kaduu, Sohcahtoa, Kena Finance,
// RideRush, OnlyGenius) — these get the deep case-study template.

function platformFromMedium(medium = '') {
  const m = medium.toLowerCase()
  if (m.includes('mobile')) return 'mobile'
  if (m.includes('dashboard') || m.includes('analytics')) return 'dashboard'
  if (m.includes('website') || m.includes('landing') || m.includes('marketing') || m.includes('corporate')) return 'website'
  return 'web'
}

const raw = [
  // ---- Fintech ----
  {
    slug: 'kena-finance', title: 'Kena Finance', category: 'fintech',
    tagline: 'Personal Finance & Money Management App',
    description: 'Kena Finance is a personal finance mobile application that helps users manage budgets, track expenses, monitor financial activity, and achieve savings goals through intuitive dashboards, analytics, and financial planning tools.',
    industry: 'FinTech, Personal Finance, Digital Banking', medium: 'Mobile Application (iOS & Android)',
    figma: 'https://www.figma.com/design/785VMJftYOytH398XbHgJ3/Kena-Finance-Mobile-App?node-id=13606-1868&t=pHoHlRczGXSu4glR-0',
    featured: true, caseStudy: true, role: 'Lead Designer',
    keyFlows: ['User registration & onboarding', 'Account setup', 'Financial dashboard review', 'Transaction tracking', 'Budget management', 'Financial goal creation', 'Spending analysis', 'Profile & settings management'],
    modules: ['Authentication & onboarding', 'Financial dashboard', 'Account overview', 'Transaction management', 'Budget planning', 'Savings goals', 'Spending analytics', 'Financial reports', 'Notifications & alerts', 'Profile & settings'],
    userRoles: ['End user: tracks finances, manages budgets, sets goals', 'Premium user: advanced analytics and reports', 'Administrator: platform settings and support operations'],
    scope: '35–60+ mobile screens across onboarding, dashboard, transactions, budgets, savings goals, reports, and settings.',
    responsiveness: 'Mobile (iOS & Android) with tablet support.',
  },
  {
    slug: 'onlygenius', title: 'OnlyGenius', category: 'fintech',
    tagline: 'AI Content Creation & Creator Monetization Platform',
    description: 'ONLYGENIUS is an AI-powered creator platform that enables content creators to generate, manage, distribute, and monetize digital content while leveraging analytics, audience engagement tools, and subscription-based revenue models.',
    industry: 'Artificial Intelligence, Creator Economy, Content Automation, SaaS', medium: 'AI SaaS Platform / Web Application',
    figma: 'https://www.figma.com/design/6ek8muAx81mjBc0NujAa4U/ONLYGENIUS-Platform-v1.0?node-id=28199-30956&t=1OEVYI84eltDc8XJ-0',
    featured: true, caseStudy: true, role: 'Lead Designer',
    keyFlows: ['User registration & onboarding', 'Creator profile setup', 'Content creation workflow', 'AI content generation', 'Content management', 'Audience engagement', 'Subscription & monetization setup', 'Analytics review'],
    modules: ['Authentication & user management', 'AI content generation tools', 'Creator dashboard', 'Content library', 'Audience management', 'Subscription & monetization', 'Analytics & insights', 'Notifications & messaging', 'Profile management'],
    userRoles: ['Creator: creates content, manages audience, tracks earnings', 'Subscriber: accesses creator content, manages subscriptions', 'Administrator: user, content, and platform management'],
    scope: '60–120+ SaaS screens spanning onboarding, creator dashboard, AI generation, analytics, subscriptions, and admin.',
    responsiveness: 'Desktop.',
  },
  { slug: 'kashypay', title: 'KashyPay', category: 'fintech', tagline: 'Business Analytics, Cashflow & Payment Management', description: "Track revenue, expenses, profit, cashflow, vouchers, and payouts with Kashybee's advanced business analytics and finance management system.", industry: 'FinTech / Financial Services', medium: 'FinTech app / SaaS dashboard / website', figma: 'https://www.figma.com/design/GUJHvK2Bur6ndiJnEx17dA/KashyPay-Dashboard-Fintech?node-id=669-7931&t=McxFMjoaHh3oIDmj-0', featured: false, caseStudy: false },
  { slug: 'zeeinvoices', title: 'ZeeInvoices', category: 'fintech', tagline: 'Smart Invoice Generator for Businesses & Billing Tool', description: 'A smart invoice generator and billing tool that helps businesses create professional invoices, automate billing, and track payments easily.', industry: 'FinTech / Financial Services', medium: 'FinTech app / SaaS dashboard / website', figma: 'https://www.figma.com/design/s5dVm729CQ9gUAbCovWWyh/ZeeInvoice-%7C-Website-%7C-Technology?node-id=2326-2824&t=Utm4QBdegWmlROqS-0', featured: false, caseStudy: false },
  { slug: 'majlix', title: 'MajliX', category: 'fintech', tagline: 'Halal Stock Analysis & Portfolio Management App', description: 'Analyze halal stocks, track performance, view valuations, follow market news, and manage your halal investment portfolio effortlessly.', industry: 'FinTech / Financial Services', medium: 'Mobile application', figma: 'https://www.figma.com/design/ePc3E1tuOQaUYdHtpsaayl/MajliX-App--FinTech-?node-id=6103-1765&t=Tv37RXOwTjfO28dO-0', featured: false, caseStudy: false },

  // ---- Healthcare ----
  { slug: 'hanna-health', title: 'Hanna Health', category: 'healthcare', tagline: 'A centralized HealthTech management platform', description: 'A multi-role healthcare management platform designed for Physical Therapists, Super Admins, and Patients.', industry: 'Healthcare / MedTech', medium: 'Web application / SaaS platform', figma: 'https://figma.com/design/w1mar3JdYaL6qWbz0v7kRw/Hanna-Health-?node-id=54530-3962&p=f&t=Qogtx2i9lnF5QKen-0', featured: true, caseStudy: false },
  { slug: 'oncomply', title: 'OnComply', category: 'healthcare', tagline: 'Home care & Healthcare Staffing platform', description: 'An all-in-one hiring and compliance platform that helps home care agencies recruit caregivers faster and stay audit-ready.', industry: 'Healthcare / MedTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/JJOGhLKjUphszeAAbIEEYr/OnComply---Website--BackUp-?node-id=34-33645&t=mrUZtKsZ5GqHjKl7-0', featured: false, caseStudy: false },
  { slug: 'thrivecare', title: 'Thrivecare', category: 'healthcare', tagline: 'Therapist & client matching platform', description: 'A mental health platform that connects clients with qualified therapists through personalized matching, insurance verification, online booking, and virtual therapy sessions.', industry: 'Healthcare / MedTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/od71xWQ5LIksonVnJ1q3k8/Thrivecare-Original-Website-Medical?node-id=109-843&t=qxjQ2ZvrpaiDL2VO-0', featured: false, caseStudy: false },
  { slug: 'agviewer', title: 'AGviewer', category: 'healthcare', tagline: 'Healthcare Analytics Dashboard', description: 'A healthcare analytics dashboard that provides real-time patient insights, operational metrics, and data visualization to support informed decision-making.', industry: 'Healthcare / MedTech', medium: 'Dashboard / analytics platform', figma: 'https://www.figma.com/design/1YRkU2A3EKHjLqs2cRPl0o/AgViewer-%7C-Health-%7C-Dashboard?m=auto&t=YtVLjbKHuWIfBwDJ-6', featured: false, caseStudy: false },
  { slug: 'carequest', title: 'CareQuest', category: 'healthcare', tagline: 'Medical Laboratory Management', description: 'A healthcare platform designed to streamline laboratory operations, manage diagnostic services, and provide efficient access to medical testing information and results.', industry: 'Healthcare / MedTech', medium: 'Healthcare SaaS / medical dashboard / website', figma: 'https://www.figma.com/design/tsJDkzLXPBmQBFVfHOxmef/CareQuest-Medical-Laboratory?m=auto&t=Sb9yAnZrsw0zCrti-6', featured: false, caseStudy: false },

  // ---- Real Estate ----
  { slug: 'trillion-real-estate', title: 'Trillion Real Estate', category: 'real-estate', tagline: 'Enterprise real estate web app for property management', description: 'Enterprise-grade real estate web app UI built for large property portfolios, dashboards, and scalable workflows.', industry: 'Real Estate / PropTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/PKpqQKxDWi9MO45RXz8nxc/Trillion-Real-Estate?node-id=84-272&t=uDhRYPCfbZFyRbyG-0', featured: true, caseStudy: false },
  { slug: 'habino-real-estate', title: 'Habino Real Estate', category: 'real-estate', tagline: 'Real estate web platform for property listings and agents', description: 'Clean and modern real estate UI for property listings, agent profiles, and customer engagement.', industry: 'Real Estate / PropTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/CL0TdCIGvuv4Ja4p5xjE6A/Habino-real-estate?node-id=4012-29968&t=L6ZmNzQx03TBAiEG-0', featured: false, caseStudy: false },
  { slug: 'property-wholesaler', title: 'Property Wholesaler', category: 'real-estate', tagline: 'Real estate wholesaling platform built for investors', description: 'UI design for real estate wholesaling platforms tailored for investors, deal tracking, and property management.', industry: 'Real Estate / PropTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/JpXc1CR14TI3jWzHP7blH3/Property-Wholesaler-final-V1?node-id=1312-27567&t=bgobDra2oRsZm9QR-0', featured: false, caseStudy: false },
  { slug: 'quick-deal', title: 'Quick Deal', category: 'real-estate', tagline: 'Real estate deal platform for fast property transactions', description: 'Real estate platform UI focused on fast property deals, lead conversion, and streamlined user flows.', industry: 'Real Estate / PropTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/zQ6hBbqxjecSJPrvjArqC8/Quick-Deal?node-id=42-2848&t=rLJ0CmFUJL3Kn31u-0', featured: false, caseStudy: false },
  { slug: 'studiflats', title: 'StudiFlats', category: 'real-estate', tagline: 'Property Management Dashboard | Apartments & Tenants', description: 'A platform to manage apartments, tenants, payments, issues, and revenue efficiently.', industry: 'Real Estate / PropTech', medium: 'Dashboard / analytics platform', figma: 'https://www.figma.com/design/aln4aJoBOIDCr9zKvtJuUv/StudiFlats-1.0?node-id=905-8030&t=BtgnEIC907Tlkcvp-1', featured: false, caseStudy: false },

  // ---- SaaS & Enterprise ----
  {
    slug: 'kaduu', title: 'Kaduu', category: 'saas-enterprise',
    tagline: 'Dark Web Monitoring & Cyber Risk Intelligence Platform',
    description: 'Advanced cybersecurity platform that monitors data breaches, leaked credentials, and darknet threats in real time, with risk scores, deep web search, alerts, and cybersecurity insights.',
    industry: 'Insurance / Compliance / Risk', medium: 'Web application / SaaS platform',
    figma: 'https://www.figma.com/design/YIZ6EzgERS6ojw5JssDIgB/KADUU-%7C-Webapp-%7C-B2B-SaaS?node-id=5-383&t=agXuDH3zG5waFmJW-0',
    featured: true, caseStudy: true, role: 'Lead Designer',
    keyFlows: ['Homepage / service discovery', 'Feature exploration', 'Solution or module review', 'Pricing / demo request', 'Contact lead submission', 'Admin / content management'],
    modules: ['Homepage', 'Feature sections', 'Services / solutions', 'Case studies', 'Pricing / demo CTAs', 'Contact forms', 'Resources', 'CMS / admin'],
    userRoles: ['End user', 'Manager / operator', 'Admin', 'Super admin'],
    scope: 'Multi-screen dashboard/web app spanning core modules, table views, forms, detail pages, modals, and empty/loading/error states.',
    responsiveness: 'Desktop-first web app with responsive tablet and mobile-friendly views.',
  },
  {
    slug: 'sohcahtoa', title: 'Sohcahtoa', category: 'saas-enterprise',
    tagline: 'Business Facilitation Platform for BAME Entrepreneurs',
    description: 'Sohcahtoa empowers BAME entrepreneurs with education, funding access, expert guidance, and AI-powered tools to start, grow, and scale businesses.',
    industry: 'B2B SaaS / Technology', medium: 'Web application / SaaS platform',
    figma: 'https://www.figma.com/design/bwP8gsP1OiblZ2SQAYsULq/Sohcahtoa-Business-Facilitation--SBF-?node-id=2200-97856&t=ucGfBVo3u0RM6pKh-0',
    featured: true, caseStudy: true, role: 'Lead Designer',
    keyFlows: ['Homepage / service discovery', 'Feature exploration', 'Solution or module review', 'Pricing / demo request', 'Contact lead submission', 'Admin / content management'],
    modules: ['Homepage', 'Feature sections', 'Services / solutions', 'Case studies', 'Pricing / demo CTAs', 'Contact forms', 'Resources', 'CMS / admin'],
    userRoles: ['End user', 'Manager / operator', 'Admin', 'Super admin'],
    scope: 'Multi-screen dashboard/web app spanning core modules, table views, forms, detail pages, modals, and empty/loading/error states.',
    responsiveness: 'Desktop-first web app with responsive tablet and mobile-friendly views.',
  },
  { slug: 'techsara-solutions', title: 'Techsara Solutions', category: 'saas-enterprise', tagline: 'Find & Hire Top Tech Talent Quickly | Smart Hiring Platform', description: 'Revolutionize hiring with pre-screened tech professionals, fast-track interviews, and flexible engagement models.', industry: 'HRTech / Recruitment', medium: 'Web application / SaaS platform', figma: 'https://figma.com/design/49e2gZAkmIcB36UeJxa4ty/Techsara-Solutions-%7C-SaaS-Website-?node-id=4-49&p=f&t=0sR2ol5U6lok10vU-0', featured: false, caseStudy: false },
  { slug: 'sorsx', title: 'SorsX', category: 'saas-enterprise', tagline: 'Smart Hiring Platform', description: 'AI-powered recruitment platform that automates sourcing, screening, and interviews to help companies hire top talent faster and smarter.', industry: 'HRTech / Recruitment', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/8fA6HIsCCvFmPm9Yn4fTr3/SorsX-%7C-Website-%7C-Dec-05--2025?node-id=5097-3107&t=lKqQbaZfpi8EPehG-0', featured: false, caseStudy: false },
  { slug: 'bluefauceit', title: 'BlueFauceit', category: 'saas-enterprise', tagline: 'Merchant Management & Business Analytics Platform', description: 'A centralized SaaS platform to manage merchants, subscriptions, sales, customers, revenue analytics, HR data, and accounting from a unified dashboard.', industry: 'Logistics & Transportation', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/TTNDsx6PHBMPfOHgGAtQkK/BlueFaucet-Dashboard?node-id=1-2&t=wAg9vRdJGsNN01jS-1', featured: false, caseStudy: false },

  // ---- Logistics & Transportation ----
  {
    slug: 'riderush', title: 'RideRush', category: 'logistics',
    tagline: 'Scalable Ride-Hailing & Mobility Solution',
    description: 'A scalable mobility solution with passenger, driver, and admin applications designed for modern ride-hailing and fleet operations.',
    industry: 'Logistics & Transportation', medium: 'Operations dashboard / logistics platform / website',
    figma: 'https://www.figma.com/design/efL28a06xQL4JC5tcdYOIH/RideRush?node-id=4-49&p=f&t=8C1ooV2rs8l3U6nn-0',
    featured: true, caseStudy: true, role: 'Lead Designer',
    keyFlows: ['Booking', 'Trip management', 'Live tracking', 'Payment flows', 'Request / order creation', 'Assignment / dispatch', 'Status updates', 'Operations dashboard reporting'],
    modules: ['Operations dashboard', 'Order / request management', 'Dispatch', 'Shipment / ride tracking', 'Inventory / resources', 'Reports', 'User / admin settings'],
    userRoles: ['Rider / passenger', 'Driver', 'Dispatcher', 'Fleet operator', 'Admin'],
    scope: 'Multi-section website/app spanning passenger booking, driver operations, live tracking, and admin dashboard.',
    responsiveness: 'Responsive desktop, tablet, and mobile layouts.',
  },
  { slug: 'container-flow', title: 'Container Flow', category: 'logistics', tagline: 'Logistics & Container Tracking Platform', description: 'A logistics management platform that enables users to monitor container movements, track shipments, manage operations, and optimize supply chain workflows through a centralized dashboard.', industry: 'Logistics & Transportation', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/MkKbQSmFeFeRgqXL4JiCUf/Container-Flow-Web-App?node-id=169-2014&t=EDmXnqit8MBmY90p-1', featured: false, caseStudy: false },
  { slug: 'leta', title: 'LETA', category: 'logistics', tagline: 'AI Platform for Intelligent Automation & Insights', description: 'Leta is an AI-powered platform designed to deliver intelligent automation, data-driven insights, and scalable solutions for modern businesses.', industry: 'Logistics & Transportation', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/zDbtnucRLmL3iroRTMCK1r/LETA-%7C-Website-%7C-Logistics?node-id=55213-9813&t=4LHnv2KOeb0tZ4Wp-0', featured: false, caseStudy: false },
  { slug: 'chinasoko', title: 'ChinaSoko', category: 'logistics', tagline: 'Mobile Logistics Platform for Shipping Operations', description: 'A modern logistics platform designed to streamline shipping workflows from onboarding and KYC to delivery confirmation.', industry: 'Logistics & Transportation', medium: 'Mobile application', figma: 'https://www.figma.com/design/JY5p2ekulAxZSIXOgvAKMX/Chinasoko-v1.0?node-id=3-15740&t=R5MWrzHYJciQv748-1', featured: false, caseStudy: false },
  { slug: 'education-logistics-dashboard', title: 'Education Logistics Dashboard', category: 'logistics', tagline: 'Operations Management Dashboard', description: 'A logistics management dashboard designed to streamline educational operations, track resources, monitor workflows, and provide real-time visibility into organizational performance.', industry: 'Logistics & Transportation', medium: 'Dashboard / analytics platform', figma: 'https://www.figma.com/design/VVKhcvnSu3nkgt2CAEVmL3/Education-Logistics---Dashboard?node-id=3-15740&t=yWdT22QAnqkMPzho-1', featured: false, caseStudy: false },

  // ---- Hospitality & Tourism ----
  { slug: 'weplan', title: 'Weplan', category: 'hospitality', tagline: 'AI Travel Planner for Custom Trip Plans', description: 'An AI-powered travel planning platform to create, explore, and share trip itineraries worldwide.', industry: 'Hospitality / Travel & Tourism', medium: 'Travel app / booking platform / website', figma: 'https://www.figma.com/design/yMD94pfkNWvdVbyxqmVorm/weplan.ai-Design-v1.0?node-id=9-189&p=f&t=ZosqS8TbvRVjWR4O-0', featured: true, caseStudy: false },
  { slug: 'tourism-app', title: 'Tourism App', category: 'hospitality', tagline: 'Next-Gen Travel Booking Platform for Smarter Trips', description: 'Travel smarter with a next-gen booking platform designed to simplify discovery, planning, and booking across destinations and stays.', industry: 'Hospitality / Travel & Tourism', medium: 'Mobile application', figma: 'https://www.figma.com/design/Pv7gnyW2lzIPmfGkHTRuHJ/Tourism-App?node-id=0-1&p=f&t=rdwtPYXfJTlcwME5-0', featured: false, caseStudy: false },
  { slug: 'lunavoy', title: 'Lunavoy', category: 'hospitality', tagline: 'Travel & Tourism Discovery Platform', description: 'Lunavoy is a travel and tourism mobile app designed to help users discover attractions, activities, and businesses through map-based search and personalized recommendations.', industry: 'Hospitality / Travel & Tourism', medium: 'Mobile application', figma: 'https://www.figma.com/design/KwgW9EyCI4bXsUdnHV0SpQ/Lunavoy-_-Prototypes?node-id=0-1&p=f&t=zZ9GP1VfNLfF00Xt-0', featured: false, caseStudy: false },
  { slug: 'singular', title: 'Singular', category: 'hospitality', tagline: 'Exclusive Ibiza Villas for Luxury Holidays', description: 'Singular Villas Ibiza provides exclusive holiday villas combining luxury, privacy, and exceptional island living.', industry: 'Real Estate / PropTech', medium: 'Travel app / booking platform / website', figma: 'https://www.figma.com/design/1wQntEA5IaVqna17F5pdJF/Singular-Villas-Website-v1.0?node-id=21388-212978&p=f&t=O9XtZNsF9kbnY4yS-0', featured: false, caseStudy: false },
  { slug: 'dunes-beach-resort', title: 'Dunes Beach Resort', category: 'hospitality', tagline: 'Beachfront Accommodation', description: 'Experience relaxed beachfront living at Dunes Beach Resort with stylish accommodation and direct access to the coast.', industry: 'Hospitality / Travel & Tourism', medium: 'Travel app / booking platform / website', figma: 'https://www.figma.com/design/O6zMQoDOcmGiMYeUNlNCCx/Dunes-Beach-Resort-%7C-Landing-Page-%7C?node-id=3-15740&p=f&t=G4IqxQvhWlKsKaAj-0', featured: false, caseStudy: false },

  // ---- Insurance & Compliance ----
  { slug: 'lahebo', title: 'Lahebo', category: 'insurance', tagline: 'AI-Powered Risk and Compliance Software', description: "Automate AML/CTF risk assessments and compliance reporting with a RegTech platform built for financial services and regulated industries.", industry: 'Insurance / Compliance / Risk', medium: 'Compliance SaaS / insurance platform', figma: 'https://www.figma.com/design/VNTfViRRDnAp74kCW3hlx4/Lahebo?node-id=0-1&t=zWQEIbsQgHw2ODA9-1', featured: true, caseStudy: false },
  { slug: 'writewise', title: 'WriteWise', category: 'insurance', tagline: 'Transparent Rx Benefits & Predictable Drug Costs', description: 'WriteWise helps employers eliminate hidden pharmacy costs, guarantee predictable drug spending, and restore transparency to the Rx benefit ecosystem.', industry: 'Insurance / Compliance / Risk', medium: 'Compliance SaaS / insurance platform', figma: 'https://www.figma.com/design/ZNhwMrhHofJi3GQd0PIwru/WriteWise?node-id=5274-92378&t=9DLL9CNIedTZCoDx-0', featured: false, caseStudy: false },
  { slug: 'shweer-compliance', title: 'SHWEER Compliance', category: 'insurance', tagline: 'Risk, Governance & Sanctions Compliance System', description: 'Manage risk, governance, and sanctions processes through a structured compliance system built for regulated organizations.', industry: 'Insurance / Compliance / Risk', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/zh77e0p1uWzyrYyF5SOhYb/SHWEER-Compliance---Client-Management-System?node-id=3-15740&t=414t7BisxkzpcHU0-1', featured: false, caseStudy: false },
  { slug: 'myle-rcm', title: 'MYLE RCM', category: 'insurance', tagline: 'Revenue Cycle Management Analytics', description: 'A healthcare revenue cycle management platform offering analytics, claims tracking, AR insights, KPIs, and performance scorecards.', industry: 'Insurance / Compliance / Risk', medium: 'Compliance SaaS / insurance platform', figma: 'https://figma.com/design/9FPDAeGsYqP7aTML4ge8SB/MYLE-RCM-%7C-Dashboard-%7C-Insurance-?node-id=228-45902&t=nMwt4KRs1ibYZKvC-0', featured: false, caseStudy: false },
  { slug: 'ceasta-assurace', title: 'Ceasta Assurace', category: 'insurance', tagline: 'Luxury Transit Insurance', description: 'A trusted partner for luxury transit insurance, offering tailored coverage, seamless digital experiences, and reliable protection for high-value transportation.', industry: 'Insurance / Compliance / Risk', medium: 'Compliance SaaS / insurance platform', figma: 'https://www.figma.com/design/B1ThwYUp5YhPnjrHxyhVTZ/Sep-2023-%7C-Ceasta-Assurance-%7C-Wesite-%7C?node-id=5287-15984&t=t2gy6EPF7a9uwNjX-0', featured: false, caseStudy: false },

  // ---- E-commerce ----
  { slug: 'fashshop', title: 'Fash Shop', category: 'ecommerce', tagline: 'Fashion E-Commerce Platform', description: 'A modern fashion e-commerce platform that enables customers to discover, browse, and purchase clothing, footwear, and accessories through a seamless shopping experience.', industry: 'E-Commerce, Retail, Fashion, Lifestyle', medium: 'E-Commerce Website / Online Store', figma: 'https://www.figma.com/design/0ZLULl1ZYZiuv3xc6LFCXm/Fash-Shop?node-id=54538-9477&t=EGXXlrt5sRMPxjLI-0', featured: true, caseStudy: false },
  { slug: 'bling', title: 'Bling', category: 'ecommerce', tagline: 'Multi-Platform E-Commerce & Negotiation Marketplace', description: 'A commerce and negotiation-based marketplace that enables users to explore brands, browse products, negotiate pricing, manage orders, and interact with vendors.', industry: 'E-commerce / Marketplace', medium: 'Web application / SaaS platform', figma: 'https://figma.com/design/D8LRU7LMEo8uWFlp0tdPAZ/Bling---Web---Mobile---ECommerce-?node-id=12572-7336&t=Zh8ZzaR11cUDnYqg-0', featured: false, caseStudy: false },
  { slug: 'polkat', title: 'POLKAT', category: 'ecommerce', tagline: 'B2B Quotation & Supplier Marketplace Platform', description: 'A business procurement platform that enables users to request and compare supplier quotations, manage vendor relationships, track orders, and complete secure payment workflows.', industry: 'E-commerce / Marketplace', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/aEbwxqt4moxgpQyHsz2IUS/POLKAT-%7C-Ecommerce-%7C-Construction-Tools?node-id=1-6&p=f&t=tBYHgca9l6fbT8b8-0', featured: false, caseStudy: false },
  { slug: 'suter', title: 'Suter', category: 'ecommerce', tagline: 'Mobile Shopping & Order Management App', description: 'A mobile shopping application that allows users to browse categories, select products, complete purchases, track orders, and manage profiles.', industry: 'E-commerce / Marketplace', medium: 'Mobile application', figma: 'https://www.figma.com/design/bfnGlmtutcFPX0ivWEoCf3/Suter-%7C-Mobile-App-%7C-Ecommerce?node-id=3-15740&p=f&t=NJt4O1j4QDhHC095-0', featured: false, caseStudy: false },
  { slug: 'shoppe', title: 'Shoppe', category: 'ecommerce', tagline: 'Social & Live Commerce Mobile App', description: 'A mobile shopping platform that blends social interaction, live sales, flash deals, and personalized product browsing into a dynamic e-commerce experience.', industry: 'E-commerce / Marketplace', medium: 'Mobile application', figma: 'https://www.figma.com/design/P0aPG0k7m2u6SQPZPL5JPO/Shoppe---eCommerce-Clothing-Fashion-Store-Multi-Purpose-UI-Mobile-App-Design--Community-?node-id=0-1&p=f&t=ExwBswgKiRbfcutt-0', featured: false, caseStudy: false },

  // ---- Sports & Fitness ----
  { slug: 'fituraX', title: 'FituraX', category: 'sports-fitness', tagline: 'Fitness & Workout Mobile App', description: 'A modern fitness mobile app UI/UX design focused on workouts, health tracking, and an intuitive user experience.', industry: 'Health, Fitness & SportsTech', medium: 'Mobile application', figma: 'https://www.figma.com/design/MRSuqGH9NoBIkjdH6jACMj/Fitura-X-App?node-id=3354-10514&t=lJF8lgaH4Wolw5F3-0', featured: true, caseStudy: false },
  { slug: 'olyra', title: 'Olyra', category: 'sports-fitness', tagline: 'Health Monitoring Web App', description: 'Olyra is a health monitoring web application featuring clean dashboards, real-time health data, and user-focused UX.', industry: 'Healthcare / MedTech', medium: 'Web application / SaaS platform', figma: 'https://www.figma.com/design/XwUvOsoOvBH5Hv6kGPODVv/Olyra---WebApp---Health-Monitoring--?node-id=4038-3099&t=PwvC0DiSBohGUNoL-0', featured: false, caseStudy: false },
  { slug: 'rally', title: 'Rally', category: 'sports-fitness', tagline: 'Sports Social & Training Mobile App', description: 'Rally is a mobile-first sports platform enabling players to onboard, personalise skills, manage subscriptions, and engage with content through a dynamic home feed.', industry: 'Health, Fitness & SportsTech', medium: 'Mobile application', figma: 'https://www.figma.com/design/BIDHaCfnqg3Rl42Eh6nXhp/Rally-Mobile-App-Sports?node-id=723-886&t=bPVHVgNzXgFkZQSc-0', featured: false, caseStudy: false },
  { slug: 'revsport', title: 'RevSport', category: 'sports-fitness', tagline: 'Sports Performance Mobile App', description: 'RevSport tracks athletic performance, monitors progress, and visualizes training data through dashboards, charts, and structured activity screens.', industry: 'Health, Fitness & SportsTech', medium: 'Mobile application', figma: 'https://www.figma.com/design/L7ti61qmwHG4ElcrAnfgMU/RevSport?node-id=3-15740&p=f&t=rIJrNFNfK66643oP-0', featured: false, caseStudy: false },
  { slug: 'epadel', title: 'ePadel', category: 'sports-fitness', tagline: 'Player Performance & Social Mobile App', description: 'A mobile sports performance and social networking app that enables padel players to analyze matches, track skill progression, and earn recognition through ranking and badge systems.', industry: 'Health, Fitness & SportsTech', medium: 'Mobile application', figma: 'https://www.figma.com/design/HMSsV5mBQTCbdULDsMHdJI/ePadel-App-v1.0?node-id=0-1&p=f&t=giFydq1OH8LZAtAX-0', featured: false, caseStudy: false },

  // ---- Websites ----
  { slug: 'nailah-hill', title: 'Nailah Hill', category: 'websites', tagline: 'Personal Portfolio & Professional Website', description: 'A professional portfolio website designed to showcase experience, case studies, skills, and accomplishments with a modern, responsive web presence.', industry: 'Personal Branding', medium: 'Portfolio Website', figma: '', live: 'https://nailah-hill.webflow.io/', featured: true, caseStudy: false },
  { slug: 'bluesquare-strategy', title: 'Bluesquare Strategy', category: 'websites', tagline: 'Talent & Workforce Advisory Platform', description: 'A talent and workforce advisory platform helping SMEs optimize human capital through workforce planning, skills development, and ROI-driven talent initiatives.', industry: 'Human Capital Consulting, HR Strategy', medium: 'Corporate Website / Consulting Services Platform', figma: '', live: 'https://www.bluesquarestrategy.com/', featured: false, caseStudy: false },
  { slug: 'armour-homes', title: 'Armour Homes', category: 'websites', tagline: 'Custom Home Builder & Property Development Platform', description: 'A residential construction platform that helps homeowners design and build custom homes and granny flats, showcasing designs, projects, and financing options.', industry: 'Real Estate, Construction', medium: 'Corporate Website / Real Estate Platform', figma: '', live: 'https://www.armourhomes.au/', featured: false, caseStudy: false },
  { slug: 'alertica', title: 'Alertica', category: 'websites', tagline: 'File Activity Monitoring & Security Platform', description: 'A cloud-based file activity monitoring and security platform that helps organizations detect suspicious file changes, configuration tampering, and compliance risks in real time.', industry: 'Cybersecurity, Compliance & Risk Management', medium: 'Enterprise SaaS Platform', figma: '', live: 'https://www.alertica.io/', featured: false, caseStudy: false },
  { slug: 'hiburit', title: 'Hiburit', category: 'websites', tagline: 'HR Management & Workforce Operations Platform', description: 'A human resource management platform that helps organizations streamline employee management, payroll, attendance, and performance reviews.', industry: 'HRTech', medium: 'HRMS Platform / Enterprise SaaS', figma: '', live: 'https://www.hiburit.co.il/', featured: false, caseStudy: false },

  // ---- Gaming & Entertainment ----
  { slug: 'chess-run', title: 'Chess Run', category: 'gaming', tagline: 'Strategy Gaming Platform', description: 'ChessRun is a mobile gaming application that combines strategic chess-inspired mechanics with fast-paced arcade gameplay, progression, rewards, and leaderboards.', industry: 'Gaming, Mobile Entertainment, Strategy Gaming', medium: 'Mobile Application (iOS & Android)', figma: 'https://www.figma.com/design/aSFWBrDvhAXIWv7wNfeiC2/ChessRun?node-id=597-16937', featured: true, caseStudy: false },
  { slug: 'wizzy-tales', title: 'Wizzy Tales', category: 'gaming', tagline: 'Interactive Storytelling & Learning Platform', description: 'Wizzy Tales is an educational storytelling mobile app that engages children through interactive stories, learning activities, quizzes, and gamified rewards.', industry: "Education Technology, Children's Learning", medium: 'Mobile Application (iOS & Android)', figma: 'https://figma.com/design/V3HsIybst9zk0fMUVy9efP/Wizzy-Tales-?node-id=3-15740&p=f&t=mOjSH6xMHk1qftl1-0', featured: false, caseStudy: false },
  { slug: 'slot-demos', title: 'Slot Demos', category: 'gaming', tagline: 'Online Casino Games Showcase Website', description: 'A gaming website showcasing demo slot games, provider listings, categories, and casino recommendations.', industry: 'iGaming, Online Casino', medium: 'Gaming Website / Casino Demo Platform', figma: 'https://www.figma.com/design/XMJV9LQRP5EecpJGZONmjD/Slot-Demos-%7C-Website?node-id=3-15740&p=f', featured: false, caseStudy: false },
]

export const projects = raw.map((p) => ({
  ...p,
  live: p.live || '',
  platform: platformFromMedium(p.medium),
}))

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))

export const featuredProjects = projects.filter((p) => p.featured)
export const caseStudies = projects.filter((p) => p.caseStudy)

export function projectsByCategory(categorySlug) {
  return projects.filter((p) => p.category === categorySlug)
}
