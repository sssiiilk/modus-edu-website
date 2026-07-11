/*
 * КАСТ — Homepage Sections
 */

/* ─── Hero Section ─── */
function HeroSection({ onNavigate }) {
  const t = useTheme();
  return (
    <section style={{
      paddingTop: 100,
      paddingBottom: 0,
      backgroundColor: t.colors.bg,
      minHeight: '90vh',
    }}>
      <Container>
        {/* Top label */}
        <Reveal>
          <Label style={{ color: t.colors.primary, marginBottom: 16, display: 'block' }}>
            Государственное бюджетное профессиональное образовательное учреждение Краснодарского края
          </Label>
        </Reveal>

        {/* Main hero heading */}
        <Reveal delay={100}>
          <Heading level={1} style={{
            fontSize: 64,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            maxWidth: 900,
            marginBottom: 24,
          }}>
            Краснодарский архитектурно-строительный техникум
          </Heading>
        </Reveal>

        <Reveal delay={200}>
          <Text size="lg" secondary style={{ maxWidth: 560, marginBottom: 40, lineHeight: 1.7 }}>
            85 лет подготовки специалистов в области архитектуры, строительства, дизайна и информационных технологий
          </Text>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 48 }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate && onNavigate('admissions')} icon={<IconArrow size={16} color="#fff" />}>
              Подать заявку
            </Button>
            <Button variant="secondary" size="lg" onClick={() => onNavigate && onNavigate('programs')} icon={<IconArrow size={16} color={t.colors.primary} />}>
              Все специальности
            </Button>
          </div>
        </Reveal>

        {/* Hero visual grid */}
        <Reveal delay={400}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 16,
            marginBottom: -4,
          }}>
            {/* Main hero image */}
            <div style={{
              borderRadius: t.radius.xl,
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '2.4/1',
              background: `linear-gradient(135deg, ${t.colors.primary}22, ${t.colors.primary}08)`,
            }}>
              <img
                src="assets/campus-hero.png"
                alt="Кампус КАСТ"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85,
                }}
              />
              {/* Overlay info card */}
              <div style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                backgroundColor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: t.radius.lg,
                padding: '20px 28px',
                maxWidth: 300,
              }}>
                <Text size="sm" secondary style={{ marginBottom: 8 }}>
                  Приём документов
                </Text>
                <Heading level={5} style={{ marginBottom: 4, fontSize: 16 }}>
                  20 июня — 15 августа 2026
                </Heading>
                <Text size="xs" tertiary>Бюджетные и коммерческие места</Text>
              </div>
            </div>

            {/* Right column stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                flex: 1,
                borderRadius: t.radius.xl,
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img
                  src="assets/campus-3.png"
                  alt="Архитектура"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{
                flex: 1,
                borderRadius: t.radius.xl,
                backgroundColor: t.colors.primary,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <Heading level={4} style={{ color: '#fff', fontSize: 20, lineHeight: 1.3 }}>
                  11 специальностей для вашего будущего
                </Heading>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                  <Text size="sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Подробнее</Text>
                  <IconArrow size={14} color="rgba(255,255,255,0.7)" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  const t = useTheme();
  const stats = [
    { value: 85, suffix: '+', label: 'Лет опыта', sub: 'образовательной деятельности' },
    { value: 2400, suffix: '+', label: 'Студентов', sub: 'обучаются ежегодно' },
    { value: 11, suffix: '', label: 'Специальностей', sub: 'на бюджетной и коммерческой основе' },
    { value: 94, suffix: '%', label: 'Трудоустройство', sub: 'выпускников в первый год' },
  ];

  return (
    <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          backgroundColor: t.colors.border,
          borderRadius: t.radius.lg,
          overflow: 'hidden',
        }}>
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{
                backgroundColor: t.colors.surface,
                padding: '40px 32px',
                textAlign: 'center',
              }}>
                <Heading level={2} style={{
                  color: t.colors.primary,
                  fontSize: 48,
                  marginBottom: 8,
                  fontFamily: t.fonts.heading,
                }}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </Heading>
                <Text size="md" style={{ fontWeight: 600, marginBottom: 4 }}>{stat.label}</Text>
                <Text size="sm" tertiary>{stat.sub}</Text>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Featured Programs Section ─── */
function FeaturedProgramsSection({ onNavigate }) {
  const t = useTheme();
  const programs = [
    { code: '07.02.01', name: 'Архитектура', duration: '3 года 10 мес.', form: 'Очная', category: 'Архитектура' },
    { code: '08.02.01', name: 'Строительство и эксплуатация зданий и сооружений', duration: '3 года 10 мес.', form: 'Очная', category: 'Строительство' },
    { code: '54.02.01', name: 'Дизайн (по отраслям)', duration: '3 года 10 мес.', form: 'Очная', category: 'Дизайн' },
    { code: '09.02.07', name: 'Информационные системы и программирование', duration: '3 года 10 мес.', form: 'Очная', category: 'IT' },
    { code: '21.02.06', name: 'Информационные системы обеспечения градостроительной деятельности', duration: '2 года 10 мес.', form: 'Очная', category: 'Кадастр' },
    { code: '35.02.12', name: 'Садово-парковое и ландшафтное строительство', duration: '3 года 10 мес.', form: 'Очная', category: 'Ландшафт' },
  ];

  const categoryColors = {
    'Архитектура': '#29166F',
    'Строительство': '#1E3A5F',
    'Дизайн': '#6B2E8A',
    'IT': '#0F5132',
    'Кадастр': '#7C4A00',
    'Ландшафт': '#2D5A27',
  };

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>Образовательные программы</Label>
              <Heading level={2}>Наши специальности</Heading>
            </div>
            <Button variant="secondary" size="md" onClick={() => onNavigate && onNavigate('programs')} icon={<IconArrow size={14} color={t.colors.primary} />}>
              Все специальности
            </Button>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {programs.map((prog, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card hover padding="0" onClick={() => onNavigate && onNavigate('programs')} style={{ overflow: 'hidden' }}>
                <div style={{ padding: '28px 28px 24px' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                    <Badge color={categoryColors[prog.category]}>{prog.category}</Badge>
                    <Badge style={{ backgroundColor: t.colors.surfaceAlt, color: t.colors.textSecondary }}>{prog.code}</Badge>
                  </div>
                  <Heading level={5} style={{ marginBottom: 16, minHeight: 48 }}>{prog.name}</Heading>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <IconClock size={14} color={t.colors.textTertiary} />
                      <Text size="sm" tertiary>{prog.duration}</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <IconBook size={14} color={t.colors.textTertiary} />
                      <Text size="sm" tertiary>{prog.form}</Text>
                    </div>
                  </div>
                </div>
                <div style={{
                  borderTop: `1px solid ${t.colors.borderLight}`,
                  padding: '14px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <Text size="sm" style={{ color: t.colors.primary, fontWeight: 600 }}>Подробнее</Text>
                  <IconArrow size={14} color={t.colors.primary} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Admissions CTA Section ─── */
function AdmissionsCTASection({ onNavigate }) {
  const t = useTheme();
  const steps = [
    { num: '01', title: 'Ознакомьтесь с условиями приёма', desc: 'Изучите правила, сроки и перечень специальностей' },
    { num: '02', title: 'Подготовьте документы для поступления', desc: 'Аттестат, паспорт, СНИЛС, медицинская справка, фото' },
    { num: '03', title: 'Подайте заявление в установленные сроки', desc: 'Онлайн или лично в приёмной комиссии техникума' },
    { num: '04', title: 'Пройдите подготовительные курсы', desc: 'Для специальностей «Архитектура» и «Реклама»' },
    { num: '05', title: 'Сдайте вступительное испытание', desc: 'Для специальностей «Архитектура» и «Реклама»' },
    { num: '06', title: 'Узнайте результаты приёма', desc: 'Следите за списками зачисления на сайте и в Личном кабинете' },
  ];

  return (
    <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <div style={{
          backgroundColor: t.colors.primary,
          borderRadius: t.radius.xl,
          padding: '64px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -120,
            right: 60,
            width: 400,
            height: 400,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.05)',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Reveal>
              <Label style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16, display: 'block' }}>Приёмная кампания 2026</Label>
              <Heading level={2} style={{ color: '#fff', marginBottom: 12, maxWidth: 600 }}>
                Начните свой путь в профессию
              </Heading>
              <Text size="lg" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 48, maxWidth: 500 }}>
                Приём документов на 2026/2027 учебный год открыт. Бюджетные и коммерческие места.
              </Text>
            </Reveal>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
              marginBottom: 40,
            }}>
              {steps.map((step, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{ position: 'relative' }}>
                    <Text size="xl" style={{
                      color: 'rgba(255,255,255,0.15)',
                      fontWeight: 700,
                      fontSize: 40,
                      fontFamily: t.fonts.heading,
                      marginBottom: 12,
                    }}>{step.num}</Text>
                    <Heading level={5} style={{ color: '#fff', marginBottom: 8, fontSize: 16 }}>{step.title}</Heading>
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{step.desc}</Text>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => onNavigate && onNavigate('admissions')}
                  style={{ backgroundColor: '#fff', color: t.colors.primary, border: 'none', fontWeight: 700 }}
                  icon={<IconArrow size={16} color={t.colors.primary} />}
                >
                  Подать заявку онлайн
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  style={{ color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}
                  onClick={() => onNavigate && onNavigate('admissions')}
                >
                  Правила приёма
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── News Section ─── */
function NewsSection() {
  const t = useTheme();
  const news = [
    {
      date: '8 мая 2026',
      tag: 'Мероприятия',
      title: 'День открытых дверей для абитуриентов и родителей',
      desc: 'Приглашаем будущих студентов и их родителей познакомиться с техникумом, преподавателями и учебными мастерскими.',
    },
    {
      date: '2 мая 2026',
      tag: 'Достижения',
      title: 'Студенты КАСТ заняли призовые места на региональном чемпионате «Профессионалы»',
      desc: 'Наши студенты успешно выступили в компетенциях «Архитектура» и «Веб-дизайн».',
    },
    {
      date: '25 апреля 2026',
      tag: 'Объявления',
      title: 'Обновлены правила приёма на 2026/2027 учебный год',
      desc: 'Опубликованы новые контрольные цифры приёма и перечень необходимых документов.',
    },
    {
      date: '18 апреля 2026',
      tag: 'Партнёры',
      title: 'Подписано соглашение о сотрудничестве с ведущими строительными компаниями региона',
      desc: 'Расширяем возможности для прохождения практики и трудоустройства выпускников.',
    },
  ];

  const tagColors = {
    'Мероприятия': '#29166F',
    'Достижения': '#16A34A',
    'Объявления': '#D97706',
    'Партнёры': '#1E3A5F',
  };

  return (
    <Section id="news-section" bg={t.colors.bg} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>Актуальное</Label>
              <Heading level={2}>Новости и события</Heading>
            </div>
            <Button variant="ghost" size="md" icon={<IconArrow size={14} />}>Все новости</Button>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 16,
        }}>
          {/* Featured news */}
          <Reveal>
            <Card hover padding="0" style={{ overflow: 'hidden', height: '100%' }}>
              <ImagePlaceholder
                label="фото — день открытых дверей"
                aspectRatio="2/1"
                style={{ borderRadius: 0 }}
              />
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <Badge color={tagColors[news[0].tag]}>{news[0].tag}</Badge>
                  <Text size="xs" tertiary>{news[0].date}</Text>
                </div>
                <Heading level={4} style={{ marginBottom: 12 }}>{news[0].title}</Heading>
                <Text size="md" secondary style={{ lineHeight: 1.7 }}>{news[0].desc}</Text>
              </div>
            </Card>
          </Reveal>

          {/* News list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {news.slice(1).map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card hover style={{ flex: 1, padding: '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Badge color={tagColors[item.tag]}>{item.tag}</Badge>
                    <Text size="xs" tertiary>{item.date}</Text>
                  </div>
                  <Heading level={5} style={{ marginBottom: 8, fontSize: 15 }}>{item.title}</Heading>
                  <Text size="sm" secondary style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{item.desc}</Text>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Campus Life Section ─── */
function CampusSection() {
  const t = useTheme();

  const items = [
    { title: 'Современные мастерские', desc: 'Оборудованные по стандартам WorldSkills' },
    { title: 'Спортивный комплекс', desc: 'Тренажёрный зал, площадки, секции' },
    { title: 'Общежитие', desc: 'Комфортное проживание для иногородних студентов' },
    { title: 'Библиотека и коворкинг', desc: 'Электронные ресурсы и зоны для работы' },
  ];

  return (
    <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}>
          <Reveal>
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>Студенческая жизнь</Label>
              <Heading level={2} style={{ marginBottom: 16 }}>Всё для комфортной учёбы</Heading>
              <Text size="md" secondary style={{ marginBottom: 40, maxWidth: 440, lineHeight: 1.7 }}>
                Современная инфраструктура, активная внеучебная деятельность и поддержка на каждом этапе обучения
              </Text>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {items.map((item, i) => (
                  <div key={i} style={{
                    padding: '20px',
                    borderRadius: t.radius.md,
                    backgroundColor: t.colors.bg,
                  }}>
                    <Heading level={5} style={{ fontSize: 15, marginBottom: 6 }}>{item.title}</Heading>
                    <Text size="sm" tertiary>{item.desc}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}>
              <ImagePlaceholder label="студенты за работой" aspectRatio="3/4" style={{ borderRadius: t.radius.lg }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <ImagePlaceholder label="мастерская" aspectRatio="1/1" style={{ borderRadius: t.radius.lg }} />
                <div style={{
                  flex: 1,
                  borderRadius: t.radius.lg,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img src="assets/campus-2.png" alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    minHeight: 140,
                  }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Partners / Trust Section ─── */
function TrustSection() {
  const t = useTheme();

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: 56, paddingBottom: 56 }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Label style={{ color: t.colors.textTertiary }}>Аккредитация и партнёры</Label>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 56,
          opacity: 0.35,
          flexWrap: 'wrap',
        }}>
          {['Минобрнауки', 'Рособрнадзор', 'WorldSkills Russia', 'Союз строителей Кубани', 'Администрация КК'].map((name, i) => (
            <Text key={i} size="sm" style={{
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontSize: 12,
              color: t.colors.text,
              whiteSpace: 'nowrap',
            }}>{name}</Text>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Facilities Section (Материально-техническая база) ─── */
function FacilitiesSection() {
  const t = useTheme();

  const facilities = [
    {
      icon: <IconBuilding size={28} color={t.colors.primary} />,
      title: '2 корпуса',
      desc: 'Учебный 4-этажный корпус площадью 7 823,5 м² и общественно-бытовой корпус площадью 2 243,3 м²',
    },
    {
      icon: <IconBook size={28} color={t.colors.primary} />,
      title: '72 аудитории',
      desc: 'Для лекционных, практических и лабораторных занятий. Учебно-производственные мастерские',
    },
    {
      icon: <FacilityIconPC color={t.colors.primary} />,
      title: '9 компьютерных классов',
      desc: 'Современное оборудование, доступ к сети Интернет, информационным системам и СПС «Гарант»',
    },
    {
      icon: <FacilityIconScreen color={t.colors.primary} />,
      title: 'Мультимедийное оборудование',
      desc: 'Все кабинеты оснащены ноутбуком, интерактивной доской, проектором и аудио-системой',
    },
    {
      icon: <FacilityIconLibrary color={t.colors.primary} />,
      title: 'Библиотека',
      desc: 'Более 60 000 экземпляров, читальный зал на 40 мест, электронные библиотечные системы',
    },
    {
      icon: <FacilityIconSport color={t.colors.primary} />,
      title: 'Спортивная база',
      desc: '2 спортивных зала, зал настольного тенниса и общей физической подготовки, электронный тир',
    },
    {
      icon: <IconUsers size={28} color={t.colors.primary} />,
      title: 'Актовый зал',
      desc: '234 посадочных места для проведения конференций, торжественных и культурно-массовых мероприятий',
    },
    {
      icon: <FacilityIconDining color={t.colors.primary} />,
      title: 'Столовая',
      desc: 'Собственный пищевой цех, полноценное меню (первые, вторые блюда и десерты), зал на 150 мест',
    },
  ];

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>Инфраструктура</Label>
            <Heading level={2}>Материально-техническая база</Heading>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {facilities.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <Card hover style={{
                padding: '32px 24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: t.radius.md,
                  backgroundColor: t.colors.primaryLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <Heading level={5} style={{ fontSize: 16, marginBottom: 8 }}>{item.title}</Heading>
                <Text size="sm" secondary style={{ lineHeight: 1.65, flex: 1 }}>{item.desc}</Text>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Simple icon placeholders for Facilities ─── */
function FacilityIconPC({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M10 22h8M14 18v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 9h4M8 12h6" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function FacilityIconScreen({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="15" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M9 23h10" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="12" r="3" stroke={color} strokeWidth="1.5"/>
      <path d="M14 9v0.5M14 14.5v0.5M11 12h0.5M16.5 12h0.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function FacilityIconLibrary({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 6h5l5 2 5-2h5v16h-5l-5 2-5-2H4V6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M14 8v16" stroke={color} strokeWidth="1.8"/>
      <path d="M7 10h3M7 13h3M17 10h3M17 13h3" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function FacilityIconSport({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8"/>
      <path d="M11 4v14M4 11h14" stroke={color} strokeWidth="1.2" opacity="0.4"/>
      <path d="M5.1 6.5C7 8.5 9 10 11 11c2-1 4-2.5 5.9-4.5" stroke={color} strokeWidth="1.3" opacity="0.4"/>
      <path d="M19 17l5 5M24 17l-5 5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function FacilityIconDining({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 4v8c0 2 1.5 3.5 3.5 3.5S15 14 15 12V4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11.5 12v12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 4v5c0 2-1 3-2 3.5V24" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M20 4c1.5 1 2.5 3 2.5 5s-1 3-2.5 3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Employment Partners Section (Трудоустройство) ─── */
function EmploymentSection() {
  const t = useTheme();

  const partners = [
    'ОАО ТИЖГП «Краснодарграждан\u00ADпроект»',
    'ООО «Бизнес-Инвест»',
    'ООО «Нефтестрой\u00ADиндустрия-Юг»',
    'ОАО «Краснодар\u00ADнефтегеофизика»',
    'Филиал ФГБУ «ФКП Росреестр»',
    'ООО «Жилсоцразвитие»',
    'ООО «ГУК Краснодар»',
    'ООО «Краснодар-Сити»',
  ];

  return (
    <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>Карьера выпускников</Label>
            <Heading level={2} style={{ marginBottom: 12 }}>Трудоустройство</Heading>
            <Text size="md" secondary style={{ maxWidth: 560, margin: '0 auto' }}>
              Наши выпускники работают в ведущих компаниях строительной и проектной отрасли Краснодарского края
            </Text>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
          marginTop: 40,
        }}>
          {partners.map((name, i) => (
            <Reveal key={i} delay={i * 60}>
              <Card hover style={{
                padding: '32px 20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}>
                {/* Map pin icon placeholder */}
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  backgroundColor: t.colors.primaryLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <IconMap size={24} color={t.colors.primary} />
                </div>
                <Text size="sm" style={{
                  fontWeight: 500,
                  lineHeight: 1.5,
                  textWrap: 'pretty',
                  hyphens: 'manual',
                }}>{name}</Text>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Virtual Reception Section (Виртуальная приёмная) ─── */
function VirtualReceptionSection() {
  const t = useTheme();
  const [form, setForm] = React.useState({
    firstName: '', lastName: '', email: '', phone: '',
    category: '', message: '', agreed: false,
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Обязательное поле';
    if (!form.email.trim()) errs.email = 'Обязательное поле';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Некорректный email';
    if (!form.category) errs.category = 'Выберите категорию';
    if (!form.message.trim()) errs.message = 'Обязательное поле';
    if (!form.agreed) errs.agreed = 'Необходимо согласие';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: t.radius.sm,
    border: `1.5px solid ${errors[field] ? t.colors.error : t.colors.border}`,
    fontFamily: t.fonts.body,
    fontSize: 15,
    color: t.colors.text,
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
    backgroundColor: t.colors.surface,
  });

  if (submitted) {
    return (
      <Section bg={t.colors.bg} style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container narrow>
          <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              backgroundColor: adjustAlpha('#16A34A', 0.1),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <IconCheck size={32} color="#16A34A" />
            </div>
            <Heading level={3} style={{ marginBottom: 12 }}>Сообщение отправлено</Heading>
            <Text size="md" secondary style={{ lineHeight: 1.7 }}>
              Спасибо за ваше обращение. Мы рассмотрим его и ответим в течение 3 рабочих дней.
            </Text>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Left — info */}
          <Reveal>
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>Обратная связь</Label>
              <Heading level={2} style={{ marginBottom: 16 }}>Виртуальная приёмная</Heading>
              <Text size="md" secondary style={{ marginBottom: 32, lineHeight: 1.7, maxWidth: 420 }}>
                Задайте вопрос руководству техникума, приёмной комиссии или учебной части. Мы ответим в кратчайшие сроки.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: t.radius.sm,
                    backgroundColor: t.colors.primaryLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <IconPhone size={18} color={t.colors.primary} />
                  </div>
                  <div>
                    <Text size="sm" secondary>Телефон</Text>
                    <Text size="md" style={{ fontWeight: 500 }}>+7 (861) 262-10-70</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: t.radius.sm,
                    backgroundColor: t.colors.primaryLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <IconMail size={18} color={t.colors.primary} />
                  </div>
                  <div>
                    <Text size="sm" secondary>Email</Text>
                    <Text size="md" style={{ fontWeight: 500 }}>info@kast-krd.ru</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: t.radius.sm,
                    backgroundColor: t.colors.primaryLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <IconMap size={18} color={t.colors.primary} />
                  </div>
                  <div>
                    <Text size="sm" secondary>Адрес</Text>
                    <Text size="md" style={{ fontWeight: 500 }}>г. Краснодар, ул. Октябрьская, 25</Text>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={150}>
            <Card style={{ padding: '36px' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{
                      display: 'block', marginBottom: 6,
                      fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                      color: errors.firstName ? t.colors.error : t.colors.textSecondary,
                    }}>Имя <span style={{ color: t.colors.error }}>*</span></label>
                    <input style={inputStyle('firstName')} value={form.firstName}
                      onChange={e => updateField('firstName', e.target.value)} placeholder="Имя" />
                    {errors.firstName && <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>{errors.firstName}</Text>}
                  </div>
                  <div>
                    <label style={{
                      display: 'block', marginBottom: 6,
                      fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                      color: t.colors.textSecondary,
                    }}>Фамилия</label>
                    <input style={inputStyle('lastName')} value={form.lastName}
                      onChange={e => updateField('lastName', e.target.value)} placeholder="Фамилия" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{
                      display: 'block', marginBottom: 6,
                      fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                      color: errors.email ? t.colors.error : t.colors.textSecondary,
                    }}>Email <span style={{ color: t.colors.error }}>*</span></label>
                    <input type="email" style={inputStyle('email')} value={form.email}
                      onChange={e => updateField('email', e.target.value)} placeholder="email@example.com" />
                    {errors.email && <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>{errors.email}</Text>}
                  </div>
                  <div>
                    <label style={{
                      display: 'block', marginBottom: 6,
                      fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                      color: t.colors.textSecondary,
                    }}>Контактный телефон</label>
                    <input type="tel" style={inputStyle('phone')} value={form.phone}
                      onChange={e => updateField('phone', e.target.value)} placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block', marginBottom: 6,
                    fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                    color: errors.category ? t.colors.error : t.colors.textSecondary,
                  }}>Категория обращения <span style={{ color: t.colors.error }}>*</span></label>
                  <select style={{ ...inputStyle('category'), appearance: 'none', cursor: 'pointer' }}
                    value={form.category} onChange={e => updateField('category', e.target.value)}>
                    <option value="">Выберите категорию</option>
                    <option value="admission">Приёмная комиссия</option>
                    <option value="education">Учебная часть</option>
                    <option value="director">Руководство техникума</option>
                    <option value="dormitory">Общежитие</option>
                    <option value="other">Другое</option>
                  </select>
                  {errors.category && <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>{errors.category}</Text>}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{
                    display: 'block', marginBottom: 6,
                    fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
                    color: errors.message ? t.colors.error : t.colors.textSecondary,
                  }}>Текст сообщения <span style={{ color: t.colors.error }}>*</span></label>
                  <textarea style={{
                    ...inputStyle('message'),
                    minHeight: 120,
                    resize: 'vertical',
                  }} value={form.message}
                    onChange={e => updateField('message', e.target.value)}
                    placeholder="Опишите ваш вопрос или обращение..." />
                  {errors.message && <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>{errors.message}</Text>}
                </div>

                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  marginBottom: 24, padding: '14px', borderRadius: t.radius.sm,
                  backgroundColor: t.colors.bg,
                }}>
                  <input type="checkbox" checked={form.agreed}
                    onChange={e => updateField('agreed', e.target.checked)}
                    style={{ marginTop: 3, accentColor: t.colors.primary, width: 16, height: 16, cursor: 'pointer' }} />
                  <Text size="sm" secondary style={{ lineHeight: 1.6 }}>
                    Я даю согласие на обработку персональных данных
                    {errors.agreed && <span style={{ color: t.colors.error, display: 'block', marginTop: 4, fontSize: 13 }}>{errors.agreed}</span>}
                  </Text>
                </div>

                <Button variant="primary" size="lg" style={{ width: '100%' }} icon={<IconArrow size={16} color="#fff" />}>
                  Отправить
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, {
  HeroSection, StatsSection, FeaturedProgramsSection,
  AdmissionsCTASection, NewsSection, CampusSection, TrustSection,
  FacilitiesSection, EmploymentSection, VirtualReceptionSection,
});
