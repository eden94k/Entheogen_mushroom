import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root')

root.append(title,doseList)

ReactDOM.render(root)

const title = (
  <h1 class="display-2">
  Dosage
  <small class="text-muted">Guide</small>
  </h1>
)

const doseList = (
  <ul class='list-group list-group-flush'>
    <li class='list-group-item'>MicroDose<li>
    <li class='list-group-item'>PlayoDose<li>
    <li class='list-group-item'>HeroicDose<li>
  </ul>
)
