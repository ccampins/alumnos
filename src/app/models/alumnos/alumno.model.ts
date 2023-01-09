import MateriasModel from "../materias/materias.model";

export default interface AlumnoModel{
    id?: number,
    nombre: string,
    apellido: string,
    dni: number,
    direccion: string,
    grado: string,
    seccion: string,
    materias: MateriasModel[],
    promedio?: number
}