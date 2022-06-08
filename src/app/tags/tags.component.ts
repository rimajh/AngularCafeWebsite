import { Component, Input, OnInit } from '@angular/core';
import { CafeService } from '../services/cafe/cafe.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  cafePageTags?:string[];
  tags?:Tag[];

  constructor(private cafeService:CafeService){}

  ngOnInit(): void{
    if(!this.cafePageTags)
      this.tags = this.cafeService.getAllTags();
   }


}
