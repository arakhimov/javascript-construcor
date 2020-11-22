import {row, col, cssToString} from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML()  {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag, styles} = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), cssToString(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag, styles} = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), cssToString(styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {rowStyles, colStyles} = this.options;
    const html = this.value.map(item => col(item, cssToString(colStyles))).join('');
    return row(html, cssToString(rowStyles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag, styles, imageStyles: is, alt} = this.options;
    return row(`<${tag} src="${this.value}" alt="${alt}" style="${cssToString(is)}" />`, cssToString(styles));
  }
}