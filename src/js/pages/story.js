import "../../css/global.scss";
import Story from "../../components/pages/Story.svelte";

const story = new Story({
  target: document.body,
  intro: true
  /* props: {
        name: 'world'
    } */
});

export default story;
