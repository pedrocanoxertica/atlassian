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
        const response = await axios.get(`${jiraBaseUrl}/rest/api/3/project/search`, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Accept': 'application/json'
            }
        });
        let arregloProyectos = response.data.values;
        //console.log(arregloProyectos.length);
        formateoProyecto(arregloProyectos);
        //console.log('proyectos:', response.data.values);

    } catch (error) {
        console.error('Error al obtener los datos del perfil:', error.response ? error.response.data : error.message);
    }
}


getJiraInfo();