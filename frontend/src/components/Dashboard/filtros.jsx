import React, { useState } from 'react';

const Filtros = ({ setFiltros }) => {
    const [provincia, setProvincia] = useState('');
    const [rangoEtario, setRangoEtario] = useState('');
    const [enfermedad, setEnfermedad] = useState('');

    const handleFilterChange = () => {
        // Actualiza el estado de filtros en el componente padre
        setFiltros({
            provincia,
            rangoEtario,
            enfermedad
        });
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            {/* Filtro de Provincia */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Provincia</span>
                </label>
                <select 
                    className="select select-bordered"
                    value={provincia}
                    onChange={(e) => {
                        setProvincia(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Todas</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="CABA">CABA</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucumán">Tucumán</option>
                </select>
            </div>

            {/* Filtro de Rango Etario */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Rango Etario</span>
                </label>
                <select 
                    className="select select-bordered"
                    value={rangoEtario}
                    onChange={(e) => {
                        setRangoEtario(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Todos</option>
                    <option value="13-24">13-24 meses</option>
                    <option value="2-4">2-4 años</option>
                    <option value="5-9">5-9 años</option>
                    <option value="5-9">5-9 años</option>
                    <option value="10-14">10-14 años</option>
                    <option value="15-19">15-19 años</option>
                    <option value="20-24">20-24 años</option>
                    <option value="25-34">25-34 años</option>
                    <option value="35-44">35-44 años</option>
                    <option value="45-65">45-65 años</option>
                    <option value="Mayores 65">65 años o más</option>
                </select>
            </div>

            {/* Filtro de Enfermedad */}
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Enfermedad</span>
                </label>
                <select 
                    className="select select-bordered"
                    value={enfermedad}
                    onChange={(e) => {
                        setEnfermedad(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Todas</option>
                    <option value="Dengue">Dengue</option>
                    <option value="Zika">Zika</option>
                </select>
            </div>
        </div>
    );
};

export default Filtros;
