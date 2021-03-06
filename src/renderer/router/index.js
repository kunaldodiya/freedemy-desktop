import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// guards
import { checkStorage, checkRootStorage } from "@/libs/guards";

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter(to, from, next) {
        return checkRootStorage(to, from, next);
      },
      component: require("@/pages/Home").default
    },

    {
      path: "/course/browse",
      name: "browse-course",
      beforeEnter(to, from, next) {
        return checkRootStorage(to, from, next);
      },
      component: require("@/pages/BrowseCourses").default
    },

    {
      path: "/course/add",
      name: "add-course",
      beforeEnter(to, from, next) {
        return checkRootStorage(to, from, next);
      },
      component: require("@/pages/AddCourse").default
    },

    {
      path: "/course/manage",
      name: "manage-course",
      beforeEnter(to, from, next) {
        return checkRootStorage(to, from, next);
      },
      component: require("@/pages/ManageCourse").default
    },

    {
      path: "/course/detail/:course_id",
      name: "show-course-detail",
      component: require("@/pages/Course").default,
      beforeEnter(to, from, next) {
        return checkStorage(to, from, next);
      }
    },

    {
      path: "/category/add",
      name: "add-category",
      beforeEnter(to, from, next) {
        return checkRootStorage(to, from, next);
      },
      component: require("@/pages/AddCategory").default
    },

    {
      path: "/settings",
      name: "settings",
      component: require("@/pages/Settings").default
    },

    {
      path: "*",
      redirect: "/"
    }
  ]
});
