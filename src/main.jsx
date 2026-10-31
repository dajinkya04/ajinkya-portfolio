import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  AudioLines,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Mic,
  MicOff,
  Orbit,
  Phone,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    n: "01",
    type: "CORROSION & TRAINING",
    title: "Institute of Corrosion Control India",
    url: "https://www.corrosionindia.com/",
    domain: "corrosionindia.com",
    image: "/projects/corrosionindia.webp",
    previewKind: "training",
    placeholder: "/projects/placeholders/corrosionindia-com.svg",
    description:
      "A live professional website for corrosion-control learning, training, and industry information.",
    stack: ["Live website", "Responsive UI", "Web development"],
    accent: "violet",
  },
  {
    n: "02",
    type: "CORPORATE WEBSITE",
    title: "AGEP India",
    url: "https://agepindia.com/",
    domain: "agepindia.com",
    image: "/projects/agepindia.webp",
    previewKind: "corporate",
    placeholder: "/projects/agepindia.webp",
    description:
      "A corporate web presence built to present the AGEP India brand and its services online.",
    stack: ["Corporate web", "Responsive UI", "Live project"],
    accent: "blue",
  },
  {
    n: "03",
    type: "DIGITAL DESIGN",
    title: "AGEP Design",
    url: "https://agepdesign.com/",
    domain: "agepdesign.com",
    image: "/projects/agepdesign.webp",
    previewKind: "creative",
    placeholder: "/projects/agepdesign.webp",
    description:
      "A live website showcasing the AGEP Design brand through a dedicated digital experience.",
    stack: ["Website UI", "Brand experience", "Live project"],
    accent: "orange",
  },
  {
    n: "04",
    type: "COATINGS & INDUSTRY",
    title: "AGEP Coatings",
    url: "https://agepcoatings.com/",
    domain: "agepcoatings.com",
    image: "/projects/agepcoatings.webp",
    previewKind: "industrial",
    placeholder: "/projects/agepcoatings.webp",
    description:
      "An industry-focused website for AGEP Coatings, connected to its digital services and information.",
    stack: ["Corporate web", "Web integration", "Live project"],
    accent: "violet",
  },
  {
    n: "05",
    type: "INTERNATIONAL WEBSITE",
    title: "EAC International",
    url: "https://eac-international.com/",
    domain: "eac-international.com",
    image: "/projects/eac-international.webp",
    previewKind: "international",
    placeholder: "/projects/eac-international.webp",
    description:
      "A live international brand website with a dedicated online presence.",
    stack: ["Website UI", "Responsive design", "Live project"],
    accent: "blue",
  },
  {
    n: "06",
    type: "CORPORATE WEBSITE",
    title: "Axial Group",
    url: "https://axialgroup.in/",
    domain: "axialgroup.in",
    image: "/projects/axialgroup.webp",
    previewKind: "minimal",
    placeholder: "/projects/axialgroup.in.webp",
    description: "A live corporate website for the Axial Group brand.",
    stack: ["Corporate web", "Frontend", "Live project"],
    accent: "orange",
  },
  {
    n: "07",
    type: "INTERNATIONAL WEBSITE",
    title: "AGEP Thailand",
    url: "https://agepthailand.com/",
    domain: "agepthailand.com",
    image: "/projects/agepthailand.webp",
    previewKind: "global",
    placeholder: "/projects/agepthailand.webp",
    description: "An international AGEP website serving its Thailand presence.",
    stack: ["Website UI", "Responsive design", "Live project"],
    accent: "violet",
  },
];
const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "React Native",
  "Moodle / SCORM",
  "Stripe",
  "Cashfree",
  "HTML & CSS",
  "Git",
];

function Orb({ active = false, small = false }) {
  return (
    <div
      className={`orb-wrap ${active ? "orb-active" : ""} ${small ? "orb-small" : ""}`}
      aria-hidden="true"
    >
      <div className="orb-aura" />
      <div className="orb-ring ring-one" />
      <div className="orb-ring ring-two" />
      <div className="orb-ring ring-three" />
      <div className="orb-core">
        <div className="orb-glint" />
        <div className="orb-inner" />
      </div>
      <div className="orb-spark spark-one" />
      <div className="orb-spark spark-two" />
      <div className="orb-spark spark-three" />
    </div>
  );
}

