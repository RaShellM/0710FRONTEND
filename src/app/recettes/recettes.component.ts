import { Component, OnInit } from '@angular/core';
import { JusService, SmoothieCarton } from '../jus.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-recettes',
    templateUrl: './recettes.component.html',
    styleUrls: ['./recettes.component.css']
})


export class RecettesComponent implements OnInit {
    public apiUrl: string;
    private touslessmoothies: SmoothieCarton[];  //nouvelle variable carton vide (c'est une interface)
    private router: Router;

    constructor(
        private smoothieService: JusService //importe la class JusService qui va chercher les données sur le backend
    ) { }

    ngOnInit() {
        console.log('test');
        this.getAllSmoothies();
        this.apiUrl = environment.apiUrl;
    }

 
    getAllSmoothies(): void {
        this.smoothieService.getSmoothies()
            .subscribe((listSmoothie) => {
                this.touslessmoothies = listSmoothie;
                console.log(this.touslessmoothies);
            });
    }
}
