import "../../css/global.scss";
import Gallery from "../../components/pages/Gallery.svelte";

const gallery = new Gallery({
  target: document.body,
  intro: true
  /* props: {
        name: 'world'
    } */
});

export default gallery;
