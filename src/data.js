export const roles = [
  {
    id: "audio",
    title: "Audio Assistant",
    overview: "Supports FOH, stage/monitor, or livestream audio with setup, checks, and guided operation.",
    readiness: 82,
    training: ["Observed AV booth/room", "Reviewed safety expectations", "Participated in practice", "Paired with experienced operator"],
    skills: ["listening", "signal flow", "calm troubleshooting"],
    boundaries: "Escalate field issues, feedback, and equipment failures to the Lead Sound Engineer or AV Director.",
    source: "Volunteer Handbook, Role Overview"
  },
  {
    id: "graphics",
    title: "Graphics / ProPresenter",
    overview: "Runs lyrics, scriptures, media, slides, and live adjustments for services and ministry events.",
    readiness: 74,
    training: ["Reviewed safety expectations", "Attended practice", "Operated during rehearsal"],
    skills: ["attention to detail", "scripture flow", "media playback"],
    boundaries: "Confirm final files, slides, and decision-maker changes before the event starts.",
    source: "Role Overview, Request Guides"
  },
  {
    id: "camera",
    title: "Camera Operator",
    overview: "Operates manual or roaming camera positions and follows Production Director direction.",
    readiness: 68,
    training: ["Observed AV booth/room", "Paired with experienced operator", "Operated live under supervision"],
    skills: ["framing", "direction following", "service awareness"],
    boundaries: "Camera movement is limited during reduced staffing mode unless assigned by production leadership.",
    source: "Volunteer Handbook, Role Overview"
  },
  {
    id: "ptz",
    title: "PTZ Operator",
    overview: "Controls PTZ cameras, recalls presets, and frames speakers, choir, musicians, and key moments.",
    readiness: 61,
    training: ["Observed AV booth/room", "Attended practice", "Paired with experienced operator"],
    skills: ["preset recall", "composition", "timing"],
    boundaries: "Use approved presets during live service unless directed by Production Director.",
    source: "Role Overview"
  },
  {
    id: "stream",
    title: "Stream Monitor",
    overview: "Monitors livestream health, vMix, local recording, and viewer-facing technical issues.",
    readiness: 79,
    training: ["Reviewed safety expectations", "Participated in practice", "Operated during rehearsal"],
    skills: ["quality checks", "issue reporting", "recording workflow"],
    boundaries: "Document issues and route unresolved problems through the incident report process.",
    source: "Role Overview, Incident Template"
  },
  {
    id: "stage",
    title: "Setup / Stage Support",
    overview: "Assists setup, shutdown, microphones, stage changes, guest movement, and platform coordination.",
    readiness: 88,
    training: ["Reviewed safety expectations", "Participated in practice", "Demonstrated ability to follow direction"],
    skills: ["early arrival", "clear communication", "stage awareness"],
    boundaries: "Coordinate platform changes through the Stage Manager and AV lead.",
    source: "Role Overview, Volunteer Handbook"
  }
];

export const volunteers = [
  { id: "maria", name: "Maria Ellis", availability: "Sunday AM", interests: ["graphics", "stream"], experience: "New", progress: 4, notes: "Strong attention to detail; ready for rehearsal reps." },
  { id: "dante", name: "Dante Brooks", availability: "Sunday AM, Wed PM", interests: ["camera", "ptz"], experience: "Developing", progress: 5, notes: "Good direction following; pair with production director." },
  { id: "keisha", name: "Keisha Moore", availability: "Wed PM", interests: ["audio", "stage"], experience: "Experienced", progress: 7, notes: "Can help coach setup and audio basics." },
  { id: "terrell", name: "Terrell James", availability: "Sunday AM", interests: ["stream", "graphics"], experience: "Developing", progress: 6, notes: "Needs incident reporting walkthrough." },
  { id: "anika", name: "Anika Reed", availability: "Events", interests: ["stage", "camera"], experience: "New", progress: 3, notes: "Best placed in setup support before live camera." }
];

export const trainingSteps = [
  "Observer",
  "Practice participant",
  "Paired operator",
  "Supervised live operator",
  "Independent operator",
  "Lead volunteer/trainer"
];

