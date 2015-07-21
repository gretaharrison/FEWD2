Element.prototype.Slider = function() {
  // console.log("hello");
var slider = this;

this.closeSlider = function() {
  slider.addEventListener('click', function(){
    slider.style.display = 'none';
  });
}

  this.init = function() {
    slider.className='initial';
    this.closeSlider();
    document.getElementById('mexico').addEventListener('click', function() {
      alert("hola");
    });
    console.log(this);
  }



  this.init();
}
