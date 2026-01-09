import { Preset } from './post-state.interface';

export const DEFAULT_PRESETS: Preset[] = [
  {
    id: 'dresscode',
    name: 'Dress Code',
    header: 'Dress|Code',
    body: 'Obowiązuje strój fetyszowy: latex, skóra, vinyl, bielizna, uprząż. Zakazane: jeansy, t-shirty, odzież codzienna.',
    highlight: 'latex',
    date: '',
    cta: 'Brak Wyjątków',
  },
  {
    id: 'event',
    name: 'Wydarzenie',
    header: 'Event|Name',
    body: 'Opis wydarzenia. Wpisz tutaj szczegóły dotyczące imprezy i jej charakteru.',
    highlight: 'wydarzenia',
    date: '15.01.2025 | 22:00',
    cta: 'Tickets In Bio',
  },
  {
    id: 'hiring',
    name: 'Rekrutacja',
    header: 'Hiring',
    body: 'Szukamy osób do naszego zespołu. Wymagana dyspozycyjność w weekendy i doświadczenie w branży eventowej.',
    highlight: 'zespołu',
    date: '',
    cta: 'kontakt@fetishchateau.com',
  },
  {
    id: 'announcement',
    name: 'Ogłoszenie',
    header: 'Ważna|Informacja',
    body: 'Treść ogłoszenia. Wpisz tutaj ważne informacje dla gości.',
    highlight: 'Ważna',
    date: '',
    cta: 'Więcej Informacji Wkrótce',
  },
  {
    id: 'clear',
    name: 'Wyczyść',
    header: '',
    body: '',
    highlight: '',
    date: '',
    cta: '',
  },
];
