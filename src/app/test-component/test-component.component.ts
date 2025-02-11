import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from './../test.service'; 

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  testType: string = '';  
  questions: any[] = [];  
  currentQuestionIndex: number = 0;  

  constructor(
    private route: ActivatedRoute,
    private testService: TestService  
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testType = params['type'];  
      this.loadQuestions();
    });
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

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
}
