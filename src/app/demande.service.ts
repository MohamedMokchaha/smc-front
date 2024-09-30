import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = 'http://127.0.0.1:8000/api/demandes/save/'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  saveDemande(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
