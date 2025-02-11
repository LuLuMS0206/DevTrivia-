import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  correctAnswers: number = 0;
  totalQuestions: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.correctAnswers = navigation.extras.state['correctAnswers'] || 0;
      this.totalQuestions = navigation.extras.state['totalQuestions'] || 0;
      
      console.log('Datos recibidos en ResultComponent:', this.correctAnswers, this.totalQuestions);
    } else {
      console.log('No se recibieron datos desde la navegación.');
    }
  }

  restartTest(): void {
    this.router.navigate(['/test']);
  }
}
