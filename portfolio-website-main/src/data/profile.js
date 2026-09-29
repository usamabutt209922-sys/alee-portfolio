// Sourced from Usama Butt Resume.pdf — do not invent facts here.

export const profile = {
  name: 'Alee M',
  title: 'Senior Product Designer & Senior UI/UX Designer',
  focus: 'B2B SaaS · Enterprise Products · Complex Workflows · Web & Mobile',
  email: 'designbyalee1@gmail.com',
  yearsExperience: '7+',

  summary: `Senior Product Designer and UI/UX Designer with 7+ years of experience designing B2B SaaS, enterprise, fintech, eCommerce, and mobile products. Experienced in leading products from discovery and user research through information architecture, user flows, wireframes, high-fidelity UI, prototyping, usability testing, design systems, developer handoff, and design QA.`,

  summarySecondary: `Strong at simplifying complex workflows and data-heavy products into intuitive, scalable experiences. Experienced collaborating directly with product managers, engineers, stakeholders, and users throughout discovery, Agile delivery, implementation, and iteration.`,
}

// Skills grouped as on the resume's "Core Skills" section.
export const skillGroups = [
  {
    title: 'Product & UX',
    skills: [
      'Product Discovery', 'UX Strategy', 'User Research', 'Requirements Analysis',
      'Stakeholder Interviews', 'Competitive Analysis', 'Information Architecture',
      'Journey Mapping', 'User Flows', 'Task Flows', 'Wireframing', 'Interaction Design',
      'Rapid Prototyping',
    ],
  },
  {
    title: 'UI & Product Design',
    skills: [
      'B2B SaaS', 'Enterprise UX', 'Dashboard Design', 'Mobile Product Design',
      'Responsive Design', 'Fintech UX', 'eCommerce UX', 'Data Visualization',
      'High-Fidelity UI', 'Accessibility',
    ],
  },
  {
    title: 'Research & Optimization',
    skills: [
      'Usability Testing', 'Behavioral Analysis', 'Funnel Analysis', 'A/B Testing',
      'GA4', 'Mixpanel', 'Amplitude', 'Hotjar', 'FullStory',
    ],
  },
  {
    title: 'Design Systems & Delivery',
    skills: [
      'Design Systems', 'Design Tokens', 'Component Libraries', 'Figma Auto Layout',
      'Variables', 'Responsive Components', 'Developer Handoff', 'Design Documentation',
      'Design QA',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Figma', 'FigJam', 'Framer', 'Webflow', 'Adobe Illustrator',
      'HTML', 'CSS', 'JavaScript', 'AI-Assisted Design Tools',
    ],
  },
]

// Employment history, verbatim facts from the resume. `highlight` marks roles
// in US / UK / China per the brief's emphasis rule — every role still renders,
// highlighted ones just get more visual weight.
export const experience = [
  {
    role: 'Senior UI/UX Designer',
    company: 'ZAPTA Technologies',
    location: 'Houston, Texas',
    country: 'USA',
    period: 'May 2022 – March 2026',
    highlight: true,
    summary: 'Led end-to-end product and UX design across 100+ SaaS, enterprise, web, and mobile projects, translating business requirements and technical constraints into scalable digital experiences.',
    bullets: [
      'Owned discovery, user research, requirements analysis, information architecture, user flows, wireframes, high-fidelity UI, interactive prototypes, usability testing, developer handoff, and design QA.',
      'Designed complex dashboards, operational workflows, administration experiences, multi-step journeys, and data-heavy interfaces across multiple product domains.',
      'Established reusable design systems, component libraries, design tokens, responsive patterns, and documentation to maintain consistency across products.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'ZeeFrames',
    location: 'Manchester, United Kingdom',
    country: 'UK',
    period: 'December 2020 – February 2022',
    highlight: true,
    summary: 'Led UX and product design for responsive web and mobile products from requirements definition through production-ready delivery.',
    bullets: [
      'Created information architectures, user journeys, workflows, wireframes, prototypes, high-fidelity interfaces, and reusable product patterns.',
      'Built scalable Figma component libraries using Auto Layout and reusable responsive components.',
      'Used user feedback, usability findings, and behavioral insights to identify product friction and guide design decisions.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'Trafilea Tech',
    location: 'Zhejiang, China',
    country: 'China',
    period: 'August 2019 – October 2020',
    highlight: true,
    summary: 'Designed eCommerce experiences across customer acquisition, product discovery, checkout, and post-purchase journeys.',
    bullets: [
      'Used funnel analysis, behavioral data, usability findings, and A/B testing to identify friction and inform design improvements.',
      'Produced user flows, wireframes, responsive interfaces, prototypes, reusable components, and design-system patterns.',
      'Collaborated with product, engineering, marketing, and data stakeholders to connect customer needs with commercial objectives.',
      'Built reusable design tokens and interface components used across product and marketing experiences.',
    ],
  },
  {
    role: 'Senior UX/UI Designer',
    company: 'Repurpose.io',
    location: 'Toronto, Canada',
    country: 'Canada',
    period: 'April 2018 – June 2019',
    highlight: false,
    summary: 'Simplified technically complex SaaS automation workflows into clear onboarding, configuration, and task-based user experiences.',
    bullets: [
      'Led workflow mapping, wireframing, interaction design, high-fidelity UI, prototyping, usability testing, and developer handoff.',
      'Redesigned dashboards and configuration experiences to improve clarity across complex multi-step workflows.',
      'Worked directly with engineers during product discovery, sprint planning, implementation, and design review.',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Wemsay',
    location: 'Netherlands',
    country: 'Netherlands',
    period: 'February 2017 – March 2018',
    highlight: false,
    summary: 'Designed enterprise SaaS products, management portals, analytics dashboards, and workflow-based applications.',
    bullets: [
      'Created information architectures, user flows, wireframes, navigation structures, responsive interfaces, and interactive prototypes.',
      'Designed data-rich experiences focused on usability, visual hierarchy, clarity, and reusable interface patterns.',
      'Collaborated with stakeholders and engineers to balance user needs, business requirements, and implementation constraints.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Science in Information Technology',
    school: 'University of Eastern Finland',
    location: 'Joensuu, Finland',
    period: 'January 2024 – December 2025',
    detail: 'Focus: AI-enabled systems, cloud architectures, scalable data-driven applications, deep learning, and image analysis.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'National University of Computer and Emerging Sciences (FAST)',
    location: 'Islamabad, Pakistan',
    period: 'August 2014 – June 2018',
  },
]
