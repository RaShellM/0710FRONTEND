import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PathLocationStrategy } from '@angular/common';

export interface SmoothieCarton {
    _id?: string;
    title: {
        type: string;
        required: false;
    };
    ingredients: [
        {
            nom: {
                type: string;
                required: false;
            };
            quantite: {
                type: string;
                required: false;
            };
        }
    ];
    features?: {
        cost?: {
            type: string;
            required: false
        };
        prepareTime?: {
            type: string;
            required: false
        };
    };
    advice?: {
        type: string;
    };
    description?: {
        type: string;
    };
    steps: [
        {
            stepText: {
                type: string;
            };
        }
    ];
    photo?: [
        {
            titre?: string;
            path?: string;
            description?: string;
        }
    ];
}

// la fonction qui fait récupérer ledonnées du backend pour les metttre dans notre carton vide (au dessus)
@Injectable({
    providedIn: 'root' //pour faire que le service puisse être appelé à un autre endroit
})
export class JusService {
    private apiUrl = environment.apiUrl; //donne le chemin d'accès vers le port du backend

    constructor(
        private http: HttpClient,      //contructeurs nécessaires pour la récup des données (service de connexion en gros)
        private router: Router
    ) { }

    // Get all Smoothies
    getSmoothies(): Observable<SmoothieCarton[]> {
        const smoothieListUrl = `${this.apiUrl}/catalog/list`; // attention c'est des accent aigus
        return this.http.get<SmoothieCarton[]>(smoothieListUrl);
    }

    getOneSmoothie(id: String): Observable<SmoothieCarton> {
        const getUrl = `${this.apiUrl}/catalog/${id}`; // pour afficher un seule recette
        console.log(getUrl);
        return this.http.get<SmoothieCarton>(getUrl);
      }


    addSmoothie(smoothie: SmoothieCarton) {
        const addUrl = `${this.apiUrl}/catalog/add`;
        return this.http.post<SmoothieCarton>(addUrl, smoothie);
      }
}


