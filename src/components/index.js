import MyHome from './MyHome.vue';
import NavBar from './NavBar.vue'
import InfoOne from './InfoOne.vue'
import InfoTwo from './InfoTwo.vue';
import InfoThree from './InfoThree.vue';
import EquipoTrabajo from './EquipoTrabajo.vue'
import MyTeam from './MyTeam.vue';
import QuienesSomos from './QuienesSomos.vue';
import MyInicio from './MyInicio.vue';
import ModeloOp from './ModeloOp.vue';
import LoQueMas from './LoQueMas.vue';
import MyPlanes from './MyPlanes.vue';
import MyContacto from './MyContacto.vue';
import PopUp from './PopUp.vue';
import PopUpData from './PopUpData.vue';
import MyDiagnostico from './MyDiagnostico.vue';
import BotonSugerencias from './BotonSugerencias.vue';
import MySlider from './MySlider.vue';
import WhatsappButton from './WhatsappButton.vue';
import MyFunction from './MyFunction.vue';

export default function (app) {
    app.component('MyHome', MyHome);
    app.component('NavBar', NavBar);
    app.component('InfoOne', InfoOne);
    app.component('InfoTwo', InfoTwo);
    app.component('InfoThree', InfoThree);
    app.component('EquipoTrabajo', EquipoTrabajo);
    app.component('MyTeam', MyTeam);
    app.component('QuienesSomos', QuienesSomos);
    app.component('MyInicio', MyInicio);
    app.component('ModeloOp', ModeloOp);
    app.component('LoQueMas', LoQueMas);
    app.component('MyPlanes', MyPlanes);
    app.component('MyContacto', MyContacto);
    app.component('PopUp', PopUp);
    app.component('PopUpData', PopUpData);
    app.component('MyDiagnostico', MyDiagnostico);
    app.component('BotonSugerencias', BotonSugerencias);
    app.component('MySlider', MySlider);
    app.component('WhatsappButton', WhatsappButton);
    app.component('MyFunction', MyFunction);
}