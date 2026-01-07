import { OpenPanel } from '@openpanel/web'

export const op = new OpenPanel({
  clientId: import.meta.env.PUBLIC_OPENPANEL_CLIENT_ID || '',
  trackScreenViews: true,
  trackOutgoingLinks: true,
})

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  op.track(name, properties)
}

export function identifyUser(userId: string, traits?: Record<string, unknown>) {
  op.identify({ profileId: userId, ...traits })
}
