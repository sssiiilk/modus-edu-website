import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../lib/theme.jsx';
import { useBreakpoint } from '../lib/useBreakpoint.js';
import { Container, Button, Text } from '../lib/ui.jsx';
import { IconChevron, IconSearch, IconClose, IconArrow, IconMenu } from '../lib/icons.jsx';

const NAV_ITEMS = [
  {
    label: 'Колледж',
    children: [
      { label: 'О колледже', href: '#about' },
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

function handleNavAction(item, onNavigate, closeMenu) {
  if (item.label === 'Контакты') {
    const el = document.querySelector('#contacts-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (item.label === 'Новости') {
    const el = document.querySelector('#news-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  closeMenu?.();
}

function handleChildNav(child, onNavigate, closeMenu) {
  if (child.label === 'Специальности' || child.label === 'Образовательные программы') {
    onNavigate?.('programs');
  } else if (
    child.label.includes('Приёмная') ||
    child.label === 'Правила приёма' ||
    child.label === 'Подать заявку'
  ) {
    onNavigate?.('admissions');
  }
  closeMenu?.();
}

export default function SiteHeader({ onNavigate }) {
  const t = useTheme();
  const { isMobile, isDesktop } = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (isDesktop) {
      setMenuOpen(false);
      setMobileAccordion(null);
    }
  }, [isDesktop]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileAccordion(null);
  };

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
    borderBottom: `1px solid ${scrolled || menuOpen ? t.colors.border : 'transparent'}`,
    transition: 'all 0.3s ease',
  };

  return (
    <header style={headerStyles}>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 68,
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', flexShrink: 0 }}
            onClick={() => {
              closeMenu();
              onNavigate?.('home');
            }}
          >
            <img
              src="/assets/logo.png"
              alt="МОДУС"
              style={{ height: isMobile ? 36 : 44, width: 'auto' }}
            />
          </div>

          {isDesktop && (
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
                      if (!item.children) handleNavAction(item, onNavigate);
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
                    {item.children && (
                      <IconChevron
                        size={10}
                        color={t.colors.textSecondary}
                        direction={openDropdown === idx ? 'up' : 'down'}
                      />
                    )}
                  </button>

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
                      <div
                        style={{
                          backgroundColor: t.colors.surface,
                          borderRadius: t.radius.md,
                          boxShadow: t.shadow.xl,
                          border: `1px solid ${t.colors.border}`,
                          padding: '8px',
                          minWidth: 220,
                          animation: 'dropdownIn 0.15s ease',
                        }}
                      >
                        {item.children.map((child, ci) => (
                          <a
                            key={ci}
                            href={child.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenDropdown(null);
                              handleChildNav(child, onNavigate);
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
                            onMouseOver={(e) =>
                              (e.currentTarget.style.backgroundColor = t.colors.surfaceAlt)
                            }
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                          >
                            {child.highlight && (
                              <span
                                style={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  backgroundColor: t.colors.primary,
                                  flexShrink: 0,
                                }}
                              />
                            )}
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 6 : 10, marginLeft: 'auto' }}>
            {isDesktop && (
              <div style={{ position: 'relative' }}>
                {searchOpen ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 12px',
                      borderRadius: t.radius.sm,
                      border: `1.5px solid ${t.colors.primary}`,
                      backgroundColor: t.colors.surface,
                      animation: 'searchExpand 0.2s ease',
                    }}
                  >
                    <IconSearch size={16} color={t.colors.textSecondary} />
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setSearchOpen(false);
                          setSearchQuery('');
                        }
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
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 2,
                        display: 'flex',
                      }}
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
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = t.colors.surfaceAlt)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <IconSearch size={18} color={t.colors.textSecondary} />
                  </button>
                )}
              </div>
            )}

            {!isMobile && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  closeMenu();
                  onNavigate?.('admissions');
                }}
                icon={<IconArrow size={14} color="#fff" />}
              >
                Подать заявку
              </Button>
            )}

            {!isDesktop && (
              <button
                aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
                onClick={() => setMenuOpen((v) => !v)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  borderRadius: t.radius.sm,
                  border: 'none',
                  background: menuOpen ? t.colors.surfaceAlt : 'transparent',
                  cursor: 'pointer',
                }}
              >
                {menuOpen ? (
                  <IconClose size={20} color={t.colors.text} />
                ) : (
                  <IconMenu size={20} color={t.colors.text} />
                )}
              </button>
            )}
          </div>
        </div>
      </Container>

      {!isDesktop && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: t.colors.surface,
            zIndex: 999,
            overflowY: 'auto',
            animation: 'mobileMenuIn 0.2s ease',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Container>
            <nav style={{ padding: '16px 0 32px', display: 'flex', flexDirection: 'column' }}>
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  style={{ borderBottom: `1px solid ${t.colors.borderLight}` }}
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileAccordion(mobileAccordion === idx ? null : idx)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '16px 0',
                          border: 'none',
                          background: 'none',
                          fontFamily: t.fonts.body,
                          fontWeight: 600,
                          fontSize: 16,
                          color: t.colors.text,
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        {item.label}
                        <IconChevron
                          size={14}
                          color={t.colors.textTertiary}
                          direction={mobileAccordion === idx ? 'up' : 'down'}
                        />
                      </button>
                      {mobileAccordion === idx && (
                        <div style={{ paddingBottom: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {item.children.map((child, ci) => (
                            <a
                              key={ci}
                              href={child.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleChildNav(child, onNavigate, closeMenu);
                              }}
                              style={{
                                display: 'block',
                                padding: '12px 8px 12px 12px',
                                borderRadius: t.radius.sm,
                                fontFamily: t.fonts.body,
                                fontSize: 15,
                                fontWeight: child.highlight ? 600 : 400,
                                color: child.highlight ? t.colors.primary : t.colors.textSecondary,
                                textDecoration: 'none',
                                backgroundColor: child.highlight ? t.colors.primaryLight : 'transparent',
                              }}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavAction(item, onNavigate, closeMenu)}
                      style={{
                        width: '100%',
                        display: 'block',
                        padding: '16px 0',
                        border: 'none',
                        background: 'none',
                        fontFamily: t.fonts.body,
                        fontWeight: 600,
                        fontSize: 16,
                        color: t.colors.text,
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 28 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 14px',
                    borderRadius: t.radius.sm,
                    border: `1.5px solid ${t.colors.border}`,
                    marginBottom: 16,
                  }}
                >
                  <IconSearch size={16} color={t.colors.textTertiary} />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                    style={{
                      border: 'none',
                      outline: 'none',
                      fontFamily: t.fonts.body,
                      fontSize: 15,
                      flex: 1,
                      background: 'transparent',
                      color: t.colors.text,
                    }}
                  />
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ width: '100%' }}
                  onClick={() => {
                    closeMenu();
                    onNavigate?.('admissions');
                  }}
                  icon={<IconArrow size={16} color="#fff" />}
                >
                  Подать заявку
                </Button>
                <Text size="xs" tertiary style={{ marginTop: 16, textAlign: 'center', display: 'block' }}>
                  +7 (862) 555-18-40 · admission@modus-college.ru
                </Text>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