export const trainingModules = [
  {
    id: "orientation",
    title: "New Volunteer Orientation",
    audience: "New and returning volunteers",
    outcome: "Understand how to show up prepared, follow direction, communicate clearly, and ask for help before pressure rises.",
    topics: ["Arrive early and check assigned position needs", "Assist with preparations", "Communicate tardiness or unavailability early", "Follow AV Director, Production Director, or assigned lead direction"]
  },
  {
    id: "booth-basics",
    title: "Booth Walkthrough",
    audience: "Observers and practice participants",
    outcome: "Recognize core systems, service flow, safety expectations, and who owns each handoff during a service.",
    topics: ["Sanctuary core system", "Reduced staffing limits", "Equipment power-up and shutdown awareness", "Who to notify for technical issues"]
  },
  {
    id: "live-service",
    title: "Live Service Practice",
    audience: "Paired and supervised operators",
    outcome: "Move from practice to live operation with supervision, clear expectations, and confidence-building repetition.",
    topics: ["Follow direction during production", "Operate during rehearsal before live service", "Stay within assigned role", "Document issues after service"]
  },
  {
    id: "requests",
    title: "Event Request Prep",
    audience: "Volunteers helping with ministry support",
    outcome: "Know what information to collect so setup, media playback, livestream, and recording support are not rushed.",
    topics: ["Event name, date, time, and location", "Contact person and final decision-maker", "Microphone and media playback needs", "Files submitted at least 48 hours before event"]
  },
  {
    id: "incident",
    title: "Reporting Problems",
    audience: "Volunteers and team leads",
    outcome: "Capture enough detail for follow-up without blaming people or leaving technical issues undocumented.",
    topics: ["System affected", "Immediate action taken", "Temporary fix used", "Follow-up needed", "Resolved status and notes"]
  }
];

export const prepGuides = [
  {
    id: "sunday",
    title: "Sunday Service Prep",
    timing: "Before call time",
    items: ["Confirm assigned positions", "Check graphics, scriptures, media, and slides", "Verify audio inputs and microphones", "Review livestream and local recording needs", "Confirm stage changes and guest movement"]
  },
  {
    id: "major-event",
    title: "Major Event Planning",
    timing: "Planning meeting",
    items: ["Run of show", "Guest list and arrival times", "Soundcheck or rehearsal times", "Input/mic list", "Lighting requests", "Graphics and media requests", "Facilities needs", "Final decision-maker"]
  },
  {
    id: "ministry-highlights",
    title: "Ministry Highlights Prep",
    timing: "Tuesday noon deadline",
    items: ["Announcement title", "Ministry name", "Event date/time/location", "Registration or contact info", "Flyer or slide attached", "Script attached when provided", "Volunteer presenter assigned when recording"]
  },
  {
    id: "media-request",
    title: "Media Request Prep",
    timing: "3-5 business day turnaround",
    items: ["Requested media type", "Intended use", "Approval source", "Deadline", "Copyright or privacy concerns checked"]
  }
];

