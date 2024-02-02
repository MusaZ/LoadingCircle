function getSizeDevXPopup(className)
{
  //let dxmodal = document.getElementsByClassName('dxbl-popup dxbl-popup-adaptivity')[0];
  let dxmodal = document.getElementsByClassName(className)[0];
  if(dxmodal !== undefined)
  {
    let height = dxmodal.clientHeight;
    let width = dxmodal.clientWidth;
    let left = dxmodal.offsetLeft;
    let top=dxmodal.offsetTop;
    console.log(height);
    console.log(width);
    return [width.toString(), height.toString(), left.toString(), top.toString()];
  }
}