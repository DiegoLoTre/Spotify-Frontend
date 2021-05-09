import Index from '../views/Songs/Index.vue'
import Form from '../views/Songs/Form.vue'

export default [{
  path: '/songs',
  name: 'Songs',
  component: Index
}, {
  path: '/songs/form',
  name: 'Songs Form',
  component: Form
}]
