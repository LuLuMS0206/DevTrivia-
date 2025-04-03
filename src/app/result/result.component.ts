import { Component, OnInit } from '@angular/core';
import { ResultService } from './../result.service';  
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
    const results = this.resultService.getResults();
    this.correctAnswers = results.correctAnswers;
    this.totalQuestions = results.totalQuestions;
  }

  restartTest(): void {
    const results = this.resultService.getResults();
    const testId = results.testId; 
  
    if (testId) {
      this.router.navigate(['/test', testId]); 
    } else {
      console.error('Error: testId es undefined');
    }
  }
  
}
