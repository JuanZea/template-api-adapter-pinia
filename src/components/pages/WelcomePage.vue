<script setup lang="ts">
import { useInfoStore } from '@/stores';
import { storeToRefs } from 'pinia';

const infoStore = useInfoStore();
const { totals } = storeToRefs(infoStore);
const fillState = async () => {
    infoStore.refreshPeople();
    infoStore.refreshPlanets();
};

const unsubscribe = infoStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// manually remove the listener
unsubscribe()
</script>

<template>
    <div>
        <img alt="Vue logo" src="src/assets/vue.svg" />
        <h1>Welcome Services Layout</h1>
        <button @click="fillState" class="button">Fill state</button>
        <p>totals: {{ totals }}</p>
        <p>people: {{ infoStore.totals?.people }}</p>
        <p>planets: {{ infoStore.totals?.planets }}</p>
    </div>
</template>
