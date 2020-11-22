import {model} from './model';
import {Site} from './classes/Site';
import {Sidebar} from './classes/Sidebar';
import './styles/index.css';

const site = new Site('#site');

site.render(model);

function updateCallback(newBlock) {
  site.$el.innerHTML = '';
  model.push(newBlock);
  site.render(model);
}

new Sidebar('#panel', updateCallback);
