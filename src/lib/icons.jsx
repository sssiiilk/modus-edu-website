export function IconArrow({ size = 16, color = 'currentColor', direction = 'right' }) {
  const rotation = { right: 0, down: 90, left: 180, up: 270 }[direction];
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSearch({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="5.5" stroke={color} strokeWidth="1.5" />
      <path d="M11.5 11.5L16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevron({ size = 12, color = 'currentColor', direction = 'down' }) {
  const rotation = { down: 0, right: -90, up: 180, left: 90 }[direction];
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s' }}>
      <path d="M3 4.5L6 7.5L9 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClose({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCalendar({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="13" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M2 7h14M6 1v4M12 1v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="1.5" />
      <path d="M9 5v4l3 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUsers({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="5" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M1 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="6" r="2" stroke={color} strokeWidth="1.3" />
      <path d="M14 11c2 .5 3.5 2.2 3.5 4.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconBook({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 3C7 1.5 4 1.5 2 3v12c2-1 5-1 7 1 2-2 5-2 7-1V3c-2-1.5-5-1.5-7 0z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3v13" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconMap({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 2C6 2 4 4.5 4 7.5 4 12 9 16 9 16s5-4 5-8.5C14 4.5 12 2 9 2z" stroke={color} strokeWidth="1.5" />
      <circle cx="9" cy="7.5" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconPhone({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M2 3.5C2 2.67 2.67 2 3.5 2h2.26c.37 0 .7.24.8.6L7.4 5.7c.1.4-.03.82-.35 1.06l-.7.52a8.5 8.5 0 004.37 4.37l.52-.7c.24-.32.66-.45 1.06-.35l3.1.84c.36.1.6.43.6.8v2.26c0 .83-.67 1.5-1.5 1.5C7.61 16 2 10.39 2 3.5z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconMail({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="12" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M2 5l7 5 7-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGrad({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M1 7l8-4 8 4-8 4-8-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 9v4.5c0 1-2.2 2.5-5 2.5s-5-1.5-5-2.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBuilding({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="8" height="14" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="11" y="7" width="5" height="9" rx="1" stroke={color} strokeWidth="1.5" />
      <path d="M6 5h2M6 8h2M6 11h2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconFilter({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M2 3h14l-5 6v5l-4 2V9L2 3z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FacilityIconPC({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="14" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M10 22h8M14 18v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 9h4M8 12h6" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function FacilityIconScreen({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="15" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M9 23h10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="12" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M14 9v0.5M14 14.5v0.5M11 12h0.5M16.5 12h0.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function FacilityIconLibrary({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 6h5l5 2 5-2h5v16h-5l-5 2-5-2H4V6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 8v16" stroke={color} strokeWidth="1.8" />
      <path d="M7 10h3M7 13h3M17 10h3M17 13h3" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function FacilityIconSport({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" />
      <path d="M11 4v14M4 11h14" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <path d="M5.1 6.5C7 8.5 9 10 11 11c2-1 4-2.5 5.9-4.5" stroke={color} strokeWidth="1.3" opacity="0.4" />
      <path d="M19 17l5 5M24 17l-5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function FacilityIconDining({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 4v8c0 2 1.5 3.5 3.5 3.5S15 14 15 12V4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.5 12v12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 4v5c0 2-1 3-2 3.5V24" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 4c1.5 1 2.5 3 2.5 5s-1 3-2.5 3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
