/*
 * КАСТ Design System — Tokens & Base Components
 * Evolved from Figma: Stolzl/Manrope, deep indigo primary, large radii
 */

/* ─── Theme Provider ─── */
const ThemeContext = React.createContext(null);

function useTheme() {
  return React.useContext(ThemeContext);
}

function getTheme(tweaks = {}) {
  const primary = tweaks.primaryColor || '#29166F';
  const radius = tweaks.cardRadius ?? 28;
  const density = tweaks.density ?? 1; // 0.85 = compact, 1 = normal, 1.15 = airy

  return {
    colors: {
      primary,
      primaryLight: adjustAlpha(primary, 0.08),
      primaryMid: adjustAlpha(primary, 0.15),
      accent: tweaks.accentColor || '#8B6914',
      bg: '#F5F6F9',
      surface: '#FFFFFF',
      surfaceAlt: '#EEF0F4',
      text: '#0F172A',
      textSecondary: '#475569',
      textTertiary: '#94A3B8',
      border: '#E2E8F0',
      borderLight: '#F1F5F9',
      success: '#16A34A',
      warning: '#D97706',
      error: '#DC2626',
    },
    fonts: {
      heading: tweaks.headingFont || "'Stolzl', 'Manrope', sans-serif",
      body: "'Manrope', sans-serif",
    },
    radius: {
      xs: Math.round(radius * 0.2),
      sm: Math.round(radius * 0.35),
      md: Math.round(radius * 0.55),
      lg: radius,
      xl: Math.round(radius * 1.4),
      full: 9999,
    },
    spacing: (n) => `${n * 8 * density}px`,
    shadow: {
      sm: '0 1px 2px rgba(0,0,0,0.04)',
      md: '0 4px 12px rgba(0,0,0,0.06)',
      lg: '0 8px 30px rgba(0,0,0,0.08)',
      xl: '0 16px 48px rgba(0,0,0,0.10)',
    },
  };
}

function adjustAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ─── Typography Components ─── */
function Heading({ level = 1, children, style, ...props }) {
  const t = useTheme();
  const sizes = {
    1: { fontSize: 56, lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 500 },
    2: { fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 500 },
    3: { fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 500 },
    4: { fontSize: 24, lineHeight: 1.3, letterSpacing: '-0.015em', fontWeight: 500 },
    5: { fontSize: 18, lineHeight: 1.4, letterSpacing: '-0.01em', fontWeight: 600 },
  };
  const s = sizes[level] || sizes[3];
  const Tag = `h${Math.min(level, 6)}`;
  return (
    <Tag style={{
      fontFamily: t.fonts.heading,
      margin: 0,
      color: t.colors.text,
      ...s,
      ...style,
    }} {...props}>{children}</Tag>
  );
}

function Text({ size = 'md', secondary, tertiary, children, style, as: Tag = 'p', ...props }) {
  const t = useTheme();
  const sizes = {
    xs: { fontSize: 12, lineHeight: 1.5 },
    sm: { fontSize: 14, lineHeight: 1.6 },
    md: { fontSize: 16, lineHeight: 1.65 },
    lg: { fontSize: 18, lineHeight: 1.6 },
    xl: { fontSize: 20, lineHeight: 1.55 },
  };
  const color = tertiary ? t.colors.textTertiary : secondary ? t.colors.textSecondary : t.colors.text;
  return (
    <Tag style={{
      fontFamily: t.fonts.body,
      margin: 0,
      color,
      fontWeight: 400,
      ...sizes[size],
      ...style,
    }} {...props}>{children}</Tag>
  );
}

function Label({ children, style, ...props }) {
  const t = useTheme();
  return (
    <span style={{
      fontFamily: t.fonts.body,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: t.colors.textTertiary,
      ...style,
    }} {...props}>{children}</span>
  );
}

/* ─── Button ─── */
function Button({ variant = 'primary', size = 'md', children, icon, style, ...props }) {
  const t = useTheme();
  const [hovered, setHovered] = React.useState(false);

  const variants = {
    primary: {
      bg: t.colors.primary,
      bgHover: t.colors.text,
      color: '#fff',
      border: 'none',
    },
    secondary: {
      bg: 'transparent',
      bgHover: t.colors.primaryLight,
      color: t.colors.primary,
      border: `1.5px solid ${t.colors.primary}`,
    },
    ghost: {
      bg: 'transparent',
      bgHover: t.colors.surfaceAlt,
      color: t.colors.text,
      border: 'none',
    },
    accent: {
      bg: t.colors.surface,
      bgHover: t.colors.surfaceAlt,
      color: t.colors.text,
      border: `1px solid ${t.colors.border}`,
    },
  };

  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13, gap: 6, height: 36 },
    md: { padding: '10px 24px', fontSize: 14, gap: 8, height: 42 },
    lg: { padding: '14px 32px', fontSize: 15, gap: 10, height: 50 },
  };

  const v = variants[variant];
  const s = sizes[size];

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: t.fonts.body,
        fontWeight: 600,
        fontSize: s.fontSize,
        lineHeight: 1,
        padding: s.padding,
        height: s.height,
        borderRadius: t.radius.sm + 2,
        backgroundColor: hovered ? v.bgHover : v.bg,
        color: v.color,
        border: v.border,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
        transform: hovered ? 'translateY(-1px)' : 'none',
        ...style,
      }}
      {...props}
    >
      {children}
      {icon && <span style={{ display: 'flex', marginLeft: 2 }}>{icon}</span>}
    </button>
  );
}

