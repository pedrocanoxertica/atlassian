import axios from 'axios';
import dot from 'dotenv';
dot.config();



// Función para obtener las tareas de Tempo
const obtenerTareasDeTempo = async () => {
    
    const API_KEY = process.env.API_TOKEN_TEMPO;
    //const TEMPO_API_URL = '';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/programs';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/roles';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/skills';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/teams';
    /**
     * extrae la cuenta de xertica
     */
    const TEMPO_API_URL = 'https://api.tempo.io/4/accounts';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/work-attributes';
    /**
     * información sobre el equipo
     */
    //const TEMPO_API_URL = 'https://api.tempo.io/4/team-memberships/team/13';
    /**
     * este es elque entrega más info
     */
    //const TEMPO_API_URL = 'https://api.tempo.io/4/worklogs/team/13';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/worklogs/project/10281';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/teams';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/user-schedule';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/user-schedule/712020:e40468f7-d2d2-4f7c-bc84-8104d6ce38aa'
    //const TEMPO_API_URL = 'https://api.tempo.io/jira/3/worklogs';
    //const TEMPO_API_URL = 'https://api.tempo.io/4/accounts/712020:e40468f7-d2d2-4f7c-bc84-8104d6ce38aa'
    // Parámetros opcionales para personalizar la consulta
    const params = {
        from: '2023-01-01',  // Fecha de inicio del rango de trabajo (YYYY-MM-DD)
        to: '2024-09-27',    // Fecha de fin del rango de trabajo (YYYY-MM-DD)
        user: process.env.EMAIL, // Usuario de Jira cuyo trabajo deseas extraer
    };
    try {
        const response = await axios.get(TEMPO_API_URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`, // Autenticación usando API Key o OAuth 2.0 token
            },
            params: params, // Agregamos los parámetros a la solicitud
        });

        const tareas = response.data.results;
        console.log('Tareas extraídas:', tareas);

        // Procesar las tareas como sea necesario
    } catch (error) {
        console.error('Error al obtener las tareas de Tempo:', error.response ? error.response.data : error.message);
    }
};

// Llamar a la función para obtener las tareas
obtenerTareasDeTempo();
