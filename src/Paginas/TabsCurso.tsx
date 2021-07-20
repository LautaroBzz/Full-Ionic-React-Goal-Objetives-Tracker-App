
import React from 'react';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,    
  IonTabBar,          
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Importo iconos
import { list, trophyOutline } from 'ionicons/icons';
// Importo la paginas
import Cursos from './Cursos';
import Objetivos from './Objetivos';
import TodosObjetivos from "./TodosObjetivos";

const TabsCurso: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/cursos" to="/cursos/lista" exact/>
        <Switch>
          <Route path='/cursos/lista' exact>
            <Cursos />
          </Route>
          <Route path='/cursos/todosobjetivos' exact>
            <TodosObjetivos />
          </Route>
          <Route path='/cursos/:idcurso'>
            <Objetivos />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='obj' href='/cursos/todosobjetivos'>
          <IonIcon icon={list} />
          <IonLabel>Todos los Objetivos</IonLabel>
        </IonTabButton>
        <IonTabButton tab='curs' href='/cursos/lista'>
          <IonIcon icon={trophyOutline} />
          <IonLabel>Todos los Cursos</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
};

export default TabsCurso;
