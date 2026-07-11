import { useState } from 'react';
import { useTheme, adjustAlpha } from '../lib/theme.jsx';
import { useBreakpoint } from '../lib/useBreakpoint.js';
import {
  Heading,
  Text,
  Button,
  Card,
  Badge,
  Container,
  Section,
  Reveal,
} from '../lib/ui.jsx';
import {
  IconArrow,
  IconSearch,
  IconChevron,
  IconClose,
  IconBuilding,
} from '../lib/icons.jsx';
import { ALL_PROGRAMS, CATEGORIES, CATEGORY_COLORS } from '../lib/programs.js';

export default function ProgramsPage({ onNavigate }) {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [sortBy, setSortBy] = useState('name');

  const filtered = ALL_PROGRAMS.filter((p) => activeCategory === 'Все' || p.category === activeCategory)
    .filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name, 'ru');
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
      if (sortBy === 'budget') return b.budget - a.budget;
      return 0;
    });

  return (
    <div style={{ paddingTop: isMobile ? 88 : 100, minHeight: '100vh' }}>
      <Section style={{ paddingTop: 32, paddingBottom: isMobile ? 28 : 48 }}>
        <Container>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <button
                onClick={() => onNavigate && onNavigate('home')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: t.fonts.body,
                  fontSize: 14,
                  color: t.colors.textTertiary,
                  padding: 0,
                }}
              >
                Главная
              </button>
              <IconChevron size={10} color={t.colors.textTertiary} direction="right" />
              <Text size="sm" style={{ color: t.colors.primary, fontWeight: 500 }}>
                Специальности
              </Text>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Heading level={1} style={{ fontSize: isMobile ? 32 : 48, marginBottom: 12 }}>
              Специальности
            </Heading>
            <Text size={isMobile ? 'md' : 'lg'} secondary style={{ maxWidth: 600 }}>
              11 направлений подготовки по дизайну среды, инженерии, цифровым сервисам и городским технологиям
            </Text>
          </Reveal>
        </Container>
      </Section>

      <Section
        bg={t.colors.bg}
        style={{ paddingTop: 20, paddingBottom: 20, position: 'sticky', top: 68, zIndex: 50 }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'stretch' : 'center',
              justifyContent: 'space-between',
              gap: isMobile ? 12 : 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 6,
                flexWrap: 'nowrap',
                flex: 1,
                overflowX: isMobile ? 'auto' : 'visible',
                WebkitOverflowScrolling: 'touch',
                paddingBottom: isMobile ? 4 : 0,
                marginLeft: isMobile ? -4 : 0,
                marginRight: isMobile ? -4 : 0,
                paddingLeft: isMobile ? 4 : 0,
                paddingRight: isMobile ? 4 : 0,
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: isMobile ? '8px 14px' : '8px 18px',
                    borderRadius: t.radius.full,
                    border: `1.5px solid ${activeCategory === cat ? t.colors.primary : t.colors.border}`,
                    backgroundColor: activeCategory === cat ? t.colors.primary : t.colors.surface,
                    color: activeCategory === cat ? '#fff' : t.colors.textSecondary,
                    fontFamily: t.fonts.body,
                    fontWeight: 500,
                    fontSize: 13,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {cat}
                  {cat !== 'Все' && (
                    <span style={{ marginLeft: 6, opacity: 0.6 }}>
                      {ALL_PROGRAMS.filter((p) => p.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: t.radius.sm,
                border: `1.5px solid ${t.colors.border}`,
                backgroundColor: t.colors.surface,
                minWidth: isMobile ? 0 : 240,
                width: isMobile ? '100%' : 'auto',
              }}
            >
              <IconSearch size={16} color={t.colors.textTertiary} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск направления..."
                style={{
                  border: 'none',
                  outline: 'none',
                  fontFamily: t.fonts.body,
                  fontSize: 14,
                  flex: 1,
                  background: 'transparent',
                  color: t.colors.text,
                  minWidth: 0,
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    padding: 0,
                  }}
                >
                  <IconClose size={14} color={t.colors.textTertiary} />
                </button>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section style={{ paddingTop: 32, paddingBottom: isMobile ? 56 : 80 }}>
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'stretch' : 'center',
              gap: isMobile ? 12 : 0,
              marginBottom: 24,
            }}
          >
            <Text size="sm" secondary>
              Найдено: <strong>{filtered.length}</strong>{' '}
              {filtered.length === 1
                ? 'направление'
                : filtered.length < 5
                  ? 'направления'
                  : 'направлений'}
            </Text>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              {!isMobile && (
                <Text size="sm" tertiary>
                  Сортировка:
                </Text>
              )}
              {[
                { key: 'name', label: 'По названию' },
                { key: 'budget', label: 'По местам' },
                { key: 'duration', label: 'По сроку' },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSortBy(s.key)}
                  style={{
                    padding: '4px 12px',
                    borderRadius: t.radius.xs + 2,
                    border: 'none',
                    background: sortBy === s.key ? t.colors.primaryLight : 'transparent',
                    color: sortBy === s.key ? t.colors.primary : t.colors.textTertiary,
                    fontFamily: t.fonts.body,
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((prog, i) => {
              const isExpanded = expandedProgram === prog.code;
              return (
                <Reveal key={prog.code} delay={i * 50}>
                  <Card
                    hover
                    padding="0"
                    onClick={() => setExpandedProgram(isExpanded ? null : prog.code)}
                    style={{
                      overflow: 'hidden',
                      border: isExpanded
                        ? `1.5px solid ${t.colors.primary}`
                        : `1px solid ${t.colors.borderLight}`,
                    }}
                  >
                    <div
                      style={{
                        padding: isMobile ? '20px 18px' : '24px 32px',
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        gap: isMobile ? 12 : 24,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? 14 : 20, minWidth: 0 }}>
                        <div
                          style={{
                            width: isMobile ? 40 : 48,
                            height: isMobile ? 40 : 48,
                            borderRadius: t.radius.sm,
                            backgroundColor: adjustAlpha(
                              CATEGORY_COLORS[prog.category] || t.colors.primary,
                              0.08
                            ),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <IconBuilding
                            size={isMobile ? 18 : 22}
                            color={CATEGORY_COLORS[prog.category] || t.colors.primary}
                          />
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <Heading level={5} style={{ fontSize: isMobile ? 15 : 16 }}>
                              {prog.name}
                            </Heading>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                            <Badge color={CATEGORY_COLORS[prog.category]}>{prog.category}</Badge>
                            <Text size="xs" tertiary>
                              {prog.code}
                            </Text>
                          </div>

                          {isMobile && (
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: 8,
                                marginTop: 14,
                              }}
                            >
                              <div>
                                <Text size="xs" tertiary style={{ marginBottom: 2 }}>
                                  Срок
                                </Text>
                                <Text size="sm" style={{ fontWeight: 600, fontSize: 12 }}>
                                  {prog.duration}
                                </Text>
                              </div>
                              <div>
                                <Text size="xs" tertiary style={{ marginBottom: 2 }}>
                                  Бюджет
                                </Text>
                                <Text
                                  size="sm"
                                  style={{
                                    fontWeight: 600,
                                    fontSize: 12,
                                    color: prog.budget > 0 ? t.colors.success : t.colors.textTertiary,
                                  }}
                                >
                                  {prog.budget > 0 ? prog.budget + ' мест' : '—'}
                                </Text>
                              </div>
                              <div>
                                <Text size="xs" tertiary style={{ marginBottom: 2 }}>
                                  Платно
                                </Text>
                                <Text size="sm" style={{ fontWeight: 600, fontSize: 12 }}>
                                  {prog.paid > 0 ? prog.paid + ' мест' : '—'}
                                </Text>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                        {!isMobile && (
                          <>
                            <div style={{ textAlign: 'center' }}>
                              <Text size="xs" tertiary style={{ marginBottom: 2 }}>
                                Срок
                              </Text>
                              <Text size="sm" style={{ fontWeight: 600 }}>
                                {prog.duration}
                              </Text>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <Text size="xs" tertiary style={{ marginBottom: 2 }}>
                                Бюджет
                              </Text>
                              <Text
                                size="sm"
                                style={{
                                  fontWeight: 600,
                                  color: prog.budget > 0 ? t.colors.success : t.colors.textTertiary,
                                }}
                              >
                                {prog.budget > 0 ? prog.budget + ' мест' : '—'}
                              </Text>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <Text size="xs" tertiary style={{ marginBottom: 2 }}>
                                Платно
                              </Text>
                              <Text size="sm" style={{ fontWeight: 600 }}>
                                {prog.paid > 0 ? prog.paid + ' мест' : '—'}
                              </Text>
                            </div>
                          </>
                        )}
                        <IconChevron
                          size={16}
                          color={t.colors.textTertiary}
                          direction={isExpanded ? 'up' : 'down'}
                        />
                      </div>
                    </div>

                    {isExpanded && (
                      <div
                        style={{
                          padding: isMobile ? '0 18px 22px' : '0 32px 28px',
                          borderTop: `1px solid ${t.colors.borderLight}`,
                          paddingTop: 24,
                          display: 'grid',
                          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
                          gap: isMobile ? 20 : 32,
                          animation: 'expandIn 0.2s ease',
                        }}
                      >
                        <div>
                          <Text size="md" secondary style={{ marginBottom: 16, lineHeight: 1.7 }}>
                            {prog.desc}
                          </Text>
                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {prog.skills.map((skill, si) => (
                              <span
                                key={si}
                                style={{
                                  padding: '5px 14px',
                                  borderRadius: t.radius.full,
                                  backgroundColor: t.colors.surfaceAlt,
                                  fontFamily: t.fonts.body,
                                  fontSize: 13,
                                  color: t.colors.textSecondary,
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          <Button
                            variant="primary"
                            size="md"
                            style={isMobile ? { width: '100%' } : undefined}
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate && onNavigate('admissions');
                            }}
                            icon={<IconArrow size={14} color="#fff" />}
                          >
                            Подать заявку
                          </Button>
                          <Button
                            variant="secondary"
                            size="md"
                            style={isMobile ? { width: '100%' } : undefined}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Учебный план
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Text size="lg" tertiary style={{ marginBottom: 12 }}>
                Направления не найдены
              </Text>
              <Text size="md" secondary>
                Попробуйте изменить фильтры или поисковый запрос
              </Text>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
