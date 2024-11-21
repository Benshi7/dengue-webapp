import React, { useState, useEffect } from 'react';
import Filtros from './filtros';
import EstadisticasCasos from './estadisticasCasos';
import ResultadosTabla from './resultadosTabla'
import axios from 'axios';

const DashboardPage = () => {
    const [filtros, setFiltros] = useState({
        provincia: '',
        enfermedad: '',
        rangoEtario: ''
    });
    const [datos, setDatos] = useState([]);
    const [estadisticas, setEstadisticas] = useState({
        total_casos: 0
    });

    useEffect(() => {
        // Llama al backend para traer los datos filtrados
        const fetchData = async () => {
            try {
                const response = await axios.get('api/dengue/casos_totales');
                console.log('====================================');
                console.log(response);
                console.log('====================================');
                setDatos(response.data.casos);
                setEstadisticas(response.data.total_casos);
            } catch (error) {
                console.error("Error al traer los datos:", error);
            }
        };

        fetchData();
    }, [filtros]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard de Casos de Dengue y Zika</h1>
            <Filtros setFiltros={setFiltros} />
            <EstadisticasCasos estadisticas={estadisticas} />
            <ResultadosTabla datos={datos} />
        </div>
    );
};

export default DashboardPage;
