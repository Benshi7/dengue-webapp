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
                    <option value="Córdoba">Córdoba</option>
                    <option value="Santa Fe">Santa Fe</option>
                    {/* Agregar más opciones de provincia según sea necesario */}
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
                    <option value="0-10">0-10 años</option>
                    <option value="11-20">11-20 años</option>
                    <option value="21-30">21-30 años</option>
                    {/* Agregar más rangos etarios según sea necesario */}
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
