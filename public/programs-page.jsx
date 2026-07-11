/*
 * КАСТ — Programs Page
 */

const ALL_PROGRAMS = [
  { code: '07.02.01', name: 'Архитектура', category: 'Архитектура', duration: '3 года 10 мес.', form: 'Очная', budget: 50, paid: 25, desc: 'Проектирование зданий и сооружений, разработка архитектурных решений, работа с современными САПР-системами.', skills: ['AutoCAD', 'Revit', 'ArchiCAD', 'Черчение', '3D-моделирование'] },
  { code: '08.02.01', name: 'Строительство и эксплуатация зданий и сооружений', category: 'Строительство', duration: '3 года 10 мес.', form: 'Очная', budget: 75, paid: 25, desc: 'Организация строительного производства, контроль качества, эксплуатация и ремонт зданий.', skills: ['Строительные технологии', 'Сметное дело', 'BIM', 'Охрана труда'] },
  { code: '54.02.01', name: 'Дизайн (по отраслям)', category: 'Дизайн', duration: '3 года 10 мес.', form: 'Очная', budget: 25, paid: 50, desc: 'Графический и средовой дизайн, создание визуальных коммуникаций, интерьерное проектирование.', skills: ['Adobe CC', 'Figma', 'Типографика', '3D-визуализация', 'Колористика'] },
  { code: '09.02.07', name: 'Информационные системы и программирование', category: 'IT', duration: '3 года 10 мес.', form: 'Очная', budget: 50, paid: 25, desc: 'Разработка и администрирование информационных систем, веб-программирование, базы данных.', skills: ['Python', 'JavaScript', 'SQL', 'Linux', 'Git'] },
  { code: '21.02.06', name: 'Информационные системы обеспечения градостроительной деятельности', category: 'Кадастр', duration: '2 года 10 мес.', form: 'Очная', budget: 50, paid: 15, desc: 'Ведение градостроительного кадастра, работа с геоинформационными системами, землеустройство.', skills: ['ГИС', 'Геодезия', 'Кадастр', 'Картография'] },
  { code: '35.02.12', name: 'Садово-парковое и ландшафтное строительство', category: 'Ландшафт', duration: '3 года 10 мес.', form: 'Очная', budget: 25, paid: 25, desc: 'Проектирование и строительство объектов ландшафтной архитектуры, озеленение территорий.', skills: ['Ландшафтное проектирование', 'Дендрология', 'Почвоведение'] },
  { code: '21.02.05', name: 'Земельно-имущественные отношения', category: 'Кадастр', duration: '2 года 10 мес.', form: 'Очная', budget: 25, paid: 25, desc: 'Оценка недвижимости, управление земельными ресурсами, кадастровая деятельность.', skills: ['Оценка', 'Кадастр', 'Право', 'Экономика'] },
  { code: '08.02.08', name: 'Монтаж и эксплуатация оборудования и систем газоснабжения', category: 'Строительство', duration: '3 года 10 мес.', form: 'Очная', budget: 50, paid: 0, desc: 'Монтаж, наладка и эксплуатация систем газоснабжения, обеспечение безопасности.', skills: ['Газовое оборудование', 'Сварка', 'Безопасность', 'Проектирование'] },
  { code: '08.02.07', name: 'Монтаж и эксплуатация внутренних сантехнических устройств', category: 'Строительство', duration: '3 года 10 мес.', form: 'Очная', budget: 50, paid: 0, desc: 'Проектирование и монтаж систем водоснабжения, отопления и вентиляции.', skills: ['Сантехника', 'Вентиляция', 'Кондиционирование', 'Проектирование'] },
  { code: '38.02.01', name: 'Экономика и бухгалтерский учёт (по отраслям)', category: 'Экономика', duration: '2 года 10 мес.', form: 'Очная', budget: 25, paid: 25, desc: 'Бухгалтерский учёт, финансовый анализ, налогообложение в строительной отрасли.', skills: ['1С:Бухгалтерия', 'Налоги', 'Финансы', 'Excel'] },
  { code: '08.01.28', name: 'Мастер отделочных строительных и декоративных работ', category: 'Строительство', duration: '2 года 10 мес.', form: 'Очная', budget: 50, paid: 0, desc: 'Выполнение штукатурных, малярных и декоративных работ, облицовка поверхностей.', skills: ['Отделка', 'Декоративные покрытия', 'Штукатурка', 'Плиточные работы'] },
];

const CATEGORIES = ['Все', 'Архитектура', 'Строительство', 'Дизайн', 'IT', 'Кадастр', 'Ландшафт', 'Экономика'];

