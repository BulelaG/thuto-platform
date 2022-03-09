import Vue from "vue";
import VueRouter from "vue-router";
// import SignUp from "../views/SignUp.vue";
// import Login from "../views/Login.vue";

import Home from "../views/Home.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students",
    name: "Students",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Students.vue"),
  },
  
  {
    path: "/sign-up",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUp.vue"),
  },
  {
    path: "/become-a-tutor",
    name: "BecomeATutor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/BecomeATutor.vue"),
  },
  {
    path: "/tutors",
    name: "Tutors",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/Tutors.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting

    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
