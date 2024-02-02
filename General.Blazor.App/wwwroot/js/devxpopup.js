function getSizeDevXPopup()
{
  let dxmodal = document.getElementsByClassName('dxbl-popup dxbl-popup-adaptivity')[0];
  if(dxmodal !== undefined)
  {
    let height = dxmodal.clientHeight;
    let width = dxmodal.clientWidth;
    console.log(height);
    console.log(width);
    return [width.toString(), height.toString()];
  }
}