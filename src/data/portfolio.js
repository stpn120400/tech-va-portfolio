// src/data/portfolio.js
// Projects updated to match the provided workflow screenshots + resume-deployed projects.
// Put your screenshots in: src/assets/projects/
// IMPORTANT: Filenames must match exactly.

import project1 from "../assets/projects/project1-content-repurposing.png";
import project2Escalation from "../assets/projects/project2-escalation-email.png";
import project2QuoteFollowUp from "../assets/projects/project2-quote-followup.png";
import project2Combined from "../assets/projects/project2-combined-automation.png";
import project3 from "../assets/projects/project3-leads-enrichment.png";
import project4 from "../assets/projects/project4-xero-to-asana.png";
import project5 from "../assets/projects/project5-gmail-drive-sort.png";
import project6 from "../assets/projects/project6-fb-messenger-ai.png";
import project7 from "../assets/projects/project7-ai-social-creator.png";

export const portfolioItems = [
  // --- Automation / AI Automation projects (from screenshots) ---
  {
    id: "p1-content-repurposing",
    title: "Project #1 — Content Repurposing Automation",
    description:
      "Automation that repurposes content from a single uploaded file by filtering inputs, generating AI outputs, and routing results into multiple publishing paths (e.g., Facebook Pages and LinkedIn).",
    techStack: ["Zapier", "Google Drive", "AI by Zapier", "Facebook Pages", "LinkedIn"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project1,
    type: "Automation",
  },
  {
    id: "p2-escalation-email",
    title: "Project #2.3 — Automated Email Response for Escalations",
    description:
      "Scheduled workflow that checks tasks and sends email responses for escalations, keeping communication consistent and reducing manual handling.",
    techStack: ["Zapier", "Schedule", "Asana", "Gmail"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project2Escalation,
    type: "Automation",
  },
  {
    id: "p2-quote-follow-up",
    title: "Project #2.4 — Quote Follow-up Automation",
    description:
      "Weekly scheduled automation that finds relevant tasks and sends quote follow-up emails to improve response rates and maintain consistent outreach.",
    techStack: ["Zapier", "Schedule", "Asana", "Gmail"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project2QuoteFollowUp,
    type: "Automation",
  },
  {
    id: "p2-combined-automation",
    title: "Project #2 — Combined Multi-step Client Workflow Automation",
    description:
      "End-to-end workflow triggered by task updates that branches into multiple paths (ready to start, no response, approved, paid & closed), creates folders/subtasks, and sends appropriate email sequences per service.",
    techStack: ["Zapier", "Asana", "Gmail", "Google Drive", "Paths/Router"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project2Combined,
    type: "Automation",
  },
  {
    id: "p3-leads-enrichment",
    title: "Project #3 — Automated Leads Enrichment",
    description:
      "Webhook-driven enrichment that formats incoming lead data, enriches via external lookup, routes by priority, logs high-priority leads to Sheets, notifies stakeholders, and emails outcomes.",
    techStack: ["Zapier", "Webhooks", "Formatter", "Google Sheets", "Slack", "Gmail"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project3,
    type: "Automation",
  },
  {
    id: "p4-xero-to-asana",
    title: "Project #4 — Export Xero Transactions → Upload CSV to Asana",
    description:
      "Pulls account transactions from Xero via API, routes/iterates records, writes and aggregates data in Google Sheets, then uploads the generated CSV/attachment to Asana for processing and tracking.",
    techStack: ["Make (Integromat)", "Xero API", "Google Sheets", "Iterator/Router", "Asana"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project4,
    type: "Automation",
  },
  {
    id: "p5-gmail-attachments-drive",
    title: "Project #5 — Auto-sort Gmail Attachments to Google Drive",
    description:
      "Watches Gmail, extracts attachments, optionally uses Gemini AI for processing, uploads files to Drive, logs metadata to Google Sheets, and sends confirmation emails for visibility.",
    techStack: ["Make (Integromat)", "Gmail", "Google Drive", "Google Sheets", "Gemini AI"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project5,
    type: "Automation",
  },
  {
    id: "p6-messenger-ai-agent",
    title: "Project #6 — Facebook Messenger AI Agent",
    description:
      "Webhook-based Messenger agent that filters events, fetches context, generates AI replies, triggers downstream actions via HTTP, and responds back through the webhook flow.",
    techStack: ["n8n", "Webhooks", "AI Agent", "HTTP Request", "Gemini Chat Model", "Memory"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project6,
    type: "AI Automation",
  },
  {
    id: "p7-ai-social-content",
    title: "Project #7 — AI Social Media Content Creator",
    description:
      "Scheduled pipeline that generates quote copy, checks duplicates in Google Sheets, fetches weather data, generates images, saves image URLs, and publishes to Facebook using Graph API.",
    techStack: ["n8n", "Schedule", "OpenWeatherMap", "Google Sheets", "Facebook Graph API", "Gemini Chat Model"],
    liveUrl: "#",
    sourceUrl: "#",
    image: project7,
    type: "AI Automation",
  },
];
