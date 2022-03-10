// JavaScript: Usage of proxies

const target = {
  message1: 'hello',
  message2: 'everyone'
}

const handler = {
  get (target, prop, receiver) {
    return `${target[prop]}`.toUpperCase()
  }
}

const proxy = new Proxy(target, handler)

console.log(proxy.message1) // HELLO
console.log(proxy.message2) // EVERYONE

