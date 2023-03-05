import CustomDialog from '../CustomDialog.vue'

describe('<CustomDialog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CustomDialog).then(({wrapper}) => {
      console.debug(wrapper.vm.$el)
      wrapper.vm.openDialog()
    })
  })
})