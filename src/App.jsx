import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  BookOpenCheck,
  CalendarCheck,
  Check,
  ClipboardCheck,
  FileText,
  Headphones,
  LayoutDashboard,
  MonitorCheck,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UsersRound,
  Video
} from "lucide-react";
import { prepGuides, privacyBoundaries, processGuides, requestTemplates, roles, trainingModules, trainingSteps, volunteers } from "./data";
import "./styles.css";

const onboardingItems = [
  "Name and contact info captured",
  "Availability reviewed",
  "Interested roles selected",
  "Observed AV booth/room",
  "Reviewed safety expectations",
  "Attended practice",
  "Paired with experienced operator",
  "Operated during rehearsal",
  "Operated live under supervision",
  "Approved for assigned role"
];

const roleIcons = {
  audio: Headphones,
  graphics: MonitorCheck,
  camera: Video,
  ptz: Video,
  stream: MonitorCheck,
  stage: UsersRound
};

function readinessLabel(score) {
  if (score >= 80) return "Ready";
  if (score >= 65) return "Supervised";
  return "Practice";
}

function roleFit(volunteer, role) {
  const interestBoost = volunteer.interests.includes(role.id) ? 28 : 0;
  const experienceBoost = volunteer.experience === "Experienced" ? 20 : volunteer.experience === "Developing" ? 12 : 4;
  return Math.min(98, Math.round(role.readiness * 0.48 + volunteer.progress * 5 + interestBoost + experienceBoost));
}

