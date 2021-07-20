
import React, { useState, useRef, useContext } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonButton,
  IonFab,
  IonFabButton,
  isPlatform,
  IonAlert,
} from '@ionic/react';
import { useParams } from "react-router-dom"; 
// Importo iconos:
import { addOutline, create, trash } from 'ionicons/icons';
// Importo Componentes:
import EdicionModal from "../Componentes/EdicionModal";
// Importo Contexto
import CursosContexto from '../Datos/CursosContexto';

const Objetivos: React.FC = () => {
  const [incioBorrar, setInicioBorrar] = useState(false);
  const [editando, setEditando] = useState(false);
  const [objetivoSeleccionado, setObjetivoSeleccionado] = useState<any>(null);
  const cursosCtx= useContext(CursosContexto);
  const opcionesDeslizamientoRef = useRef< HTMLIonItemSlidingElement >(null);
  const objetivoSeleccionadoIdRef = useRef< string | null >(null);
  const idCursoSeleccionado = useParams<{ idcurso: string }>().idcurso;
  const cursoSeleccionado = cursosCtx.cursos.find(curso => curso.id === idCursoSeleccionado);

  const inicioBorrarItemObjetivo = (objetivoId: string) => {
    setInicioBorrar(true);
    objetivoSeleccionadoIdRef.current = objetivoId;
    setEditando(false);
  };

  const borradoDefinitivo = () => {
    setInicioBorrar(false);
    cursosCtx.borrarObjetivo(idCursoSeleccionado, objetivoSeleccionadoIdRef.current!);
    setEditando(false);
  };

  const inicioEdicionItemObjetivo = (objetivoId: string, evento: React.MouseEvent) => {
    evento.stopPropagation();
    const objetivo = cursoSeleccionado?.objetivos.find(o => o.id === objetivoId);
    opcionesDeslizamientoRef.current?.closeOpened()
    if(!objetivo) {
      return;
    };
    setEditando(true);
    setObjetivoSeleccionado(objetivo);
  };

  const cancelarEdicion = () => {
    setEditando(false);
    setObjetivoSeleccionado(null);
  };

  const inicioAñadirObjetivo = () => {
    setEditando(true);
    setObjetivoSeleccionado(null);
  };

  const guardarObjetivo = (texto: string) => {
    if(objetivoSeleccionado) {
      cursosCtx.actualizarObjetivo(idCursoSeleccionado, objetivoSeleccionado.id, texto)
    } else {
      cursosCtx.añadirObjetivo(idCursoSeleccionado, texto);
    };
    setEditando(false);
  };

  let contenido = <h2>No hay objetivos ingresados</h2>;

  if(!cursoSeleccionado) {
    contenido = <h2 className="ion-text-center">No hay cursos</h2>
  };

  if(cursoSeleccionado && cursoSeleccionado.objetivos.length > 0) {
    contenido = (
      <IonList>
        {cursoSeleccionado.objetivos.map((objetivo) => (
          <IonItemSliding key={objetivo.id} ref={opcionesDeslizamientoRef}>
            <IonItemOptions side='start'>
              <IonItemOption
                onClick={inicioBorrarItemObjetivo.bind(
                  null,
                  objetivo.id
                )}
                color='danger'
              >
              <IonIcon slot='icon-only' icon={trash} />
              </IonItemOption>
            </IonItemOptions>
            <IonItem lines='full'>
              <IonLabel>{objetivo.texto}</IonLabel>
            </IonItem>
            <IonItemOptions side='end'>
              <IonItemOption
                onClick={inicioEdicionItemObjetivo.bind(
                  null,
                  objetivo.id
                )}
              >
              <IonIcon slot='icon-only' icon={create} />
                </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
    );
  };

  return (
    <>
      <EdicionModal
        mostrar={editando}
        cancelar={cancelarEdicion}
        objetivoEditado={objetivoSeleccionado}
        guardar={guardarObjetivo}
      />

      <IonAlert
        isOpen={incioBorrar}
        header='Estas seguro de borrar?'
        message='Esta accion es irreversible'
        buttons={[
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              setInicioBorrar(false)
            },
          },
          { text: 'Si', handler: borradoDefinitivo },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/cursos/lista' />
            </IonButtons>
            <IonTitle>
              {cursoSeleccionado
                ? cursoSeleccionado.titulo
                : 'No existe el curso'}
            </IonTitle>
            {!isPlatform('android') && (
              <IonButtons slot='end'>
                <IonButton onClick={inicioAñadirObjetivo}>
                  <IonIcon slot='icon-only' icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {contenido}
          {isPlatform('android') && (
            <IonFab horizontal='end' vertical='bottom' slot='fixed'>
              <IonFabButton color='secondary' onClick={inicioAñadirObjetivo}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </>
  )
};

export default Objetivos;