export const processGuides = [
  {
    id: "scope",
    title: "What AV Supports",
    volunteerTakeaway: "AV exists to support worship, communication, livestreaming, media, and ministry events with preparation and teamwork.",
    doList: [
      "Know whether you are serving worship, Bible study, a ministry event, a meeting, media production, or room support.",
      "Stay inside your assigned role and ask the lead before changing systems or workflows.",
      "Treat AV as ministry support, not just equipment operation."
    ],
    keepPrivate: "Do not publish internal approval authority, leadership reporting details, or full system ownership notes."
  },
  {
    id: "deadlines",
    title: "Communication & Deadlines",
    volunteerTakeaway: "Most AV problems are prevented before service starts. Late information may be accepted, but it is not guaranteed.",
    doList: [
      "Sunday service information should be ready by Friday at noon.",
      "Announcement information is due Tuesday at noon.",
      "General event details and media files should arrive at least 48 hours before the event.",
      "Major event production details should be shared 1-2 weeks ahead when possible.",
      "Media requests usually need 3-5 business days."
    ],
    keepPrivate: "Do not expose internal escalation chains, personal contact paths, or approval exceptions beyond the volunteer-facing rule."
  },
  {
    id: "requests",
    title: "How Requests Become AV Work",
    volunteerTakeaway: "A good request gives the team enough information to test, prepare, and avoid last-minute guessing.",
    doList: [
      "Confirm event name, date, time, room, contact person, and final decision-maker.",
      "Collect microphone, media playback, livestream, recording, Zoom, setup, and stage-change needs.",
      "Make sure files are submitted early enough to test before people arrive.",
      "Route changes through the assigned AV lead instead of making independent live changes."
    ],
    keepPrivate: "Do not publish private form links, account access details, Zoom credentials, or internal folder locations."
  },
  {
    id: "service-flow",
    title: "Service & Event Flow",
    volunteerTakeaway: "Live production works best when every volunteer knows the sequence: arrive, check, rehearse, serve, reset, report.",
    doList: [
      "Arrive early enough to check your assigned position.",
      "Confirm content, mics, cameras, graphics, stream/recording needs, and room setup with the lead.",
      "Operate during rehearsal or practice before being trusted with live responsibility.",
      "After service, help reset the area and report anything unusual."
    ],
    keepPrivate: "Do not publish room-by-room power sequences, switch locations, full routing diagrams, or detailed failure workarounds."
  },
  {
    id: "media",
    title: "Media & Graphics Standards",
    volunteerTakeaway: "Volunteer-facing media work should be readable, approved, properly timed, and safe to use online.",
    doList: [
      "Use large readable text, strong contrast, clean backgrounds, and 1080p landscape best practices for screens.",
      "Check names, dates, spelling, times, and approval status before playback.",
      "Confirm whether music, videos, clips, or guest content can be used in person, livestreamed, recorded, archived, or reposted.",
      "Ask before using content when copyright or privacy is unclear."
    ],
    keepPrivate: "Do not publish license account details, platform admin workflows, or content library locations."
  },
  {
    id: "issues",
    title: "When Something Goes Wrong",
    volunteerTakeaway: "The first job is to protect the service, notify the right lead, and document the issue after the moment passes.",
    doList: [
      "Stay calm and communicate the issue to the assigned lead.",
      "Use the approved backup or simplified option only when directed or trained.",
      "Keep local recording or service continuity in mind when livestream issues happen.",
      "Document the room, system affected, immediate action, temporary fix, follow-up need, and resolution status."
    ],
    keepPrivate: "Do not publish emergency bypass details, network escalation specifics, equipment vulnerabilities, or troubleshooting paths that require trained operators."
  }
];

export const privacyBoundaries = [
  "Vendor accounts, purchase workflows, order details, and budget information",
  "Login credentials, private links, Zoom account details, platform admin access, and folder paths",
  "Detailed room power-up sequences, switch locations, wiring/routing diagrams, and network dependencies",
  "Asset records such as order numbers, purchase dates, assigned inventory locations, and warranty notes",
  "Leadership-only approvals, HR context, staffing risks, and internal escalation details"
];

export const requestTemplates = [
  {
    id: "support",
    title: "General AV Support Request",
    audience: "Volunteer-friendly request prep",
    items: ["Event name", "Ministry/group", "Date and time", "Location", "Contact person", "Microphone needs", "Media playback needs", "Zoom/livestream/recording needs", "Setup logistics", "Files submitted at least 48 hours before event"]
  },
  {
    id: "highlights",
    title: "Ministry Highlights Submission",
    audience: "Volunteer-friendly media prep",
    items: ["Announcement title", "Ministry name", "Event date/time/location", "Registration/contact info", "Flyer/slide attached", "Script attached if ministry provides one", "Volunteer presenter assigned if ministry will record", "Submitted by Tuesday noon"]
  },
  {
    id: "major-event",
    title: "Major Event Planning Meeting Agenda",
    audience: "Volunteer prep with AV leads",
    items: ["Run of show", "Guest list", "Contact information", "Arrival times", "Soundcheck/rehearsal times", "Stage changes", "Input/mic list", "Lighting requests", "Graphics/media requests", "Livestream/recording needs", "Facilities needs", "Final decision-maker"]
  },
  {
    id: "incident",
    title: "AV Incident / Issue Report",
    audience: "Volunteer issue reporting",
    items: ["Date/Time", "Event/Service", "Room/Location", "System Affected", "Issue Description", "Immediate Action Taken", "Temporary Fix Used", "Follow-Up Needed", "Reported To", "Resolved? Yes/No", "Notes"]
  },
  {
    id: "contractor",
    title: "Leader Reference: Contractor Evaluation",
    audience: "Admin reference, not a volunteer training form",
    items: ["Attendance / participation", "Preparedness", "Technical skill", "Communication", "Professionalism", "Volunteer support/training", "Problem-solving", "Issue reporting", "Strengths", "Growth areas", "Renewal / role adjustment recommendation"]
  }
];
