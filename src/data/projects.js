import afDashboard from '../assets/Aquaflow/dashboard.png'
import afPOS from '../assets/Aquaflow/point of sale.png'
import afProducts from '../assets/Aquaflow/product.png'
import afInvoices from '../assets/Aquaflow/invoices.png'
import afCategories from '../assets/Aquaflow/categories.png'
import afCloseShop from '../assets/Aquaflow/closeshop.png'
import afCustomers from '../assets/Aquaflow/customers.png'
import afReports from '../assets/Aquaflow/prports&analytics.png'
import afSuppliers from '../assets/Aquaflow/suppliers&purchases.png'

// FYP Screenshots
import fypMain from '../assets/FYP/main_page.jpg'
import fypPneumoniaPage from '../assets/FYP/pneumonia_page.jpg'
import fypTBPage from '../assets/FYP/tb_page.jpg'
import fypPneumoniaResult from '../assets/FYP/pneumonia_result.jpg'
import fypTBNormal from '../assets/FYP/tb normal.jpg'
import fypModelLayers from '../assets/FYP/classfication model layers.jpg'
import fypRocCurve from '../assets/FYP/roc curve tb.jpg'
import fypConfusionMatrix from '../assets/FYP/pneumonia_confussion_matrix.jpg'
import fypAccuracy from '../assets/FYP/model_accuracy.jpg'

export const projectsData = [
    {
        id: "patient-records",
        title: "PATIENT RECORDS SYSTEM",
        badge: "Full Stack",
        description: "A full-stack web application to manage patient data securely, built with React.js on the frontend and .NET Core Web API on the backend.",
        highlights: [
            "Developed a responsive, form-based UI in React for patient intake, data editing, and record retrieval",
            "Built a RESTful backend using .NET Core Web API with secure user authentication",
            "Managed patient data using SQL Server with standard healthcare security practices",
            "Hosted and tested locally via Visual Studio and IIS"
        ],
        tech: ["React.js", ".NET Core", "SQL Server", "REST API"],
        images: []
    },
    {
        id: "health-consultant",
        title: "HEALTH CONSULTANT APP",
        badge: "Frontend",
        description: "Frontend of a responsive health consultation web app, focused on an intuitive user experience and solid cross-browser performance.",
        highlights: [
            "Built modular, reusable components for Home, Contact Us, Team, and dynamic health service pages",
            "Handled API integrations to display dynamic health service data and process user inquiries",
            "Prioritized high cross-browser compatibility and a clean, accessible layout",
            "Implemented a consistent design system using vanilla CSS across all pages"
        ],
        tech: ["React.js", "CSS", "REST APIs"],
        images: []
    },
    {
        id: "task-management",
        title: "TASK MANAGEMENT BOARD",
        badge: "Full Stack",
        description: "A drag-and-drop Kanban board for creating, organizing, and tracking daily tasks and project milestones, with real-time Firebase sync.",
        highlights: [
            "Implemented drag-and-drop functionality allowing users to move tasks across different status columns",
            "Used React Context API for state management across nested components — no prop drilling",
            "Integrated Firebase Realtime Database for live data sync across sessions",
            "Added secure user authentication so each user has their own private board"
        ],
        tech: ["React.js", "Firebase", "Context API"],
        images: []
    },
    {
        id: "pneumonia-tb",
        title: "PNEUMONIA & TB DETECTION",
        badge: "AI / ML",
        badgeClass: "fyp",
        description: "Final Year Project — an AI system that classifies and segments chest X-rays into pneumonia, TB, and normal categories using custom-trained deep learning models.",
        highlights: [
            "Trained DenseNet-121 for pneumonia classification (96.5% accuracy, 0.9972 AUC) and a custom CNN for TB (95% accuracy, 0.9184 AUC)",
            "Built a lung segmentation pipeline using U-Net on custom annotated masks",
            "Added an Input Verification Module using ResNet50 and cosine similarity to confirm X-ray authenticity",
            "Designed a React.js frontend for file uploads and displaying diagnosis results with confidence scores",
            "Trained on Google Colab using Kaggle public datasets and custom annotations"
        ],
        tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "React.js"],
        images: [
            { src: fypMain, alt: "System Main Page" },
            { src: fypPneumoniaPage, alt: "Pneumonia Detection Interface" },
            { src: fypPneumoniaResult, alt: "Pneumonia Prediction Result" },
            { src: fypTBPage, alt: "Tuberculosis Detection Interface" },
            { src: fypTBNormal, alt: "TB Normal Prediction Result" },
            { src: fypModelLayers, alt: "Classification Model Architecture" },
            { src: fypRocCurve, alt: "TB ROC Curve (AUC)" },
            { src: fypConfusionMatrix, alt: "Pneumonia Confusion Matrix" },
            { src: fypAccuracy, alt: "Model Training Accuracy" }
        ]
    },
    {
        id: "aquaflow",
        title: "AQUAFLOW POS",
        badge: "Full Stack",
        description: "Inventory management and point-of-sale system built for a water supply business — handles billing, stock, customers, and reporting.",
        highlights: [
            "Fast POS interface with automated PDF invoice generation",
            "Advanced reporting dashboards with Recharts for inventory and sales trends",
            "Role-based access control using JWT authentication and bcrypt password hashing",
            "Migrated data from local SQLite to Firebase Firestore for scalability",
            "Responsive frontend built with Tailwind CSS and Redux Toolkit"
        ],
        tech: ["React.js", "Node.js", "Firebase", "Tailwind CSS"],
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
    }
];
