const tours = [
    {
        MEX: {
            paquetes: [
                {// Tour 001
                    id: 001,
                    titulo: "México Desconectado",
                    operador: "Viajeros x el mundo",
                    tipoDeTour: "Tour en Grupo",
                    visitas: ["Puebla", "Ciudad de México, Chiapas"],
                    acomodacionIncluida: true,
                    transporteIncluido: true,
                    edadMinimaRequerida: 21,
                    requisitos: {
                        depositoUSD: 400,
                        seguroDeViaje: true
                    },
                    duracionTour: 15,
                    opiniones: null,
                    calificacion: null,
                    precioUSD: 1181,
                    fechasDisponibles: {
                        2019: {
                            "001-30Marzo": {
                                asientosDisponibles: 15,
                                asientosReservados: 4
                            },
                            "002-02Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 6
                            },
                            "003-25Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 1
                            }
                        }
                    }
                },
                {// Tour 002
                    id: 002,
                    titulo: "México Desconectado",
                    operador: "Viajeros x el mundo",
                    tipoDeTour: "Tour en Grupo",
                    visitas: ["Puebla", "Ciudad de México, Chiapas"],
                    acomodacionIncluida: true,
                    transporteIncluido: true,
                    edadMinimaRequerida: 21,
                    requisitos: {
                        depositoUSD: 400,
                        seguroDeViaje: true
                    },
                    duracionTour: 15,
                    opiniones: null,
                    calificacion: null,
                    precioUSD: 1181,
                    fechasDisponibles: {
                        2019: {
                            "001-30Marzo": {
                                asientosDisponibles: 15,
                                asientosReservados: 4
                            },
                            "002-02Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 6
                            },
                            "003-25Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 1
                            }
                        }
                    }
                }
            ]
        }
    },
    {
        GUA: {
            paquetes: [
                {// Tour 002
                    id: 002,
                    titulo: "México Desconectado",
                    operador: "Viajeros x el mundo",
                    tipoDeTour: "Tour en Grupo",
                    visitas: ["Puebla", "Ciudad de México, Chiapas"],
                    acomodacionIncluida: true,
                    transporteIncluido: true,
                    edadMinimaRequerida: 21,
                    requisitos: {
                        depositoUSD: 400,
                        seguroDeViaje: true
                    },
                    duracionTour: 15,
                    opiniones: null,
                    calificacion: null,
                    precioUSD: 1181,
                    fechasDisponibles: {
                        2019: {
                            "001-30Marzo": {
                                asientosDisponibles: 15,
                                asientosReservados: 4
                            },
                            "002-02Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 6
                            },
                            "003-25Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 1
                            }
                        }
                    }
                }
            ]
        }
    },
    {
        COL: {
            paquetes: [
                {// Tour 003
                    id: 003,
                    titulo: "México Desconectado",
                    operador: "Viajeros x el mundo",
                    tipoDeTour: "Tour en Grupo",
                    visitas: ["Puebla", "Ciudad de México, Chiapas"],
                    acomodacionIncluida: true,
                    transporteIncluido: true,
                    edadMinimaRequerida: 21,
                    requisitos: {
                        depositoUSD: 400,
                        seguroDeViaje: true
                    },
                    duracionTour: 15,
                    opiniones: null,
                    calificacion: null,
                    precioUSD: 1181,
                    fechasDisponibles: {
                        2019: {
                            "001-30Marzo": {
                                asientosDisponibles: 15,
                                asientosReservados: 4
                            },
                            "002-02Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 6
                            },
                            "003-25Abril": {
                                asientosDisponibles: 15,
                                asientosReservados: 1
                            }
                        }
                    }
                }
            ]
        },
    }
]

module.exports = { tours }