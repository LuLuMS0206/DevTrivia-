import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from './../test.service';
import { ResultService } from './../result.service';  

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit, OnDestroy {
  testType: string = '';
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswers: { [key: number]: string } = {};
  correctAnswers: number = 0;
  testFinished: boolean = false;
  timeLeft: number = 60; 
  timerInterval: any;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router,
    private resultService: ResultService  
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testType = params['type'];
      this.loadQuestions();
      this.startTimer(); 
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval); 
  }

  loadQuestions(): void {
    this.testService.getQuestions(this.testType).subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Error cargando preguntas:', error);
      }
    );
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.finishTest(); 
      }
    }, 1000);
  }

  selectAnswer(option: string): void {
    this.selectedAnswers[this.currentQuestionIndex] = option;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.finishTest();
    } else {
      this.currentQuestionIndex++;
    }
  }

  finishTest(): void {
    clearInterval(this.timerInterval); 
    this.correctAnswers = this.questions.filter((q, index) => 
      this.selectedAnswers[index] === q.correctAnswer).length;
    
    this.resultService.setResults(this.correctAnswers, this.questions.length, this.testType); 
    
    this.testFinished = true;
    
    this.router.navigate(['/result']);
  }
  

  restartTest(): void {
    this.router.navigate(['/test', this.testType]); 
  }
}
