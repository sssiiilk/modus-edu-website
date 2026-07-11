import { useState, useEffect, useRef } from 'react';
import { useTheme } from './theme.jsx';
import { useBreakpoint } from './useBreakpoint.js';

export function Heading({ level = 1, children, style, ...props }) {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const sizes = {
    1: { fontSize: isMobile ? 32 : 56, lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 500 },
    2: { fontSize: isMobile ? 28 : 40, lineHeight: 1.12, letterSpacing: '-0.025em', fontWeight: 500 },
    3: { fontSize: isMobile ? 24 : 32, lineHeight: 1.2, letterSpacing: '-0.02em', fontWeight: 500 },
    4: { fontSize: isMobile ? 20 : 24, lineHeight: 1.3, letterSpacing: '-0.015em', fontWeight: 500 },
    5: { fontSize: 18, lineHeight: 1.4, letterSpacing: '-0.01em', fontWeight: 600 },
  };
  const s = sizes[level] || sizes[3];
  const Tag = `h${Math.min(level, 6)}`;
  return (
    <Tag
      style={{
        fontFamily: t.fonts.heading,
        margin: 0,
        color: t.colors.text,
        ...s,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Text({ size = 'md', secondary, tertiary, children, style, as: Tag = 'p', ...props }) {
  const t = useTheme();
  const sizes = {
    xs: { fontSize: 12, lineHeight: 1.5 },
    sm: { fontSize: 14, lineHeight: 1.6 },
    md: { fontSize: 16, lineHeight: 1.65 },
    lg: { fontSize: 18, lineHeight: 1.6 },
    xl: { fontSize: 20, lineHeight: 1.55 },
  };
  const color = tertiary
    ? t.colors.textTertiary
    : secondary
      ? t.colors.textSecondary
      : t.colors.text;
  return (
    <Tag
      style={{
        fontFamily: t.fonts.body,
        margin: 0,
        color,
        fontWeight: 400,
        ...sizes[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Label({ children, style, ...props }) {
  const t = useTheme();
  return (
    <span
      style={{
        fontFamily: t.fonts.body,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: t.colors.textTertiary,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export function Button({ variant = 'primary', size = 'md', children, icon, style, ...props }) {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);

  const variants = {
    primary: { bg: t.colors.primary, bgHover: t.colors.text, color: '#fff', border: 'none' },
    secondary: {
      bg: 'transparent',
      bgHover: t.colors.primaryLight,
      color: t.colors.primary,
      border: `1.5px solid ${t.colors.primary}`,
    },
    ghost: { bg: 'transparent', bgHover: t.colors.surfaceAlt, color: t.colors.text, border: 'none' },
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
        whiteSpace: style?.width === '100%' ? 'normal' : 'nowrap',
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

export function Card({ children, padding, hover, onClick, style, ...props }) {
  const t = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        backgroundColor: t.colors.surface,
        borderRadius: t.radius.lg,
        padding: padding ?? t.spacing(4),
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

export function Badge({ children, color, style }) {
  const t = useTheme();
  const c = color || t.colors.primary;
  const r = parseInt(c.slice(1, 3), 16);
  const g = parseInt(c.slice(3, 5), 16);
  const b = parseInt(c.slice(5, 7), 16);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: t.radius.full,
        fontSize: 12,
        fontWeight: 600,
        fontFamily: t.fonts.body,
        backgroundColor: `rgba(${r},${g},${b},0.08)`,
        color: c,
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function ImagePlaceholder({ label, aspectRatio, style, ...props }) {
  const t = useTheme();
  return (
    <div
      style={{
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
      }}
      {...props}
    >
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 13,
          color: t.colors.textTertiary,
          padding: '8px 16px',
          borderRadius: t.radius.xs,
          backgroundColor: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          maxWidth: '80%',
        }}
      >
        {label || 'image placeholder'}
      </span>
    </div>
  );
}

export function Container({ children, style, narrow, ...props }) {
  const { isMobile } = useBreakpoint();
  return (
    <div
      style={{
        maxWidth: narrow ? 960 : 1200,
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 40px',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({ children, bg, style, ...props }) {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  return (
    <section
      style={{
        padding: isMobile ? `${t.spacing(6)} 0` : `${t.spacing(10)} 0`,
        backgroundColor: bg || 'transparent',
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  );
}

export function Divider({ style }) {
  const t = useTheme();
  return <hr style={{ border: 'none', borderTop: `1px solid ${t.colors.border}`, margin: 0, ...style }} />;
}

export function AnimatedNumber({ value, suffix = '', duration = 1500 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
