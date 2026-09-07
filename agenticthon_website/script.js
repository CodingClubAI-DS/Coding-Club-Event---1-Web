const header=document.querySelector('header'),hamb=document.querySelector('.hamb');hamb?.addEventListener('click',()=>header.classList.toggle('open'));
const links=[...document.querySelectorAll('nav a[href^="#"]')], sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55%'});sections.forEach(s=>io.observe(s));


// Purely graphical AI motion layer — no floating text labels.
const orbLayer=document.querySelector('.visual-orbs');
const cubeLayer=document.querySelector('.visual-cubes');
const hexLayer=document.querySelector('.visual-hexes');
const circuitLayer=document.querySelector('.circuit-field');
const orbData=[[5,18,26,-18],[12,62,-18,-25],[22,28,20,-35],[31,78,-24,-20],[42,18,22,-28],[55,76,-18,-30],[66,25,24,-22],[76,66,-20,-34],[88,18,18,-28],[94,55,-25,-20],[81,88,20,-25],[45,90,-20,-28],[18,90,25,-18],[70,46,-16,-30]];
orbData.forEach(([x,y,dx,dy],i)=>{const e=document.createElement('i');e.className='visual-orb'+(i%4===0?' pink':'');e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--x',dx+'px');e.style.setProperty('--y',dy+'px');e.style.setProperty('--d',(5.5+i%5*1.4)+'s');e.style.setProperty('--delay',(-i*.55)+'s');orbLayer?.appendChild(e)});
const cubeData=[[6,32],[18,76],[33,10],[49,28],[69,12],[86,38],[78,77],[28,58],[57,83],[94,72]];
cubeData.forEach(([x,y],i)=>{const e=document.createElement('i');e.className='visual-cube';e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--d',(14+i%4*2)+'s');e.style.setProperty('--delay',(-i*2.2)+'s');cubeLayer?.appendChild(e)});
const hexData=[[3,44,-18,-22],[14,18,20,-30],[28,36,-22,-20],[40,68,18,-30],[59,15,-20,-24],[72,34,24,-22],[91,24,-20,-30],[88,72,22,-24],[52,54,-18,-32],[24,88,20,-20]];
hexData.forEach(([x,y,dx,dy],i)=>{const e=document.createElement('i');e.className='hex';e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--x',dx+'px');e.style.setProperty('--y',dy+'px');e.style.setProperty('--d',(9+i%4*2)+'s');e.style.setProperty('--delay',(-i*1.1)+'s');hexLayer?.appendChild(e)});
const circuitData=[[2,22,-20,-18],[74,18,22,-25],[4,76,25,-15],[68,74,-22,-25],[38,6,18,22]];
circuitData.forEach(([x,y,dx,dy],i)=>{const e=document.createElement('i');e.className='circuit';e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--x',dx+'px');e.style.setProperty('--y',dy+'px');e.style.setProperty('--d',(12+i*1.5)+'s');e.style.setProperty('--delay',(-i*2)+'s');circuitLayer?.appendChild(e)});

// Subtle pointer parallax for the visual layer only.
const fx=document.querySelector('.fx');
fx?.addEventListener('pointermove',e=>{const r=fx.getBoundingClientRect();fx.style.setProperty('--px',((e.clientX-r.left)/r.width-.5)*18+'px');fx.style.setProperty('--py',((e.clientY-r.top)/r.height-.5)*18+'px')});


// Purely graphical AI motion layer — no floating text labels.
const orbLayer=document.querySelector('.visual-orbs');
const cubeLayer=document.querySelector('.visual-cubes');
const hexLayer=document.querySelector('.visual-hexes');
const circuitLayer=document.querySelector('.circuit-field');
const orbData=[[5,18,26,-18],[12,62,-18,-25],[22,28,20,-35],[31,78,-24,-20],[42,18,22,-28],[55,76,-18,-30],[66,25,24,-22],[76,66,-20,-34],[88,18,18,-28],[94,55,-25,-20],[81,88,20,-25],[45,90,-20,-28],[18,90,25,-18],[70,46,-16,-30]];
orbData.forEach(([x,y,dx,dy],i)=>{const e=document.createElement('i');e.className='visual-orb'+(i%4===0?' pink':'');e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--x',dx+'px');e.style.setProperty('--y',dy+'px');e.style.setProperty('--d',(5.5+i%5*1.4)+'s');e.style.setProperty('--delay',(-i*.55)+'s');orbLayer?.appendChild(e)});
const cubeData=[[6,32],[18,76],[33,10],[49,28],[69,12],[86,38],[78,77],[28,58],[57,83],[94,72]];
cubeData.forEach(([x,y],i)=>{const e=document.createElement('i');e.className='visual-cube';e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--d',(14+i%4*2)+'s');e.style.setProperty('--delay',(-i*2.2)+'s');cubeLayer?.appendChild(e)});
const hexData=[[3,44,-18,-22],[14,18,20,-30],[28,36,-22,-20],[40,68,18,-30],[59,15,-20,-24],[72,34,24,-22],[91,24,-20,-30],[88,72,22,-24],[52,54,-18,-32],[24,88,20,-20]];
hexData.forEach(([x,y,dx,dy],i)=>{const e=document.createElement('i');e.className='hex';e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--x',dx+'px');e.style.setProperty('--y',dy+'px');e.style.setProperty('--d',(9+i%4*2)+'s');e.style.setProperty('--delay',(-i*1.1)+'s');hexLayer?.appendChild(e)});
const circuitData=[[2,22,-20,-18],[74,18,22,-25],[4,76,25,-15],[68,74,-22,-25],[38,6,18,22]];
circuitData.forEach(([x,y,dx,dy],i)=>{const e=document.createElement('i');e.className='circuit';e.style.left=x+'%';e.style.top=y+'%';e.style.setProperty('--x',dx+'px');e.style.setProperty('--y',dy+'px');e.style.setProperty('--d',(12+i*1.5)+'s');e.style.setProperty('--delay',(-i*2)+'s');circuitLayer?.appendChild(e)});
const fx=document.querySelector('.fx');
fx?.addEventListener('pointermove',e=>{const r=fx.getBoundingClientRect();fx.style.setProperty('--px',((e.clientX-r.left)/r.width-.5)*18+'px');fx.style.setProperty('--py',((e.clientY-r.top)/r.height-.5)*18+'px')});
