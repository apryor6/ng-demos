import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AlternativeDataService } from '../alternative-data.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'demo-doodad',
  templateUrl: './doodad.component.html',
  styleUrls: ['./doodad.component.css'],
  providers: [{ provide: DataService, useClass: AlternativeDataService }]
})
export class DoodadComponent implements OnInit {
  constructor(private ds: DataService, private fs: FilterService) {}

  ngOnInit() {}
}
