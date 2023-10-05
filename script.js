const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** app */
cards.forEach((card) => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart() {
  console.log('> card: start dragging');
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging')
}

function drag() {
  //console.log('> card: doing dragging');
  
}

function dragend() {
  //console.log('> card: end dragging');
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

/**place to drop cards */

dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  console.log('drop zone');
}

function dragover() {
  // this is dropzone
  //console.log('over in the drop zone');
  this.classList.add('over')

  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  // this = dropzone
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  //console.log('leave the drop zone');
  this.classList.remove('over')
}

function drop() {
  //console.log('dropped');
  his.classList.remove('over')
}