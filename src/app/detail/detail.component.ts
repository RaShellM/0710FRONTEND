import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JusService, SmoothieCarton } from '../jus.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public apiUrl: string;
  private _unSeulSmoothie: SmoothieCarton;  //nouvelle variable carton vide (c'est une interface)
  private _unSeulSmoothieId: string;

  constructor(
    private route: ActivatedRoute, //pour que le snapshot fonctionne
    private smoothieService: JusService //importe le service de recup Jus(l'objet)
  ) { }

  ngOnInit() {
    this.unSeulSmoothieId = this.route.snapshot.paramMap.get('id');
 
    this.getUnSmoothie();
    this.apiUrl = environment.apiUrl;
  }

  set unSeulSmoothie(capture:any){
    this._unSeulSmoothie = capture;
  }
  get unSeulSmoothie(){
    return this._unSeulSmoothie;
  }

  set unSeulSmoothieId(capture:any) {
    this._unSeulSmoothieId = capture;
  }
  get unSeulSmoothieId() {
    return this._unSeulSmoothieId;
  }
  

  getUnSmoothie(): void {
    this.smoothieService.getOneSmoothie(this.unSeulSmoothieId).subscribe(
        (recette) => {
          this.unSeulSmoothie = recette;
          console.log(this.unSeulSmoothie);
          }
        );
  }
}