/* ─── Card ─── */
function Card({ children, padding, hover, onClick, style, ...props }) {
  const t = useTheme();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        backgroundColor: t.colors.surface,
        borderRadius: t.radius.lg,
        padding: padding || t.spacing(4),
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hovered && hover ? t.shadow.lg : t.shadow.sm,
        transform: hovered && hover ? 'translateY(-4px)' : 'none',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/* ─── Badge / Tag ─── */
function Badge({ children, color, style }) {
  const t = useTheme();
  const c = color || t.colors.primary;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: t.radius.full,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: t.fonts.body,
      backgroundColor: adjustAlpha(c, 0.08),
      color: c,
      letterSpacing: '0.02em',
      ...style,
    }}>{children}</span>
  );
}

/* ─── Image Placeholder ─── */
function ImagePlaceholder({ label, aspectRatio, style, ...props }) {
  const t = useTheme();
  return (
    <div style={{
      width: '100%',
      aspectRatio: aspectRatio || '16/9',
      backgroundColor: t.colors.surfaceAlt,
      borderRadius: t.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      background: `repeating-linear-gradient(
        -45deg,
        ${t.colors.surfaceAlt},
        ${t.colors.surfaceAlt} 8px,
        ${t.colors.borderLight} 8px,
        ${t.colors.borderLight} 9px
      )`,
      ...style,
    }} {...props}>
      <span style={{
        fontFamily: 'monospace',
        fontSize: 13,
        color: t.colors.textTertiary,
        padding: '8px 16px',
        borderRadius: t.radius.xs,
        backgroundColor: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        maxWidth: '80%',
      }}>{label || 'image placeholder'}</span>
    </div>
  );
}

/* ─── Container ─── */
function Container({ children, style, narrow, ...props }) {
  return (
    <div style={{
      maxWidth: narrow ? 960 : 1200,
      margin: '0 auto',
      padding: '0 40px',
      width: '100%',
      boxSizing: 'border-box',
      ...style,
    }} {...props}>{children}</div>
  );
}

/* ─── Section ─── */
function Section({ children, bg, style, ...props }) {
  const t = useTheme();
  return (
    <section style={{
      padding: `${t.spacing(10)} 0`,
      backgroundColor: bg || 'transparent',
      ...style,
    }} {...props}>{children}</section>
  );
}

/* ─── Divider ─── */
function Divider({ style }) {
  const t = useTheme();
  return <hr style={{ border: 'none', borderTop: `1px solid ${t.colors.border}`, margin: 0, ...style }} />;
}

/* ─── Icons (simple SVG) ─── */
function IconArrow({ size = 16, color = 'currentColor', direction = 'right' }) {
  const rotation = { right: 0, down: 90, left: 180, up: 270 }[direction];
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconSearch({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="5.5" stroke={color} strokeWidth="1.5"/>
      <path d="M11.5 11.5L16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconChevron({ size = 12, color = 'currentColor', direction = 'down' }) {
  const rotation = { down: 0, right: -90, up: 180, left: 90 }[direction];
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s' }}>
      <path d="M3 4.5L6 7.5L9 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconClose({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconCalendar({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="13" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M2 7h14M6 1v4M12 1v4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconClock({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="1.5"/>
      <path d="M9 5v4l3 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCheck({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconUsers({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="5" r="3" stroke={color} strokeWidth="1.5"/>
      <path d="M1 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="13" cy="6" r="2" stroke={color} strokeWidth="1.3"/>
      <path d="M14 11c2 .5 3.5 2.2 3.5 4.5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconBook({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 3C7 1.5 4 1.5 2 3v12c2-1 5-1 7 1 2-2 5-2 7-1V3c-2-1.5-5-1.5-7 0z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3v13" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

function IconMap({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M9 2C6 2 4 4.5 4 7.5 4 12 9 16 9 16s5-4 5-8.5C14 4.5 12 2 9 2z" stroke={color} strokeWidth="1.5"/>
      <circle cx="9" cy="7.5" r="2" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

function IconPhone({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M2 3.5C2 2.67 2.67 2 3.5 2h2.26c.37 0 .7.24.8.6L7.4 5.7c.1.4-.03.82-.35 1.06l-.7.52a8.5 8.5 0 004.37 4.37l.52-.7c.24-.32.66-.45 1.06-.35l3.1.84c.36.1.6.43.6.8v2.26c0 .83-.67 1.5-1.5 1.5C7.61 16 2 10.39 2 3.5z" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

function IconMail({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M2 5l7 5 7-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconGrad({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M1 7l8-4 8 4-8 4-8-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 9v4.5c0 1-2.2 2.5-5 2.5s-5-1.5-5-2.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 7v5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconBuilding({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="8" height="14" rx="1" stroke={color} strokeWidth="1.5"/>
      <rect x="11" y="7" width="5" height="9" rx="1" stroke={color} strokeWidth="1.5"/>
      <path d="M6 5h2M6 8h2M6 11h2" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function IconFilter({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M2 3h14l-5 6v5l-4 2V9L2 3z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMenu({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Stat Counter (animated) ─── */
function AnimatedNumber({ value, suffix = '', duration = 1500 }) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ─── Scroll Reveal ─── */
function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Export ─── */
Object.assign(window, {
  ThemeContext, useTheme, getTheme, adjustAlpha,
  Heading, Text, Label, Button, Card, Badge,
  ImagePlaceholder, Container, Section, Divider, Reveal, AnimatedNumber,
  IconArrow, IconSearch, IconChevron, IconClose, IconCalendar, IconClock,
  IconCheck, IconUsers, IconBook, IconMap, IconPhone, IconMail,
  IconGrad, IconBuilding, IconFilter, IconMenu,
});
