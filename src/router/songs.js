import Index from '../views/Songs/Index.vue'
import Form from '../views/Songs/Form.vue'
import {url} from "../menu/song";

export default [{
  path: url + '',
  name: 'Songs',
  component: Index
}, {
  path: url + '/form',
  name: 'Songs Form',
  component: Form
}]
