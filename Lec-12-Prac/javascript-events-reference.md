# JavaScript Events — Complete Reference with Examples

Every event grouped by category. Each entry follows: **name : description**, then the HTML + JS needed to see it work.

---

## Mouse Events

### `click`
**Description:** Fires when an element is pressed and released with the primary mouse button (or tapped on touch devices).

```html
<button id="btn">Click me</button>
```
```javascript
document.getElementById('btn').addEventListener('click', (e) => {
  console.log('Button clicked', e.target);
});
```

### `dblclick`
**Description:** Fires when an element is clicked twice in quick succession.

```html
<div id="box">Double-click me</div>
```
```javascript
document.getElementById('box').addEventListener('dblclick', () => {
  console.log('Double clicked!');
});
```

### `mousedown`
**Description:** Fires the moment a mouse button is pressed down over an element (before release).

```html
<div id="area">Press down here</div>
```
```javascript
document.getElementById('area').addEventListener('mousedown', (e) => {
  console.log('Mouse button down:', e.button); // 0 = left, 1 = middle, 2 = right
});
```

### `mouseup`
**Description:** Fires when a mouse button is released over an element.

```html
<div id="area2">Release here</div>
```
```javascript
document.getElementById('area2').addEventListener('mouseup', () => {
  console.log('Mouse button released');
});
```

### `mousemove`
**Description:** Fires continuously as the cursor moves over an element.

```html
<div id="pad" style="width:200px;height:200px;background:#eee;"></div>
```
```javascript
document.getElementById('pad').addEventListener('mousemove', (e) => {
  console.log('Cursor at', e.offsetX, e.offsetY);
});
```

### `mouseenter`
**Description:** Fires once when the cursor enters an element. Does not bubble, and ignores movement over child elements.

```html
<div id="card" style="padding:20px;background:#f0f0f0;"><span>Hover the card</span></div>
```
```javascript
document.getElementById('card').addEventListener('mouseenter', () => {
  console.log('Entered the card');
});
```

### `mouseleave`
**Description:** Fires once when the cursor leaves an element. Also does not bubble.

```html
<div id="card2" style="padding:20px;background:#f0f0f0;">Hover then leave</div>
```
```javascript
document.getElementById('card2').addEventListener('mouseleave', () => {
  console.log('Left the card');
});
```

### `mouseover`
**Description:** Fires when the cursor moves onto an element or any of its children. Bubbles, unlike `mouseenter`.

```html
<div id="parent">Parent <span>Child</span></div>
```
```javascript
document.getElementById('parent').addEventListener('mouseover', (e) => {
  console.log('Mouse over:', e.target.tagName); // fires for both DIV and SPAN
});
```

### `mouseout`
**Description:** Fires when the cursor leaves an element or moves onto one of its children. Bubbles, unlike `mouseleave`.

```html
<div id="parent2">Parent <span>Child</span></div>
```
```javascript
document.getElementById('parent2').addEventListener('mouseout', (e) => {
  console.log('Mouse out of:', e.target.tagName);
});
```

### `contextmenu`
**Description:** Fires when the right mouse button is clicked, right before the context menu opens.

```html
<div id="rightclick">Right click me</div>
```
```javascript
document.getElementById('rightclick').addEventListener('contextmenu', (e) => {
  e.preventDefault(); // stops the native right-click menu
  console.log('Custom context menu would show here');
});
```

### `wheel`
**Description:** Fires when the mouse wheel or trackpad is scrolled over an element.

```html
<div id="scrollzone" style="height:100px;overflow:auto;">Scroll inside me</div>
```
```javascript
document.getElementById('scrollzone').addEventListener('wheel', (e) => {
  console.log('Wheel delta:', e.deltaY); // positive = scrolling down
});
```

---

## Keyboard Events

### `keydown`
**Description:** Fires when a key is pressed down. Repeats continuously if the key is held.

```html
<input id="kb" type="text" placeholder="Type here" />
```
```javascript
document.getElementById('kb').addEventListener('keydown', (e) => {
  console.log('Key down:', e.key, e.code);
  if (e.key === 'Enter') console.log('Enter was pressed');
});
```

### `keyup`
**Description:** Fires once when a key is released.

```html
<input id="kb2" type="text" placeholder="Type then release" />
```
```javascript
document.getElementById('kb2').addEventListener('keyup', (e) => {
  console.log('Key released:', e.key);
});
```

> Note: `keypress` is deprecated — use `keydown` with `e.key` instead.

---

## Form Events

### `submit`
**Description:** Fires on a `<form>` element when it's submitted (button click or Enter key).

```html
<form id="myForm">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>
```
```javascript
document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault(); // stops the page from reloading
  console.log('Form submitted');
});
```

### `reset`
**Description:** Fires on a `<form>` when its reset button is clicked, clearing all fields.

