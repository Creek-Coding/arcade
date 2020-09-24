<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <section class="section">
      <div class="container">
        
        <router-link to="/" class="button mb-2 back">Back to Home</router-link>

        <div v-if="game" class="game-exists">
          <h1 class="title is-2">{{ game.name }}</h1>
          <h1 class="subtitle is-4">{{ game.author }}</h1>
          <p class="content">{{ game.description }}</p>

          <iframe
            class="iframe"
            width="100%"
            :src="game.url"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          ></iframe>
        </div>

        <div v-else>
          <h1 class="subtitle has-text-centered">Game not found!</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Game",
  props: ["id"],
  components: {},
  computed: {
    ...mapGetters({
      data: "getData",
    }),
    game() {
      const { id, data } = this;
      return data.find((x) => x.id === id);
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../variables";
 
.iframe{
    height: calc(100vh - 300px);
}

.back{
  :hover{
    color: $dark;
    background: $white;
  }
}


</style>

