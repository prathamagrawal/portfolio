import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.png'
import three from '../assets/svg/projects/three.png'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import crypto2csv from '../assets/svg/projects/crypto2csv.svg'
import sportlight from '../assets/png/sportlight.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Crypto2csv',
        projectDesc: 'Crypto2csv is a python package accessible via command line for accessing crytocurrencies data in a readable csv format.',
        tags: ['Python'],
        code: 'https://github.com/prathamagrawal/crypto2csv',
        demo: 'https://pypi.org/project/crypto2csv/',
        image: crypto2csv
    },
    {
        id: 2,
        projectName: 'Olympics Dataset and Visualization',
        projectDesc: 'Contributed a dataset consisting of 124 years of Olympics Data, and Visualization to understand trends and outliers',
        tags: ['Python', 'R', 'Dart','Plotly'],
        code: 'https://github.com/prathamagrawal/Analysing-Olympics-Dataset',
        demo: 'https://www.kaggle.com/datasets/fearsomejockey/olympics-dataset-2020-tokyo-dataset',
        image: one
    },
    {
        id:3,
        projectName: 'Sportlight',
        projectDesc: 'A solution for highlights extraction for sports games by The Unknowns.',
        tags: ['Python','Javascript','CSS','Procfile'],
        code: 'https://github.com/prathamagrawal/sportlight',
        demo: 'https://www.knowunknowns.co/',
        image: sportlight
    },

    {
        id: 4,
        projectName: 'IPL Analysis',
        projectDesc: 'Through this project, I contributed an annual dataset of Batsman and Bowler Statistics.',
        tags: ['Jupyter','Pandas','Python'],
        code: 'https://github.com/prathamagrawal/IPL-Analysis',
        demo: 'https://www.kaggle.com/datasets/fearsomejockey/ipl-batting-and-bowling-dataset-20182022',
        image: two
    },
    {
        id: 4,
        projectName: 'LeetCode Solutions',
        projectDesc: 'This project involves some of the solutions I have contributed to leetcode.',
        tags: ['Python', 'C++','Java'],
        code: 'https://github.com/prathamagrawal/LeetCode',
        demo: 'https://leetcode.com/prathamagrawal/',
        image: four
    },
    {
        id: 5,
        projectName: 'HbeatR',
        projectDesc: 'A project used to show the possibility of a person having a cardiac Disease using Machine Learning',
        tags: ['Python','Tensorflow','Keras'],
        code: 'https://github.com/prathamagrawal/HeartBr',
        demo: 'https://github.com/prathamagrawal/HeartBr',
        image: three
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/