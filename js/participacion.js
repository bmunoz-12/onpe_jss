const getResultados = async () => {
  const id = new URLSearchParams(window.location.search).get('id')
  const data = await fetch(`http://localhost:8012/onpe_sweb_php/participacion/${id}`)
  if (data.status != 200) return

  
  const aID = id.split('/') //["Nacional","Amazonas","Bagua","Bagua"]
  const matrisDPD = [["Departamento","Provincioa","Distrito"],["Continente","Pais","Cuidad"]]
  const bNacional = aID[0] == "Nacional"
  const length = aID.length

  let ambito = "Ámbito :" + aID[0]
  if(length > 1) ambito += "<br>" + matrisDPD[bNacional ? 0 : 1][0] + " : " + aID[1]
  if(length > 2) ambito += "<br>" + matrisDPD[bNacional ? 0 : 1][1] + " : " + aID[2]
  if(length > 3) ambito += "<br>" + matrisDPD[bNacional ? 0 : 1][2] + " : " + aID[3]
  document.getElementById('ambito').innerHTML = ambito

  if( length == 4 ){
    document.getElementById('bloque-resultados').innerHTML = ""
    return
  } 


  const votos = await data.json()
  let resultados = `
                      <tr class="titulo_tabla">
                        <td>${(matrisDPD[bNacional ? 0 : 1][length - 1]).toUpperCase()}</td>
                        <td>TOTAL ASISTENTES</td>
                        <td>% TOTAL ASISTENTES</td>
                        <td>TOTAL AUSENTES</td>
                        <td>% TOTAL AUSENTES</td>
                        <td>ELECTORES HÁBILES</td>
                      </tr>`

  votos.data.forEach(voto => {
    resultados += `
    <tr onclick="location.href='./participacion_total.html?id=${id}/${voto.DPD}'" onmouseover="this.style.cursor = &quot;pointer&quot;; this.style.color = &quot;grey&quot;" onmouseout="this.style.color = &quot;black&quot;" style="cursor: pointer; color: black;">
      <td>${voto.DPD}</td>
      <td>${voto.TV}</td>
      <td>${voto.PTV}</td>
      <td>${voto.TA}</td>
      <td>${voto.PTA}</td>
      <td>${voto.EH}</td>
    </tr>`
    
  });

  resultados += `
  <tr>
    <td>TOTALES</td>
    <td>17,953,367</td>
    <td>81.543%</td>
    <td>4,063,663</td>
    <td>18.457%</td>
    <td>22,017,030</td> 
  </tr>
  `

  
  document.getElementById('resultados').innerHTML = resultados
}

getResultados()