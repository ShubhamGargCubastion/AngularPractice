import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Response} from '@angular/http';

@Injectable()

export class ServerService {

    constructor(private http: Http) { }
    storeServers(servers: any) {
      return this.http.post("http://localhost:8080/admin",servers);
    }

    getServers() {
      return this.http.get("http://localhost:8080/admin")
        .map(
          (response:Response) => {
            const data = response.json();
            return data;
          }
        );
    }

    updateServer(server:any) {
      return this.http.put("http://localhost:8080/admin",server);
    }

    deleteServer(id:number) {
    return this.http.delete("http://localhost:8080/admin/"+id);
  }
}
