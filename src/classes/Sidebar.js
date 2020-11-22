import {form} from '../utils';

import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './Block';

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.init();
    this.update = update;
  }

  init() {
    this.$el.insertAdjacentHTML('beforeEnd', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [
      form('title'),
      form('text'),
      form('image')
    ].join('')
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock;

    if (type === 'title') {
      newBlock = new TitleBlock(value, {styles});
    } else if (type === 'text') {
      newBlock = new TextBlock(value, {styles});
    } else if (type === 'image') {
      newBlock = new ImageBlock(value, {styles});
    }

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
