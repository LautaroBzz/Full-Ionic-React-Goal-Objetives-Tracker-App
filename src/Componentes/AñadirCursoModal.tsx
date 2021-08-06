
import React, { useRef, useState } from 'react';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/react';

const AñadirCursoModal: React.FC<{
  mostrar: boolean;
  cancelar: () => void;
  grabar: (titulo: string) => void;
}> = (props) => {
  const [error, setError] = useState("");
  const tituloRef = useRef<HTMLIonInputElement>(null);

  const grabar = () => {
    const tituloIngresado = tituloRef.current!.value;
    if(!tituloIngresado || tituloIngresado.toString().trim().length===0){
      setError("Ingresar titulo valido por favor");
      return;
    };
    setError("");
    props.grabar(tituloIngresado.toString());
  };

  return (
    <IonModal isOpen={props.mostrar}>

      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Añadir Curso</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>Titulo del Curso</IonLabel>
                <IonInput type='text' ref={tituloRef}/>
              </IonItem>
            </IonCol>
          </IonRow>
          {error && 
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color="danger">
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          }
          <IonRow className='ion-text-center'>
            <IonCol>
              <IonButton color='dark' fill='clear' onClick={props.cancelar}>
                Cancelar
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand='block' color='secondary' onClick={grabar}>
                Guardar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      
    </IonModal>
  )
};

export default AñadirCursoModal;
