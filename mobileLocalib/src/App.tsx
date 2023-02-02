import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { personCircle,newspaperOutline, carSportOutline } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import VehiculePage from './features/vehicules/pages/VehiculePage';
import DetailVehicule from './features/vehicules/components/DetailVehicule';
import AddVehicule from './features/vehicules/components/AddVehicule';
import LocatairePage from './features/locataires/pages/LocatairePage';
import DetailLocataire from './features/locataires/components/DetailLocataire';
import AddLocataire from './features/locataires/components/AddLocataire';
import LocationPage from './features/locations/pages/LocationPage';
import AddLocation from './features/locations/components/AddLocation';
import DetailLocation from './features/locations/components/DetailLocation';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonPage id="main">
        <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/vehicules" component={VehiculePage} />
        <Route path="/vehicule/:id" component={DetailVehicule} />
        <Route path="/ajoutVehicule" component={AddVehicule} />
        <Route path="/locataires" component={LocatairePage} />
        <Route path="/locataire/:id" component={DetailLocataire} />
        <Route path="/ajoutLocataire" component={AddLocataire} />
        <Route path="/locations" component={LocationPage} />
        <Route path="/ajoutLocation/:id" component={AddLocation} />
        <Route path="/location/:id" component={DetailLocation} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
            <IonTabButton tab="/vehicules" href="/vehicules">
              <IonIcon icon={carSportOutline} />
              <IonLabel>Vehicules</IonLabel>
            </IonTabButton>
            <IonTabButton tab="locataires" href="/locataires">
              <IonIcon icon={personCircle} />
              <IonLabel>Locataires</IonLabel>
            </IonTabButton>
            <IonTabButton tab="locations" href="/locations">
              <IonIcon icon={newspaperOutline} />
              <IonLabel>Locations</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
