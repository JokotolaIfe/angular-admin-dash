import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
capex; opex; asset;

asset_background_class = 'default';

  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.api.getData().subscribe(res=>{
      console.log(res);
      let capex = res[0].stat[0].filter(item=>item.label === 'capex');
      let opex = res[0].stat[0].filter(item=>item.label === 'opex');
      let asset = res[0].stat[0].filter(item=>item.label === 'asset');

      console.log(capex, opex, asset);

      this.capex = capex[0];
      this.opex = opex[0];
      this.asset = asset[0]
      if(this.asset){
        // To have a dynamic background, the class is passed from the parent to the child component,
        // ng template can also be passed from one parent to another
        // But in this case a dynamic class suits best
        this.asset_background_class = 'success_bg'
      }
    })
  }

}
