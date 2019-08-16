/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import Vue from 'vue'
import Component /*, { mixins } */ from 'vue-class-component'
// import { Prop, Ref, Watch } from 'vue-property-decorator'
// import { Action, Getter, namespace, State } from 'vuex-class'
// const storeModule = namespace('store-module-name')

/* tslint:disable:member-ordering */

@Component({
  // name: '',
  // el: '#id',
  // components: {
  // TODO
  // },
  // filters and directives can be extracted to other files
  // filters: {
  // TODO
  // },
  // directives: {
  // TODO
  // },
})
class ComponentName extends Vue /*mixins(ComponentNameMixin) */ {
  /**************************************************************************
   * props
   **************************************************************************/

  // @Prop({ type: String, required: true })
  // private readonly propName!: string

  /**************************************************************************
   * vuex map state / getters / actions
   **************************************************************************/

  // @State
  // private readonly foo
  // @storeModule.State('name')
  // private readonly stateName: string | null
  // @Getter
  // private readonly bar
  // @Action
  // private baz
  // @Action('foo')
  // private aliasFoo

  /**************************************************************************
   * data
   **************************************************************************/

  // private dataName: number = 0

  /**************************************************************************
   * computed
   **************************************************************************/

  // private get computedName(): string {
  // TODO
  // return ''
  // }

  /**************************************************************************
   * $ref
   **************************************************************************/
  // @Ref()
  // private readonly anotherComponent!: AnotherComponent
  // @Ref('button-name')
  // private readonly button!: HTMLButtonElement

  /**************************************************************************
   * watch
   **************************************************************************/

  // @Watch('dataName')
  // dataNameOnChange(newValue: number, oldValue: number) {
  // TODO
  // }

  /**************************************************************************
   * methods
   **************************************************************************/

  private async fetchData() {
    // TODO
  }

  /**************************************************************************
   * life cycle
   **************************************************************************/

  // beforeCreate() {},
  created() {
    this.fetchData()
  }
  // beforeMount() {},
  // mounted() {},
  // beforeUpate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
}

export default ComponentName

