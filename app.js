(() => {
  'use strict';
  const { route, scenes } = window.CAMPUS_DATA;
  const $ = id => document.getElementById(id);
  const sceneById = new Map(scenes.map(scene => [scene.id, scene]));
  let currentId = route[0], routeIndex = 0, generation = 0;
  let panCenter = 0.5, panWidth = 1, dragging = false, dragX = 0;
  const stage = $('stage'), panorama = $('panorama');
  const imageCache = new Map();

  function loadImage(src) {
    if (imageCache.has(src)) return imageCache.get(src);
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => { imageCache.delete(src); reject(new Error('image load failed')); };
      img.src = src;
    });
    imageCache.set(src, promise);
    return promise;
  }
  function closeRoute() {
    document.body.classList.remove('route-open');
    $('drawer-shade').hidden = true;
    $('route-toggle').setAttribute('aria-expanded', 'false');
  }
  function fitScene() {
    const scene = sceneById.get(currentId);
    const width = stage.clientWidth, height = stage.clientHeight;
    if (!width || !height) return;
    if (scene.type === 'panorama') {
      panWidth = height * scene.width / scene.height;
      panorama.style.backgroundSize = `auto ${height}px`;
      positionPanorama();
    } else {
      const ratio = Math.min(width / scene.width, height / scene.height);
      $('photo-frame').style.width = `${scene.width * ratio}px`;
      $('photo-frame').style.height = `${scene.height * ratio}px`;
    }
  }
  function positionPanorama() {
    panorama.style.backgroundPosition = `${stage.clientWidth / 2 - panCenter * panWidth}px center`;
  }
  function renderRoute() {
    document.querySelectorAll('#route-list li').forEach((li, index) => {
      li.classList.toggle('active', route[index] === currentId);
      li.classList.toggle('visited', index < routeIndex);
      const button = li.querySelector('button');
      if (route[index] === currentId) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
  }
  function readHash() {
    const id = Number(location.hash.slice(1));
    return sceneById.has(id) ? id : route[0];
  }
  function goTo(id, writeHistory = true) {
    if (!sceneById.has(id)) return;
    if (writeHistory && location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    showScene(id);
    closeRoute();
  }
  async function showScene(id) {
    const token = ++generation;
    currentId = id;
    const scene = sceneById.get(id), index = route.indexOf(id), inRoute = index >= 0;
    if (inRoute) routeIndex = index;
    const isPan = scene.type === 'panorama', last = inRoute && index === route.length - 1;
    const nextScene = inRoute && !last ? sceneById.get(route[index + 1]) : null;
    $('scene-title').textContent = scene.title;
    $('scene-description').textContent = scene.description || '沿途校园影像，可从相册浏览更多位置。';
    $('scene-type').textContent = isPan ? '全景 · 左右拖动' : inRoute ? '实景位置' : '沿途影像';
    $('scene-count').textContent = inRoute ? `${index + 1} / ${route.length}` : `素材 ${String(id).padStart(2, '0')}`;
    $('next-caption').textContent = inRoute ? last ? '路线终点' : '下一处' : '正在浏览相册';
    $('next-title').textContent = nextScene ? nextScene.title : last ? '学院走廊' : '返回刚才的步行位置';
    $('next-action').textContent = !inRoute ? '回到路线' : last ? '查看终点' : scene.action || '向前直行';
    $('previous').disabled = inRoute && index === 0;
    $('back-to-route').hidden = inRoute;
    $('stage-hint').textContent = !inRoute ? '可在相册中查看其他位置' : isPan ? '左右拖动环顾四周 · 点击红色箭头继续' : last ? '本段路线终点 · 点击箭头查看提示' : '点击红色箭头，前往下一处';
    $('photo-frame').hidden = isPan;
    panorama.hidden = !isPan;
    $('pan-reset').hidden = !isPan;
    $('panorama-arrow').hidden = !isPan || !inRoute;
    $('photo-arrow').hidden = isPan || !inRoute || !scene.overlay;
    $('backdrop').style.backgroundImage = `url("${scene.file}")`;
    $('progress').setAttribute('aria-valuenow', String(routeIndex + 1));
    $('progress-fill').style.width = `${(routeIndex + 1) / route.length * 100}%`;
    $('loading').hidden = false;
    $('load-error').hidden = true;
    $('announcement').textContent = `${scene.title}。${inRoute ? `第 ${index + 1} 处，共 ${route.length} 处。` : '相册影像。'}`;
    $('photo-arrow').setAttribute('aria-label', last ? '查看路线终点提示' : `${scene.action || '向前直行'}，前往${nextScene ? nextScene.title : ''}`);
    $('panorama-arrow').setAttribute('aria-label', `前往${nextScene ? nextScene.title : ''}`);
    $('panorama-next-label').textContent = nextScene ? `前往${nextScene.title}` : '路线终点';
    if (isPan) {
      panCenter = scene.center || 0.5;
      panorama.setAttribute('aria-label', `${scene.title}，左右拖动或按左右方向键环顾四周`);
      panorama.style.backgroundImage = `url("${scene.file}")`;
    } else {
      $('scene-photo').src = scene.file;
      $('scene-photo').alt = scene.title;
      if (scene.overlay) {
        const overlay = scene.overlay, button = $('photo-arrow');
        button.style.left = `${overlay.left / scene.width * 100}%`;
        button.style.top = `${overlay.top / scene.height * 100}%`;
        button.style.width = `${overlay.width / scene.width * 100}%`;
        button.style.height = `${overlay.height / scene.height * 100}%`;
        $('arrow-image').src = overlay.placedFile;
      }
    }
    renderRoute();
    fitScene();
    try {
      await loadImage(scene.file);
      if (token !== generation) return;
      $('loading').hidden = true;
      fitScene();
      if (nextScene) loadImage(nextScene.file).catch(() => {});
    } catch (_) {
      if (token !== generation) return;
      $('loading').hidden = true;
      $('load-error').hidden = false;
    }
  }
  function advance() {
    const index = route.indexOf(currentId);
    if (index < 0) return goTo(route[routeIndex]);
    if (index === route.length - 1) return $('arrival-dialog').showModal();
    goTo(route[index + 1]);
  }
  function previous() {
    const index = route.indexOf(currentId);
    if (index < 0) return goTo(route[routeIndex]);
    if (index > 0) goTo(route[index - 1]);
  }
  function restart() {
    if ($('arrival-dialog').open) $('arrival-dialog').close();
    goTo(route[0]);
  }
  $('route-list').innerHTML = route.map((id, index) => {
    const scene = sceneById.get(id);
    return `<li><button data-scene="${id}"><span class="step-number">${String(index + 1).padStart(2, '0')}</span><span class="step-title">${scene.title}<span class="step-sub">${index === route.length - 1 ? '本段路线终点' : scene.type === 'panorama' ? '全景 · 环顾四周' : scene.action}</span></span></button></li>`;
  }).join('');
  document.querySelectorAll('#route-list button').forEach(button => button.addEventListener('click', () => goTo(Number(button.dataset.scene))));
  $('gallery-grid').innerHTML = scenes.map(scene => `<button class="gallery-card" data-scene="${scene.id}"><img src="${scene.file}" alt="${scene.title}" loading="lazy"><div>${String(scene.id).padStart(2, '0')} · ${scene.title}<small>${route.includes(scene.id) ? '步行路线上的位置' : '沿途影像'}</small></div></button>`).join('');
  document.querySelectorAll('#gallery-grid button').forEach(button => button.addEventListener('click', () => {
    $('gallery-dialog').close(); goTo(Number(button.dataset.scene));
  }));
  $('next').addEventListener('click', advance);
  $('photo-arrow').addEventListener('click', advance);
  $('panorama-arrow').addEventListener('click', advance);
  $('previous').addEventListener('click', previous);
  $('back-to-route').addEventListener('click', () => goTo(route[routeIndex]));
  $('restart').addEventListener('click', restart);
  $('arrival-restart').addEventListener('click', restart);
  $('retry').addEventListener('click', () => showScene(currentId));
  $('gallery-toggle').addEventListener('click', () => $('gallery-dialog').showModal());
  $('help-toggle').addEventListener('click', () => $('help-dialog').showModal());
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => $(button.dataset.close).close()));
  $('route-toggle').addEventListener('click', () => {
    const open = document.body.classList.toggle('route-open');
    $('drawer-shade').hidden = !open;
    $('route-toggle').setAttribute('aria-expanded', String(open));
  });
  $('route-close').addEventListener('click', closeRoute);
  $('drawer-shade').addEventListener('click', closeRoute);
  $('pan-reset').addEventListener('click', () => { panCenter = sceneById.get(currentId).center || 0.5; positionPanorama(); });
  $('fullscreen').addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (stage.requestFullscreen) await stage.requestFullscreen();
      else { $('announcement').textContent = '此浏览器暂不支持全屏查看。'; }
    } catch (_) { $('announcement').textContent = '此浏览器暂不支持全屏查看。'; }
  });
  panorama.addEventListener('pointerdown', event => { dragging = true; dragX = event.clientX; panorama.setPointerCapture(event.pointerId); panorama.classList.add('dragging'); });
  panorama.addEventListener('pointermove', event => {
    if (!dragging) return;
    panCenter = (panCenter - (event.clientX - dragX) / panWidth + 1) % 1;
    dragX = event.clientX; positionPanorama();
  });
  function endDrag() { dragging = false; panorama.classList.remove('dragging'); }
  panorama.addEventListener('pointerup', endDrag);
  panorama.addEventListener('pointercancel', endDrag);
  panorama.addEventListener('lostpointercapture', endDrag);
  window.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || event.target.closest('button,a,input,textarea,select')) return;
    if (event.key === 'Escape') return closeRoute();
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      if (sceneById.get(currentId).type === 'panorama') {
        panCenter = (panCenter + (event.key === 'ArrowRight' ? .035 : -.035) + 1) % 1;
        positionPanorama();
      } else if (event.key === 'ArrowRight') advance(); else previous();
    }
  });
  window.addEventListener('popstate', () => goTo(readHash(), false));
  window.addEventListener('hashchange', () => goTo(readHash(), false));
  window.addEventListener('resize', fitScene);
  document.addEventListener('fullscreenchange', fitScene);
  if ('ResizeObserver' in window) new ResizeObserver(fitScene).observe(stage);
  goTo(readHash(), false);
})();
