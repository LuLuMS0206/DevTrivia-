import { Component, OnInit } from '@angular/core';
import { ResultService } from './../result.service';  // Importar ResultService
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  correctAnswers: number = 0;
  totalQuestions: number = 0;

  constructor(private router: Router, private resultService: ResultService) { }

  ngOnInit(): void {
    // Obtener los resultados desde el servicio
    const results = this.resultService.getResults();
    this.correctAnswers = results.correctAnswers;
    this.totalQuestions = results.totalQuestions;

    console.log('Datos recibidos del servicio:', this.correctAnswers, this.totalQuestions);
  }

  restartTest(): void {
    this.router.navigate(['/test']);
  }
}
