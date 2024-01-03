import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smll-card',
  templateUrl: './smll-card.component.html',
  styleUrls: ['./smll-card.component.css']
})
export class SmllCardComponent implements OnInit {
  @Input()
  photoCover:string=''
  @Input()
  cardDescription:string=''
  @Input()
  Id:string="0"
  

  constructor() { }

  ngOnInit(): void {
  }

}
