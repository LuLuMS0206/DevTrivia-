import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-selection-component',
  templateUrl: './test-selection-component.component.html',
  styleUrls: ['./test-selection-component.component.css']
})
export class TestSelectionComponentComponent implements OnInit {
  username: string = '';

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Invitado';
  }
}
