import { useTheme } from '../lib/theme.jsx';
import { useBreakpoint } from '../lib/useBreakpoint.js';
import { Container, Text } from '../lib/ui.jsx';
import { IconMap, IconPhone, IconMail } from '../lib/icons.jsx';

const FOOTER_LINKS = [
  {
    title: 'Колледж',
    links: [
      { label: 'О колледже', href: '#' },
      { label: 'История', href: '#' },
      { label: 'Руководство', href: '#' },
      { label: 'Документы', href: '#' },
      { label: 'Вакансии', href: '#' },
    ],
  },
  {
    title: 'Образование',
    links: [
      { label: 'Специальности', href: '#' },
      { label: 'Расписание', href: '#' },
      { label: 'Библиотека', href: '#' },
      { label: 'Практика', href: '#' },
    ],
  },
  {
    title: 'Поступающим',
    links: [
      { label: 'Приёмная комиссия', href: '#' },
      { label: 'Правила приёма', href: '#' },
      { label: 'Подать заявку', href: '#' },
      { label: 'Стоимость', href: '#' },
      { label: 'Общежитие', href: '#' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'г. Казань, ул. Профессора Камалеева, 8', href: '#', icon: 'map' },
      { label: '+7 (862) 555-18-40', href: 'tel:+78625551840', icon: 'phone' },
      { label: 'admission@modus-college.ru', href: 'mailto:admission@modus-college.ru', icon: 'mail' },
    ],
  },
];

export default function SiteFooter() {
  const t = useTheme();
  const { isMobile } = useBreakpoint();

  const iconMap = {
    map: <IconMap size={16} color={t.colors.textTertiary} />,
    phone: <IconPhone size={16} color={t.colors.textTertiary} />,
    mail: <IconMail size={16} color={t.colors.textTertiary} />,
  };

  return (
    <footer
      id="contacts-section"
      style={{
        backgroundColor: t.colors.text,
        paddingTop: isMobile ? 48 : 64,
        paddingBottom: 32,
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : '1.3fr repeat(3, 1fr)',
            gap: isMobile ? 28 : 48,
            paddingBottom: isMobile ? 32 : 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {FOOTER_LINKS.map((col, i) => (
            <div
              key={i}
              style={
                isMobile && i === FOOTER_LINKS.length - 1
                  ? { gridColumn: '1 / -1' }
                  : undefined
              }
            >
              <Text
                size="sm"
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                  fontSize: 11,
                }}
              >
                {col.title}
              </Text>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      color: 'rgba(255,255,255,0.65)',
                      textDecoration: 'none',
                      fontFamily: t.fonts.body,
                      fontSize: 14,
                      transition: 'color 0.15s',
                      lineHeight: 1.4,
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >
                    {link.icon && (
                      <span style={{ flexShrink: 0, marginTop: 2 }}>{iconMap[link.icon]}</span>
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            paddingTop: 24,
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="/assets/logo.png"
              alt="МОДУС"
              style={{ height: 32, filter: 'brightness(0) invert(1)', opacity: 0.5 }}
            />
            <Text size="xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              © 2026 Колледж «МОДУС». Все права защищены.
            </Text>
          </div>
          <div
            style={{
              display: 'flex',
              gap: isMobile ? 16 : 24,
              flexWrap: 'wrap',
            }}
          >
            {['Политика конфиденциальности', 'Карта сайта', 'Доступная среда'].map((l, i) => (
              <a
                key={i}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  fontFamily: t.fonts.body,
                  fontSize: 12,
                  transition: 'color 0.15s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
