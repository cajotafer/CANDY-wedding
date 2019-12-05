import '../../css/global.scss';
import Comments from '../../components/pages/Comments.svelte';

const comments = new Comments({
    target: document.body,
    intro: true,
    props: {
        name: 'world'
    }
});

export default comments;