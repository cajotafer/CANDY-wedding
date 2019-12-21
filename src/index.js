import "./css/global.scss";
import Landing from "./components/pages/Landing.svelte";
import "./images/promo.png";

const app = new Landing({
  target: document.body,
  intro: true
  /* props: {
    name: "world"
  } */
});

export default app;
