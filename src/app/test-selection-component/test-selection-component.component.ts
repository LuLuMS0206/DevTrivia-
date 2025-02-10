import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-selection-component',
  templateUrl: './test-selection-component.component.html',
  styleUrls: ['./test-selection-component.component.css']
})
export class TestSelectionComponentComponent implements OnInit {
  username: string = '';
  testId: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.testId = this.route.snapshot.paramMap.get('testId');
    this.username = localStorage.getItem('username') || 'Invitado';
  }

  getTestContent() {
    switch (this.testId) {
      case 'html':
        return { title: 'Test de HTML', description: '¡Estás listo para comenzar el test de HTML! Haz clic en el botón para empezar.' };
      case 'css':
        return { title: 'Test de CSS', description: '¡Estás listo para comenzar el test de CSS! Haz clic en el botón para empezar.' };
      case 'angular':
        return { title: 'Test de Angular', description: '¡Estás listo para comenzar el test de Angular! Haz clic en el botón para empezar.' };
      case 'typescript':
        return { title: 'Test de Typescript', description: '¡Estás listo para comenzar el test de Typescript! Haz clic en el botón para empezar.' };
      default:
        return { title: 'Selecciona un test', description: 'Haz clic en un test para comenzar.' };
    }
  }
}
