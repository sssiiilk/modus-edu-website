import { useState } from 'react';
import { useTheme, adjustAlpha } from '../lib/theme.jsx';
import { useBreakpoint } from '../lib/useBreakpoint.js';
import {
  Heading,
  Text,
  Label,
  Button,
  Card,
  Badge,
  ImagePlaceholder,
  Container,
  Section,
  Reveal,
  AnimatedNumber,
} from '../lib/ui.jsx';
import {
  IconArrow,
  IconClock,
  IconBook,
  IconBuilding,
  IconUsers,
  IconMap,
  IconPhone,
  IconMail,
  IconCheck,
  FacilityIconPC,
  FacilityIconScreen,
  FacilityIconLibrary,
  FacilityIconSport,
  FacilityIconDining,
} from '../lib/icons.jsx';

function HeroSection({ onNavigate }) {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  return (
    <section
      style={{
        paddingTop: isMobile ? 88 : 100,
        paddingBottom: 0,
        backgroundColor: t.colors.bg,
        minHeight: isMobile ? 'auto' : '90vh',
      }}
    >
      <Container>
        <Reveal>
          <Label
            style={{
              color: t.colors.primary,
              marginBottom: 16,
              display: 'block',
              lineHeight: 1.5,
            }}
          >
            Современное профессиональное образование для городской среды и цифрового будущего
          </Label>
        </Reveal>

        <Reveal delay={100}>
          <Heading
            level={1}
            style={{
              fontSize: isMobile ? 36 : 64,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            Городской колледж «МОДУС»
          </Heading>
        </Reveal>

        <Reveal delay={200}>
          <Text
            size={isMobile ? 'md' : 'lg'}
            secondary
            style={{ maxWidth: 560, marginBottom: isMobile ? 28 : 40, lineHeight: 1.7 }}
          >
            Практические программы по дизайну среды, инженерии, цифровым сервисам и городским технологиям
          </Text>
        </Reveal>

        <Reveal delay={300}>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              marginBottom: isMobile ? 32 : 48,
            }}
          >
            <Button
              variant="primary"
              size="lg"
              style={isMobile ? { width: '100%' } : undefined}
              onClick={() => onNavigate && onNavigate('admissions')}
              icon={<IconArrow size={16} color="#fff" />}
            >
              Подать заявку
            </Button>
            <Button
              variant="secondary"
              size="lg"
              style={isMobile ? { width: '100%' } : undefined}
              onClick={() => onNavigate && onNavigate('programs')}
              icon={<IconArrow size={16} color={t.colors.primary} />}
            >
              Все специальности
            </Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
              gap: 16,
              marginBottom: -4,
            }}
          >
            <div
              style={{
                borderRadius: isMobile ? t.radius.lg : t.radius.xl,
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: isMobile ? '16/10' : '2.4/1',
                background: `linear-gradient(135deg, ${t.colors.primary}22, ${t.colors.primary}08)`,
              }}
            >
              <img
                src="/assets/campus-hero.png"
                alt="Кампус МОДУС"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
              />
              {!isMobile && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: t.radius.lg,
                    padding: '20px 28px',
                    maxWidth: 300,
                  }}
                >
                  <Text size="sm" secondary style={{ marginBottom: 8 }}>
                    Приём документов
                  </Text>
                  <Heading level={5} style={{ marginBottom: 4, fontSize: 16 }}>
                    20 июня — 15 августа 2026
                  </Heading>
                  <Text size="xs" tertiary>
                    Бюджетные и коммерческие места
                  </Text>
                </div>
              )}
            </div>

            {isMobile ? (
              <div
                style={{
                  borderRadius: t.radius.lg,
                  backgroundColor: t.colors.surface,
                  padding: '16px 18px',
                  border: `1px solid ${t.colors.borderLight}`,
                }}
              >
                <Text size="sm" secondary style={{ marginBottom: 4 }}>
                  Приём документов
                </Text>
                <Heading level={5} style={{ marginBottom: 4, fontSize: 15 }}>
                  20 июня — 15 августа 2026
                </Heading>
                <Text size="xs" tertiary>
                  Бюджетные и коммерческие места
                </Text>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ flex: 1, borderRadius: t.radius.xl, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/assets/campus-3.png"
                    alt="Архитектура"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    borderRadius: t.radius.xl,
                    backgroundColor: t.colors.primary,
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Heading level={4} style={{ color: '#fff', fontSize: 20, lineHeight: 1.3 }}>
                    11 направлений для вашего профессионального будущего
                  </Heading>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Подробнее
                    </Text>
                    <IconArrow size={14} color="rgba(255,255,255,0.7)" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function StatsSection() {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const stats = [
    { value: 85, suffix: '+', label: 'Лет опыта', sub: 'образовательной деятельности' },
    { value: 2400, suffix: '+', label: 'Студентов', sub: 'обучаются ежегодно' },
    { value: 11, suffix: '', label: 'Специальностей', sub: 'на бюджетной и коммерческой основе' },
    { value: 94, suffix: '%', label: 'Трудоустройство', sub: 'выпускников в первый год' },
  ];

  return (
    <Section style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: 1,
            backgroundColor: t.colors.border,
            borderRadius: t.radius.lg,
            overflow: 'hidden',
          }}
        >
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                style={{
                  backgroundColor: t.colors.surface,
                  padding: isMobile ? '28px 16px' : '40px 32px',
                  textAlign: 'center',
                }}
              >
                <Heading
                  level={2}
                  style={{
                    color: t.colors.primary,
                    fontSize: isMobile ? 32 : 48,
                    marginBottom: 8,
                    fontFamily: t.fonts.heading,
                  }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </Heading>
                <Text size="md" style={{ fontWeight: 600, marginBottom: 4 }}>
                  {stat.label}
                </Text>
                <Text size="sm" tertiary>
                  {stat.sub}
                </Text>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FeaturedProgramsSection({ onNavigate }) {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const programs = [
    { code: '07.02.01', name: 'Градостроительное моделирование', duration: '3 года 10 мес.', form: 'Очная', category: 'Город' },
    { code: '08.02.01', name: 'Управление городскими системами', duration: '3 года 10 мес.', form: 'Очная', category: 'Инженерия' },
    { code: '54.02.01', name: 'Цифровой дизайн среды', duration: '3 года 10 мес.', form: 'Очная', category: 'Дизайн' },
    { code: '09.02.07', name: 'Веб-инженерия и интерфейсы', duration: '3 года 10 мес.', form: 'Очная', category: 'IT' },
    { code: '21.02.06', name: 'Кадастр и геоинформационные технологии', duration: '2 года 10 мес.', form: 'Очная', category: 'Кадастр' },
    { code: '35.02.12', name: 'Ландшафтные решения и экология', duration: '3 года 10 мес.', form: 'Очная', category: 'Экология' },
  ];

  const categoryColors = {
    'Город': '#29166F',
    'Инженерия': '#1E3A5F',
    'Дизайн': '#6B2E8A',
    'IT': '#0F5132',
    'Кадастр': '#7C4A00',
    'Экология': '#2D5A27',
  };

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <Reveal>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'stretch' : 'flex-end',
              gap: isMobile ? 20 : 0,
              marginBottom: isMobile ? 28 : 48,
            }}
          >
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>
                Образовательные программы
              </Label>
              <Heading level={2}>Наши направления</Heading>
            </div>
            <Button
              variant="secondary"
              size="md"
              style={isMobile ? { width: '100%' } : undefined}
              onClick={() => onNavigate && onNavigate('programs')}
              icon={<IconArrow size={14} color={t.colors.primary} />}
            >
              Все направления
            </Button>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {programs.map((prog, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card
                hover
                padding="0"
                onClick={() => onNavigate && onNavigate('programs')}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: isMobile ? '22px 22px 20px' : '28px 28px 24px' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    <Badge color={categoryColors[prog.category]}>{prog.category}</Badge>
                    <Badge style={{ backgroundColor: t.colors.surfaceAlt, color: t.colors.textSecondary }}>
                      {prog.code}
                    </Badge>
                  </div>
                  <Heading level={5} style={{ marginBottom: 16, minHeight: isMobile ? 'auto' : 48 }}>
                    {prog.name}
                  </Heading>
                  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <IconClock size={14} color={t.colors.textTertiary} />
                      <Text size="sm" tertiary>
                        {prog.duration}
                      </Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <IconBook size={14} color={t.colors.textTertiary} />
                      <Text size="sm" tertiary>
                        {prog.form}
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: `1px solid ${t.colors.borderLight}`,
                    padding: isMobile ? '14px 22px' : '14px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text size="sm" style={{ color: t.colors.primary, fontWeight: 600 }}>
                    Подробнее
                  </Text>
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

function AdmissionsCTASection({ onNavigate }) {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const steps = [
    { num: '01', title: 'Ознакомьтесь с условиями приёма', desc: 'Изучите правила, сроки и перечень специальностей' },
    { num: '02', title: 'Подготовьте документы для поступления', desc: 'Аттестат, паспорт, СНИЛС, медицинская справка, фото' },
    { num: '03', title: 'Подайте заявление в установленные сроки', desc: 'Онлайн или лично в приёмной комиссии колледжа' },
    { num: '04', title: 'Пройдите подготовительные курсы', desc: 'Для направлений «Градостроительное моделирование» и «Цифровой дизайн среды»' },
    { num: '05', title: 'Сдайте вступительное испытание', desc: 'Для направлений «Градостроительное моделирование» и «Цифровой дизайн среды»' },
    { num: '06', title: 'Узнайте результаты приёма', desc: 'Следите за списками зачисления на сайте и в Личном кабинете' },
  ];

  return (
    <Section style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <div
          style={{
            backgroundColor: t.colors.primary,
            borderRadius: isMobile ? t.radius.lg : t.radius.xl,
            padding: isMobile ? '36px 24px' : '64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {!isMobile && (
            <>
              <div
                style={{
                  position: 'absolute',
                  top: -80,
                  right: -80,
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -120,
                  right: 60,
                  width: 400,
                  height: 400,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              />
            </>
          )}

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Reveal>
              <Label style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16, display: 'block' }}>
                Приёмная кампания 2026
              </Label>
              <Heading level={2} style={{ color: '#fff', marginBottom: 12, maxWidth: 600 }}>
                Начните свой путь в профессию
              </Heading>
              <Text
                size={isMobile ? 'md' : 'lg'}
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: isMobile ? 32 : 48,
                  maxWidth: 500,
                }}
              >
                Приём документов на 2026/2027 учебный год открыт. Бюджетные и коммерческие места.
              </Text>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? 24 : 20,
                marginBottom: 40,
              }}
            >
              {steps.map((step, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{ position: 'relative' }}>
                    <Text
                      size="xl"
                      style={{
                        color: 'rgba(255,255,255,0.15)',
                        fontWeight: 700,
                        fontSize: isMobile ? 32 : 40,
                        fontFamily: t.fonts.heading,
                        marginBottom: 12,
                      }}
                    >
                      {step.num}
                    </Text>
                    <Heading level={5} style={{ color: '#fff', marginBottom: 8, fontSize: 16 }}>
                      {step.title}
                    </Heading>
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      {step.desc}
                    </Text>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 12,
                }}
              >
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => onNavigate && onNavigate('admissions')}
                  style={{
                    backgroundColor: '#fff',
                    color: t.colors.primary,
                    border: 'none',
                    fontWeight: 700,
                    ...(isMobile ? { width: '100%' } : {}),
                  }}
                  icon={<IconArrow size={16} color={t.colors.primary} />}
                >
                  Подать заявку онлайн
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    ...(isMobile ? { width: '100%' } : {}),
                  }}
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

