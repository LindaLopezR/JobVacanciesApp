import SecureAppStorage from './SecureAppStorage.js';
import axios from 'axios';

const users = [{_id: Date.now(), username: '123456', password: 'Password1', name: 'Paulina Sanchez', picture: null}];
const vacancies = [
  {
    _id: 'GPZkfgQqDEWw3YT3d',
    name: 'Coordinador de Diseño Gráfico / TAF',
    description: '<p><a href="https://www.linkedin.com/jobs/view/3000766050/?" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/jobs/view/3000766050/?</a>alternateChannel=search&amp;refId=%2Bu2tBSt3GCFdgQkemzB40A%3D%3D&amp;trackingId=JSJMfJJvBe%2BqxwJIKclyvw%3D%3D</p><p>Grupo Axo®&nbsp;desde 1994 es&nbsp;la referencia obligada, un aliado poderoso para sus socios y el recurso más certero para las firmas que confían en nosotros.</p><p>El futuro, aunque incierto para todos, nos encanta. Porque de algo estamos seguros: estaremos ahí: “Acercando a las mejores marcas con las personas a quienes apasionan, de formas que aún nadie ha imaginado. #ProudToBeAxo</p>',
    typeWork: '2',
    typeSite: '2',
    id: '0124',
    enable: true,
    user: 'kBGeA8jMqEnZsSDFr',
    date: 1698690437871,
    status: 'ACTIVE',
    history: []
  },
  {
    _id: 'JMWEo7jrAxz8YXAvP',
    name: 'Productor Audio Visual - Prácticas Profesionales y de práctica',
    description: '<p>Hermont´s World&nbsp;somo una Empresa de Servicios Logísticos, Agencia Aduanal y Asesor en Comercio Exterior,</p><p><br></p><p>Si estas estudiando y quieres poner en practicas tus conocimientos y sobre todo generar experiencia laborar, te estamos buscando.</p><p><br></p><p>Actividades:</p><ul><li>Publicidad.</li><li>Desarrollo y Edición de contenido Audio Visual para redes sociales.</li><li>Apoyo al área de mercadotecnia Digital.</li></ul><p><br></p>',
    typeWork: '4',
    typeSite: '1',
    id: '045',
    enable: true,
    user: 'kBGeA8jMqEnZsSDFr',
    date: 1698690437905,
    status: 'ACTIVE',
    history: []
  }
]

export default class ApiFetcher {

  constructor() {
    this.secureAppStorage = new SecureAppStorage();
    this.userId = null;
    this.company = null;
  }

  getUserId() {
    return new Promise((resolve, reject) => {

      if (this.userId !== null) {
        resolve(this.userId);
      }

      //TODO bind?
      let self = this;

      this.secureAppStorage.getUser().then(userData => {
        self.userId = userData.id;
        resolve(self.userId);
      }).catch(error => {
        reject(error)
      });
    });

  }

  async _get(url) {
    const response = await axios.get(url, {
      timeout : 5000
    })

    if (response.status == 200) {
      return response.data;
      
    } else {
      const error = 'Status code error';
      throw error;
    }
  }

  async _post(url, data) {
    const response = await axios.post(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout : 5000
    });

    if (response.status == 200) {
      return response.data;
    }

    const error = 'Status code error';
    throw error;
  }

  async testEndpoint(company) {
    let toTest = `${company}/api/v1/testEndpoint`;
    const response = await axios.get(toTest);
    if (response.status == 200) {
      return response.data;
    } else {
      const error = 'Status code error';
      throw error;
    }
  }

  async login(username, password) {
    let response = {success: true, message: 'Login success'};
    let user = users.find(user => user.username == username);

    if (!user) {
      response.success = false;
      response.message = 'Este usuario no existe';
      return response;
    }

    let validPassword = user.password == password;

    if (!validPassword) {
      response.success = false;
      response.message = 'Contraseña incorrecta';
      return response;
    }

    response.user = user;
    return response;
  }

  async getVacancies() {
    return vacancies;
  }

}
