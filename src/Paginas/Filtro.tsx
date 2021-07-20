
import React, { useContext } from 'react';
import {
  IonMenuButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
} from '@ionic/react';
import CursosContexto from '../Datos/CursosContexto';

const Filter:React.FC = () => {
  const cursosCtx = useContext(CursosContexto);
  const filtroCursoCambio = (event: CustomEvent) => {
    cursosCtx.cambiarFiltroCurso(event.detail.value, event.detail.checked);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>FILTRO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {cursosCtx.cursos.map(curso => (
            <IonItem key={curso.id}>
              <IonLabel>{curso.titulo}</IonLabel>
              <IonToggle 
                checked={curso.incluido} 
                value={curso.id} 
                onIonChange={filtroCursoCambio}
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
};

export default Filter;
