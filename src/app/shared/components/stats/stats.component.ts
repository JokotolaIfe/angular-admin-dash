import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input()
  capex;

  @Input()
  opex;

  @Input()
  asset;

  @Input()
  asset_background_class

  capex_total: number = 0;
  opex_total: number = 0;
  asset_total: number = 0;

  ngOnInit(){
    setTimeout(() => {
      this.capex_total = this.capex.spent + this.capex.balance;
      this.opex_total = this.opex.spent + this.opex.balance;
      this.asset_total = this.asset.use + this.asset.active;

      console.log(this.capex, this.opex, this.asset, this.asset_background_class)
    }, 3000);
  }
}
