import {
  defineComponent,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  
  
  ref,
} from 'vue';

export default defineComponent({
  name:'featurePage',
  
  setup() {
    const counter = ref(0)
    
    onMounted(() => {
      console.log('onMounted')
    });
    onUpdated(() => {
      console.log('onUpdated')
    });
    onUnmounted(() => {
      console.log('onUnmounted')
    });
    onBeforeMount(() => {
      console.log('onBeforeMount')
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    });
    onRenderTracked(() => {
      console.log('onRenderTracked')
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    });
    onActivated(() => {
      console.log('onActivated')
    });
    onDeactivated(() => {
      console.log('onDeactivated')
    });
    
    console.log("Setup")
    return {
      counter
    }
  }
})