function ProgramsPage({ onNavigate }) {
  const t = useTheme();
  const [activeCategory, setActiveCategory] = React.useState('Все');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedProgram, setExpandedProgram] = React.useState(null);
  const [sortBy, setSortBy] = React.useState('name');

  const filtered = ALL_PROGRAMS
    .filter(p => activeCategory === 'Все' || p.category === activeCategory)
    .filter(p =>
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

  const categoryColors = {
    'Архитектура': '#29166F',
    'Строительство': '#1E3A5F',
    'Дизайн': '#6B2E8A',
    'IT': '#0F5132',
    'Кадастр': '#7C4A00',
    'Ландшафт': '#2D5A27',
    'Экономика': '#8B1A1A',
  };

  return (
    <div style={{ paddingTop: 100, minHeight: '100vh' }}>
      {/* Page header */}
      <Section style={{ paddingTop: 32, paddingBottom: 48 }}>
        <Container>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <button onClick={() => onNavigate && onNavigate('home')} style={{
                background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: t.fonts.body, fontSize: 14, color: t.colors.textTertiary, padding: 0,
              }}>
                Главная
              </button>
              <IconChevron size={10} color={t.colors.textTertiary} direction="right" />
              <Text size="sm" style={{ color: t.colors.primary, fontWeight: 500 }}>Специальности</Text>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Heading level={1} style={{ fontSize: 48, marginBottom: 12 }}>Специальности</Heading>
            <Text size="lg" secondary style={{ maxWidth: 600 }}>
              11 образовательных программ среднего профессионального образования в области архитектуры, строительства и информационных технологий
            </Text>
          </Reveal>
        </Container>
      </Section>

      {/* Filters */}
      <Section bg={t.colors.bg} style={{ paddingTop: 32, paddingBottom: 32, position: 'sticky', top: 68, zIndex: 50 }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
            {/* Category pills */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', flex: 1 }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
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
                  }}
                >
                  {cat}
                  {cat !== 'Все' && (
                    <span style={{ marginLeft: 6, opacity: 0.6 }}>
                      {ALL_PROGRAMS.filter(p => p.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: t.radius.sm,
              border: `1.5px solid ${t.colors.border}`,
              backgroundColor: t.colors.surface,
              minWidth: 240,
            }}>
              <IconSearch size={16} color={t.colors.textTertiary} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск специальности..."
                style={{
                  border: 'none', outline: 'none', fontFamily: t.fonts.body,
                  fontSize: 14, flex: 1, background: 'transparent', color: t.colors.text,
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{
                  background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 0,
                }}>
                  <IconClose size={14} color={t.colors.textTertiary} />
                </button>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section style={{ paddingTop: 32, paddingBottom: 80 }}>
        <Container>
          {/* Sort + count */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 24,
          }}>
            <Text size="sm" secondary>
              Найдено: <strong>{filtered.length}</strong> {filtered.length === 1 ? 'специальность' : filtered.length < 5 ? 'специальности' : 'специальностей'}
            </Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Text size="sm" tertiary>Сортировка:</Text>
              {[
                { key: 'name', label: 'По названию' },
                { key: 'budget', label: 'По местам' },
                { key: 'duration', label: 'По сроку' },
              ].map(s => (
                <button
                  key={s.key}
                  onClick={() => setSortBy(s.key)}
                  style={{
                    padding: '4px 12px', borderRadius: t.radius.xs + 2,
                    border: 'none',
                    background: sortBy === s.key ? t.colors.primaryLight : 'transparent',
                    color: sortBy === s.key ? t.colors.primary : t.colors.textTertiary,
                    fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                >{s.label}</button>
              ))}
            </div>
          </div>

          {/* Program cards */}
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
                      border: isExpanded ? `1.5px solid ${t.colors.primary}` : `1px solid ${t.colors.borderLight}`,
                    }}
                  >
                    <div style={{
                      padding: '24px 32px',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      alignItems: 'center',
                      gap: 24,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <div style={{
                          width: 48, height: 48, borderRadius: t.radius.sm,
                          backgroundColor: adjustAlpha(categoryColors[prog.category] || t.colors.primary, 0.08),
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <IconBuilding size={22} color={categoryColors[prog.category] || t.colors.primary} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <Heading level={5} style={{ fontSize: 16 }}>{prog.name}</Heading>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <Badge color={categoryColors[prog.category]}>{prog.category}</Badge>
                            <Text size="xs" tertiary>{prog.code}</Text>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                        <div style={{ textAlign: 'center' }}>
                          <Text size="xs" tertiary style={{ marginBottom: 2 }}>Срок</Text>
                          <Text size="sm" style={{ fontWeight: 600 }}>{prog.duration}</Text>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Text size="xs" tertiary style={{ marginBottom: 2 }}>Бюджет</Text>
                          <Text size="sm" style={{ fontWeight: 600, color: prog.budget > 0 ? t.colors.success : t.colors.textTertiary }}>{prog.budget > 0 ? prog.budget + ' мест' : '—'}</Text>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Text size="xs" tertiary style={{ marginBottom: 2 }}>Платно</Text>
                          <Text size="sm" style={{ fontWeight: 600 }}>{prog.paid > 0 ? prog.paid + ' мест' : '—'}</Text>
                        </div>
                        <IconChevron size={16} color={t.colors.textTertiary} direction={isExpanded ? 'up' : 'down'} />
                      </div>
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div style={{
                        padding: '0 32px 28px',
                        borderTop: `1px solid ${t.colors.borderLight}`,
                        paddingTop: 24,
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gap: 32,
                        animation: 'expandIn 0.2s ease',
                      }}>
                        <div>
                          <Text size="md" secondary style={{ marginBottom: 16, lineHeight: 1.7 }}>{prog.desc}</Text>
                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {prog.skills.map((skill, si) => (
                              <span key={si} style={{
                                padding: '5px 14px',
                                borderRadius: t.radius.full,
                                backgroundColor: t.colors.surfaceAlt,
                                fontFamily: t.fonts.body,
                                fontSize: 13,
                                color: t.colors.textSecondary,
                              }}>{skill}</span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                          <Button variant="primary" size="md" onClick={(e) => {
                            e.stopPropagation();
                            onNavigate && onNavigate('admissions');
                          }} icon={<IconArrow size={14} color="#fff" />}>
                            Подать заявку
                          </Button>
                          <Button variant="secondary" size="md" onClick={(e) => e.stopPropagation()}>
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
              <Text size="lg" tertiary style={{ marginBottom: 12 }}>Специальности не найдены</Text>
              <Text size="md" secondary>Попробуйте изменить фильтры или поисковый запрос</Text>
            </div>
          )}
        </Container>
      </Section>

      <style>{`
        @keyframes expandIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 400px; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { ProgramsPage, ALL_PROGRAMS });
