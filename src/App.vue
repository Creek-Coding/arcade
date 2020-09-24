<template>
  <div id="app">
    <router-view/>
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

export default {

  created(){
    const data = [
      {
        name: "Bunny 20",
        author: "Thida Lay-Sok and Garv Kinariwala",
        description: "Test your knowledge in this trivia quiz!",
        id: "000001",
        url: "https://repl.it/@GarvK/Bunny-20?lite=true&outputonly=true",
      },
      {
        name: "Madam Maddens Perfect Potions Shop",
        author: "Abigail Smythe",
        description: "Explore Madam Maddens magical shop!",
        id: "000002",
        url: "https://repl.it/@abigailsmythe/Text-Based-Story-Game?lite=true&outputonly=true",
      },
      {
        name: "Yoshi's Midnight Adventures",
        author: "Amy Nguyen and Lily Nguyen",
        description: "Run out and explore the world as a cat.",
        id: "000003",
        url: "https://repl.it/@LilyNguyen2/Text-Based-Story-Game?lite=true&outputonly=true",
      },
      {
        name: "Labyrinth Treasure",
        author: "Jacob Kozarsky",
        description: "Explore the labrinths and possibly find the treasure!",
        id: "000004",
        url: "https://repl.it/@JacobKozarsky1/Labyrinth-Treasure?lite=true&outputonly=true",
      },
      {
        name: "Road to Canada",
        author: "Gaurav Gupta",
        description: "Make it safely to Canada",
        id: "000005",
        url: "https://repl.it/@gauravgup/Text-Based-Story-Game?lite=true&outputonly=true",
      },
      {
        name: "A Camping Trip",
        author: "Justin Impleman",
        description: "Go camping with friends!",
        id: "000006",
        url: "https://repl.it/@JustinImpelman/Text-Based-Story-Game?lite=true&outputonly=true",
      },
      {
        name: "Trinity Original Holyness 2",
        author: "Jackson Forbes and Nicholas Wyatt",
        description: "Survive on a ship!",
        id: "000007",
        url: "https://repl.it/@Jackson4b/Text-Based-Story-Game-1?lite=true&outputonly=true",
      },


    ]

    this.$store.commit('setData', data)
  }
}


</script>


<style lang="scss">

@import "variables";
@import "~bulma";
@import "~buefy/src/scss/buefy";
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }


</style>
