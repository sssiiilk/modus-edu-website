/*
 * КАСТ — Header & Footer Layout Components
 */

/* ─── Navigation Data ─── */
const NAV_ITEMS = [
  {
    label: 'Техникум',
    children: [
      { label: 'О техникуме', href: '#about' },
      { label: 'История', href: '#history' },
      { label: 'Руководство', href: '#leadership' },
      { label: 'Документы', href: '#documents' },
      { label: 'Лицензия и аккредитация', href: '#accreditation' },
      { label: 'Материально-техническая база', href: '#facilities' },
    ],
  },
  {
    label: 'Абитуриентам',
    children: [
      { label: 'Приёмная кампания 2026', href: '#admissions', highlight: true },
      { label: 'Специальности', href: '#programs' },
      { label: 'Правила приёма', href: '#rules' },
      { label: 'Подать заявку', href: '#apply' },
      { label: 'Стоимость обучения', href: '#tuition' },
      { label: 'Общежитие', href: '#dormitory' },
    ],
  },
  {
    label: 'Образование',
    children: [
      { label: 'Образовательные программы', href: '#edu-programs' },
      { label: 'Расписание', href: '#schedule' },
      { label: 'Электронная библиотека', href: '#library' },
      { label: 'Практика и стажировки', href: '#internships' },
    ],
  },
  {
    label: 'Студентам',
    children: [
      { label: 'Личный кабинет', href: '#portal' },
      { label: 'Расписание занятий', href: '#timetable' },
      { label: 'Стипендии и гранты', href: '#scholarships' },
      { label: 'Студенческая жизнь', href: '#life' },
      { label: 'Трудоустройство', href: '#career' },
    ],
  },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#contacts' },
];

const FOOTER_LINKS = [
  {
    title: 'Техникум',
    links: [
      { label: 'О техникуме', href: '#' },
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
      { label: 'г. Краснодар, ул. Октябрьская, 25', href: '#', icon: 'map' },
      { label: '+7 (861) 262-10-70', href: 'tel:+78612621070', icon: 'phone' },
      { label: 'info@kast-krd.ru', href: 'mailto:info@kast-krd.ru', icon: 'mail' },
    ],
  },
];

