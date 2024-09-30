import * as AppSheet from '../AppSheet/AppSheetInterface.js';

let instanciaAppsheet = AppSheet.connect(process.env.APP_ID,process.env.APPLICATION_ACCESS_KEY);

function insertarDatos(){
    console.log(instanciaAppsheet);
    const rows = [
        {
            "id":"q",
            "name":"q",
            "key":"q",
            "self":"q",
            "expand":"q",
            "projectTypeKey":"q",
            "simplified":"q",
            "style":"q",
            "isPrivate":"q",
            "properties":"q",
            "entityId":"q",
            "uuid":"q"
        }
    ]

    const resp = instanciaAppsheet.Add('Proyectos',rows);
    console.log(resp.code);
}

insertarDatos();