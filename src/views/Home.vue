<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <section class="hero is-medium good-gradient">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Welcome to the CS101 arcade!</h1>
          <h2 class="subtitle is-3">Explore games made by your fellow students</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div v-for="(column, i) in dataSplit" class="tile is-4 is-vertical is-parent" :key="i">
            <div v-for="item in column" :key="item.id" class="tile is-child card zoom">
              <router-link :to="'/game/' + item.id" v-slot="{ href, route, navigate }">
                <div class @click="navigate">
                  <div class="card-content">
                    <div>
                      <p class="title is-4">{{item.name}}</p>
                      <p class="subtitle is-5">{{ item.author }}</p>
                    </div>
                    <div class="content">{{ item.description }}</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Games created by students in <a target="_blank" href="https://creekcoding.com">Creek Coding's</a> 
          &nbsp;<a target="_blank" href="https:cs101.creekcoding.com">Comp Sci 101 Course</a>
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters({
      data: "getData",
    }),
    dataSplit() {
      const { data } = this;
      const columns = [[], [], []];

      data.forEach((x, i) => columns[i % 3].push(x));

      return columns;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "~bulma/sass/utilities/_all";

.zoom {
  transition: transform 0.2s; /* Animation */
  border-radius: 4px;
}
.zoom:hover {
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.good-gradient{
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>