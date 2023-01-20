const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = ['info', 'success', 'error']

const createNotification = () => {

  const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(getRandomType())

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

button.addEventListener('click', () => createNotification())

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}