import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

type Event = {
  start: Date;
  end: Date;
  title: string;
  id: number;
};

const messages = {
  allDay: 'Dia inteiro',
  previous: 'Anterior',
  next: 'Próximo',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
};


const localizer = momentLocalizer(moment);
moment.locale('pt-br');

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventId, setEventId] = useState(0);

  const handleDateSelect = (e: any) => {
    setEventId(events.length + 1);
    setModalOpen(true);
    setEventTitle('');
  };

  const handleEventSelect = (event: Event) => {
    setModalOpen(true);
    setEventTitle(event.title);
    setEventId(event.id);
  };

  const handleEventDelete = (eventId: number) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    setModalOpen(false);
  };

  const handleEventAdd = () => {
    if (eventTitle.trim() !== '') {
      const newEvent: Event = {
        start: new Date(),
        end: new Date(),
        title: eventTitle,
        id: eventId,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setModalOpen(false);
    }
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        messages={messages}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleDateSelect}
        onSelectEvent={handleEventSelect}
        style={{ height: '80vh' }}
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>

        <div className="form-group">
          <label htmlFor="event-title">Título</label>
          <input
            type="text"
            className="form-control"
            id="event-title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-danger" onClick={() => handleEventDelete(eventId)}>Deletar Evento</button>
        <button className="btn btn-success" onClick={handleEventAdd}>Salvar Evento</button>
      </Modal>
    </div>
  );
};

export default App;
