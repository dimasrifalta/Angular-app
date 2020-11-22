import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-by-date-products',
  templateUrl: './view-all-by-date-products.component.html',
  styleUrls: ['./view-all-by-date-products.component.css'],
})
export class ViewAllByDateProductsComponent implements OnInit {
  searchDate = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (data) => (this.searchDate = data.date)
    );
  }
}
