import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private correctAnswers: number = 0;
  private totalQuestions: number = 0;

  setResults(correctAnswers: number, totalQuestions: number): void {
    this.correctAnswers = correctAnswers;
    this.totalQuestions = totalQuestions;
  }

  getResults(): { correctAnswers: number, totalQuestions: number } {
    return { correctAnswers: this.correctAnswers, totalQuestions: this.totalQuestions };
  }
}
