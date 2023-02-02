import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';
import  localib  from '../assets/localib.png'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Application Localib </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <img className='imgHome' alt="Silhouette of mountains" src={localib} />
        <p className='pHome'> Bienvenu chez Localib </p>

      </IonContent>
    </IonPage>
  );
};

export default Home;
