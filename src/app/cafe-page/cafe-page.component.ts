import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CafeService } from '../services/cafe/cafe.service';
import { Cafe } from '../shared/models/Cafe';

@Component({
  selector: 'app-cafe-page',
  templateUrl: './cafe-page.component.html',
  styleUrls: ['./cafe-page.component.css']
})
export class CafePageComponent implements OnInit {

  cafe !: Cafe;

  constructor(private activatedRoute:ActivatedRoute,
    private cafeService: CafeService){
    activatedRoute.params.subscribe((params) =>{
       if(params['id'])
      this.cafe = cafeService.getCafeById(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