```html
<form id="resetForm">
  <input type="text" value="Clear me" />
  <button type="reset">Reset</button>
</form>
```
```javascript
document.getElementById('resetForm').addEventListener('reset', () => {
  console.log('Form was reset');
});
```

### `change`
**Description:** Fires when a form field's value is committed — on blur for text inputs, immediately for checkboxes, radios, and selects.

```html
<select id="dropdown">
  <option value="js">JavaScript</option>
  <option value="py">Python</option>
</select>
```
```javascript
document.getElementById('dropdown').addEventListener('change', (e) => {
  console.log('Selected:', e.target.value);
});
```

### `input`
**Description:** Fires immediately on every value change — every keystroke, paste, or voice input.

```html
<input id="live" type="text" placeholder="Type live" />
```
```javascript
document.getElementById('live').addEventListener('input', (e) => {
  console.log('Live value:', e.target.value);
});
```

### `focus`
**Description:** Fires when an element gains focus. Does not bubble.

```html
<input id="focusInput" type="text" placeholder="Click to focus" />
```
```javascript
document.getElementById('focusInput').addEventListener('focus', () => {
  console.log('Input focused');
});
```

### `blur`
**Description:** Fires when an element loses focus. Does not bubble.

```html
<input id="blurInput" type="text" placeholder="Click away after focusing" />
```
```javascript
document.getElementById('blurInput').addEventListener('blur', () => {
  console.log('Input lost focus');
});
```

### `focusin`
**Description:** Same as `focus` but bubbles — useful for delegation on a parent container.

```html
<div id="formWrap"><input type="text" placeholder="Focus me" /></div>
```
```javascript
document.getElementById('formWrap').addEventListener('focusin', (e) => {
  console.log('Something inside gained focus:', e.target);
});
```

### `focusout`
**Description:** Same as `blur` but bubbles.

```html
<div id="formWrap2"><input type="text" placeholder="Focus then leave" /></div>
```
```javascript
document.getElementById('formWrap2').addEventListener('focusout', (e) => {
  console.log('Something inside lost focus:', e.target);
});
```

### `invalid`
**Description:** Fires when a form field fails HTML5 validation on submit attempt.

```html
<form id="valForm">
  <input type="email" required />
  <button type="submit">Submit</button>
</form>
```
```javascript
document.querySelector('#valForm input').addEventListener('invalid', (e) => {
  console.log('Field is invalid:', e.target.validationMessage);
});
```

### `select`
**Description:** Fires when text inside an `<input>` or `<textarea>` is selected/highlighted.

```html
<input id="selText" type="text" value="Select some of this text" />
```
```javascript
document.getElementById('selText').addEventListener('select', (e) => {
  console.log('Selected text:', e.target.value.substring(e.target.selectionStart, e.target.selectionEnd));
});
```

---

## Window & Document Events

### `load`
**Description:** Fires when the page and all its resources (images, CSS, scripts) have fully loaded.

```html
<img id="pic" src="photo.jpg" />
```
```javascript
window.addEventListener('load', () => {
  console.log('Everything, including images, has loaded');
});
```

### `DOMContentLoaded`
**Description:** Fires when the HTML is parsed and the DOM is ready — doesn't wait for images or stylesheets. What you usually want for setup code.

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready, safe to query elements');
  });
</script>
```
```javascript
// (same as above — typically placed in a script tag or external JS file)
```

### `resize`
**Description:** Fires when the browser window is resized.

```html
<p id="sizeDisplay"></p>
```
```javascript
window.addEventListener('resize', () => {
  document.getElementById('sizeDisplay').textContent = `${window.innerWidth} x ${window.innerHeight}`;
});
```

### `scroll`
**Description:** Fires when an element or the page is scrolled.

```html
<div id="scrollBox" style="height:100px;overflow-y:scroll;">
  <div style="height:500px;">Tall content</div>
</div>
```
```javascript
document.getElementById('scrollBox').addEventListener('scroll', (e) => {
  console.log('Scroll position:', e.target.scrollTop);
});
```

### `beforeunload`
**Description:** Fires right before the page is about to unload — used to warn about unsaved changes.

```html
<!-- no HTML needed, applies to the whole window -->
```
```javascript
let hasUnsavedChanges = true;
window.addEventListener('beforeunload', (e) => {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = ''; // triggers the browser's confirmation dialog
  }
});
```

### `unload`
**Description:** Fires as the page is actually being unloaded (navigating away or closing tab).

```javascript
window.addEventListener('unload', () => {
  console.log('Page is unloading'); // can't reliably do async work here
});
```

### `hashchange`
**Description:** Fires when the fragment identifier (the part after `#`) in the URL changes.

