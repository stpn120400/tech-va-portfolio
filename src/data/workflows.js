// Structured data: Workflow patterns and system characteristics
export const workflowPatterns = [
  {
    key: 'multi-step-routers',
    label: 'Multi-step automation with routers & conditions',
    icon: 'Zap',
  },
  {
    key: 'ai-assisted',
    label: 'AI-assisted content & response systems',
    icon: 'Lightbulb',
  },
  {
    key: 'crm-pipeline',
    label: 'CRM-connected lead pipelines',
    icon: 'Briefcase',
  },
  {
    key: 'ops-webhooks',
    label: 'Email, Sheets, and webhook-driven operations',
    icon: 'Mail',
  },
]

export const systemCharacteristics = [
  { key: 'reliable', label: 'Reliable & documented', icon: 'CheckCircle2' },
  { key: 'handoff', label: 'Easy to hand off', icon: 'ArrowRight' },
  { key: 'scalable', label: 'Scalable & modular', icon: 'Settings' },
  { key: 'error-aware', label: 'Error-aware & monitored', icon: 'Shield' },
]

// Provide a default export for resilience in dev/preview environments
export default { workflowPatterns, systemCharacteristics }
