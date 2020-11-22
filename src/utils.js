export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content, styles = {}) {
  return `<div class="col" style="${styles}">${content}</div>`;
}

export function cssToString(styles = {}) {
  if (typeof(styles) === 'string') return styles;
  return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';');
}

export function form(type) {
  return `
    <form name="${type}">
      <h4>${type}</h4>
      <div class="form-group">
        <input type="text" class="form-control" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
}