
import React, { useRef, useState } from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonItem,
  IonInput,
  IonText,
} from '@ionic/react';

const EdicionModal: React.FC <{
  mostrar: boolean; 
  cancelar: () => void;
  guardar: (textoObjetivo: string) => void;
  objetivoEditado: {id: string; text: string} | null;
}> = props => {
  const textoRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState("");
  const guardar = () => {
    const textoIngresado = textoRef.current!.value;
    if(!textoIngresado || textoIngresado.toString().trim().length===0) {
      setError("Por favor ingresar texto valido!")
      return;
    };
    props.guardar(textoIngresado.toString());
  };

  return (
    <IonModal isOpen={props.mostrar}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{props.objetivoEditado ? "EDITAR" : "AÑADIR"} Objetivo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Ingresa objetivo:</IonLabel>
                <IonInput 
                  type="text" 
                  value={props.objetivoEditado?.text} 
                  ref={textoRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
              <IonRow>
                 <IonCol>
                  <IonText color="danger">
                    <p>{error}</p>
                  </IonText>
                </IonCol>
              </IonRow>
          )};
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" onClick={props.cancelar}> Cancelar </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={guardar}> Guardar </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  )
};

export default EdicionModal;