/**
 * EventVerse Maintenance Mode Configuration
 * Built for TinkerHub SBCE
 *
 * How to control Maintenance Mode:
 *
 * 1. In Vercel Environment Variables:
 *    Set `VITE_MAINTENANCE_MODE="true"` to activate maintenance mode.
 *    Set `VITE_MAINTENANCE_MODE="false"` to restore normal site operation.
 *
 * 2. In Local Code:
 *    Change `DEFAULT_MAINTENANCE_MODE = true` to `false` below.
 *
 * 3. In Browser URL (for testing & verification):
 *    Add `?mode=maintenance` to force maintenance view.
 *    Add `?mode=app` or `?mode=normal` to preview the reversible normal application view.
 */

// Default state when environment variable is not defined:
export const DEFAULT_MAINTENANCE_MODE = true;

/**
 * Checks whether Maintenance Mode is currently active.
 * Prioritizes URL overrides for live testing, then Vite env var, then default.
 */
export function getInitialMaintenanceState(): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    if (modeParam === 'maintenance') return true;
    if (modeParam === 'app' || modeParam === 'normal' || modeParam === 'live') return false;
  }

  // Vite environment variable check
  const envMode = import.meta.env.VITE_MAINTENANCE_MODE;
  if (envMode !== undefined && envMode !== '') {
    return envMode === 'true' || envMode === '1';
  }

  return DEFAULT_MAINTENANCE_MODE;
}

export const MAINTENANCE_CONFIG = {
  platformName: 'EventVerse',
  organization: 'TinkerHub SBCE',
  statusBadge: 'SYSTEM MAINTENANCE',
  headline: "WE'LL BE BACK SOON.",
  description:
    "We're performing essential system maintenance to make EventVerse better for everyone. Our team is working to restore the platform as soon as possible.",
  statusDetails: {
    status: 'Temporarily Unavailable',
    platform: 'EventVerse',
    activity: 'System maintenance',
    message: "We're working to restore access.",
  },
  secondaryNotice: {
    title: 'EVENTVERSE IS TEMPORARILY UNAVAILABLE',
    subtitle: 'We appreciate your patience while we work to restore access.',
  },
  footer: {
    copyright: '© 2026 EventVerse · TinkerHub SBCE',
    tagline: 'Thank you for your patience.',
  },
} as const;
