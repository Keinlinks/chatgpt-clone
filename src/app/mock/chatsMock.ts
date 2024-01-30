import { ChatI, ScheduleList } from '../models/message.model';

export const chatsMock: ChatI[] = [
  {
    title: 'Testing 1',
    id_chat: 1,
    messages: [
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
    ],
  },
  {
    title:
      'Testing 2, con texto largo muy muy largo para probar si se ajusta a la pantalla',
    id_chat: 2,
    messages: [
      { id_user: 'You', message: 'Mensaje de prueba chat 2!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
    ],
  },
  {
    title: 'Testing 3, con otro text nada de nada',
    id_chat: 3,
    messages: [
      { id_user: 'You', message: 'Mensaje de prueba chat 2!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'El error NG05105 indica que Angular no pudo encontrar la configuración correspondiente para una propiedad sintética de animación llamada @open_close_animation. Este tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
      { id_user: 'You', message: 'Mensaje de prueba de usuario!!' },
      { id_user: 'ChatGPT', message: 'Prueba de chatGPT 3.5' },
      {
        id_user: 'You',
        message:
          'NG05105: Unexpected synthetic property @open_close_animation found. Please make sure that:Either BrowserAnimationsModule` or `NoopAnimationsModule` are imported in your application.There is corresponding configuration for the animation named @open_close_animation defined in the animations` field of the @Component',
      },
      {
        id_user: 'chatGPT',
        message:
          'En este ejemplo, ejecutarDentroDeNgZone ejecuta operaciones dentro de la zona de cambio, mientras que ejecutarFueraDeNgZone ejecuta operaciones fuera de la zona de cambio y luego utiliza ngZone.run para asegurarse de que las actualizaciones se realicen dentro de la zona de cambio. Este último caso es útil cuando necesitas realizar operaciones asíncronas y luego actualizar el estado dentro de la zona de cambio de Angular.tipo de error generalmente ocurre cuando intentas usar una animación en tu componente pero Angular no tiene información sobre esa animación. Asegúrate de seguir estos pasos para resolver este problema: Importa BrowserAnimationsModule o NoopAnimationsModule: Asegúrate de importar BrowserAnimationsModule o NoopAnimationsModule en tu módulo principal (generalmente app.module.ts). Esto proporcionará el soporte necesario para las animaciones. Asegúrate de que solo importas uno de estos módulos, dependiendo de si deseas activar o desactivar las animaciones. Define correctamente la animación en @Component:Verifica que la animación mencionada (@open_close_animation en tu caso) esté definida correctamente en el campo animations del decorador @Component. Asegúrate de que la animación sea compatible y esté configurada correctamente.',
      },
    ],
  },
];

export const scheduleMock: ScheduleList[] = chatsMock.map((t) => {
  return { id: t.id_chat, title: t.title };
});
