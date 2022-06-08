import { Component, OnInit } from '@angular/core';
import {CafeService} from '../services/cafe/cafe.service';
import { Cafe } from '../shared/models/Cafe';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cafes:Cafe[] = []; 
  constructor(private cafeService:CafeService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
       this.cafes = this.cafeService.getAll().filter(cafe => cafe.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
       else if(params['tag'])
          this.cafes = this.cafeService.getAllCafesByTag(params['tag']); 
       else
        this.cafes = this.cafeService.getAll(); 
    })

   

  }

}