function Assistant({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! 👋 Welcome to Ajinkya Deshmukh's portfolio. I'm your personal portfolio guide. Ajinkya is a Full-Stack Developer with 4 years of experience in React.js, Node.js, MongoDB, JavaScript, HTML, and CSS. Explore his seven live websites, technical expertise, e-learning projects, and real-world development work. Ask me anything!",
    },
  ]);

  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const bottomRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);
  useEffect(
    () => () => {
      recognitionRef.current?.stop();
      window.speechSynthesis?.cancel();
    },
    [],
  );

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      setVoiceError("Spoken replies are not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1.02;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }
  function listen() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceError(
        "Voice input is not available in this browser. Type your question instead.",
      );
      return;
    }
    setVoiceError("");
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => setListening(true);
    recognition.onresult = (e) => {
      const transcript = e.results?.[0]?.[0]?.transcript;
      if (transcript) {
        setInput(transcript);
        void send(transcript);
      }
    };
    recognition.onerror = (e) => {
      setVoiceError(
        e.error === "not-allowed"
          ? "Microphone permission was denied. Allow it in your browser settings or type below."
          : "Could not hear that clearly. Please try again or type your question.",
      );
      setListening(false);
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch {
      setListening(false);
      setVoiceError("Voice input could not start. Please try again.");
    }
  }

  function getFreeAnswer(question) {
    const q = question.toLowerCase().replace(/[^a-z0-9\s.+#/-]/g, " ");

    // PERSONAL PROFILE
    if (/\b(hi|hello|hey|good morning|good evening)\b/.test(q)) {
      return "Hello! Welcome to Ajinkya Deshmukh's developer portfolio. 👋 I'm his personal portfolio guide. Ajinkya is a Full-Stack Developer with 4 years of experience. You can ask me about his professional journey, technologies, projects, websites, backend development, and integrations. What would you like to know?";
    }

    if (
      /\b(who is ajinkya|who is he|about ajinkya|about me|about yourself|introduce|introduction|tell me about ajinkya|tell me about yourself|personal information)\b/.test(
        q,
      )
    ) {
      return "My name is Ajinkya Deshmukh. I am a Full-Stack Developer with 4 years of professional development experience. I work with React.js, JavaScript, Node.js, Express.js, MongoDB, HTML5, and CSS3. I build responsive websites, interactive user interfaces, backend APIs, and database-driven applications. My experience also includes e-learning applications, Moodle and SCORM integration, payment gateways, and invoice automation. I enjoy solving practical business problems through technology and building complete digital experiences.";
    }

    if (
      /\b(how many years|years of experience|experience duration|professional experience|4 years|four years)\b/.test(
        q,
      )
    ) {
      return "Ajinkya Deshmukh has 4 years of professional development experience. His experience includes frontend development, backend development, responsive website development, REST API integration, MongoDB database operations, e-learning platforms, payment integrations, and end-to-end application workflows.";
    }

    if (
      /\b(education|qualification|degree|college|university|graduation)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's education and academic qualifications are not currently listed in this portfolio. Please contact him directly for his detailed educational background and resume.";
    }

    if (
      /\b(what does he do|what do you do|job role|responsibilities|daily work|developer role|work responsibilities)\b/.test(
        q,
      )
    ) {
      return "Ajinkya works across the full-stack development lifecycle. His work includes creating responsive React interfaces, developing Node.js and Express backend services, designing MongoDB data structures, connecting REST APIs, integrating third-party services, implementing business workflows, and testing application functionality.";
    }

    if (
      /\b(strength|strengths|approach|coding approach|development approach|why hire|why should i hire)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's strengths include full-stack development, practical problem-solving, responsive UI development, API integration, database connectivity, and understanding complete business workflows. He focuses on maintainable code, reusable components, user-friendly interfaces, and connecting frontend and backend systems reliably.";
    }

    // TECHNOLOGY STACK
    if (
      /\b(tech stack|technologies|technology|skills|technical skills|programming languages|tools)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's core technology stack includes:\n\nFrontend: React.js, JavaScript, HTML5, CSS3, Bootstrap.\n\nBackend: Node.js, Express.js, REST APIs.\n\nDatabase: MongoDB.\n\nMobile: React Native.\n\nIntegrations: Moodle, SCORM, Stripe, Cashfree.\n\nTools: Git, GitHub, Docker, and PM2.\n\nHe uses these technologies to develop responsive websites, full-stack applications, and connected digital platforms.";
    }

    if (
      /\b(react|frontend|front end|javascript|html|css|bootstrap|ui|responsive)\b/.test(
        q,
      )
    ) {
      return "Ajinkya has 4 years of development experience and works with React.js, JavaScript, HTML5, CSS3, and Bootstrap. His frontend work includes responsive layouts, reusable React components, forms, navigation, interactive sliders, animations, API integration, dynamic data rendering, and mobile-friendly interfaces.";
    }

    if (/\b(node.js|nodejs|backend|back end|express|server side)\b/.test(q)) {
      return "Ajinkya uses Node.js and Express.js to build backend services and REST APIs. His backend experience includes authentication and registration workflows, user profile management, course registration, payment verification, database operations, invoice generation, and integration with external platforms.";
    }

    if (/\b(mongodb|mongo|database|db|data storage)\b/.test(q)) {
      return "Ajinkya uses MongoDB for database-driven applications. His project experience includes managing user profiles, course records, course purchases, registration data, invoices, payment records, and other application data through Node.js and Express APIs.";
    }

    if (/\b(api|rest api|api integration|endpoint|integration)\b/.test(q)) {
      return "Ajinkya has experience developing and integrating REST APIs using Node.js and Express.js. Examples from his development work include course listing, user profile retrieval, user registration, course purchasing, payment verification, learner course access, invoice generation, and Moodle integration.";
    }

    // PORTFOLIO WEBSITE ITSELF
    if (
      /\b(this website|this portfolio|your portfolio|portfolio website|personal website|current website|how is this portfolio built|portfolio technology)\b/.test(
        q,
      )
    ) {
      return "This is Ajinkya Deshmukh's personal developer portfolio. It is built using React.js and styled with custom CSS. Framer Motion is used for entrance animations and interactive motion effects. The website features a personal introduction, technology showcase, seven live project previews, contact details, and an interactive portfolio guide. The guide uses local JavaScript-based question matching, browser speech recognition, and speech synthesis. It does not require a paid AI API.";
    }

    if (
      /\b(how does this guide work|how does your ai work|is this real ai|is this chatbot free|does it use api|openai api|chatbot technology)\b/.test(
        q,
      )
    ) {
      return "This portfolio guide is a free, rule-based JavaScript assistant. It matches questions against predefined information about Ajinkya and his projects. It uses browser speech recognition for voice input and speech synthesis for spoken answers. It does not currently use a live generative AI model, OpenAI API, or paid chatbot service.";
    }

    // CORROSION INDIA / ICCI
    if (
      /\b(corrosion india|corrosionindia|icci|ampp|coating inspector|cip|cathodic protection|concrete coating|cci)\b/.test(
        q,
      )
    ) {
      return "Corrosion India (https://www.corrosionindia.com/) is one of Ajinkya's featured live projects. The website focuses on corrosion education, professional training, and AMPP certification programs. Its public content includes Coating Inspector Program (CIP), Cathodic Protection (CP), and Concrete Coating Inspection (CCI).\n\nRelated development workflows include:\n• Course listing and course details.\n• User registration and profile management.\n• Course purchasing and registration.\n• Learner course access.\n• AMPP registration workflow.\n• Invoice generation and payment integration.\n• Dynamic frontend and backend API connectivity.\n\nAsk me about course registration, AMPP, payment processing, or the learning platform.";
    }

    if (
      /\b(course registration|register course|course purchase|student portal|learner portal|user profile|course api)\b/.test(
        q,
      )
    ) {
      return "The Corrosion India-related development work includes course listing, course details, user profile registration, course purchases, course registration, learner course access, and invoice workflows. These features connect React frontend components with Node.js APIs and MongoDB data.";
    }

    if (/\b(ampp registration|ampp form|ampp portal)\b/.test(q)) {
      return "The AMPP registration workflow is part of the corrosion-training website experience. The related development work includes registration forms, course-related data, and integration with the existing website. The actual form fields and approval process should be checked on the live registration page.";
    }

    // AGEP INDIA
    if (/\bagep india|agepindia\b/.test(q)) {
      return "AGEP India (https://agepindia.com/) is a corporate website featured in Ajinkya's portfolio. Its public website includes sections for About Us, Expertise, Products, Media, User Inspection Login, and Contact. The content highlights industrial services, training, audits, products, and safety-related expertise. Ajinkya includes this as one of his real live website projects.";
    }

    if (
      /\b(agep india products|agep expertise|agep safety|agep media|agep audits)\b/.test(
        q,
      )
    ) {
      return "The AGEP India website presents its expertise, products, media updates, safety activities, audits, and training-related information. Visitors can explore the corporate sections and contact the company through its website.";
    }

    // AGEP DESIGN
    if (/\bagep design|agepdesign|agep designs|design agency\b/.test(q)) {
      return "AGEP Design (https://agepdesign.com/) is a digital design and branding website featured in Ajinkya's portfolio. Its public services include:\n\n• Brand identity and logo design.\n• Digital marketing and social media.\n• Website UI/UX design.\n• Website development.\n• SEO and online visibility.\n• Corporate branding and communication design.\n\nThe website presents creative services through a dedicated digital brand experience.";
    }

    // AGEP COATINGS
    if (
      /\bagep coatings|agepcoatings|protective coatings|industrial coatings\b/.test(
        q,
      )
    ) {
      return "AGEP Coatings (https://agepcoatings.com/) focuses on industrial protective coatings, corrosion control, and reliability management.\n\nIts public website highlights:\n• Industrial protective coating solutions.\n• Thermal power, oil and gas, and marine applications.\n• Flange protection solutions.\n• Product information and technical solutions.\n• Industrial projects and customer testimonials.\n\nIt is one of Ajinkya's featured live website projects.";
    }

    // EAC INTERNATIONAL
    if (/\beac international|eac-international|eac website\b/.test(q)) {
      return "EAC International (https://eac-international.com/) presents engineering, corrosion control, asset protection, and professional training services.\n\nIts public content includes:\n• AMPP certification programs.\n• Corrosion control and mitigation.\n• Corrosion and coating audits.\n• Coating inspection and QA/QC oversight.\n• Inspection Test Plans (ITPs).\n• Technical documentation.\n• Coating system selection and validation.\n\nThis is one of Ajinkya's featured international website projects.";
    }

    // AXIAL GROUP
    if (/\baxial group|axialgroup|axial website\b/.test(q)) {
      return "Axial Group (https://axialgroup.in/) focuses on corrosion management, industrial inspection, and project compliance.\n\nIts public website features:\n• Corrosion management.\n• Coating audits and inspection.\n• Safety audits.\n• Vendor audits and assessments.\n• Claims assistance.\n• Construction inspection.\n• Project specifications and ITPs.\n• Coating system validation.\n• Industrial training.\n\nThe website showcases industrial services and project experience.";
    }

    // AGEP THAILAND
    if (/\bagep thailand|agepthailand|agep thailand website\b/.test(q)) {
      return "AGEP Thailand (https://agepthailand.com/) is the Thailand-focused AGEP website featured in Ajinkya's portfolio. Its local screenshot showcases the AGEP Thailand brand, corrosion-control and inspection-related positioning, and its website navigation. You can open the live website to explore its current content.";
    }

    // ALL SEVEN WEBSITES
    if (
      /\b(all projects|all websites|seven websites|7 websites|seven projects|7 projects|list projects|list websites|show projects|portfolio projects|complete portfolio)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's portfolio features seven live website projects:\n\n01. Corrosion India — https://www.corrosionindia.com/\n02. AGEP India — https://agepindia.com/\n03. AGEP Design — https://agepdesign.com/\n04. AGEP Coatings — https://agepcoatings.com/\n05. EAC International — https://eac-international.com/\n06. Axial Group — https://axialgroup.in/\n07. AGEP Thailand — https://agepthailand.com/\n\nThese projects cover corporate websites, industrial services, professional training, branding, design, and international digital experiences.";
    }

    if (
      /\b(project|projects|portfolio work|live work|website work)\b/.test(q)
    ) {
      return "Ajinkya's portfolio showcases seven live websites across corrosion training, corporate services, industrial coatings, branding, and international business. His broader development work also includes e-learning applications, REST APIs, MongoDB databases, payment processing, and invoice automation. Ask about an individual website to explore its features.";
    }

    // SELF-SKILL AND E-LEARNING
    if (
      /\b(selfskill|self skill|react native|mobile app|mobile application)\b/.test(
        q,
      )
    ) {
      return "SelfSkill is Ajinkya's React Native e-learning application project. Its development features include login and registration, onboarding, video lessons, course content, quizzes, SCORM packages, learner progress, and certificate workflows. The project also involves connecting with Moodle services and backend APIs.";
    }

    if (
      /\b(moodle|scorm|e-learning|elearning|quiz|certificate|learning platform|course progress)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's e-learning development experience includes Moodle integration, course enrolment, learner profiles, SCORM ZIP package handling, lesson tracking, quizzes, pass/fail logic, progress tracking, and certificate generation. The work connects React or React Native interfaces with Node.js backend services.";
    }

    // PAYMENTS
    if (
      /\b(stripe|cashfree|payment gateway|payment integration|payment verification|checkout|payment)\b/.test(
        q,
      )
    ) {
      return "Ajinkya has worked with Stripe and Cashfree payment integrations. Related features include:\n\n• Creating payment orders or PaymentIntents.\n• Verifying payment status.\n• Handling successful and unsuccessful payments.\n• Member and non-member course pricing.\n• Currency display and INR/USD handling.\n• GST calculations.\n• Saving purchase information.\n• Connecting payments with course registration.";
    }

    if (
      /\b(invoice|pdf invoice|invoice generation|billing|invoice number)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's invoice development work uses Node.js and PDFKit. It includes PDF invoice generation, automatic invoice numbering, purchase information, payment references, and saving invoice records in MongoDB. The workflow connects verified purchases with downloadable invoices.";
    }

    // GIT / DOCKER / DEPLOYMENT
    if (/\b(git|github|version control|repository|repo)\b/.test(q)) {
      return "Ajinkya uses Git and GitHub for source-code management and repository workflows. His development environment also includes separate personal and office GitHub SSH configurations.";
    }

    if (/\b(docker|docker compose|container|containerization)\b/.test(q)) {
      return "Ajinkya has been working with Docker and Docker Compose for local containerized application testing. This helps prepare applications for more consistent development and deployment environments.";
    }

    if (
      /\b(deployment|hosting|server|nginx|pm2|cicd|ci cd|continuous integration)\b/.test(
        q,
      )
    ) {
      return "Ajinkya's deployment and infrastructure learning includes Ubuntu servers, Node.js applications, PM2 process management, Nginx reverse proxy configuration, GitHub repositories, Docker, and Docker Compose. He is also exploring GitHub Actions-based CI/CD workflows with safe deployment and rollback practices.";
    }

    // CONTACT / HIRING
    if (
      /\b(contact|email|hire|hiring|linkedin|phone|resume|cv|job opportunity|connect)\b/.test(
        q,
      )
    ) {
      return "You can connect with Ajinkya Deshmukh:\n\nEmail: ajinkyad725@gmail.com\nPhone: +91 77560 42517\nLinkedIn: https://www.linkedin.com/in/ajinkya-deshmukh-459228257\n\nHe has 4 years of Full-Stack Development experience. Feel free to reach out for professional opportunities and development discussions.";
    }

    if (/\b(thank|thanks|thank you)\b/.test(q)) {
      return "You're welcome! Thank you for exploring Ajinkya's portfolio. 😊 Feel free to ask about his experience, any of the seven websites, technical skills, or development projects.";
    }

    // FALLBACK
    return "I can help you explore Ajinkya Deshmukh's developer profile and projects.\n\nTry asking:\n\n• Who is Ajinkya Deshmukh?\n• How many years of experience does he have?\n• What are his technical skills?\n• Tell me about this portfolio website.\n• Explain Corrosion India.\n• What is the AGEP India website about?\n• Tell me about AGEP Design.\n• What does AGEP Coatings do?\n• Explain EAC International.\n• What services does Axial Group offer?\n• Tell me about AGEP Thailand.\n• Explain the SelfSkill application.\n• What is his Moodle and SCORM experience?\n• How does he integrate Stripe and Cashfree?\n• What backend technologies does he use?\n• How can I contact him?\n\nI'm a free portfolio guide using predefined project knowledge and browser voice features.";
  }

  async function send(raw = input) {
    const question = raw.trim();
    if (!question || busy) return;
    setInput("");
    setVoiceError("");
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setBusy(true);
    // Free mode: answer locally with portfolio-specific intent matching; no API key or server required.
    window.setTimeout(() => {
      const answer = getFreeAnswer(question);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
      speak(answer);
      setBusy(false);
    }, 350);
  }

  const suggestions = [
    "Who is Ajinkya Deshmukh?",
    "How many years of experience does he have?",
    "What are his technical skills?",
    "Tell me about all seven websites",
    "How can I contact Ajinkya?",
  ];

  return (
    <motion.div
      className="assistant-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.section
        className="assistant-panel"
        role="dialog"
        aria-modal="true"
        aria-label="AI portfolio assistant"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: "spring", damping: 25, stiffness: 260 }}
      >
        <header className="assistant-head">
          <div className="assistant-identity">
            <div className="mini-orb">
              <Orb small />
            </div>
            <div>
              <strong>Portfolio guide</strong>
              <span>
                <i className="status-dot" /> FREE VOICE GUIDE · AJINKYA DESHMUKH
              </span>
            </div>
          </div>
          <button
            className="icon-btn"
            onClick={onClose}
            aria-label="Close assistant"
          >
            <X size={19} />
          </button>
        </header>
        <div className="assistant-intro">
          <span className="eyebrow">
            <Sparkles size={13} /> FREE · NO API KEY REQUIRED
          </span>
          <h2>
            Curious about my work?
            <br />
            <em>Ask away.</em>
          </h2>
          <p>
            Ask a question. I’ll guide you through the work, tools, and thinking
            behind it.
          </p>
        </div>
        <div className="chat-messages" aria-live="polite">
          {messages.map((m, i) => (
            <div className={`chat-row ${m.role}`} key={i}>
              <div className="chat-avatar">
                {m.role === "assistant" ? <Orbit size={15} /> : "YOU"}
              </div>
              <div className="chat-bubble">
                {m.content}
                {m.role === "assistant" && i > 0 && (
                  <button
                    className="speak-inline"
                    onClick={() =>
                      speaking
                        ? (window.speechSynthesis.cancel(), setSpeaking(false))
                        : speak(m.content)
                    }
                    aria-label={
                      speaking ? "Stop spoken reply" : "Speak this reply"
                    }
                  >
                    {speaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                )}
              </div>
            </div>
          ))}
          {busy && (
            <div className="chat-row assistant">
              <div className="chat-avatar">
                <Orbit size={15} />
              </div>
              <div className="chat-bubble typing">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        {messages.length === 1 && (
          <div className="suggestions">
            {suggestions.map((s) => (
              <button key={s} onClick={() => send(s)}>
                {s}
                <ArrowRight size={13} />
              </button>
            ))}
          </div>
        )}
        {voiceError && (
          <p className="voice-error" role="status">
            {voiceError}
          </p>
        )}
        <form
          className="chat-composer"
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
        >
          <button
            type="button"
            className={`mic-btn ${listening ? "is-listening" : ""}`}
            onClick={listen}
            aria-label={listening ? "Stop listening" : "Ask with your voice"}
            title={listening ? "Stop listening" : "Ask with your voice"}
          >
            {listening ? <MicOff size={18} /> : <Mic size={18} />}
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              listening
                ? "Listening… speak now"
                : "Ask about projects, skills, approach…"
            }
            aria-label="Ask the portfolio assistant"
            maxLength={1500}
          />
          <button
            className="send-btn"
            type="submit"
            disabled={!input.trim() || busy}
            aria-label="Send message"
          >
            <Send size={17} />
          </button>
        </form>
        <div className="assistant-foot">
          <span>
            <span className="privacy-dot" /> Runs locally in your browser
          </span>
          <span>Voice works best in Chrome · HTTPS recommended</span>
        </div>
      </motion.section>
    </motion.div>
  );
}

function ProjectShowcase({ project: p, index: i }) {
  const [imageSrc, setImageSrc] = useState(p.image);
  const [usingPlaceholder, setUsingPlaceholder] = useState(false);

  function handleImageError() {
    if (!usingPlaceholder) {
      setUsingPlaceholder(true);
      setImageSrc(p.placeholder);
    }
  }

  return (
    <motion.article
      className={`project-card ${p.accent} live-project-card project-motion-${i % 4}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-index">
        <span>{p.n}</span>
        <span className="project-type">{p.type}</span>
      </div>
      <div className="project-content">
        <span className="project-eyebrow">
          FEATURED DIGITAL EXPERIENCE / {p.n}
        </span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="tech-tags">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <a
          className="live-site-link"
          href={p.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit live website <ExternalLink size={13} />
        </a>
        <span className="project-domain">{p.domain}</span>
      </div>
      <a
        className={`project-art live-preview live-project-${i + 1} preview-${p.previewKind}`}
        href={p.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${p.title} website in a new tab`}
      >
        <div className="preview-browser-bar">
          <span className="preview-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="preview-address">{p.domain}</span>
          <ExternalLink size={12} />
        </div>

        <div className="project-preview-window">
          <div className="project-preview-scroll">
            <img src={p.image} alt={`${p.title} full-page website preview`} />
          </div>
        </div>

        <span className="preview-caption">
          <i /> LIVE SITE <ExternalLink size={11} />
        </span>
      </a>
      <a
        className="project-open"
        href={p.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${p.title}`}
      >
        <ArrowUpRightIcon />
      </a>
      <span className="project-watermark" aria-hidden="true">
        {p.n}
      </span>
      <span className="project-side-index" aria-hidden="true">
        SCROLL / EXPLORE / {p.n}
      </span>
    </motion.article>
  );
}

function App() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = assistantOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [assistantOpen]);
  const nav = [
    ["About", "#about"],
    ["Selected work", "#work"],
    ["Capabilities", "#capabilities"],
  ];
  return (
    <div className="site-shell">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="Ajinkya Deshmukh home">
          <img
            className="brand-logo"
            src="/ajinkya-deshmukh-logo.png"
            alt="Ajinkya Deshmukh — Full-Stack Developer"
            width="178"
            height="58"
          />
        </a>
        <nav
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <button
            className="nav-ask"
            onClick={() => {
              setAssistantOpen(true);
              setMenuOpen(false);
            }}
          >
            Talk to my AI <ArrowUpRightIcon />
          </button>
        </nav>
        <button
          className="mobile-menu icon-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="availability-pulse" /> BUILDING THE NEXT USEFUL
              THING <span className="availability-line" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              Code with purpose.
              <br />
              <span>Build what</span> <em>matters.</em>
            </motion.h1>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
            >
              I’m <strong>Ajinkya Deshmukh</strong> — a Full-Stack Developer
              crafting thoughtful digital experiences, connected platforms, and
              dependable systems from front end to backend.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
            >
              <button
                className="primary-cta"
                onClick={() => setAssistantOpen(true)}
              >
                <AudioLines size={17} /> Meet my portfolio guide{" "}
                <ArrowRight size={16} />
              </button>
              <a className="secondary-cta" href="#work">
                Explore my work <ArrowDownRight size={16} />
              </a>
            </motion.div>
            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="meta-symbols">
                <span>R</span>
                <span>N</span>
                <span>M</span>
              </div>
              <span>React · Node.js · MongoDB</span>
              <span className="meta-separator" />
              <span className="mono">FULL-STACK / DIGITAL PRODUCT</span>
            </motion.div>
          </div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="visual-topline">
              <span>
                <span className="tiny-green" /> AI INTERFACE / 001
              </span>
              <span className="mono">INTERACTIVE SYSTEM</span>
            </div>
            <div className="orb-stage">
              <div className="stage-grid" />
              <div className="stage-cross cross-h" />
              <div className="stage-cross cross-v" />
              <Orb active />
              <div className="orbit-label label-top">
                <span className="label-dot" /> HUMAN-CENTERED CODE
              </div>
              <div className="orbit-label label-bottom">
                <span className="label-dot" /> SYSTEMS THAT CONNECT
              </div>
              <div className="coordinate coordinate-one">01 / 03</div>
              <div className="coordinate coordinate-two">∞</div>
            </div>
            <button
              className="orb-prompt"
              onClick={() => setAssistantOpen(true)}
            >
              <span className="prompt-icon">
                <AudioLines size={16} />
              </span>
              <span>
                <strong>There’s more beneath the surface.</strong>
                <small>Start a conversation with my AI</small>
              </span>
              <ArrowUpRightIcon />
            </button>
            <div className="visual-bottomline">
              <span>DESIGNED TO EXPLORE</span>
              <span className="visual-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="mono">LIVE / INTERACTIVE</span>
            </div>
          </motion.div>
          <a href="#about" className="scroll-cue">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>
        <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {Array.from({ length: 2 }, (_, j) => (
              <div className="ticker-group" key={j}>
                {[
                  "FULL-STACK DEVELOPMENT",
                  "PRODUCT THINKING",
                  "API INTEGRATION",
                  "INTERACTIVE EXPERIENCES",
                  "RELIABLE SYSTEMS",
                ].map((t, i) => (
                  <span key={t + i}>
                    {t}
                    <i>✳</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
        <section className="about-section section-wrap section-pad" id="about">
          <div className="section-kicker">
            <span>01 / THE APPROACH</span>
            <span className="kicker-rule" />
            <span>ABOUT</span>
          </div>
          <div className="about-grid">
            <div>
              <h2>
                Good software is more than code.
                <br />
                <em>It’s how everything connects.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I enjoy turning complex requirements into clear, useful digital
                experiences. My work spans responsive interfaces, backend APIs,
                database-driven applications, and the integrations that make
                products work end to end.
              </p>
              <p>
                From learning platforms and course workflows to payment
                verification and invoice generation, I focus on building systems
                that feel considered on the surface and make sense underneath.
              </p>
              <button
                className="text-link"
                onClick={() => setAssistantOpen(true)}
              >
                Ask the AI about my approach <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="principles">
            <article>
              <span className="principle-number">01</span>
              <Code2 size={21} />
              <h3>Thoughtful frontend</h3>
              <p>
                Responsive interfaces, reusable components, and details that
                make the experience feel effortless.
              </p>
            </article>
            <article>
              <span className="principle-number">02</span>
              <Orbit size={21} />
              <h3>Connected backend</h3>
              <p>
                APIs, data models, authentication flows, and integrations built
                around real user journeys.
              </p>
            </article>
            <article>
              <span className="principle-number">03</span>
              <Zap size={21} />
              <h3>End-to-end thinking</h3>
              <p>
                Looking beyond a single screen to the complete path from action
                to reliable outcome.
              </p>
            </article>
          </div>
        </section>
        <section className="work-section section-pad" id="work">
          <div className="work-intro section-wrap">
            <div className="section-kicker">
              <span>02 / SELECTED WORK</span>
              <span className="kicker-rule" />
              <span>LIVE WEBSITES</span>
            </div>
            <div className="work-heading">
              <h2>
                Real websites.
                <br />
                <em>Real-world work.</em>
              </h2>
              <p>
                Explore each live-site showcase with a custom pointer, subtle
                depth, and smooth reveal animations.
              </p>
            </div>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <ProjectShowcase key={p.n} project={p} index={i} />
            ))}
          </div>
          <p className="work-note section-wrap">
            <span className="note-dot" /> Each project uses a local screenshot
            file for a reliable preview. Add your own homepage screenshots to
            public/projects; the live links open the actual websites.
          </p>
        </section>
        <section
          className="capabilities-section section-wrap section-pad"
          id="capabilities"
        >
          <div className="section-kicker">
            <span>03 / TOOLKIT</span>
            <span className="kicker-rule" />
            <span>CAPABILITIES</span>
          </div>
          <div className="capabilities-grid">
            <div>
              <h2>
                The tools are the means.
                <br />
                <em>The outcome is the point.</em>
              </h2>
              <p>
                I choose practical technology to solve the problem at hand, keep
                systems maintainable, and connect each part into a cohesive
                experience.
              </p>
              <button
                className="outline-cta"
                onClick={() => setAssistantOpen(true)}
              >
                Explore my skill set <ArrowRight size={15} />
              </button>
            </div>
            <div className="skills-panel">
              <div className="skills-panel-head">
                <span>TECHNOLOGY INDEX</span>
                <span className="mono">12 MODULES</span>
              </div>
              <div className="skill-cloud">
                {skills.map((skill, i) => (
                  <span key={skill} className={i < 3 ? "skill-featured" : ""}>
                    <i>{String(i + 1).padStart(2, "0")}</i>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="skills-panel-foot">
                <span className="tiny-green" /> BUILT THROUGH PRACTICAL PROJECT
                WORK
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="section-kicker">
              <span>04 / NEXT CHAPTER</span>
              <span className="kicker-rule" />
              <span>LET’S CONNECT</span>
            </div>
            <div className="contact-content">
              <div>
                <span className="eyebrow">
                  <Sparkles size={13} /> HAVE A PROJECT IN MIND?
                </span>
                <h2>
                  Let’s make something
                  <br />
                  <em>worth using.</em>
                </h2>
                <p>
                  Have an idea, a product challenge, or a role in mind? Start
                  with a conversation.
                </p>
              </div>
              <div className="contact-actions">
                <button
                  className="primary-cta"
                  onClick={() => setAssistantOpen(true)}
                >
                  <AudioLines size={17} /> Start with my AI{" "}
                  <ArrowRight size={16} />
                </button>
                <div className="contact-links">
                  <a href="mailto:ajinkyad725@gmail.com">
                    <Mail size={16} />
                    <span>ajinkyad725@gmail.com</span>
                    <ExternalLink size={13} />
                  </a>
                  <a href="tel:+917756042517">
                    <Phone size={16} />
                    <span>+91 77560 42517</span>
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ajinkya-deshmukh-459228257"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn profile</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-footer">
              <span>
                AJINKYA DESHMUKH <b>© {new Date().getFullYear()}</b>
              </span>
              <span>
                MADE WITH CURIOSITY <Orbit size={13} />
              </span>
              <a href="#home">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>DESIGNED TO FEEL A LITTLE DIFFERENT.</span>
        <span>REACT · MOTION · VOICE</span>
      </footer>
      <button
        className="floating-ai"
        onClick={() => setAssistantOpen(true)}
        aria-label="Open portfolio guide"
      >
        <span className="floating-ai-orb">
          <Orb small />
        </span>
        <span>Ask my guide</span>
        <AudioLines size={15} />
      </button>
      <AnimatePresence>
        {assistantOpen && <Assistant onClose={() => setAssistantOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
function ArrowUpRightIcon() {
  return <ArrowDownRight className="arrow-diagonal" size={16} />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
