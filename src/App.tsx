
import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Filtro from './Paginas/Filtro';
import TabsCurso from "./Paginas/TabsCurso";
import SideMenu from "./Componentes/SideMenu";
import CursosContextoProveedor from './Datos/CursosContextoProveedor';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import "./theme/styleGeneral.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SideMenu/>
      <CursosContextoProveedor>
        <IonRouterOutlet id="main">
          <Route path="/filtro" exact>
            <Filtro/>
          </Route>
          <Route path="/cursos">
            <TabsCurso/>
          </Route>
          <Redirect path="/" to="/cursos/list" exact/>
        </IonRouterOutlet>
      </CursosContextoProveedor>
    </IonReactRouter>
  </IonApp>
);

export default App;
