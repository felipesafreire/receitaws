import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Config} from "../../config/config";

@Injectable()
export class ReceitaWsProvider {

  private config: Config = new Config();

  constructor(private _http: HttpClient) {
  }

  buscar(cnpj) {

    return this._http
      .get(this.config.getBaseUrl() + "cnpj/" + cnpj)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(err => {
        return err;
      })

  }

}
