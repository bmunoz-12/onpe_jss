function validText(myfield, e, cadena) {
    switch (cadena) {
        case 1:
            cadena1 = "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abcdefghijklmnopqrstuvwxyz/?#$%&()=*+_-> <:,.;�����������ں";
            break;
            //TEXTO TEXTAREA 
        case 2:
            cadena1 = "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abcdefghijklmnopqrstuvwxyz,.;������������ ";
            break;
            //TEXTO TEXT 
        case 3:
            cadena1 = "0123456789";
            break;
            //NUMEROS ENTEROS
        case 4:
            cadena1 = "0123456789.Mm";
            break;
            //NUMERO DECIMALES
        case 5:
            cadena1 = "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abcdefghijklmnopqrstuvwxyz._-@ ";
            break;
            //MAIL
        case 6:
            cadena1 = "0123456789 -";
            break;
            //TELEFONO
        default :
            cadena1 = "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abcdefghijklmnopqrstuvwxyz,.;������������ ";
            break;
    }
    var key;
    var keychar;
    var keycadena = cadena1;
    var bobj = (window.event) ? window.event : e;
    if (bobj.type == 'blur') {
        tmp = true;
        tmp2 = true;
        fieldtext = myfield.value;
        for (i = 0; i < fieldtext.length; i++) {
            if (!((cadena1).indexOf(fieldtext.substr(i, 1)) > -1)) {
                tmp = false;
            }
            if (fieldtext.substr(i, 1) != ' ') {
                tmp2 = false;
            }
        }
        if (fieldtext.length == 0) {
            tmp2 = false;
        }
        if (tmp2) {
            myfield.focus();
            myfield.value = '';
            return '';
        }
        if (tmp) {
            return fieldtext;
        } else {
            myfield.focus();
            myfield.value = '';
            return '';
        }
    }
    if (window.event) {
        key = window.event.keyCode;
    }
    else if (e) {
        key = e.which;
    }
    else {
        return true;
    }
    keychar = String.fromCharCode(key);
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
        return true;
    } else {
        if ((keycadena).indexOf(keychar) > -1) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

const actas_bscarPrNmroMesa =async(myform) =>{
    const nroMesa = myform["nroMesa"].value;
    
    if (nroMesa == "") {
        alert("Ingrese un número de acta");
        return;
    }
    if (isNaN(nroMesa)) {
        alert("Ingrese un número de acta válido");
        return;
    }
    if (nroMesa.length < 6) {
        alert("No es un número de acta válido");
        return;
    }
}





/*
                        <div id="detMesa">
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="presidencial">
                              <div class="tab-info-desc">

                                <div class="row">

                                  <div class="col-xs-3 col-md-4">
                                    <div class="mesap01">
                                        <img src="images/mp-sin.jpg" class="img-responsive">
                                        Si requiere la imagen del acta, solicítela a través del procedimiento de acceso a la información pública.
                                    </div>
                                  </div>

                                  <div class="col-xs-9 col-md-8">
                                    <div class="row">

                                      <div class="col-xs-12">
                                        <p class="subtitle1">ACTA ELECTORAL</p>
                                        <div id="page-wrap">
                                          <table class="table13" cellspacing="0">
                                            <thead>
                                              <tr>
                                                <th>Mesa N°</th>
                                                <th>N° Copia</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>000001</td>
                                                <td>93Y</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      <div class="col-xs-12">
                                        <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                                        <div id="page-wrap">
                                          <table class="table14" cellspacing="0">
                                            <tbody>
                                              <tr class="titulo_tabla">
                                                <td>Departamento</td>
                                                <td>Provincia</td>
                                                <td>Distrito</td>
                                                <td>Local de votación</td>
                                                <td>Dirección</td>
                                              </tr>
                                              <tr>
                                                <td>AMAZONAS</td>
                                                <td>CHACHAPOYAS</td>
                                                <td>CHACHAPOYAS</td>
                                                <td>IE 18288 ISABEL LYNCH DE RUBIO</td>
                                                <td>JR. AYACUCHO 870</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      <div class="col-xs-12">
                                        <p class="subtitle1">INFORMACIÓN MESA</p>
                                        <div id="page-wrap">
                                          <table class="table15" cellspacing="0">
                                            <tbody>
                                              <tr class="titulo_tabla">
                                                <td>Electores hábiles</td>
                                                <td>Total votantes</td>
                                                <td>Estado del acta</td>
                                              </tr>
                                              <tr>
                                                <td>290</td>
                                                <td>241</td>
                                                <td>ACTA ELECTORAL NORMAL</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </div>

                                <div>
                                  <div class="col-xs-12 pbot30_acta">
                                    <p class="subtitle1">LISTA DE RESOLUCIONES</p>
                                    <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> No hay resoluciones para el acta seleccionada
                                    <div id="page-wrap">
                                        <div class="col-md-12 resolu"></div>
                                    </div>
                                    <!-- <p class="centro"># : El valor consignado en el acta presenta ilegibilidad.</p> -->
                                  </div>
                                </div>

                                <div>
                                  <div class="col-xs-12">
                                    <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                                    <div id="page-wrap" class="cont-tabla1">
                                      <table class="table06">
                                        <tbody>
                                          <tr class="titulo_tabla">
                                            <td colspan="2">Organización política</td>
                                            <td>Total de Votos</td>
                                          </tr>
                                          <tr>
                                            <td>PERUANOS POR EL KAMBIO</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_pkk.jpg"></td>
                                            <td>127</td>
                                          </tr>
                                          <tr>
                                            <td>FUERZA POPULAR</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                                            <td>101</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS EN BLANCO</td>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS NULOS</td>
                                            <td>13</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS IMPUGNADOS</td>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">TOTAL DE  VOTOS EMITIDOS</td>
                                            <td>241</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                </div>

                              </div>
                            </div>
                          </div>

                        </div>

*/