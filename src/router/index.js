import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const PaymentView = () => import("@/views/PaymentView.vue");

const routes = [
  {
    path: "",
    name: "HomeView",
    component: HomeView,
    children: [
      {
        path: "",
        name: "DefaultHomeView",
        redirect: { name: "EmailLayout" },
      },
      {
        path: "/depositestatus/:id",
        name: "EmailLayout",
        component: () =>
          import(
            /* webpackChunkName: "homeview" */
            "@/layout/home/EmailLayout.vue"
          ),
      },
    ],
  },
  {
    path: "/payment",
    name: "PaymentView",
    component: PaymentView,
    children: [
      {
        path: "",
        name: "DefaultPaymentView",
        redirect: { name: "TransferLayout" },
      },
      {
        path: "/payment/transfer",
        name: "TransferLayout",
        component: () =>
          import(
            /* webpackChunkName: "PaymentView" */
            "@/layout/payment/TransferLayout.vue"
          ),
      },
      {
        path: "/payment/card",
        name: "CardLayout",
        component: () =>
          import(
            /* webpackChunkName: "PaymentView" */
            "@/layout/payment/CardLayout.vue"
          ),
      },
      {
        path: "/payment/bank",
        name: "BankLayout",
        component: () =>
          import(
            /* webpackChunkName: "PaymentView" */
            "@/layout/payment/BankLayout.vue"
          ),
      },
      {
        path: "/payment/ussd",
        name: "UssdLayout",
        component: () =>
          import(
            /* webpackChunkName: "PaymentView" */
            "@/layout/payment/UssdLayout.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "link-active",
  scrollBehavior(to, from) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ el: "#app", top: -10 });
      }, 500);
    });
  },
});

export default router;
