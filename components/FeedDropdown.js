export default function DropDown() {
  return (
    <div className="airportFeedForm">
      <form action="/api/getAirport" method="POST" id="formAirCodes">
        <select name="airportId" id="dropDown">
          <option>Select an Airport</option>
          <option value="AGU">
            Jesús Terán Peredo International Airport (AGU)
          </option>
          <option value="CUN">Cancún International Airport (CUN)</option>
          <option value="CUU">
            General Roberto Fierro Villalobos International Airport (CUU)
          </option>
          <option value="CME">
            Ciudad del Carmen International Airport (CME)
          </option>
          <option value="CJS">
            Abraham González International Airport (CJS)
          </option>
          <option value="CEN">
            Ciudad Obregón International Airport (CEN)
          </option>
          <option value="CVM">
            General Pedro J. Méndez International Airport (CVM)
          </option>
          <option value="CLQ">Lic. Miguel de la Madrid Airport (CLQ)</option>
          <option value="CVJ">General Mariano Matamoros Airport (CVJ)</option>
          <option value="CUL">Culiacán International Airport (CUL)</option>
          <option value="DGO">
            General Guadalupe Victoria International Airport (DGO)
          </option>
          <option value="GDL">
            Don Miguel Hidalgo y Costilla International Airport (GDL)
          </option>
          <option value="HUX">
            Bahías de Huatulco International Airport (HUX)
          </option>
          <option value="BJX">Del Bajío International Airport (BJX)</option>
          <option value="LTO">Loreto International Airport (LTO)</option>
          <option value="LMM">
            Federal del Valle del Fuerte International Airport (LMM)
          </option>
          <option value="MZT">
            General Rafael Buelna International Airport (MZT)
          </option>
          <option value="MID">Merida International Airport (MID)</option>
          <option value="MEX">
            Aeropuerto Internacional Benito Juárez (MEX)
          </option>
          <option value="LOV">
            Venustiano Carranza International Airport (LOV)
          </option>
          <option value="MTY">
            General Mariano Escobedo International Airport (MTY)
          </option>
          <option value="MLM">
            General Francisco J. Mujica International Airport (MLM)
          </option>
          <option value="NOG">Nogales International Airport (NOG)</option>
          <option value="NLD">Quetzalcóatl International Airport (NLD)</option>
          <option value="OAX">Oaxaca International Airport (OAX)</option>
          <option value="PQM">Palenque International Airport (PQM)</option>
          <option value="PDS">
            Piedras Negras International Airport (PDS)
          </option>
          <option value="PAZ">El Tajín National Airport (PAZ)</option>
          <option value="PBC">Puebla International Airport (PBC)</option>
          <option value="PXM">
            Puerto Escondido International Airport (PXM)
          </option>
          <option value="QRO">Querétaro International Airport (QRO)</option>
          <option value="REX">
            General Lucio Blanco International Airport (REX)
          </option>
          <option value="SLW">
            Plan de Guadalupe International Airport (SLW)
          </option>
          <option value="SLP">
            San Luis Potosí International Airport (SLP)
          </option>
          <option value="TPQ">Amado Nervo National Airport (TPQ)</option>
          <option value="TIJ">
            General Abelardo L. Rodríguez International Airport (TIJ)
          </option>
          <option value="TLC">
            Lic. Adolfo López Mateos International Airport (TLC)
          </option>
          <option value="TRC">
            Francisco Sarabia International Airport (TRC)
          </option>
          <option value="TGZ">
            Angel Albino Corzo International Airport (TGZ)
          </option>
          <option value="UPN">Uruapan International Airport (UPN)</option>
          <option value="VER">
            General Heriberto Jara International Airport (VER)
          </option>
          <option value="VSA">
            Carlos Rovirosa Pérez International Airport (VSA)
          </option>
          <option value="JAL">El Lencero Airport (JAL)</option>
          <option value="ZCL">
            Leobardo C. Ruiz International Airport (ZCL)
          </option>
        </select>
      </form>
      <button
        type="submit"
        form="formAirCodes"
        id="formAirCodes"
        className="btn btn-primary airbtn btn-lg"
      >
        Submit
      </button>
    </div>
  );
}
