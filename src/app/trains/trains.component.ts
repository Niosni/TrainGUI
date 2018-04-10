import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TRAINS } from '../mock-trains';
import { TrainDetailComponent } from '../train-detail/train-detail.component';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  
  trains = TRAINS;
  selectedTrain: Train;

  onSelect(train: Train): void {
    this.selectedTrain = train;
    alert("jep");
  }

  constructor() { }

  ngOnInit() {
  }

}
