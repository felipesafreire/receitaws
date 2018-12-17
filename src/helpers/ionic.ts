export function criarAlertaIonic(alerta, title = null, mensagem = null) {

  let alert = alerta.create({
    title: title || "Aviso", message: mensagem || '', buttons: ['OK']
  });

  alert.present();

}

export function criarLoadingIonic(loading, mensagem) {

  let load = loading.create({
    content: mensagem, // dismissOnPageChange: true
  });

  load.present();
  return load

}