```html
<a href="#section2">Go to Section 2</a>
```
```javascript
window.addEventListener('hashchange', () => {
  console.log('URL hash changed to:', location.hash);
});
```

### `popstate`
**Description:** Fires when the user navigates via the browser's back/forward buttons (with history API state).

```javascript
history.pushState({ page: 1 }, '', '?page=1');
window.addEventListener('popstate', (e) => {
  console.log('Navigated, state:', e.state);
});
```

### `online`
**Description:** Fires when the browser regains network connectivity.

```javascript
window.addEventListener('online', () => {
  console.log('Back online');
});
```

### `offline`
**Description:** Fires when the browser loses network connectivity.

```javascript
window.addEventListener('offline', () => {
  console.log('Connection lost');
});
```

### `visibilitychange`
**Description:** Fires when the tab becomes hidden or visible — useful for pausing videos or polling when the user isn't looking.

```javascript
document.addEventListener('visibilitychange', () => {
  console.log('Tab is now:', document.hidden ? 'hidden' : 'visible');
});
```

---

## Drag & Drop Events

### `dragstart`
**Description:** Fires on the source element when a drag operation begins.

```html
<div id="draggable" draggable="true">Drag me</div>
```
```javascript
document.getElementById('draggable').addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'dragged-item');
  console.log('Drag started');
});
```

### `drag`
**Description:** Fires continuously on the source element while it's being dragged.

```javascript
document.getElementById('draggable').addEventListener('drag', () => {
  console.log('Dragging...');
});
```

### `dragenter`
**Description:** Fires on the drop target when a dragged item enters it.

```html
<div id="dropZone" style="height:150px;border:2px dashed #999;">Drop here</div>
```
```javascript
document.getElementById('dropZone').addEventListener('dragenter', (e) => {
  e.preventDefault();
  console.log('Dragged item entered drop zone');
});
```

### `dragleave`
**Description:** Fires on the drop target when a dragged item leaves it without dropping.

```javascript
document.getElementById('dropZone').addEventListener('dragleave', () => {
  console.log('Dragged item left drop zone');
});
```

### `dragover`
**Description:** Fires continuously on the drop target while an item is dragged over it. You must call `preventDefault()` here or the `drop` event won't fire.

```javascript
document.getElementById('dropZone').addEventListener('dragover', (e) => {
  e.preventDefault(); // required to allow dropping
});
```

### `drop`
**Description:** Fires on the drop target when the dragged item is released over it.

```javascript
document.getElementById('dropZone').addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  console.log('Dropped:', data);
});
```

### `dragend`
**Description:** Fires on the source element when the drag operation finishes (whether dropped successfully or not).

```javascript
document.getElementById('draggable').addEventListener('dragend', () => {
  console.log('Drag finished');
});
```

---

## Touch Events

### `touchstart`
**Description:** Fires when a finger touches the screen on an element.

```html
<div id="touchArea" style="height:150px;background:#eee;">Touch me</div>
```
```javascript
document.getElementById('touchArea').addEventListener('touchstart', (e) => {
  console.log('Touch started at', e.touches[0].clientX, e.touches[0].clientY);
});
```

### `touchmove`
**Description:** Fires continuously as a finger moves across the screen on an element.

```javascript
document.getElementById('touchArea').addEventListener('touchmove', (e) => {
  console.log('Touch moving:', e.touches[0].clientX);
});
```

### `touchend`
**Description:** Fires when a finger is lifted off the screen.

```javascript
document.getElementById('touchArea').addEventListener('touchend', () => {
  console.log('Touch ended');
});
```

### `touchcancel`
**Description:** Fires when a touch is interrupted (e.g., an incoming call, or the OS takes over the gesture).

```javascript
document.getElementById('touchArea').addEventListener('touchcancel', () => {
  console.log('Touch was cancelled');
});
```

---

## Pointer Events

**Description (general):** Unified events that fire for mouse, touch, and stylus input alike — modern preference over handling mouse and touch separately.

### `pointerdown`
```html
<div id="pointerArea" style="height:150px;background:#eee;">Interact here</div>
```
```javascript
document.getElementById('pointerArea').addEventListener('pointerdown', (e) => {
  console.log('Pointer down, type:', e.pointerType); // 'mouse', 'touch', or 'pen'
});
```

### `pointerup`
```javascript
document.getElementById('pointerArea').addEventListener('pointerup', () => {
  console.log('Pointer released');
});
```

### `pointermove`
```javascript
document.getElementById('pointerArea').addEventListener('pointermove', (e) => {
  console.log('Pointer moving at', e.clientX, e.clientY);
});
```

### `pointercancel`
```javascript
document.getElementById('pointerArea').addEventListener('pointercancel', () => {
  console.log('Pointer interaction cancelled');
});
```

---

## Clipboard Events

