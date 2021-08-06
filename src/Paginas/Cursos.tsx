
import React, { useState, useContext } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  isPlatform,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import AñadirCursoModal from "../Componentes/AñadirCursoModal";
import CursosContexto from '../Datos/CursosContexto';

const Cursos: React.FC = () => {
  const [añadiendo, setAñadiendo] = useState(false);

  const cursosCtx = useContext(CursosContexto);  
  const inicioAñadirCurso = () => {
    setAñadiendo(true);
  };
  const cancelarAñadirCurso = () => {
    setAñadiendo(false);
  };
  const AñadirCurso = (titulo: string) => {
    cursosCtx.añadirCurso(titulo); 
    setAñadiendo(false);
  };

  return (
    <>
      <AñadirCursoModal 
        mostrar={añadiendo} 
        cancelar={cancelarAñadirCurso}
        grabar={AñadirCurso}
      />
      <IonPage>

        <IonHeader>                       
          <IonToolbar color='primary'>
            <IonTitle>CURSOS</IonTitle>
            {!isPlatform("android") &&
                <IonButtons slot="end">
                  <IonButton onClick={inicioAñadirCurso}>
                    <IonIcon slot ="icon-only" icon={addOutline}/>
                  </IonButton>
                </IonButtons>
              }
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
          <IonGrid>
            {cursosCtx.cursos.map((curso) => (
              <IonRow key={curso.id}>
                <IonCol size-md='4' offset-md='4'>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>
                        {curso.titulo}
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="ion-text-right">
                        <IonButton fill="clear" color="secondary" routerLink={`/cursos/${curso.id}`}>
                          Ver Objetivos del Curso
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && 
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={inicioAñadirCurso}>
                <IonIcon icon={addOutline}/>
              </IonFabButton>
            </IonFab>
          }
        </IonContent>

      </IonPage>
    </>
  )
};

export default Cursos;
