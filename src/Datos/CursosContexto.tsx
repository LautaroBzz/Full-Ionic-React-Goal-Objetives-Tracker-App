
import React from "react";

const CursosContexto = React.createContext <Contexto> ({ 
  cursos: [],
  añadirCurso: () => {},
  añadirObjetivo: () => {},
  borrarObjetivo: () => {},
  actualizarObjetivo: () => {},
  cambiarFiltroCurso: () => {}
});

interface Contexto {
  cursos: Curso[];     
  añadirCurso: (tituloCurso: string) => void;
  añadirObjetivo: (cursoId: string, textoObjetivo: string) => void;
  borrarObjetivo: (cursoId: string, objetivoId: string) => void;
  actualizarObjetivo: (cursoId: string, objetivoId: string, nuevoTexto: string) => void;
  cambiarFiltroCurso: (cursoId: string, estaIncluido: boolean) => void;
};

 export interface Curso {
  id: string;
  titulo: string;
  objetivos: Objetivo[];
  incluido: boolean;
};

export interface Objetivo {
  id: string;
  texto: string;
};

export default CursosContexto;