### `copy`
**Description:** Fires when the user copies content (Ctrl+C / Cmd+C).

```html
<input id="copySrc" type="text" value="Copy this text" />
```
```javascript
document.getElementById('copySrc').addEventListener('copy', () => {
  console.log('Content copied');
});
```

### `cut`
**Description:** Fires when the user cuts content (Ctrl+X / Cmd+X).

```javascript
document.getElementById('copySrc').addEventListener('cut', () => {
  console.log('Content cut');
});
```

### `paste`
**Description:** Fires when the user pastes content (Ctrl+V / Cmd+V).

```html
<input id="pasteTarget" type="text" placeholder="Paste here" />
```
```javascript
document.getElementById('pasteTarget').addEventListener('paste', (e) => {
  const pastedText = e.clipboardData.getData('text');
  console.log('Pasted:', pastedText);
});
```

---

## Media Events

### `play`
**Description:** Fires when playback of audio/video starts or resumes.

```html
<video id="vid" src="clip.mp4" controls></video>
```
```javascript
document.getElementById('vid').addEventListener('play', () => {
  console.log('Video started playing');
});
```

### `pause`
**Description:** Fires when playback is paused.

```javascript
document.getElementById('vid').addEventListener('pause', () => {
  console.log('Video paused');
});
```

### `ended`
**Description:** Fires when playback reaches the end of the media.

```javascript
document.getElementById('vid').addEventListener('ended', () => {
  console.log('Video finished');
});
```

### `timeupdate`
**Description:** Fires repeatedly as the playback position changes — commonly used to drive a progress bar.

```html
<video id="vid2" src="clip.mp4" controls></video>
<progress id="bar" value="0" max="100"></progress>
```
```javascript
const vid2 = document.getElementById('vid2');
vid2.addEventListener('timeupdate', () => {
  document.getElementById('bar').value = (vid2.currentTime / vid2.duration) * 100;
});
```

### `volumechange`
**Description:** Fires when the volume or muted state is changed.

```javascript
document.getElementById('vid').addEventListener('volumechange', (e) => {
  console.log('Volume now:', e.target.volume);
});
```

### `loadedmetadata`
**Description:** Fires once the media's metadata (duration, dimensions) is available.

```javascript
document.getElementById('vid').addEventListener('loadedmetadata', (e) => {
  console.log('Duration:', e.target.duration);
});
```

---

## Animation & Transition Events

### `animationstart`
**Description:** Fires when a CSS animation begins.

```html
<style>
  #animBox { animation: spin 2s linear; }
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>
<div id="animBox">Spinning</div>
```
```javascript
document.getElementById('animBox').addEventListener('animationstart', () => {
  console.log('Animation started');
});
```

### `animationend`
**Description:** Fires when a CSS animation completes.

```javascript
document.getElementById('animBox').addEventListener('animationend', () => {
  console.log('Animation finished');
});
```

### `animationiteration`
**Description:** Fires each time a looping CSS animation completes one cycle and repeats.

```javascript
document.getElementById('animBox').addEventListener('animationiteration', () => {
  console.log('Animation looped again');
});
```

### `transitionend`
**Description:** Fires when a CSS transition finishes.

```html
<style>
  #transBox { width: 100px; transition: width 1s; }
  #transBox.grow { width: 300px; }
</style>
<div id="transBox">Transitioning</div>
```
```javascript
const box = document.getElementById('transBox');
box.addEventListener('transitionend', () => {
  console.log('Transition complete');
});
box.classList.add('grow'); // triggers the transition
```

---

## Custom Events

### `CustomEvent`
**Description:** Events you define yourself and dispatch manually — useful for decoupled communication between components in vanilla JS projects (e.g., one module tells another "cart updated").

```html
<div id="cartIcon">🛒 <span id="count">0</span></div>
```
```javascript
// Dispatching a custom event
const cartUpdated = new CustomEvent('cartUpdated', {
  detail: { itemCount: 3 },
  bubbles: true
});
document.dispatchEvent(cartUpdated);

// Listening for it elsewhere in the app
document.addEventListener('cartUpdated', (e) => {
  document.getElementById('count').textContent = e.detail.itemCount;
  console.log('Cart updated to', e.detail.itemCount, 'items');
});
```

---

## Quick Interview Recap

- `mouseenter`/`mouseleave` don't bubble and ignore children; `mouseover`/`mouseout` do bubble.
- `input` fires on every keystroke; `change` fires only when the value is committed (on blur for text fields).
- `focus`/`blur` don't bubble; `focusin`/`focusout` do — use the latter for delegation.
- `dragover` needs `preventDefault()` or `drop` will never fire.
- `DOMContentLoaded` fires before `load` — use it for DOM setup that doesn't depend on images/CSS being ready.
- `keypress` is deprecated — always use `keydown` with `e.key`.
