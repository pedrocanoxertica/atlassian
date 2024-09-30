import {Proyecto} from '../Modelo/Proyecto.js';

export function formateoProyecto(arregloProyectos){
    
    let arregloProyectosSheets = [];
    for(let i = 0; i < arregloProyectos.length; i++){
        let proyecto = new Proyecto();
        proyecto.id = arregloProyectos[i].id;
        proyecto.name = arregloProyectos[i].name;
        proyecto.key = arregloProyectos[i].key;
        proyecto.self = arregloProyectos[i].self;
        proyecto.expand = arregloProyectos[i].expand;
        proyecto.projectTypeKey = arregloProyectos[i].projectTypeKey;
        proyecto.simplified = arregloProyectos[i].simplified;
        proyecto.style = arregloProyectos[i].style;
        proyecto.isPrivate = arregloProyectos[i].isPrivate;
        proyecto.properties = arregloProyectos[i].properties;
        proyecto.entityId = arregloProyectos[i].entityId;
        proyecto.uuid = arregloProyectos[i].uuid;

        arregloProyectosSheets.push(proyecto);
        //console.log(proyecto);
    }

    return arregloProyectos;
}