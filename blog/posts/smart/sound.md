---
title: 很有意思的一段代码
author: Peng
date: 2021/04/20
categories:
- smart
tags:
- smart
---

### 直接上代码

```js

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
const observer = new MutationObserver(function(mutationsList) {
  const oscillator = audioCtx.createOscillator()

  oscillator.connect(audioCtx.destination)
  oscillator.type = "sine"
  oscillator.frequency.setValueAtTime(
    Math.log(mutationsList.length + 5) * 880,
    audioCtx.currentTime,
  )

  oscillator.start()
  oscillator.stop(audioCtx.currentTime + 0.01)
})

observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
})

```

Tips：直接复制到控制台，操作一下页面，听... Dom更新的声音。