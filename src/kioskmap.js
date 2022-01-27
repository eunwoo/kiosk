const map = {};

const mappx = [
    {
        page: 'Main',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 2160, h: 3840 },
                x: 0,
                y: 0,
                to: 'Program',
            },
        ],
    },
    {
        page: 'Program',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'grid',
                size: { w: 910, h: 910 },
                x_list: [145, 1101],
                y_list: [1005, 1950],
                to: ['1', '2', '3', '4'],
            },
            {
                type: 'rect',
                size: { w: 892, h: 160 },
                x: 630,
                y: 3174,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'grid',
                size: { w: 955, h: 470 },
                x_list: [90, 1115],
                y_list: [920, 2970],
                y_num: 5,
                to: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_1',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_2',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_3',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_4',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_5',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_6',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_7',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_8',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_9',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_1_10',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'grid',
                size: { w: 955, h: 465 },
                x_list: [85, 1115],
                y_list: [920, 2970],
                x_num: 2,
                y_num: 5,
                to: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_1',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_2',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_3',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_4',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_5',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_6',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_7',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_8',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_9',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_2_10',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'grid',
                size: { w: 955, h: 465 },
                x_list: [85, 1115],
                y_list: [920, 2970],
                x_num: 2,
                y_num: 5,
                to: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_1',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_2',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_3',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_4',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_5',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_6',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_7',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_8',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_9',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_4_10',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3580,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3580,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_3',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'grid',
                size: { w: 1860, h: 340 },
                x_list: [140],
                y_list: [1220, 2910],
                y_num: 5,
                to: ['1', '2', '3', '4', '5'],
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3574,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3574,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_3_1',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3550,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3550,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_3_2',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3550,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3550,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_3_3',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3550,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3550,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_3_4',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3550,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3550,
                to: '/',
            },
        ],
    },
    {
        page: 'Program_3_5',
        image_size: { w: 2160, h: 3840 },
        area: [
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 130,
                y: 3550,
                to: 'back',
            },
            {
                type: 'rect',
                size: { w: 180, h: 190 },
                x: 1840,
                y: 3550,
                to: '/',
            },
        ],
    },
];
export default map;
export { mappx };
