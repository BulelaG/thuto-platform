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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/students",
    name: "Students",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "students" */ "../views/Students.vue"),
  },
  
  {
    path: "/register-student",
    name: "RegisterStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register-student" */ "../views/RegisterStudent.vue"),
  },
  {
    path: "/register-tutor",
    name: "RegisterTutor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register-tutor" */ "../views/RegisterTutor.vue"),
  },
  {
    path: "/tutors",
    name: "Tutors",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tutors" */ "../views/Tutors.vue"),
  },
  {
    path: "/tutors/:id",
    name: "Tutor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tutors" */ "../views/Tutor.vue"),
      props: true
  },
  {
    path: "/tutor-profile",
    name: "TutorProfile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tutor-profile" */ "../views/TutorProfile.vue"),
  },
  {
    path: "/student-profile",
    name: "StudentProfile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "student-profile" */ "../views/StudentProfile.vue"),
  },
  {
    path: "/login-tutor",
    name: "TutorLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login-tutor" */ "../views/TutorLogin.vue"),
  },
  {
    path: "/login-student",
    name: "StudentLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login-student" */ "../views/StudentLogin.vue"),
  },
  {
    path: "/book-me",
    name: "BookMe",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "book-me" */ "../views/BookMe.vue"),
  }

];

const router = new VueRouter({
  routes,
});

export default router;
