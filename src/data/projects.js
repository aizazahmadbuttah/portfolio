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
        description: "A deep learning-based clinical decision support system for the automated detection of Tuberculosis (TB) and Pneumonia from chest X-ray images. This dual-pipeline architecture directly classifies Pneumonia via transfer learning and handles TB through lung segmentation, classification, and severity estimation to reduce diagnostic delays and improve consistency.",
        highlights: [
            "Input Verification Module using ResNet50 and cosine similarity to validate X-ray authenticity",
            "Lung Segmentation using U-Net on custom annotated masks to focus analysis on the lungs",
            "Novel TB Severity Estimation comparing lesion masks to lung masks for quantitative grading",
            "High Performance: Pneumonia Classification (DenseNet-121) achieved 96.5% accuracy (0.9972 AUC); TB Classification (Custom CNN) achieved 95% accuracy (0.9184 AUC)",
            "Trained in a cloud environment (Google Colab GPU) on Kaggle public datasets + custom annotations",
            "Provides a browser-based user interface for uploading X-rays and viewing predicted disease, confidence scores, and TB severity"
        ],
        tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
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
