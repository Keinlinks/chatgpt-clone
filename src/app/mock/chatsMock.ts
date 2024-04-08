import { ChatI, ScheduleList } from '../models/message.model';

export const chatsMock: ChatI[] = [
  {
    title: 'Testing 1',
    id_chat: 1,
    messages: [
      { id_user: 'You', message: 'Testing number 1 for Clone-chat-gpt!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'Plan a 3-day trip to see the northern lights in Norway. Also recommend any ideal dates.',
      },
      {
        id_user: 'chatGPT',
        message:
          'Planning a trip to see the northern lights in Norway can be an unforgettable experience. Here\'s a suggested itinerary for a 3-day trip: Morning: Arrive in Tromsø, often referred to as the "Gateway to the Arctic". You can fly into Tromsø Airport from major Norwegian cities like Oslo or take a connecting flight from international airports.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          "The best time to see the northern lights in Norway is typically from late September to late March, when the nights are long and dark. However, it's essential to consider factors like weather conditions, moon phases, and solar activity when planning your trip.",
      },
      {
        id_user: 'chatGPT',
        message:
          'For optimal chances of witnessing the auroras, aim for dates with clear skies, low light pollution, and high solar activity. Checking aurora forecasts and moon phase calendars can help you plan your trip around prime viewing conditions.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
    ],
  },
  {
    title: 'Testing 2, with large text for testing this title box',
    id_chat: 2,
    messages: [
      { id_user: 'You', message: 'Testing number 2 for Clone-chat-gpt!!' },
      { id_user: 'ChatGPT', message: 'test chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'Plan a 3-day trip to see the northern lights in Norway. Also recommend any ideal dates.',
      },
      {
        id_user: 'chatGPT',
        message:
          'Planning a trip to see the northern lights in Norway can be an unforgettable experience. Here\'s a suggested itinerary for a 3-day trip: Morning: Arrive in Tromsø, often referred to as the "Gateway to the Arctic". You can fly into Tromsø Airport from major Norwegian cities like Oslo or take a connecting flight from international airports.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          "The best time to see the northern lights in Norway is typically from late September to late March, when the nights are long and dark. However, it's essential to consider factors like weather conditions, moon phases, and solar activity when planning your trip.",
      },
      {
        id_user: 'chatGPT',
        message:
          'For optimal chances of witnessing the auroras, aim for dates with clear skies, low light pollution, and high solar activity. Checking aurora forecasts and moon phase calendars can help you plan your trip around prime viewing conditions.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
    ],
  },
];

export const scheduleMock: ScheduleList[] = chatsMock.map((t) => {
  return { id: t.id_chat, title: t.title };
});
