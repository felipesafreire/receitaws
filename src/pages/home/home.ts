import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {removeMascaraCnpj, validarCNPJ} from "../../helpers/cnpj";
import {criarAlertaIonic, criarLoadingIonic} from "../../helpers/ionic";
import {ReceitaWsProvider} from "../../providers/receita-ws/receita-ws";


@Component({
  selector: 'page-home', templateUrl: 'home.html'
})
export class HomePage {

  public cnpj: string = '';
  public empresa: string = '';

  constructor(public navCtrl: NavController, private _alert: AlertController, private _loading: LoadingController, private _service: ReceitaWsProvider) {

  }

  buscar() {

    if (!validarCNPJ(this.cnpj)) {
      criarAlertaIonic(this._alert, '', 'CNPJ inválido!');
      return;
    }

    let loading = criarLoadingIonic(this._loading, 'Buscando dados. Aguarde...');

    this._service
      .buscar(removeMascaraCnpj(this.cnpj))
      .then(success => {
        loading.dismiss();
        if(typeof(success.message)=='undefined'){
          this.empresa = success
        }else{
          criarAlertaIonic(this._alert, '', 'Aguarde alguns segundos para fazer uma nova consulta.');
          this.empresa = '';
        }
      })
      .catch(() => {
        loading.dismiss();
        this.empresa = '';
        criarAlertaIonic(this._alert, '', 'Erro ao trazer os dados');
      });


  }

}