function FacilitiesSection() {
  const t = useTheme();
  const { isMobile, isTablet } = useBreakpoint();

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

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 28 : 48 }}>
            <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>
              Инфраструктура
            </Label>
            <Heading level={2}>Материально-техническая база</Heading>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 16 }}>
          {facilities.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <Card
                hover
                style={{
                  padding: isMobile ? '24px 20px' : '32px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: t.radius.md,
                    backgroundColor: t.colors.primaryLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <Heading level={5} style={{ fontSize: 16, marginBottom: 8 }}>
                  {item.title}
                </Heading>
                <Text size="sm" secondary style={{ lineHeight: 1.65, flex: 1 }}>
                  {item.desc}
                </Text>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function NewsSection() {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const news = [
    {
      date: '8 мая 2026',
      tag: 'Мероприятия',
      title: 'День открытых дверей для абитуриентов и родителей',
      desc: 'Приглашаем будущих студентов и их родителей познакомиться с колледжем, преподавателями и учебными мастерскими.',
    },
    {
      date: '2 мая 2026',
      tag: 'Достижения',
      title: 'Студенты МОДУС заняли призовые места на региональном чемпионате «Профессионалы»',
      desc: 'Наши студенты успешно выступили в компетенциях «Градостроительное моделирование» и «Цифровой дизайн среды».',
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
    <Section id="news-section" bg={t.colors.bg} style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <Reveal>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'stretch' : 'flex-end',
              gap: isMobile ? 16 : 0,
              marginBottom: isMobile ? 28 : 48,
            }}
          >
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>
                Актуальное
              </Label>
              <Heading level={2}>Новости и события</Heading>
            </div>
            <Button
              variant="ghost"
              size="md"
              style={isMobile ? { alignSelf: 'flex-start', paddingLeft: 0 } : undefined}
              icon={<IconArrow size={14} />}
            >
              Все новости
            </Button>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
            gap: 16,
          }}
        >
          <Reveal>
            <Card hover padding="0" style={{ overflow: 'hidden', height: '100%' }}>
              <ImagePlaceholder
                label="фото — день открытых дверей"
                aspectRatio="2/1"
                style={{ borderRadius: 0 }}
              />
              <div style={{ padding: isMobile ? '22px 20px' : '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                  <Badge color={tagColors[news[0].tag]}>{news[0].tag}</Badge>
                  <Text size="xs" tertiary>
                    {news[0].date}
                  </Text>
                </div>
                <Heading level={4} style={{ marginBottom: 12 }}>
                  {news[0].title}
                </Heading>
                <Text size="md" secondary style={{ lineHeight: 1.7 }}>
                  {news[0].desc}
                </Text>
              </div>
            </Card>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {news.slice(1).map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Card hover style={{ flex: 1, padding: isMobile ? '20px' : '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                    <Badge color={tagColors[item.tag]}>{item.tag}</Badge>
                    <Text size="xs" tertiary>
                      {item.date}
                    </Text>
                  </div>
                  <Heading level={5} style={{ marginBottom: 8, fontSize: 15 }}>
                    {item.title}
                  </Heading>
                  <Text
                    size="sm"
                    secondary
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.desc}
                  </Text>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CampusSection() {
  const t = useTheme();
  const { isMobile } = useBreakpoint();

  const items = [
    { title: 'Современные мастерские', desc: 'Оборудованные по стандартам WorldSkills' },
    { title: 'Спортивный комплекс', desc: 'Тренажёрный зал, площадки, секции' },
    { title: 'Общежитие', desc: 'Комфортное проживание для иногородних студентов' },
    { title: 'Библиотека и коворкинг', desc: 'Электронные ресурсы и зоны для работы' },
  ];

  return (
    <Section style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 32 : 48,
            alignItems: 'center',
          }}
        >
          <Reveal>
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>
                Студенческая жизнь
              </Label>
              <Heading level={2} style={{ marginBottom: 16 }}>
                Всё для комфортной учёбы
              </Heading>
              <Text size="md" secondary style={{ marginBottom: isMobile ? 28 : 40, maxWidth: 440, lineHeight: 1.7 }}>
                Современная инфраструктура, активная внеучебная деятельность и поддержка на каждом этапе обучения
              </Text>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: 16,
                }}
              >
                {items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '20px',
                      borderRadius: t.radius.md,
                      backgroundColor: t.colors.bg,
                    }}
                  >
                    <Heading level={5} style={{ fontSize: 15, marginBottom: 6 }}>
                      {item.title}
                    </Heading>
                    <Text size="sm" tertiary>
                      {item.desc}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <ImagePlaceholder label="студенты за работой" aspectRatio="3/4" style={{ borderRadius: t.radius.lg }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <ImagePlaceholder label="мастерская" aspectRatio="1/1" style={{ borderRadius: t.radius.lg }} />
                <div style={{ flex: 1, borderRadius: t.radius.lg, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src="/assets/campus-2.png"
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 140 }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function TrustSection() {
  const t = useTheme();
  const { isMobile } = useBreakpoint();

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: isMobile ? 40 : 56, paddingBottom: isMobile ? 40 : 56 }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Label style={{ color: t.colors.textTertiary }}>Аккредитация и партнёры</Label>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? 24 : 56,
            opacity: 0.35,
            flexWrap: 'wrap',
            rowGap: isMobile ? 16 : 24,
          }}
        >
          {['Минобрнауки', 'Рособрнадзор', 'WorldSkills Russia', 'Союз строителей Кубани', 'Администрация КК'].map(
            (name, i) => (
              <Text
                key={i}
                size="sm"
                style={{
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: t.colors.text,
                  whiteSpace: 'nowrap',
                }}
              >
                {name}
              </Text>
            )
          )}
        </div>
      </Container>
    </Section>
  );
}

function EmploymentSection() {
  const t = useTheme();
  const { isMobile, isTablet } = useBreakpoint();

  const partners = [
    'ОАО ТИЖГП «Краснодарграждан­проект»',
    'ООО «Бизнес-Инвест»',
    'ООО «Нефтестрой­индустрия-Юг»',
    'ОАО «Краснодар­нефтегеофизика»',
    'Филиал ФГБУ «ФКП Росреестр»',
    'ООО «Жилсоцразвитие»',
    'ООО «ГУК Краснодар»',
    'ООО «Краснодар-Сити»',
  ];

  const cols = isMobile ? '1fr 1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)';

  return (
    <Section style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>
              Карьера выпускников
            </Label>
            <Heading level={2} style={{ marginBottom: 12 }}>
              Трудоустройство
            </Heading>
            <Text size="md" secondary style={{ maxWidth: 560, margin: '0 auto' }}>
              Наши выпускники работают в ведущих компаниях строительной и проектной отрасли Краснодарского края
            </Text>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: cols,
            gap: 16,
            marginTop: isMobile ? 28 : 40,
          }}
        >
          {partners.map((name, i) => (
            <Reveal key={i} delay={i * 60}>
              <Card
                hover
                style={{
                  padding: isMobile ? '24px 14px' : '32px 20px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    backgroundColor: t.colors.primaryLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <IconMap size={24} color={t.colors.primary} />
                </div>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    lineHeight: 1.5,
                    textWrap: 'pretty',
                    hyphens: 'manual',
                    fontSize: isMobile ? 12 : undefined,
                  }}
                >
                  {name}
                </Text>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function VirtualReceptionSection() {
  const t = useTheme();
  const { isMobile } = useBreakpoint();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: '',
    message: '',
    agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
    }
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
      <Section bg={t.colors.bg} style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
        <Container narrow>
          <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                backgroundColor: adjustAlpha('#16A34A', 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <IconCheck size={32} color="#16A34A" />
            </div>
            <Heading level={3} style={{ marginBottom: 12 }}>
              Сообщение отправлено
            </Heading>
            <Text size="md" secondary style={{ lineHeight: 1.7 }}>
              Спасибо за ваше обращение. Мы рассмотрим его и ответим в течение 3 рабочих дней.
            </Text>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section bg={t.colors.bg} style={{ paddingTop: isMobile ? 48 : 80, paddingBottom: isMobile ? 48 : 80 }}>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
            gap: isMobile ? 32 : 48,
            alignItems: 'start',
          }}
        >
          <Reveal>
            <div>
              <Label style={{ marginBottom: 12, display: 'block', color: t.colors.primary }}>
                Обратная связь
              </Label>
              <Heading level={2} style={{ marginBottom: 16 }}>
                Виртуальная приёмная
              </Heading>
              <Text size="md" secondary style={{ marginBottom: 32, lineHeight: 1.7, maxWidth: 420 }}>
                Задайте вопрос руководству колледжа, приёмной комиссии или учебной части. Мы ответим в кратчайшие сроки.
              </Text>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: t.radius.sm,
                      backgroundColor: t.colors.primaryLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconPhone size={18} color={t.colors.primary} />
                  </div>
                  <div>
                    <Text size="sm" secondary>
                      Телефон
                    </Text>
                    <Text size="md" style={{ fontWeight: 500 }}>
                      +7 (862) 555-18-40
                    </Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: t.radius.sm,
                      backgroundColor: t.colors.primaryLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconMail size={18} color={t.colors.primary} />
                  </div>
                  <div>
                    <Text size="sm" secondary>
                      Email
                    </Text>
                    <Text size="md" style={{ fontWeight: 500 }}>
                      admission@modus-college.ru
                    </Text>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: t.radius.sm,
                      backgroundColor: t.colors.primaryLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconMap size={18} color={t.colors.primary} />
                  </div>
                  <div>
                    <Text size="sm" secondary>
                      Адрес
                    </Text>
                    <Text size="md" style={{ fontWeight: 500 }}>
                      г. Казань, ул. Профессора Камалеева, 8
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Card style={{ padding: isMobile ? '24px 20px' : '36px' }}>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: 6,
                        fontFamily: t.fonts.body,
                        fontSize: 13,
                        fontWeight: 500,
                        color: errors.firstName ? t.colors.error : t.colors.textSecondary,
                      }}
                    >
                      Имя <span style={{ color: t.colors.error }}>*</span>
                    </label>
                    <input
                      style={inputStyle('firstName')}
                      value={form.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      placeholder="Имя"
                    />
                    {errors.firstName && (
                      <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>
                        {errors.firstName}
                      </Text>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: 6,
                        fontFamily: t.fonts.body,
                        fontSize: 13,
                        fontWeight: 500,
                        color: t.colors.textSecondary,
                      }}
                    >
                      Фамилия
                    </label>
                    <input
                      style={inputStyle('lastName')}
                      value={form.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      placeholder="Фамилия"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: 6,
                        fontFamily: t.fonts.body,
                        fontSize: 13,
                        fontWeight: 500,
                        color: errors.email ? t.colors.error : t.colors.textSecondary,
                      }}
                    >
                      Email <span style={{ color: t.colors.error }}>*</span>
                    </label>
                    <input
                      type="email"
                      style={inputStyle('email')}
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>
                        {errors.email}
                      </Text>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: 6,
                        fontFamily: t.fonts.body,
                        fontSize: 13,
                        fontWeight: 500,
                        color: t.colors.textSecondary,
                      }}
                    >
                      Контактный телефон
                    </label>
                    <input
                      type="tel"
                      style={inputStyle('phone')}
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: 6,
                      fontFamily: t.fonts.body,
                      fontSize: 13,
                      fontWeight: 500,
                      color: errors.category ? t.colors.error : t.colors.textSecondary,
                    }}
                  >
                    Категория обращения <span style={{ color: t.colors.error }}>*</span>
                  </label>
                  <select
                    style={{ ...inputStyle('category'), appearance: 'none', cursor: 'pointer' }}
                    value={form.category}
                    onChange={(e) => updateField('category', e.target.value)}
                  >
                    <option value="">Выберите категорию</option>
                    <option value="admission">Приёмная комиссия</option>
                    <option value="education">Учебная часть</option>
                    <option value="director">Руководство колледжа</option>
                    <option value="dormitory">Общежитие</option>
                    <option value="other">Другое</option>
                  </select>
                  {errors.category && (
                    <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>
                      {errors.category}
                    </Text>
                  )}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: 6,
                      fontFamily: t.fonts.body,
                      fontSize: 13,
                      fontWeight: 500,
                      color: errors.message ? t.colors.error : t.colors.textSecondary,
                    }}
                  >
                    Текст сообщения <span style={{ color: t.colors.error }}>*</span>
                  </label>
                  <textarea
                    style={{ ...inputStyle('message'), minHeight: 120, resize: 'vertical' }}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Опишите ваш вопрос или обращение..."
                  />
                  {errors.message && (
                    <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>
                      {errors.message}
                    </Text>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    marginBottom: 24,
                    padding: '14px',
                    borderRadius: t.radius.sm,
                    backgroundColor: t.colors.bg,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={(e) => updateField('agreed', e.target.checked)}
                    style={{
                      marginTop: 3,
                      accentColor: t.colors.primary,
                      width: 16,
                      height: 16,
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  />
                  <Text size="sm" secondary style={{ lineHeight: 1.6 }}>
                    Я даю согласие на обработку персональных данных
                    {errors.agreed && (
                      <span
                        style={{
                          color: t.colors.error,
                          display: 'block',
                          marginTop: 4,
                          fontSize: 13,
                        }}
                      >
                        {errors.agreed}
                      </span>
                    )}
                  </Text>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  style={{ width: '100%' }}
                  icon={<IconArrow size={16} color="#fff" />}
                >
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

export default function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <FeaturedProgramsSection onNavigate={onNavigate} />
      <AdmissionsCTASection onNavigate={onNavigate} />
      <FacilitiesSection />
      <CampusSection />
      <NewsSection />
      <EmploymentSection />
      <VirtualReceptionSection />
      <TrustSection />
    </>
  );
}
