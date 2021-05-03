import List from 'components/List';

const moduleType = {
    id: "blockNumberedList",
};

export default {
    ...List,
    type: moduleType,
    title: {
        default: "Numbered list",
        fr_FR: "Liste numérotée",
    },
    description: {
        default: "Display a numbered list",
        fr_FR: "Affiche une liste numérotée",
    },
    image: {
        default: "https://source.unsplash.com/featured/300x250?nature&blockTitle",
    },
};
