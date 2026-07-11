/*
 * КАСТ — Admissions Page
 */

function AdmissionsPage({ onNavigate }) {
  const t = useTheme();
  const [activeTab, setActiveTab] = React.useState('overview');
  const [formData, setFormData] = React.useState({
    lastName: '', firstName: '', middleName: '', email: '', phone: '',
    program: '', educationLevel: '', hasOriginals: false, agreed: false,
  });
  const [formErrors, setFormErrors] = React.useState({});
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(null);

  const tabs = [
    { key: 'overview', label: 'Обзор' },
    { key: 'documents', label: 'Документы' },
    { key: 'apply', label: 'Подать заявку' },
    { key: 'faq', label: 'Вопросы и ответы' },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.lastName.trim()) errors.lastName = 'Обязательное поле';
    if (!formData.firstName.trim()) errors.firstName = 'Обязательное поле';
    if (!formData.email.trim()) errors.email = 'Обязательное поле';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Некорректный email';
    if (!formData.phone.trim()) errors.phone = 'Обязательное поле';
    else if (formData.phone.replace(/\D/g,'').length < 10) errors.phone = 'Некорректный номер';
    if (!formData.program) errors.program = 'Выберите специальность';
    if (!formData.educationLevel) errors.educationLevel = 'Выберите уровень';
    if (!formData.agreed) errors.agreed = 'Необходимо согласие';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setFormSubmitted(true);
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) setFormErrors(prev => { const n = {...prev}; delete n[field]; return n; });
  };

  return (
    <div style={{ paddingTop: 100, minHeight: '100vh' }}>
      {/* Header */}
      <Section style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Container>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <button onClick={() => onNavigate && onNavigate('home')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: t.fonts.body, fontSize: 14, color: t.colors.textTertiary, padding: 0,
              }}>Главная</button>
              <IconChevron size={10} color={t.colors.textTertiary} direction="right" />
              <Text size="sm" style={{ color: t.colors.primary, fontWeight: 500 }}>Приёмная кампания</Text>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Heading level={1} style={{ fontSize: 48, marginBottom: 12 }}>Приёмная кампания 2026</Heading>
            <Text size="lg" secondary style={{ maxWidth: 600 }}>
              Вся информация о поступлении в Краснодарский архитектурно-строительный техникум
            </Text>
          </Reveal>
        </Container>
      </Section>

      {/* Tabs */}
      <div style={{
        position: 'sticky', top: 68, zIndex: 50,
        backgroundColor: t.colors.surface,
        borderBottom: `1px solid ${t.colors.border}`,
      }}>
        <Container>
          <div style={{ display: 'flex', gap: 0 }}>
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '16px 24px',
                  fontFamily: t.fonts.body,
                  fontSize: 14,
                  fontWeight: activeTab === tab.key ? 600 : 400,
                  color: activeTab === tab.key ? t.colors.primary : t.colors.textSecondary,
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  borderBottom: `2px solid ${activeTab === tab.key ? t.colors.primary : 'transparent'}`,
                  transition: 'all 0.15s',
                }}
              >{tab.label}</button>
            ))}
          </div>
        </Container>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab t={t} onNavigate={onNavigate} setActiveTab={setActiveTab} />}
      {activeTab === 'documents' && <DocumentsTab t={t} />}
      {activeTab === 'apply' && (
        <ApplyTab
          t={t} formData={formData} formErrors={formErrors}
          formSubmitted={formSubmitted} updateField={updateField}
          handleSubmit={handleSubmit}
        />
      )}
      {activeTab === 'faq' && <FaqTab t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />}
    </div>
  );
}

