import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORXVdBqL_e61Gap73fs0o9AIJgPiSVA6xVw&usqp=CAU" alt="img content'
  @Input()
  cardTitle:string='titulo'
  @Input()
  cardDescription:string='descrição blablablabla'
 


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }

}
