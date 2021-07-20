
import React, { useState } from 'react';
import CursosContexto, { Curso, Objetivo } from "./CursosContexto";

const CursosContectoProveedor: React.FC = props => {
  const [cursos, setCursos] = useState <Curso[]> ([
    {
      id: "c1",
      titulo: "Curso de React",   // Curso inicial de ejemplo
      objetivos: [],
      incluido: true
    }
  ]);

  const añadirCurso = (titulo: string) => {
    const nuevoCurso: Curso = {
      id: new Date().toString(),
      titulo,
      objetivos: [],
      incluido: true
    };
    setCursos((actualCurso) => {
      return actualCurso.concat(nuevoCurso);
    });
  };

  const añadirObjetivo = (cursoId: string, texto: string) => {
    const nuevoObjetivo: Objetivo = { id: Math.random().toString(), texto };
    setCursos(cursosActuales => {
      const cursosActualizados = [...cursosActuales];
      const cursoActualizadoIndex = cursosActualizados.findIndex(curso => curso.id === cursoId);
      const objetivosActualizados =
        cursosActualizados[cursoActualizadoIndex].objetivos.concat(nuevoObjetivo);
      const cursoActualizado = {...cursosActualizados[cursoActualizadoIndex]};
      cursoActualizado.objetivos = objetivosActualizados;
      cursosActualizados[cursoActualizadoIndex] = cursoActualizado;
      return cursosActualizados;
    });
  };

  const borrarObjetivo = (cursoId: string, objetivoId: string) => {
    setCursos((cursosActuales) => {
      const cursosActualizados = [...cursosActuales]
      const cursoActualizadoIndex = cursosActualizados.findIndex(curso => curso.id === cursoId);
      const objetivosActualizados = 
        cursosActualizados[
          cursoActualizadoIndex
        ].objetivos.filter((objetivo) => objetivo.id !== objetivoId);
      const cursoActualizado = { ...cursosActualizados[cursoActualizadoIndex] };
      cursoActualizado.objetivos = objetivosActualizados;
      cursosActualizados[cursoActualizadoIndex] = cursoActualizado;
      return cursosActualizados;
    });
  };
    
  const actualizarObjetivo = (cursoId: string, objetivoId: string, nuevoTexto: string) => {
    setCursos((cursosActuales) => {
      const cursosActualizados = [...cursosActuales]
      const cursoActualizadoIndex = cursosActualizados.findIndex(curso => curso.id === cursoId);
      const objetivosActualizados = 
        cursosActualizados[cursoActualizadoIndex].objetivos.slice();
      const objetivosActualizadosIndex = objetivosActualizados.findIndex(
        (objetivo) => objetivo.id === objetivoId
      );
      const objetivoActualizado = {
        ...objetivosActualizados[objetivosActualizadosIndex],
        texto: nuevoTexto
      };
      objetivosActualizados[objetivosActualizadosIndex] = objetivoActualizado;  
      const cursoActualizado = { ...cursosActualizados[cursoActualizadoIndex] };
      cursoActualizado.objetivos = objetivosActualizados;
      cursosActualizados[cursoActualizadoIndex] = cursoActualizado;
      return cursosActualizados;
    });
  };

  const cambiarFiltroCurso = (cursoId: string, estaIncluido: boolean) => {
    setCursos(cursosActuales => {
      const cursosActualizados = [...cursosActuales];
      const cursoActualizadoIndex = cursosActualizados.findIndex(curso => curso.id === cursoId);
      const cursoActualizado = {...cursosActualizados[cursoActualizadoIndex], incluido: estaIncluido};
      cursosActualizados[cursoActualizadoIndex] = cursoActualizado;
      return cursosActualizados;
    });
  };

  return (
    <CursosContexto.Provider value={{
      cursos: cursos,
      añadirCurso,
      añadirObjetivo,
      borrarObjetivo,
      actualizarObjetivo,
      cambiarFiltroCurso
    }}>
      {props.children}
    </CursosContexto.Provider>
  );

};

export default CursosContectoProveedor;