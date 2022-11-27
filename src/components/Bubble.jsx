import { range, Vector2 } from './function/helper'

class Particle {
  constructor(origin, velocity, size, amplitude) {
    this.origin = origin
    this.position = new Vector2(origin.x, origin.y)
    this.velocity = velocity
    this.size = size
    this.amplitude = amplitude
    this.dx = Math.random() * 100
  }

  reset(origin) {
    this.origin = origin
    this.position = new Vector2(origin.x, origin.y)
    this.dx = Math.random() * 100
  }

  update(deltaTime) {
    this.position.y += this.velocity.y * deltaTime
    this.dx += this.velocity.x * deltaTime
    this.position.x = this.origin.x + this.amplitude * Math.sin(this.dx)
  }
}


export default class BubbleEffect {
  #canvas = null
  #ctx = null
  #bubble = []
  #running = false
  #frameTime = 0

  // 氣泡參數
  #amount = 20 // 數量
  #size = [10, 30] // 大小
  #speed = [-20, -80] // 向下移動速度
  #swing = [0.1, 1] // 左右移動速度
  #amplitude = [20, 60] // 左右移動距離

  init() {
    this.#canvas = document.getElementById("bubble")
    this.#ctx = this.#canvas.getContext("2d")
    this.resize(window.innerWidth, window.innerHeight)
    this.start()
  }

  start() {
    this.#running = true
    window.requestAnimationFrame(this.#loop.bind(this))
  }

  stop() {
    this.#running = false
  }

  resize(w, h) {
    this.#canvas.width = w
    this.#canvas.height = h
    this.#initBubble()
  }

  #loop(timestamp) {
    if (this.#running) {
      this.#clear() // 清除 canvas 畫布
      this.#update(timestamp) // 更新氣泡的各項數值
      this.#draw() // 繪製氣泡
      window.requestAnimationFrame(this.#loop.bind(this))
    }
  }

  #initBubble() {
    this.#bubble = []
    for (let i = 0; i < this.#amount; i++) {
      let origin = new Vector2(range(0, this.#canvas.width), range(this.#canvas.height, this.#canvas.height*2))
      let velocity = new Vector2(range(this.#swing[0], this.#swing[1]), range(this.#speed[0], this.#speed[1]))
      let size = range(this.#size[0], this.#size[1])
      let amplitude = range(this.#amplitude[0], this.#amplitude[1])

      this.#bubble.push(new Particle(origin, velocity, size, amplitude))
    }
  }

  #update(timestamp) {
    const nowTime = timestamp
    const deltaTime = (nowTime - this.#frameTime) / 1000 // 計算這次與上次調用之間的時差
    this.#bubble.forEach((particle) => {
      particle.update(deltaTime)
      if (particle.position.y + particle.size < 0) {
        // 重置氣泡位置
        let origin = new Vector2(range(0, this.#canvas.width), range(this.#canvas.height+particle.size, this.#canvas.height*2))
        particle.reset(origin)
      }
    })

    this.#frameTime = timestamp // 記住這次的調用時間
  }

  #draw() {
    // 繪製氣泡
    this.#ctx.fillStyle = "rgb(255,255,255,0.75)"
    this.#ctx.strokeStyle = "rgb(255,255,255,0)"
    this.#bubble.forEach((particle) => {
      this.#ctx.beginPath()
      this.#ctx.arc(particle.position.x, particle.position.y, particle.size, 0, 2 * Math.PI)
      this.#ctx.stroke()
      this.#ctx.fill()
    })
  }

  #clear() {
    // 清除畫布
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }
}