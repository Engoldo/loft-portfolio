 <template lang="pug">
  .wrap
    .header
      .container
        .header__wrap
          .header__info
            .header__user
              .header__avatar
                img(src="../images/content/user.jpg").avatar
              .header__username
                span.username Павел Белов
            span.header__subtitle Панель администрирования
          a(@click="logout").header__exit Выйти
    section.navigation
      tabs
    main.main
      router-view
    tooltips(:class="{'showed':showed}")
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    tabs: () => import("templates/tabs.vue"),
    tooltips: () => import("templates/tooltips.vue")
  },
  computed: {
    ...mapState("tooltips", {
      showed: state => state.showed
    })
  },
  methods: {
    ...mapActions("user", ["logout"]),
    ...mapActions("tooltips", ["closeTooltip"])
  },
  watch: {
    showed(value) {
      if (value === true) {
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 5000);
      }
    }
  }
};
</script>


<style lang="pcss">
/* common styles */
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
/* admin panel */
@import "../styles/admin/interface.pcss";
@import "../styles/admin/header.pcss";
@import "../styles/admin/navigation.pcss";
@import "../styles/admin/about.pcss";
@import "../styles/admin/work.pcss";
@import "../styles/admin/feedback.pcss";
@import "../styles/admin/skills.pcss";
@import "../styles/admin/login.pcss";
</style>