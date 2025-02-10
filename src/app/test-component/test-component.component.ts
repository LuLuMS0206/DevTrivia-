import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from './../test.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  testType: string = '';
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  timeLeft: number = 15; // Tiempo límite por pregunta en segundos
  timerSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtén el tipo de test de la URL, por ejemplo, 'css'
    this.testType = this.route.snapshot.paramMap.get('type') || 'css';
    // Usa el servicio para obtener las preguntas correspondientes
    this.testService.getQuestions(this.testType).subscribe((data) => {
      this.questions = data;
      // Inicia el temporizador para la primera pregunta
      this.startTimer();
    });
  }

  startTimer() {
    this.timeLeft = 15; // Reiniciar el tiempo para cada pregunta
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.recordAnswer(null); // Si se agota el tiempo, se registra como respuesta nula
      }
    });
  }

  recordAnswer(selectedAnswer: string | null) {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.startTimer();
    } else {
      this.router.navigate(['/results'], { queryParams: { score: this.score, total: this.questions.length } });
    }
  }

  selectAnswer(option: string) {
    this.recordAnswer(option);
  }
}
