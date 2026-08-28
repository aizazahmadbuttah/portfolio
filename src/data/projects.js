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
        id: "aquaflow",
        title: "AQUAFLOW POS",
        badge: "Full Stack",
        githubUrl: "https://github.com/aizazahmadbuttah/aquaflow-inventory",
        description: "Production-grade business management platform for a water supply company — replacing manual paper-based billing with a full digital system handling sales, inventory, customers, and financial reporting.",
        highlights: [
            "Engineered a complete POS transaction flow with automated PDF invoice generation, cutting billing time from ~10 minutes to under 60 seconds per transaction",
            "Implemented role-based access control (JWT + bcrypt) separating cashier, manager, and admin permissions — zero unauthorized data access incidents in production",
            "Built advanced Recharts reporting dashboards giving management real-time visibility into revenue trends, stock levels, and supplier balances",
            "Executed a live data migration from local SQLite to Firebase Firestore without data loss or downtime",
            "Managed global state with Redux Toolkit, keeping the POS, inventory, and reporting modules reactive and in sync simultaneously"
        ],
        tech: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "Redux Toolkit"],
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
        title: "CLINICAL AI SYSTEM",
        badge: "AI / ML",
        badgeClass: "fyp",
        stat: "96.5% Accuracy",
        description: "Dual-pipeline diagnostic AI achieving 96.5% accuracy (AUC: 0.9972) on chest X-ray classification — detecting Pneumonia and Tuberculosis with a multi-stage inference architecture built as Final Year Project.",
        highlights: [
            "DenseNet-121 pneumonia classifier: 96.5% accuracy, AUC 0.9972 — surpassing several published benchmarks on the Kaggle NIH dataset",
            "Custom CNN TB classifier: 95% accuracy, AUC 0.9184, with a novel severity scoring algorithm quantifying lesion load vs. lung mask area",
            "ResNet50-based Input Verification Module blocks non-X-ray uploads before they reach diagnostic models — preventing false positives at the entry point",
            "U-Net lung segmentation constrains classification to the clinically relevant region, improving accuracy over whole-image approaches",
            "Trained on Google Colab GPU using Kaggle public datasets + custom annotated masks; React.js frontend serves real-time diagnosis with confidence scores"
        ],
        tech: ["Python", "TensorFlow", "Keras", "OpenCV", "U-Net", "DenseNet-121", "React.js"],
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
        id: "patient-records",
        title: "PATIENT RECORDS PLATFORM",
        badge: "Full Stack",
        description: "Role-secured full-stack healthcare data management platform — built with .NET Core Web API and React.js, applying healthcare-grade access control and audit principles throughout the stack.",
        highlights: [
            "JWT-based authentication with role-based access control ensuring patient records are accessible only to authorized staff roles",
            "RESTful .NET Core backend with structured error handling, input validation, and a SQL Server schema designed for relational integrity across patients, records, and audit trails",
            "React.js multi-step intake form with real-time field validation, optimized for clinical staff with minimal technical training",
            "Hosted and load-tested locally via Visual Studio and IIS; architecture ready for Azure App Service deployment"
        ],
        tech: ["React.js", ".NET Core Web API", "SQL Server", "JWT Auth"],
        images: []
    },
    {
        id: "health-consultant",
        title: "HEALTH CONSULTANT APP",
        badge: "Frontend",
        description: "Led complete frontend engineering of a multi-page health services platform — establishing the component architecture, custom CSS design system, and REST API integration layer from scratch.",
        highlights: [
            "Built a reusable component library covering 5 core pages (Home, Contact, Team, Services, dynamic health pages) with zero CSS framework dependency — full control, better performance",
            "Integrated REST APIs for dynamic health service data rendering and a contact/inquiry submission flow with client-side validation and error handling",
            "Prioritized cross-browser compatibility: tested and verified across Chrome, Firefox, and Edge with consistent rendering",
            "Implemented modular architecture so each page section can be updated or swapped independently without cascading side effects"
        ],
        tech: ["React.js", "CSS", "REST APIs"],
        images: []
    },
    {
        id: "task-management",
        title: "REAL-TIME TASK BOARD",
        badge: "Full Stack",
        description: "Full-stack collaborative task board with live Firebase sync and drag-and-drop Kanban UI — demonstrating real-time architecture, global state management, and optimistic UI patterns.",
        highlights: [
            "Implemented optimistic UI updates: task movements reflect instantly in the UI before Firebase write confirms — keeping the app feeling fast regardless of network latency",
            "React Context API manages shared board state across deeply nested components, replacing prop drilling with a clean unidirectional data flow",
            "Firebase Realtime Database ensures state persists and syncs live across sessions; Firebase Auth provides per-user private boards with zero cross-user data leakage",
            "Custom drag-and-drop handlers built without a library — providing precise control over touch targets, drop zones, and animation timing"
        ],
        tech: ["React.js", "Firebase", "Context API"],
        images: []
    }
];
