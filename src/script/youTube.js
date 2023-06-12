let youtubeBtnA = document.querySelectorAll('#youtubeBtnA');
let youtubeBtnB = document.querySelectorAll('#youtubeBtnB');
let youtubeBtnC = document.querySelectorAll('#youtubeBtnC');
let youtubeBtnD = document.querySelectorAll('#youtubeBtnD');
let body = document.querySelector('main');

youtubeBtnA.forEach((el) => {
  el.addEventListener('click', () => {
    let div = document.createElement('div');
    div.style = `background-color: rgba(0, 0, 0, 0.8); z-index: 1; position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; flex-direction: column;`;

    let ytA = document.createElement('div');
    //VIDEO 01
    ytA.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ud_hP2raTmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    let close = document.createElement('span');
    close.innerHTML = `<i style="color: white; font-size: 40px" class="bi bi-camera-video-off"></i>`;
    close.addEventListener('click', () => {
      body.removeChild(div);
    });

    body.appendChild(div);
    div.appendChild(ytA);
    div.appendChild(close);
  });
});

youtubeBtnB.forEach((el) => {
  el.addEventListener('click', () => {
    let div = document.createElement('div');
    div.style = `background-color: rgba(0, 0, 0, 0.8); z-index: 1; position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; flex-direction: column;`;

    let ytB = document.createElement('div');
    //VIDEO 02
    ytB.innerHTML = `<iframe width="350" height="215" src="https://www.youtube.com/embed/wWD76Ywc6-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    let close = document.createElement('span');
    close.innerHTML = `<i style="color: white; font-size: 40px" class="bi bi-camera-video-off"></i>`;
    close.addEventListener('click', () => {
      body.removeChild(div);
    });

    body.appendChild(div);
    div.appendChild(ytB);
    div.appendChild(close);
  });
});

youtubeBtnC.forEach((el) => {
  el.addEventListener('click', () => {
    let div = document.createElement('div');
    div.style = `background-color: rgba(0, 0, 0, 0.8); z-index: 1; position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; flex-direction: column;`;

    let ytC = document.createElement('div');
    //VIDEO 03
    ytC.innerHTML = `<iframe width="350" height="215" src="https://www.youtube.com/embed/wWD76Ywc6-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    let close = document.createElement('span');
    close.innerHTML = `<i style="color: white; font-size: 40px" class="bi bi-camera-video-off"></i>`;
    close.addEventListener('click', () => {
      body.removeChild(div);
    });

    body.appendChild(div);
    div.appendChild(ytC);
    div.appendChild(close);
  });
});

youtubeBtnD.forEach((el) => {
  el.addEventListener('click', () => {
    let div = document.createElement('div');
    div.style = `background-color: rgba(0, 0, 0, 0.8); z-index: 1; position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; flex-direction: column;`;

    let ytD = document.createElement('div');
    //VIDEO 04
    ytD.innerHTML = `<iframe width="350" height="215" src="https://www.youtube.com/embed/wWD76Ywc6-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    let close = document.createElement('span');
    close.innerHTML = `<i style="color: white; font-size: 40px" class="bi bi-camera-video-off"></i>`;
    close.addEventListener('click', () => {
      body.removeChild(div);
    });

    body.appendChild(div);
    div.appendChild(ytD);
    div.appendChild(close);
  });
});