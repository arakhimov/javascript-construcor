import image from './assets/image.png';
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/Block';

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt adipisci 
nemo perferendis, sunt veritatis numquam iusto doloribus? Voluptatum dicta doloribus eligendi molestiae quos 
similique nesciunt vero, modi quae nihil harum culpa commodi illo fugit velit architecto sunt. Consequuntur, pariatur.`
;
export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, orangered, firebrick)', 
      'text-align': 'center',
      padding: '1.5rem',
      color: '#fff', 
      'text-transform': 'uppercase',
      'font-family': 'Courier New',
      'border-radius': '0.5rem',
      margin: '0',
      'margin-bottom': '0.5rem',
      'box-sizing': 'border-box'
    }
  }),
  new TextBlock(text, {
    tag: 'p', 
    styles: {
      background: 'rgba(70, 130, 180, 0.6)',
      'font-family': 'Courier New',
      'letter-spacing': '0.1rem',
      'line-height': '1.6', 
      color: '#fff', 
      'text-align': 'center',
      padding: '1.5rem',
      margin: '0',
      'border-radius': '0.5rem',
      'box-sizing': 'border-box',
    }
  }),
  new ColumnsBlock([
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores.'
    ], {
    tag: '',
    rowStyles: {
      margin: '0',
      'padding-top': '20px'
    },
    colStyles: {
      'text-align': 'center',
      color: 'firebrick',
      border: 'orangered',
      padding: '0.5rem',
      margin: '0.5rem',
      margin: '0',
      border: '1px solid firebrick',
      'box-sizing': 'border-box',
      'border-radius': '0.5rem'
    }
  }),
  new ImageBlock(image, {
    tag: 'img',
    styles: {
      padding: '1rem', 
      margin: '0'
    }, 
    imageStyles: {
      width: '800px', 
      height: 'auto',
      'margin-left': 'auto',
      'margin-right': 'auto',
    },
    alt: 'Это картинка'
  })
];