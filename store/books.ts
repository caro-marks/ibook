import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private count = 0

  public get $count() {
    return this.count
  }

  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  @Action
  public increment(number: number) {
    this.context.commit('INCREMENT', number)
  }

  // CRUD COMUNS ACTIONS
  // @Action
  // public async index() {}

  // @Action
  // public async retrieve() {}

  // @Action
  // public async update() {}

  // @Action
  // public async create() {}

  // @Action
  // public async destroy() {}
}
