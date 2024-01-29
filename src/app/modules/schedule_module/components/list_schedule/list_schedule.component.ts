import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-schedule',

  templateUrl: `./list_schedule.html`,
  styleUrls: ['./list_schedule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListScheduleComponent {
  @Input() dateInfo: string = '';
  item_list: string[] = [
    'Flexbox:200px',
    'Questioning idk',
    'Mock de carga con Jest',
    'Angular Event Listener',
    'Hover Style: No Space',
    'Grid en Tailwind: Construcción Personalizada',
    'Contar líneas en input',
    'Ocultar barra scroll CSS',
    'Tailwind CSS Styling',
    'Agregar efecto hover en HTML',
    'Tema oscuro en Angular',
    'Crear página selección idiomas.',
    'Estilar Componentes en Next.js',
    'Indexing and Full Text Search',
    'Navegador no es compatible.',
    'Servir video con Express',
    'Funcionamiento interno ytdl-core',
    'Corregir importación puppeteer',
  ];
}
