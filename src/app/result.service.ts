import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private correctAnswers: number = 0;
  private totalQuestions: number = 0;
  private testId: string = ''; 

  setResults(correctAnswers: number, totalQuestions: number, testId: string): void {
    this.correctAnswers = correctAnswers;
    this.totalQuestions = totalQuestions;
    this.testId = testId; 
  }

  getResults(): { correctAnswers: number, totalQuestions: number, testId: string } {
    return { correctAnswers: this.correctAnswers, totalQuestions: this.totalQuestions, testId: this.testId };
  }
}
