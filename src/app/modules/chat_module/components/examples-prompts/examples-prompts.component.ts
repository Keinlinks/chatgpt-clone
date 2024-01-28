import { Component } from '@angular/core';
import { Examples } from 'src/app/models/examples_prompts';

@Component({
  selector: 'app-examples-prompts',
  templateUrl: './examples-prompts.component.html',
  styleUrls: ['./examples-prompts.component.css'],
})
export class ExamplesPromptsComponent {
  infoExamples: Examples[] = [
    {
      p: 'para mejorar mi resistencia',
      title: 'Crea un plan de entrenamiento',
    },
    {
      p: 'para gafas de sol para la Generación Z y los Millennials',
      title: 'Comparar estrategias de marketing',
    },
    {
      p: 'de un encabezado fijo de un sitio web',
      title: 'Muéstrame un fragmento de código',
    },
    {
      p: 'para una familia de 4 para hacer en interiores en un día lluvioso',
      title: 'Sugiere actividades divertidas',
    },
  ];
}