function App() {
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(volunteers[0].id);
  const [selectedRoleId, setSelectedRoleId] = useState("graphics");
  const [mode, setMode] = useState("full");
  const [templateId, setTemplateId] = useState("support");
  const [moduleId, setModuleId] = useState("orientation");
  const [prepGuideId, setPrepGuideId] = useState("sunday");
  const [processGuideId, setProcessGuideId] = useState("scope");
  const [completedItems, setCompletedItems] = useState(new Set(onboardingItems.slice(0, 5)));
  const [eventAssignments, setEventAssignments] = useState({
    audio: "keisha",
    graphics: "maria",
    camera: "dante",
    stream: "terrell",
    stage: "anika"
  });

  const selectedVolunteer = volunteers.find((volunteer) => volunteer.id === selectedVolunteerId);
  const selectedRole = roles.find((role) => role.id === selectedRoleId);
  const selectedTemplate = requestTemplates.find((template) => template.id === templateId);
  const selectedModule = trainingModules.find((module) => module.id === moduleId);
  const selectedPrepGuide = prepGuides.find((guide) => guide.id === prepGuideId);
  const selectedProcessGuide = processGuides.find((guide) => guide.id === processGuideId);

  const matches = useMemo(() => {
    return roles
      .map((role) => ({ ...role, fit: roleFit(selectedVolunteer, role) }))
      .sort((a, b) => b.fit - a.fit);
  }, [selectedVolunteer]);

  const readinessScore = Math.round((completedItems.size / onboardingItems.length) * 100);
  const requiredRoles = mode === "full" ? roles : roles.filter((role) => ["audio", "graphics", "stream", "stage"].includes(role.id));
  const staffedCount = requiredRoles.filter((role) => eventAssignments[role.id]).length;

  function toggleChecklistItem(item) {
    setCompletedItems((current) => {
      const next = new Set(current);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  }

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="brand">
          <div className="brand-mark">AV</div>
          <div>
            <strong>FMZBC</strong>
            <span>Resource Hub</span>
          </div>
        </div>
        <nav className="nav-list">
          <a href="#dashboard" className="active"><LayoutDashboard size={18} />Home</a>
          <a href="#training"><BookOpenCheck size={18} />Volunteer Training</a>
          <a href="#processes"><SlidersHorizontal size={18} />AV Processes</a>
          <a href="#prep"><ClipboardCheck size={18} />Prep Guides</a>
          <a href="#roles"><ShieldCheck size={18} />Role Practice</a>
          <a href="#staffing"><CalendarCheck size={18} />Service Prep</a>
          <a href="#templates"><FileText size={18} />Checklists</a>
        </nav>
        <div className="source-note">
          <BookOpenCheck size={18} />
          <span>Built for AV volunteers first, with leader reference material kept in the checklists area.</span>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <h1>AV Training Resource Hub</h1>
            <p>Volunteer-focused training, FMZBC AV process understanding, service preparation, role practice, and checklists for serving with confidence.</p>
          </div>
          <div className="search-box">
            <Search size={18} />
            <input aria-label="Search hub" placeholder="Search roles, templates, training..." />
          </div>
        </header>

        <section className="overview-grid" id="dashboard">
          <Metric icon={BookOpenCheck} label="Volunteer lessons" value={trainingModules.length} detail="Orientation, booth basics, live service, requests, and reporting" />
          <Metric icon={SlidersHorizontal} label="Process guides" value={processGuides.length} detail="Volunteer-safe summaries of FMZBC AV workflows and standards" />
          <Metric icon={ClipboardCheck} label="Prep guides" value={prepGuides.length} detail="What to check before services, events, highlights, and media requests" />
          <Metric icon={LockKeyhole} label="Private details" value="Held" detail="Internal accounts, routing, assets, purchases, and escalation details stay out" />
        </section>

        <section className="hero-band">
          <div className="hero-copy">
            <h2>Volunteer training and prep workspace</h2>
            <p>Help each volunteer know what to learn next, what to check before serving, and how to ask for support during production.</p>
            <div className="selector-row">
              <label>
                Training module
                <select value={moduleId} onChange={(event) => setModuleId(event.target.value)}>
                  {trainingModules.map((module) => <option key={module.id} value={module.id}>{module.title}</option>)}
                </select>
              </label>
              <label>
                AV process
                <select value={processGuideId} onChange={(event) => setProcessGuideId(event.target.value)}>
                  {processGuides.map((guide) => <option key={guide.id} value={guide.id}>{guide.title}</option>)}
                </select>
              </label>
              <label>
                Prep guide
                <select value={prepGuideId} onChange={(event) => setPrepGuideId(event.target.value)}>
                  {prepGuides.map((guide) => <option key={guide.id} value={guide.id}>{guide.title}</option>)}
                </select>
              </label>
            </div>
          </div>
          <img src="/assets/av-booth-dashboard.png" alt="Church AV production booth with audio and video equipment" />
        </section>

        <section className="panel process-panel" id="processes">
          <div className="section-heading">
            <div>
              <h2>FMZBC AV Process Basics</h2>
              <p>Volunteer-safe process summaries from the full documentation package.</p>
            </div>
            <span className="status-pill ready">Private details withheld</span>
          </div>
          <div className="process-layout">
            <div className="process-tabs">
              {processGuides.map((guide) => (
                <button key={guide.id} className={processGuideId === guide.id ? "active" : ""} onClick={() => setProcessGuideId(guide.id)}>
                  {guide.title}
                </button>
              ))}
            </div>
            <article className="process-card">
              <h3>{selectedProcessGuide.title}</h3>
              <p>{selectedProcessGuide.volunteerTakeaway}</p>
              <ul className="compact-list">
                {selectedProcessGuide.doList.map((item) => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
              <div className="privacy-callout">
                <LockKeyhole size={18} />
                <span>{selectedProcessGuide.keepPrivate}</span>
              </div>
            </article>
          </div>
        </section>

        <section className="privacy-strip">
          <div>
            <LockKeyhole size={20} />
            <strong>Private information intentionally excluded</strong>
          </div>
          <ul>
            {privacyBoundaries.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <div className="content-grid training-grid">
          <section className="panel" id="training">
            <div className="section-heading">
              <div>
                <h2>Volunteer Training Library</h2>
                <p>Short learning paths for orientation, practice, supervised operation, and support workflows.</p>
              </div>
              <span className="status-pill">{selectedModule.audience}</span>
            </div>
            <div className="module-tabs">
              {trainingModules.map((module) => (
                <button key={module.id} className={moduleId === module.id ? "active" : ""} onClick={() => setModuleId(module.id)}>
                  {module.title}
                </button>
              ))}
            </div>
            <article className="learning-card">
              <h3>{selectedModule.title}</h3>
              <p>{selectedModule.outcome}</p>
              <ul className="compact-list">
                {selectedModule.topics.map((topic) => <li key={topic}><Check size={16} />{topic}</li>)}
              </ul>
            </article>
          </section>

          <section className="panel" id="prep">
            <div className="section-heading">
              <div>
                <h2>Volunteer Prep Guides</h2>
                <p>Quick references volunteers can use before services, ministry events, highlights, and media requests.</p>
              </div>
              <span className="status-pill ready">{selectedPrepGuide.timing}</span>
            </div>
            <div className="prep-list">
              {prepGuides.map((guide) => (
                <button key={guide.id} className={prepGuideId === guide.id ? "prep-card active" : "prep-card"} onClick={() => setPrepGuideId(guide.id)}>
                  <strong>{guide.title}</strong>
                  <small>{guide.timing}</small>
                </button>
              ))}
            </div>
            <div className="prep-checks">
              {selectedPrepGuide.items.map((item) => <label key={item}><input type="checkbox" />{item}</label>)}
            </div>
          </section>
        </div>

        <div className="content-grid">
          <section className="panel role-panel" id="roles">
            <div className="section-heading">
              <div>
                <h2>Volunteer Role Practice</h2>
                <p>{selectedVolunteer.name} - {selectedVolunteer.experience} - {selectedVolunteer.availability}</p>
              </div>
              <span className="status-pill">{selectedVolunteer.progress}/7 progress</span>
            </div>
            <div className="selector-inline">
              <label>
                Practice volunteer
                <select value={selectedVolunteerId} onChange={(event) => setSelectedVolunteerId(event.target.value)}>
                  {volunteers.map((volunteer) => <option key={volunteer.id} value={volunteer.id}>{volunteer.name}</option>)}
                </select>
              </label>
            </div>
            <div className="match-list">
              {matches.map((role) => {
                const Icon = roleIcons[role.id] || ShieldCheck;
                return (
                  <button className={selectedRoleId === role.id ? "match-row selected" : "match-row"} key={role.id} onClick={() => setSelectedRoleId(role.id)}>
                    <Icon size={20} />
                    <span>
                      <strong>{role.title}</strong>
                      <small>{role.overview}</small>
                    </span>
                    <b>{role.fit}%</b>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="panel detail-panel">
            <div className="section-heading">
              <div>
                <h2>{selectedRole.title}</h2>
                <p>{readinessLabel(selectedRole.readiness)} placement - {selectedRole.source}</p>
              </div>
              <span className={`status-pill ${readinessLabel(selectedRole.readiness).toLowerCase()}`}>{readinessLabel(selectedRole.readiness)}</span>
            </div>
            <p className="role-overview">{selectedRole.overview}</p>
            <div className="skill-tags">
              {selectedRole.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <div className="boundary-box">
              <strong>Success boundary</strong>
              <p>{selectedRole.boundaries}</p>
            </div>
            <h3>Required next checks</h3>
            <ul className="compact-list">
              {selectedRole.training.map((item) => <li key={item}><Check size={16} />{item}</li>)}
            </ul>
          </section>
        </div>

        <div className="content-grid lower-grid">
          <section className="panel" id="staffing">
            <div className="section-heading">
              <div>
                <h2>Service Prep Coverage</h2>
                <p>{staffedCount} of {requiredRoles.length} volunteer positions covered for practice or service</p>
              </div>
              <div className="segmented" aria-label="Staffing mode">
                <button className={mode === "full" ? "active" : ""} onClick={() => setMode("full")}>Full</button>
                <button className={mode === "reduced" ? "active" : ""} onClick={() => setMode("reduced")}>Reduced</button>
              </div>
            </div>
            <div className="assignment-table">
              {requiredRoles.map((role) => (
                <div className="assignment-row" key={role.id}>
                  <span>{role.title}</span>
                  <select
                    value={eventAssignments[role.id] || ""}
                    onChange={(event) => setEventAssignments((current) => ({ ...current, [role.id]: event.target.value }))}
                  >
                    <option value="">Unassigned</option>
                    {volunteers.map((volunteer) => <option key={volunteer.id} value={volunteer.id}>{volunteer.name}</option>)}
                  </select>
                  <small>{readinessLabel(role.readiness)}</small>
                </div>
              ))}
            </div>
            {mode === "reduced" && (
              <div className="alert-line">
                <AlertTriangle size={18} />
                Two trained people can cover core Sanctuary operation, but flexibility, troubleshooting speed, and camera movement are limited.
              </div>
            )}
          </section>

          <section className="panel">
            <div className="section-heading">
              <div>
                <h2>Onboarding Checklist</h2>
                <p>Track readiness before moving a volunteer into live responsibility.</p>
              </div>
              <span className="status-pill ready">{readinessScore}%</span>
            </div>
            <div className="checklist">
              {onboardingItems.map((item) => (
                <label key={item}>
                  <input type="checkbox" checked={completedItems.has(item)} onChange={() => toggleChecklistItem(item)} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <section className="panel template-panel" id="templates">
          <div className="section-heading">
            <div>
              <h2>Volunteer Checklists & References</h2>
              <p>Reusable request, prep, incident, and leader-reference tools from the documentation package.</p>
            </div>
            <select value={templateId} onChange={(event) => setTemplateId(event.target.value)} aria-label="Select template">
              {requestTemplates.map((template) => <option key={template.id} value={template.id}>{template.title}</option>)}
            </select>
          </div>
          <div className="template-layout">
            <div>
              <h3>{selectedTemplate.title}</h3>
              <p>{selectedTemplate.audience}</p>
              <div className="template-actions">
                <button onClick={() => navigator.clipboard?.writeText(selectedTemplate.items.map((item) => `[ ] ${item}`).join("\n"))}>
                  <ClipboardCheck size={17} />Copy checklist
                </button>
                <button onClick={() => setTemplateId("incident")}>
                  <AlertTriangle size={17} />Open incident report
                </button>
              </div>
            </div>
            <div className="template-list">
              {selectedTemplate.items.map((item) => <label key={item}><input type="checkbox" />{item}</label>)}
            </div>
          </div>
        </section>

        <section className="training-path">
          {trainingSteps.map((step, index) => (
            <div className="path-step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

function Metric({ icon: Icon, label, value, detail }) {
  return (
    <article className="metric">
      <Icon size={20} />
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
