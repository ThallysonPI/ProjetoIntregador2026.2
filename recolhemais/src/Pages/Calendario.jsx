import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/chamados.css';
import '../styles/calendario.css';

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatLongDate(dateKey) {
  return new Date(`${dateKey}T12:00:00`).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Calendario() {
  const today = new Date();
  const todayKey = formatDateKey(today);
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(todayKey);
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDate, setEventDate] = useState(todayKey);

  const monthLabel = visibleMonth.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });
  const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const firstDayOffset = (firstDay.getDay() + 6) % 7;
  const calendarStart = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1 - firstDayOffset,
  );
  const calendarDays = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(calendarStart);
    date.setDate(calendarStart.getDate() + index);
    return date;
  });
  const selectedEvents = events.filter((event) => event.date === selectedDate);

  function changeMonth(offset) {
    const nextMonth = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth() + offset,
      1,
    );
    const selectedDay = new Date(`${selectedDate}T12:00:00`).getDate();
    const lastDay = new Date(
      nextMonth.getFullYear(),
      nextMonth.getMonth() + 1,
      0,
    ).getDate();

    setVisibleMonth(nextMonth);
    setSelectedDate(
      formatDateKey(
        new Date(nextMonth.getFullYear(), nextMonth.getMonth(), Math.min(selectedDay, lastDay)),
      ),
    );
  }

  function openModal(date = selectedDate) {
    setEventDate(date);
    setEventTitle('');
    setEventTime('');
    setIsModalOpen(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const title = eventTitle.trim();
    if (!title || !eventDate) return;

    setEvents((currentEvents) => [
      ...currentEvents,
      {
        id: `${Date.now()}-${currentEvents.length}`,
        title,
        date: eventDate,
        time: eventTime,
      },
    ]);
    setSelectedDate(eventDate);
    setVisibleMonth(new Date(`${eventDate}T12:00:00`));
    setIsModalOpen(false);
  }

  function removeEvent(eventId) {
    setEvents((currentEvents) => currentEvents.filter((item) => item.id !== eventId));
  }

  return (
    <div className="desktop-shell calendario-page">
      <aside className="sidebar">
        <div className="brand">
          <img className="brand-logo" src="/imagens/imag.png" alt="" aria-hidden="true" />
          <div>
            <strong>RecolheMais</strong>
            <span>Gestão de chamados</span>
          </div>
        </div>

        <nav className="sidebar-menu" aria-label="Navegação principal">
          <Link to="/chamados" className="menu-item"><span>＋</span> Novo chamado</Link>
          <Link to="/meus-chamados" className="menu-item"><span>◷</span> Meus chamados</Link>
          <Link to="/mapa" className="menu-item"><span>⌖</span> Mapa</Link>
          <Link to="/calendario" className="menu-item active" aria-current="page">
            <span>▦</span> Calendário
          </Link>
          <Link to="/perfil" className="menu-item"><span>♙</span> Meu perfil</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Calendário</p>
            <h1>Agenda de coleta</h1>
          </div>
          <button type="button" className="calendar-add-button" onClick={() => openModal()}>
            + Novo evento
          </button>
        </header>

        <section className="page calendar-content">
          <div className="page-heading">
            <div>
              <h2>Calendário</h2>
              <p>Organize e acompanhe seus eventos de coleta.</p>
            </div>
          </div>

          <div className="calendar-layout">
            <section className="card calendar-card" aria-label="Calendário mensal">
              <div className="calendar-toolbar">
                <h3>{monthLabel}</h3>
                <div className="calendar-navigation">
                  <button type="button" aria-label="Mês anterior" onClick={() => changeMonth(-1)}>
                    ‹
                  </button>
                  <button
                    type="button"
                    className="calendar-today-button"
                    onClick={() => {
                      setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1));
                      setSelectedDate(todayKey);
                    }}
                  >
                    Hoje
                  </button>
                  <button type="button" aria-label="Próximo mês" onClick={() => changeMonth(1)}>
                    ›
                  </button>
                </div>
              </div>

              <div className="calendar-grid" role="grid" aria-label={monthLabel}>
                {weekDays.map((day) => (
                  <div className="calendar-weekday" key={day} role="columnheader">
                    {day}
                  </div>
                ))}
                {calendarDays.map((date) => {
                  const dateKey = formatDateKey(date);
                  const inMonth = date.getMonth() === visibleMonth.getMonth();
                  const dayEvents = events.filter((event) => event.date === dateKey);
                  const isSelected = dateKey === selectedDate;
                  const isToday = dateKey === todayKey;

                  return (
                    <button
                      type="button"
                      key={dateKey}
                      className={[
                        'calendar-day',
                        inMonth ? '' : 'outside-month',
                        isSelected ? 'selected-day' : '',
                        isToday ? 'today-day' : '',
                      ].filter(Boolean).join(' ')}
                      onClick={() => {
                        setSelectedDate(dateKey);
                        if (!inMonth) {
                          setVisibleMonth(new Date(date.getFullYear(), date.getMonth(), 1));
                        }
                      }}
                      onDoubleClick={() => openModal(dateKey)}
                      aria-label={`${date.getDate()} ${date.toLocaleDateString('pt-BR', { month: 'long' })}${dayEvents.length ? `, ${dayEvents.length} eventos` : ''}`}
                      aria-pressed={isSelected}
                    >
                      <span className="calendar-day-number">{date.getDate()}</span>
                      <span className="calendar-day-events">
                        {dayEvents.slice(0, 2).map((calendarEvent) => (
                          <span className="calendar-event-chip" key={calendarEvent.id}>
                            {calendarEvent.title}
                          </span>
                        ))}
                        {dayEvents.length > 2 && (
                          <span className="calendar-more-events">+{dayEvents.length - 2}</span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="calendar-tip">Dê dois cliques em um dia para adicionar um evento.</p>
            </section>

            <aside className="card calendar-agenda">
              <div className="agenda-heading">
                <div>
                  <h3>Agenda do dia</h3>
                  <p>{formatLongDate(selectedDate)}</p>
                </div>
                <button
                  type="button"
                  className="agenda-add-button"
                  aria-label="Adicionar evento neste dia"
                  onClick={() => openModal(selectedDate)}
                >
                  +
                </button>
              </div>
              {selectedEvents.length === 0 ? (
                <p className="agenda-empty">Nenhum evento para este dia.</p>
              ) : (
                <ul className="agenda-event-list">
                  {selectedEvents.map((calendarEvent) => (
                    <li className="agenda-event" key={calendarEvent.id}>
                      <div>
                        <strong title={calendarEvent.title}>{calendarEvent.title}</strong>
                        <span>{calendarEvent.time || 'Horário não definido'}</span>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remover evento ${calendarEvent.title}`}
                        onClick={() => removeEvent(calendarEvent.id)}
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="calendar-modal-backdrop">
          <section
            className="calendar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="calendar-modal-title"
          >
            <div className="calendar-modal-heading">
              <h2 id="calendar-modal-title">Novo evento</h2>
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="calendar-event-title">Título do evento</label>
              <input
                id="calendar-event-title"
                type="text"
                value={eventTitle}
                onChange={(event) => setEventTitle(event.target.value)}
                placeholder="Ex.: Coleta seletiva"
                maxLength={80}
                required
                autoFocus
              />
              <div className="calendar-modal-row">
                <div>
                  <label htmlFor="calendar-event-date">Data</label>
                  <input
                    id="calendar-event-date"
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="calendar-event-time">Horário</label>
                  <input
                    id="calendar-event-time"
                    type="time"
                    value={eventTime}
                    onChange={(event) => setEventTime(event.target.value)}
                  />
                </div>
              </div>
              <div className="calendar-modal-actions">
                <button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button type="submit">Salvar evento</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
