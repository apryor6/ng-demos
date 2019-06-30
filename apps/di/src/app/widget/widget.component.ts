import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'demo-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  constructor(private ds: DataService, private fs: FilterService) {}

  ngOnInit() {}
}
