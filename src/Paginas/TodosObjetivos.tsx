
import React, { useContext } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import CursosContexto from '../Datos/CursosContexto';

const TodosObjetivos: React.FC = () => {
  const cursosCtx = useContext(CursosContexto);

  const objts = cursosCtx.cursos
    .filter(curso => {
      return curso.incluido;
    })
    .map(curso => {
      return curso.objetivos.map(obj => {
        return {...obj, tituloCurso: curso.titulo};
      });
    })
    .reduce((objetivoVector, objetivosNesteados) => {
      let objetivoVectorActualizado = objetivoVector;
      for (const objetivo of objetivosNesteados) {
        objetivoVectorActualizado = objetivoVectorActualizado.concat(objetivo);
      };
      return objetivoVectorActualizado;
  }, []);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>TODOS LOS OBJETIVOS</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {objts.length === 0 && <h2 className="ion-text-center">No hay datos para mostrar</h2>}
        {objts.length > 0 && 
          <IonList>
            {objts.map(obj => (
              <IonItem key={obj.id}>
                <IonLabel>
                  <h2>{obj.texto}</h2>
                  <p>{obj.tituloCurso}</p>
                </IonLabel>
              </IonItem>
            ))} 
          </IonList>
        }
      </IonContent>
      
    </IonPage>
  )
};

export default TodosObjetivos;