/* ─── Overview Tab ─── */
function OverviewTab({ t, onNavigate, setActiveTab }) {
  const deadlines = [
    { date: '20 июня', label: 'Начало приёма документов', status: 'upcoming' },
    { date: '15 июля', label: 'Завершение приёма (с вступительными испытаниями)', status: 'upcoming' },
    { date: '10 августа', label: 'Завершение приёма (без вступительных испытаний)', status: 'upcoming' },
    { date: '15 августа', label: 'Завершение приёма (при наличии свободных мест)', status: 'upcoming' },
    { date: '1 сентября', label: 'Начало учебного года', status: 'upcoming' },
  ];

  return (
    <Section style={{ paddingTop: 48, paddingBottom: 80 }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48 }}>
          <div>
            {/* Timeline */}
            <Reveal>
              <Heading level={3} style={{ marginBottom: 32 }}>Ключевые даты</Heading>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
              {deadlines.map((d, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr',
                    gap: 20,
                    padding: '20px 0',
                    borderBottom: i < deadlines.length - 1 ? `1px solid ${t.colors.borderLight}` : 'none',
                    alignItems: 'center',
                  }}>
                    <Text size="md" style={{ fontWeight: 700, fontFamily: t.fonts.heading, color: t.colors.primary }}>
                      {d.date}
                    </Text>
                    <Text size="md">{d.label}</Text>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Admission conditions */}
            <Reveal>
              <Heading level={3} style={{ marginBottom: 24 }}>Условия поступления</Heading>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 }}>
              {[
                { title: 'После 9 класса', desc: 'На базе основного общего образования. Срок обучения 3 года 10 месяцев.', icon: <IconGrad size={20} color={t.colors.primary} /> },
                { title: 'После 11 класса', desc: 'На базе среднего общего образования. Срок обучения 2 года 10 месяцев.', icon: <IconBook size={20} color={t.colors.primary} /> },
                { title: 'Бюджетные места', desc: 'Зачисление по среднему баллу аттестата. Конкурс аттестатов.', icon: <IconCheck size={20} color={t.colors.success} /> },
                { title: 'Платное обучение', desc: 'Стоимость от 48 000 ₽/год. Возможна рассрочка оплаты.', icon: <IconCalendar size={20} color={t.colors.warning} /> },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <Card style={{ padding: '24px', height: '100%' }}>
                    <div style={{ marginBottom: 12 }}>{item.icon}</div>
                    <Heading level={5} style={{ marginBottom: 8, fontSize: 16 }}>{item.title}</Heading>
                    <Text size="sm" secondary style={{ lineHeight: 1.6 }}>{item.desc}</Text>
                  </Card>
                </Reveal>
              ))}
            </div>

            {/* Entrance tests */}
            <Reveal>
              <Heading level={3} style={{ marginBottom: 24 }}>Вступительные испытания</Heading>
              <Card style={{ marginBottom: 48 }}>
                <Text size="md" secondary style={{ marginBottom: 16, lineHeight: 1.7 }}>
                  Для специальностей «Архитектура» и «Дизайн» предусмотрены творческие вступительные испытания:
                </Text>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { spec: '07.02.01 Архитектура', test: 'Рисунок (натюрморт из геометрических тел)' },
                    { spec: '54.02.01 Дизайн', test: 'Рисунок и композиция' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 18px', borderRadius: t.radius.sm,
                      backgroundColor: t.colors.bg,
                    }}>
                      <Text size="sm" style={{ fontWeight: 500 }}>{item.spec}</Text>
                      <Text size="sm" secondary>{item.test}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Reveal delay={200}>
              <Card style={{
                backgroundColor: t.colors.primary,
                padding: '32px',
                position: 'sticky',
                top: 140,
              }}>
                <Heading level={4} style={{ color: '#fff', marginBottom: 8, fontSize: 20 }}>
                  Готовы поступить?
                </Heading>
                <Text size="sm" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, lineHeight: 1.6 }}>
                  Подайте заявку онлайн — это быстро и удобно. Для подачи документов лично посетите приёмную комиссию.
                </Text>
                <Button
                  variant="accent"
                  size="lg"
                  style={{ backgroundColor: '#fff', color: t.colors.primary, border: 'none', width: '100%', fontWeight: 700 }}
                  onClick={() => setActiveTab('apply')}
                  icon={<IconArrow size={16} color={t.colors.primary} />}
                >
                  Подать заявку
                </Button>
                <Divider style={{ borderColor: 'rgba(255,255,255,0.12)', margin: '20px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <IconPhone size={16} color="rgba(255,255,255,0.5)" />
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>+7 (861) 262-10-70</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <IconMail size={16} color="rgba(255,255,255,0.5)" />
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>admission@modus-college.ru</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <IconClock size={16} color="rgba(255,255,255,0.5)" />
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Пн—Пт, 9:00 — 16:00</Text>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card style={{ padding: '24px' }}>
                <Heading level={5} style={{ marginBottom: 12, fontSize: 15 }}>Полезные ссылки</Heading>
                {[
                  'Правила приёма (PDF)',
                  'Контрольные цифры приёма',
                  'Образец заявления',
                  'Договор на обучение',
                ].map((link, i) => (
                  <a key={i} href="#" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: i < 3 ? `1px solid ${t.colors.borderLight}` : 'none',
                    textDecoration: 'none', color: t.colors.text, fontFamily: t.fonts.body, fontSize: 14,
                    transition: 'color 0.15s',
                  }}
                  onMouseOver={e => e.currentTarget.style.color = t.colors.primary}
                  onMouseOut={e => e.currentTarget.style.color = t.colors.text}
                  >
                    {link}
                    <IconArrow size={12} />
                  </a>
                ))}
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Documents Tab ─── */
function DocumentsTab({ t }) {
  const docs = [
    { title: 'Обязательные документы', items: [
      'Заявление на имя директора (бланк в приёмной комиссии или на сайте)',
      'Оригинал или копия документа об образовании с приложением',
      'Паспорт (оригинал + копия)',
      'СНИЛС (копия)',
      '4 фотографии 3×4 см',
      'Медицинская справка формы 086/у',
    ]},
    { title: 'Дополнительные документы', items: [
      'Документы, подтверждающие индивидуальные достижения (портфолио, грамоты, дипломы)',
      'Справка с места работы (для работающих)',
      'Документы, подтверждающие право на льготы (при наличии)',
      'Свидетельство о перемене имени (при наличии)',
    ]},
    { title: 'Для иногородних (общежитие)', items: [
      'Справка с места жительства',
      'Справка о составе семьи',
      'Справка о доходах родителей',
    ]},
  ];

  return (
    <Section style={{ paddingTop: 48, paddingBottom: 80 }}>
      <Container narrow>
        <Reveal>
          <Heading level={3} style={{ marginBottom: 32 }}>Перечень необходимых документов</Heading>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {docs.map((group, gi) => (
            <Reveal key={gi} delay={gi * 100}>
              <Card style={{ padding: '32px' }}>
                <Heading level={4} style={{ marginBottom: 20, fontSize: 18 }}>{group.title}</Heading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {group.items.map((item, ii) => (
                    <div key={ii} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%',
                        backgroundColor: t.colors.primaryLight,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 1,
                      }}>
                        <IconCheck size={12} color={t.colors.primary} />
                      </div>
                      <Text size="md" secondary style={{ lineHeight: 1.6 }}>{item}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Apply Form Tab ─── */
function ApplyTab({ t, formData, formErrors, formSubmitted, updateField, handleSubmit }) {
  if (formSubmitted) {
    return (
      <Section style={{ paddingTop: 80, paddingBottom: 80 }}>
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
            <Heading level={3} style={{ marginBottom: 12 }}>Заявка отправлена</Heading>
            <Text size="md" secondary style={{ lineHeight: 1.7 }}>
              Ваша заявка принята. Мы свяжемся с вами в течение 3 рабочих дней для подтверждения данных. Следите за статусом в разделе «Личный кабинет».
            </Text>
          </div>
        </Container>
      </Section>
    );
  }

  const fieldStyle = (field) => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: t.radius.sm,
    border: `1.5px solid ${formErrors[field] ? t.colors.error : t.colors.border}`,
    fontFamily: t.fonts.body,
    fontSize: 15,
    color: t.colors.text,
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
    backgroundColor: t.colors.surface,
  });

  return (
    <Section style={{ paddingTop: 48, paddingBottom: 80 }}>
      <Container narrow>
        <Reveal>
          <Card style={{ padding: '40px' }}>
            <Heading level={3} style={{ marginBottom: 8 }}>Подать заявку онлайн</Heading>
            <Text size="md" secondary style={{ marginBottom: 32 }}>
              Заполните форму для предварительной записи. Оригиналы документов необходимо предоставить лично.
            </Text>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
                <FormField label="Фамилия" error={formErrors.lastName} required>
                  <input style={fieldStyle('lastName')} value={formData.lastName}
                    onChange={e => updateField('lastName', e.target.value)} placeholder="Иванов" />
                </FormField>
                <FormField label="Имя" error={formErrors.firstName} required>
                  <input style={fieldStyle('firstName')} value={formData.firstName}
                    onChange={e => updateField('firstName', e.target.value)} placeholder="Иван" />
                </FormField>
                <FormField label="Отчество" error={formErrors.middleName}>
                  <input style={fieldStyle('middleName')} value={formData.middleName}
                    onChange={e => updateField('middleName', e.target.value)} placeholder="Иванович" />
                </FormField>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                <FormField label="Email" error={formErrors.email} required>
                  <input type="email" style={fieldStyle('email')} value={formData.email}
                    onChange={e => updateField('email', e.target.value)} placeholder="ivan@example.com" />
                </FormField>
                <FormField label="Телефон" error={formErrors.phone} required>
                  <input type="tel" style={fieldStyle('phone')} value={formData.phone}
                    onChange={e => updateField('phone', e.target.value)} placeholder="+7 (___) ___-__-__" />
                </FormField>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                <FormField label="Специальность" error={formErrors.program} required>
                  <select style={{ ...fieldStyle('program'), appearance: 'none', cursor: 'pointer' }}
                    value={formData.program} onChange={e => updateField('program', e.target.value)}>
                    <option value="">Выберите специальность</option>
                    {ALL_PROGRAMS.map(p => (
                      <option key={p.code} value={p.code}>{p.code} — {p.name}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Образование" error={formErrors.educationLevel} required>
                  <select style={{ ...fieldStyle('educationLevel'), appearance: 'none', cursor: 'pointer' }}
                    value={formData.educationLevel} onChange={e => updateField('educationLevel', e.target.value)}>
                    <option value="">Выберите уровень</option>
                    <option value="9">9 классов (основное общее)</option>
                    <option value="11">11 классов (среднее общее)</option>
                  </select>
                </FormField>
              </div>

              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                marginBottom: 32, padding: '16px', borderRadius: t.radius.sm,
                backgroundColor: t.colors.bg,
              }}>
                <input
                  type="checkbox" checked={formData.agreed}
                  onChange={e => updateField('agreed', e.target.checked)}
                  style={{ marginTop: 3, accentColor: t.colors.primary, width: 16, height: 16, cursor: 'pointer' }}
                />
                <Text size="sm" secondary style={{ lineHeight: 1.6 }}>
                  Даю согласие на обработку персональных данных в соответствии с Федеральным законом №152-ФЗ «О персональных данных»
                  {formErrors.agreed && <span style={{ color: t.colors.error, display: 'block', marginTop: 4, fontSize: 13 }}>Необходимо дать согласие</span>}
                </Text>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="primary" size="lg" style={{ flex: 1 }} icon={<IconArrow size={16} color="#fff" />}>
                  Отправить заявку
                </Button>
              </div>
            </form>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Form Field Helper ─── */
function FormField({ label, error, required, children }) {
  const t = useTheme();
  return (
    <div>
      <label style={{
        display: 'block', marginBottom: 6,
        fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500,
        color: error ? t.colors.error : t.colors.textSecondary,
      }}>
        {label} {required && <span style={{ color: t.colors.error }}>*</span>}
      </label>
      {children}
      {error && <Text size="xs" style={{ color: t.colors.error, marginTop: 4 }}>{error}</Text>}
    </div>
  );
}

/* ─── FAQ Tab ─── */
function FaqTab({ t, openFaq, setOpenFaq }) {
  const faqs = [
    { q: 'Какие документы нужны для поступления?', a: 'Основные документы: заявление, документ об образовании (аттестат), паспорт, СНИЛС, 4 фотографии 3×4, медицинская справка 086/у. Для творческих специальностей может потребоваться портфолио.' },
    { q: 'Можно ли поступить после 9 класса?', a: 'Да, техникум принимает абитуриентов как после 9 класса (основное общее образование), так и после 11 класса (среднее общее образование). Срок обучения зависит от уровня образования.' },
    { q: 'Есть ли бюджетные места?', a: 'Да, по всем специальностям предусмотрены бюджетные места. Зачисление на бюджет происходит на конкурсной основе по среднему баллу аттестата.' },
    { q: 'Как проходят вступительные испытания?', a: 'Вступительные испытания предусмотрены только для специальностей «Архитектура» и «Дизайн». Это творческий экзамен по рисунку. По остальным специальностям зачисление проводится по среднему баллу аттестата.' },
    { q: 'Есть ли общежитие?', a: 'Да, иногородним студентам предоставляется общежитие. Для получения места необходимо подать заявление и предоставить дополнительные документы (справка с места жительства, справка о доходах).' },
    { q: 'Какова стоимость обучения на платной основе?', a: 'Стоимость обучения зависит от специальности и составляет от 48 000 ₽ до 72 000 ₽ в год. Возможна поэтапная оплата. Подробности уточняйте в приёмной комиссии.' },
    { q: 'Можно ли подать документы онлайн?', a: 'Да, вы можете подать предварительную заявку через наш сайт. Однако оригиналы документов необходимо предоставить лично в приёмную комиссию или направить заказным письмом.' },
  ];

  return (
    <Section style={{ paddingTop: 48, paddingBottom: 80 }}>
      <Container narrow>
        <Reveal>
          <Heading level={3} style={{ marginBottom: 32 }}>Часто задаваемые вопросы</Heading>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <Card
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    padding: 0, cursor: 'pointer',
                    border: `1px solid ${isOpen ? t.colors.primary : t.colors.borderLight}`,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px',
                  }}>
                    <Text size="md" style={{ fontWeight: 500 }}>{faq.q}</Text>
                    <IconChevron size={14} color={t.colors.textTertiary} direction={isOpen ? 'up' : 'down'} />
                  </div>
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      animation: 'expandIn 0.2s ease',
                    }}>
                      <Text size="md" secondary style={{ lineHeight: 1.7 }}>{faq.a}</Text>
                    </div>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

Object.assign(window, { AdmissionsPage, FormField });
