import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {



  constructor(private http: HttpClient) { }

 
  postEfetivar(data) {
    return this.http.post<any>(environment.urlApi + 'contratacao/efetivar-proposta', data);
  }
  
}
