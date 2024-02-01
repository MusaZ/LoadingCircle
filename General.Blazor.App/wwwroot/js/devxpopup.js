var timer;
function startTimer()
{
  // if(timer === undefined || timer === null)
  //   timer = setInterval(getSizeDevXPopup, 1000);
}

function getSizeDevXPopup()
{
  let dxmodal = document.getElementsByClassName('dxbl-popup dxbl-popup-adaptivity')[0];
  if(dxmodal !== undefined)
  {
    let height = dxmodal.clientHeight;
    let width = dxmodal.clientWidth;
    console.log(height);
    console.log(width);
    clearInterval(timer);
    return [width.toString(), height.toString()];
    
    let loading = document.getElementsByClassName('loading-div')[0];
    if(loading !== undefined || loading !== null)
    {
      loading.style.width = width.toString() + "px";
      loading.style.height = height.toString() + "px";
      loading.style.display="grid";
      clearInterval(timer);
      return [width.toString(), height.toString()];
    }
  }
}