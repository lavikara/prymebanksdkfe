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
        name: "DefaultPaymentDetails",
        redirect: { name: "PaymentDetails" },
      },
      {
        path: "/depositeStatus/:id",
        name: "PaymentDetails",
        component: () =>
          import(
            /* webpackChunkName: "sdk" */
            "@/layout/home/Email.vue"
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
        name: "DefaultPayment",
        redirect: { name: "Card" },
      },
      {
        path: "/transfer",
        name: "Transfer",
        component: () =>
          import(
            /* webpackChunkName: "sdk" */
            "@/layout/payment/Transfer.vue"
          ),
      },
      {
        path: "/card",
        name: "Card",
        component: () =>
          import(
            /* webpackChunkName: "sdk" */
            "@/layout/payment/Card.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ el: "#app", top: -10 });
      }, 500);
    });
  },
});

export default router;
