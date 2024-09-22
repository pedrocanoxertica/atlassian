import axios from 'axios';
//esto lo hice para no subir las claves al repositorio
import {email,apiToken,jiraBaseUrl} from './keys.js';


/**
 * con esta función obtenemos la información. todo lo que podemos obtener se encuentra
 * aquí: https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about
 */
async function getJiraInfo() {
 const auth = Buffer.from(`${email}:${apiToken}`).toString('base64');

 try {
     const response = await axios.get(`${jiraBaseUrl}/rest/api/3/project/search`, {
         headers: {
             'Authorization': `Basic ${auth}`,
             'Accept': 'application/json'
         }
     });

     console.log('proyectos:', response.data);
 } catch (error) {
     console.error('Error al obtener los datos del perfil:', error.response ? error.response.data : error.message);
 }
}


getJiraInfo();