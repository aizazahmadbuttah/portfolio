import afDashboard from '../assets/Aquaflow/dashboard.png'
import afPOS from '../assets/Aquaflow/point of sale.png'
import afProducts from '../assets/Aquaflow/product.png'
import afInvoices from '../assets/Aquaflow/invoices.png'
import afCategories from '../assets/Aquaflow/categories.png'
import afCloseShop from '../assets/Aquaflow/closeshop.png'
import afCustomers from '../assets/Aquaflow/customers.png'
import afReports from '../assets/Aquaflow/prports&analytics.png'
import afSuppliers from '../assets/Aquaflow/suppliers&purchases.png'

export const projectsData = [
    {
        id: "aquaflow",
        title: "AquaFlow Inventory & POS System",
        badge: "Full Stack Developer",
        description: "Comprehensive, full-stack Inventory Management and POS system ensuring real-time accurate data handling and actionable insights.",
        highlights: [
            "Intuitive, lightning-fast POS interface with automated PDF invoice generation",
            "Zero-downtime data migration from local SQLite to highly scalable Firebase Firestore",
            "Advanced reporting dashboards utilizing Recharts for inventory and sales trends",
            "Role-based access security using JSON Web Tokens (JWT) and bcrypt hashing",
            "Mobile-first responsive frontend leveraging Tailwind CSS and Redux Toolkit"
        ],
        tech: ["React.js", "Node.js", "Firebase", "Tailwind"],
        images: [
            { src: afDashboard, alt: "AquaFlow Dashboard" },
            { src: afPOS, alt: "AquaFlow Point of Sale" },
            { src: afProducts, alt: "AquaFlow Products" },
            { src: afInvoices, alt: "AquaFlow Invoices" },
            { src: afCategories, alt: "AquaFlow Categories" },
            { src: afCloseShop, alt: "AquaFlow Close Shop" },
            { src: afCustomers, alt: "AquaFlow Customers" },
            { src: afReports, alt: "AquaFlow Reports & Analytics" },
            { src: afSuppliers, alt: "AquaFlow Suppliers & Purchases" }
        ]
    },
    {
        id: "pneumonia-tb",
        title: "Pneumonia & Tuberculosis Detection",
        badge: "Final Year Project",
        description: "Developed a deep learning-based system to classify and segment chest X-rays into pneumonia, TB, and normal categories.",
        highlights: [
            "Implemented CNN and transfer learning with TensorFlow/Keras",
            "Built UNet segmentation model to highlight regions of interest",
            "Applied preprocessing: resizing (256×256), normalization, and augmentation",
            "Integrated web interface for uploading and visualizing results",
            "Trained models using Google Colab GPU"
        ],
        tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
        images: [] // Add images here later if needed
    },
    {
        id: "patient-records",
        title: "Patient Records Management System",
        badge: "In Progress",
        badgeClass: "in-progress",
        description: "Full-stack web application for managing patient data securely with modern healthcare standards.",
        highlights: [
            "RESTful backend with authentication using .NET Core Web API",
            "Responsive React.js UI for patient intake and editing",
            "SQL Server database with secure data handling",
            "Follows healthcare security and scalability standards"
        ],
        tech: ["React.js", ".NET Core", "SQL Server", "REST API"],
        images: []
    },
    {
        id: "ai-optimization",
        title: "AI Model Optimization & Research",
        badge: "Research",
        description: "Experimented with various architectures to improve segmentation performance and model generalization.",
        highlights: [
            "Tested SegNet, UNet, and Custom CNNs",
            "Fine-tuned pretrained models and optimized hyperparameters",
            "Analyzed results to reduce overfitting"
        ],
        tech: ["Deep Learning", "Model Optimization", "Research"],
        images: []
    }
];