/* ─── Header ─── */
function SiteHeader({ currentPage, onNavigate, onSearch }) {
  const t = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const dropdownTimeout = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDropdownEnter = (idx) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(idx);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,1)',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: `1px solid ${scrolled ? t.colors.border : 'transparent'}`,
    transition: 'all 0.3s ease',
  };

  return (
    <header style={headerStyles}>
      <Container>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}>
          {/* Logo */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', flexShrink: 0 }}
            onClick={() => onNavigate && onNavigate('home')}
          >
            <img src="assets/logo.png" alt="КАСТ" style={{ height: 44, width: 'auto' }} />
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 48 }}>
            {NAV_ITEMS.map((item, idx) => (
              <div
                key={idx}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.children && handleDropdownEnter(idx)}
                onMouseLeave={item.children ? handleDropdownLeave : undefined}
              >
                <button
                  onClick={() => {
                    if (!item.children && item.href) {
                      if (item.label === 'Контакты') {
                        const el = document.querySelector('#contacts-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                    if (item.label === 'Новости') {
                      const el = document.querySelector('#news-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 14px',
                    borderRadius: t.radius.sm,
                    border: 'none',
                    background: openDropdown === idx ? t.colors.surfaceAlt : 'transparent',
                    fontFamily: t.fonts.body,
                    fontWeight: 500,
                    fontSize: 14,
                    color: t.colors.text,
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                  {item.children && <IconChevron size={10} color={t.colors.textSecondary} direction={openDropdown === idx ? 'up' : 'down'} />}
                </button>

                {/* Dropdown */}
                {item.children && openDropdown === idx && (
                  <div
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={handleDropdownLeave}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: -8,
                      paddingTop: 8,
                      zIndex: 100,
                    }}
                  >
                    <div style={{
                      backgroundColor: t.colors.surface,
                      borderRadius: t.radius.md,
                      boxShadow: t.shadow.xl,
                      border: `1px solid ${t.colors.border}`,
                      padding: '8px',
                      minWidth: 220,
                      animation: 'dropdownIn 0.15s ease',
                    }}>
                      {item.children.map((child, ci) => (
                        <a
                          key={ci}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdown(null);
                            if (child.label === 'Специальности' || child.label === 'Образовательные программы') {
                              onNavigate && onNavigate('programs');
                            } else if (child.label.includes('Приёмная') || child.label === 'Правила приёма' || child.label === 'Подать заявку') {
                              onNavigate && onNavigate('admissions');
                            }
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '10px 14px',
                            borderRadius: t.radius.xs + 2,
                            fontFamily: t.fonts.body,
                            fontSize: 14,
                            fontWeight: child.highlight ? 600 : 400,
                            color: child.highlight ? t.colors.primary : t.colors.text,
                            textDecoration: 'none',
                            transition: 'background 0.12s',
                            cursor: 'pointer',
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = t.colors.surfaceAlt}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          {child.highlight && <span style={{
                            width: 6, height: 6, borderRadius: '50%',
                            backgroundColor: t.colors.primary, flexShrink: 0,
                          }} />}
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              {searchOpen ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 12px',
                  borderRadius: t.radius.sm,
                  border: `1.5px solid ${t.colors.primary}`,
                  backgroundColor: t.colors.surface,
                  animation: 'searchExpand 0.2s ease',
                }}>
                  <IconSearch size={16} color={t.colors.textSecondary} />
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(''); }
                    }}
                    placeholder="Поиск..."
                    style={{
                      border: 'none',
                      outline: 'none',
                      fontFamily: t.fonts.body,
                      fontSize: 14,
                      width: 200,
                      background: 'transparent',
                      color: t.colors.text,
                    }}
                  />
                  <button
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, display: 'flex' }}
                  >
                    <IconClose size={14} color={t.colors.textTertiary} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: t.radius.sm,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = t.colors.surfaceAlt}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <IconSearch size={18} color={t.colors.textSecondary} />
                </button>
              )}
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate && onNavigate('admissions')}
              icon={<IconArrow size={14} color="#fff" />}
            >
              Подать заявку
            </Button>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes searchExpand {
          from { width: 36px; opacity: 0.5; }
          to { width: auto; opacity: 1; }
        }
      `}</style>
    </header>
  );
}

/* ─── Footer ─── */
function SiteFooter() {
  const t = useTheme();

  const iconMap = {
    map: <IconMap size={16} color={t.colors.textTertiary} />,
    phone: <IconPhone size={16} color={t.colors.textTertiary} />,
    mail: <IconMail size={16} color={t.colors.textTertiary} />,
  };

  return (
    <footer id="contacts-section" style={{ backgroundColor: t.colors.text, paddingTop: 64, paddingBottom: 32 }}>
      <Container>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr repeat(3, 1fr)',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {FOOTER_LINKS.map((col, i) => (
            <div key={i}>
              <Text size="sm" style={{
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: 20,
                fontSize: 11,
              }}>{col.title}</Text>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((link, li) => (
                  <a key={li} href={link.href} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    fontFamily: t.fonts.body,
                    fontSize: 14,
                    transition: 'color 0.15s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.icon && iconMap[link.icon]}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="assets/logo.png" alt="КАСТ" style={{ height: 32, filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
            <Text size="xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              © 2026 ГБПОУ КК «КАСТ». Все права защищены.
            </Text>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Политика конфиденциальности', 'Карта сайта', 'Доступная среда'].map((l, i) => (
              <a key={i} href="#" style={{
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                fontFamily: t.fonts.body,
                fontSize: 12,
                transition: 'color 0.15s',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, NAV_ITEMS, FOOTER_LINKS });
