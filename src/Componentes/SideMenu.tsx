
import React from "react";
import {
  IonMenu,         
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonMenuToggle,    // retrae el sidebar luego de seleccionar un IonItem
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { list, options } from "ionicons/icons";

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId='main'>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Objetivos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink='/cursos/todosobjetivos' routerDirection='none'>
              <IonIcon slot='start' icon={list} />
              <IonLabel>Todos los Objetivos</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink='/filtro' routerDirection='none'>
              <IonIcon slot='start' icon={options} />
              <IonLabel>Filtro</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>  
      </IonContent>
       
    </IonMenu>
  )
};

export default SideMenu;