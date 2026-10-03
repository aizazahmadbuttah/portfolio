export const profile = {
  name: "AIZAZ AHMAD BUTTAH",
  headline: "Full-Stack Engineer & AI Specialist.",
  copy: "Architecting scalable .NET backends, React interfaces, and deep learning pipelines.",
  email: "aizazahmadbuttah@gmail.com",
  github: "https://github.com/aizazahmadbuttah",
  linkedin: "https://www.linkedin.com/in/aizaz-ahmad-buttah-a1392020b/",
  resume: `${import.meta.env.BASE_URL}Aizaz_resume.pdf`,
};

export const education = {
  degree: "BS Computer Science",
  school: "Government College University, Lahore",
  years: "2021 – 2025",
};

export const coreStack = [
  "React.js",
  ".NET Core Web API",
  "SQL Server",
  "Python",
  "C++",
  "Java",
  "TensorFlow",
];

export const capabilities = {
  ai: {
    title: "AI / ML",
    blurb: "End-to-end deep learning for medical imaging — from segmentation to calibrated diagnosis.",
    tags: ["TensorFlow", "Keras", "CNNs", "U-Net", "DenseNet-121", "OpenCV", "Python"],
    pipeline: ["Chest X-ray", "Input check", "U-Net mask", "CNN classify", "Diagnosis"],
  },
  backend: {
    title: "Backend",
    blurb: "Secure, relational service layers.",
    tags: [".NET Core Web API", "SQL Server", "JWT / RBAC", "REST", "Node.js"],
  },
  frontend: {
    title: "Frontend",
    blurb: "Accessible, state-driven interfaces.",
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  },
  languages: ["C++", "Java", "Python", "C#", "JavaScript"],
};

export const caseStudy = {
  eyebrow: "Featured Case Study",
  title: "Medical Imaging Analysis",
  summary:
    "A deep learning system that detects pneumonia and tuberculosis from chest X-rays, using CNN classifiers gated by UNet lung-segmentation models so predictions focus on clinically relevant tissue.",
  metrics: [
    { value: "96.5%", label: "Accuracy", sub: "Pneumonia · DenseNet-121", primary: true },
    { value: "0.9972", label: "AUC", sub: "Pneumonia ROC", primary: true },
    { value: "95%", label: "Accuracy", sub: "Tuberculosis · custom CNN" },
    { value: "0.9184", label: "AUC", sub: "Tuberculosis ROC" },
  ],
  stages: [
    ["01", "Input verification", "ResNet50 gate rejects non-X-ray uploads."],
    ["02", "UNet segmentation", "Lung masks constrain the region of interest."],
    ["03", "CNN classification", "DenseNet-121 / custom CNN predict with confidence."],
    ["04", "Severity scoring", "Lesion load vs. lung-mask area for TB."],
  ],
  tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "U-Net", "React.js"],
  links: [{ label: "GitHub", href: "https://github.com/aizazahmadbuttah" }],
};

export const projects = [
  {
    title: "AquaFlow POS",
    kind: "Full Stack",
    span: "lg:col-span-7",
    description:
      "Production business platform for a water supply company: POS, inventory, customers, automated PDF invoices and reporting dashboards.",
    highlights: ["Billing ~10 min → under 60 s", "JWT + bcrypt role-based access", "SQLite → Firestore live migration"],
    tech: ["React.js", "Node.js", "Firebase", "Redux Toolkit", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/aizazahmadbuttah/aquaflow-inventory" }],
  },
  {
    title: "Patient Records Platform",
    kind: "Full Stack",
    span: "lg:col-span-5",
    description:
      "Role-secured healthcare data platform with audit-minded schema design and a multi-step clinical intake form.",
    highlights: ["JWT auth with RBAC", "Normalized SQL Server schema", "IIS-hosted, Azure-ready"],
    tech: [".NET Core Web API", "SQL Server", "React.js", "JWT"],
    links: [],
  },
  {
    title: "Real-Time Task Board",
    kind: "Full Stack",
    span: "lg:col-span-3",
    description: "Kanban with live Firebase sync, optimistic updates and custom drag-and-drop.",
    tech: ["React.js", "Firebase", "Context API"],
    links: [],
  },
  {
    title: "CityCare Clinic",
    kind: "Frontend",
    span: "lg:col-span-3",
    description: "Responsive clinic site with WhatsApp appointment requests.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://muse.ai/s/citycare-clinic-mu6cmugeyrxk" }],
  },
  {
    title: "PrimeNest Realty",
    kind: "Frontend",
    span: "lg:col-span-3",
    description: "Filterable property listings with a WhatsApp inquiry generator.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://muse.ai/s/primenest-realty-axj6cmu1xnqxhxs" }],
  },
  {
    title: "Spice Route Kitchen",
    kind: "Frontend",
    span: "lg:col-span-3",
    description: "Restaurant site with category menu and WhatsApp table booking.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live", href: "https://muse.ai/s/spice-route-kitchen-dc6cmucoxmxrl" }],
  },
];
