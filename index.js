import axios from 'axios';
import dot from 'dotenv';
import { formateoProyecto } from './Operaciones/Formateo.js';
dot.config();

//import { email, jiraBaseUrl } from './keys.js';


/**
 * con esta función obtenemos la información. todo lo que podemos obtener se encuentra
 * aquí: https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about
 */
async function getJiraInfo() {
    
    const apiToken = process.env.API_TOKEN_JIRA;
    const email = process.env.EMAIL;
    const jiraBaseUrl = process.env.URL_JIRA;
    //throw 'error'
    //const auth = Buffer.from(`${email}:${process.env.API_TOKEN_JIRA}`).toString('base64');
    const auth = Buffer.from(`${email}:${apiToken}`).toString('base64');

    try {
        /**
         * estos endpoints sí funcionan. Hasta ahora el más importante es el de issue,
         * pues el que nos permite recuperar las tareas. Las tareas pueden crearse en Jira
         * y se les puede asignar tiempo. Todas esas característica se pueden extraer. Falta
         *  ver cómo reflejar esto en tempo
         */
        //const response = await axios.get(`${jiraBaseUrl}/rest/api/3/project/search`, {
        //const response = await axios.get(`${jiraBaseUrl}/rest/api/3/workflow`, {
        //const response = await axios.get(`${jiraBaseUrl}rest/api/3/task/10005`, {
        //const response = await axios.get(`${jiraBaseUrl}/rest/api/3/search`, {
        const response = await axios.get(`${jiraBaseUrl}/rest/api/3/issue/10004`, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Accept': 'application/json'
            }
        });
        let arregloProyectos = response.data;
        console.log(arregloProyectos);
        //formateoProyecto(arregloProyectos);
        //console.log('proyectos:', response.data.values);

    } catch (error) {
        console.error('Error al obtener los datos del perfil:', error.response ? error.response.data : error.message);
    }
}


getJiraInfo();